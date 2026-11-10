import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Maximize2,
  Minimize2,
  HelpCircle,
  Copy,
  Check,
  Calculator,
  ArrowRight,
  MonitorPlay,
  Layers,
} from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';
import HighlightedText from '../keywords/HighlightedText';
import AIProviderActions from '../ai/AIProviderActions';

export interface BoardStep {
  stepNumber?: number;
  title: string;
  titleEn?: string;
  titleAr?: string;
  whyThisStep?: string;
  whyThisStepAr?: string;
  formula?: string;
  substitution?: string;
  math?: string;
  mathLatex?: string;
  substitutionLatex?: string;
  calculation?: string;
  calculationAr?: string;
  intermediateResult?: string;
  explanation: string;
  explanationEn?: string;
  explanationAr?: string;
}

export interface BoardCommonMistake {
  mistakeEn: string;
  mistakeAr: string;
  preventionEn: string;
  preventionAr: string;
}

export interface InteractiveSolvingBoardProps {
  id?: string;
  title: string;
  titleAr?: string;
  sourceRef?: string;
  problem: string;
  problemAr?: string;
  givenParameters?: { label: string; value: string; labelAr?: string }[];
  steps: BoardStep[];
  finalResult: string;
  verification?: string;
  verificationAr?: string;
  commonMistakes?: BoardCommonMistake[];
  examTrapNote?: string;
  examTrapNoteAr?: string;
  className?: string;
  initialMode?: 'interactive' | 'overview';
  hidePrompt?: boolean;
}

function getWhyThisStep(step: BoardStep, stepIdx: number, totalSteps: number): { en: string; ar: string } {
  if (step.whyThisStep && step.whyThisStepAr) {
    return { en: step.whyThisStep, ar: step.whyThisStepAr };
  }

  const title = (step.title || '').toLowerCase();
  const titleAr = step.titleAr || '';
  const math = (step.formula || step.math || '').toLowerCase();

  if (stepIdx === 0 || title.includes('given') || titleAr.includes('معطيات') || title.includes('construct') || titleAr.includes('بناء')) {
    return {
      en: step.whyThisStep || 'Establish initial parameters, extract given values, and verify algebraic pre-conditions before solving.',
      ar: step.whyThisStepAr || 'تفريغ معطيات المسألة وحصر الثوابت والتحقق من الشروط الأولية قبل الشروع في العمليات الجبرية.',
    };
  }

  if (title.includes('gcd') || titleAr.includes('قاسم') || math.includes('gcd')) {
    return {
      en: step.whyThisStep || 'Apply the Euclidean algorithm division step: gcd(a, b) = gcd(b, a mod b) until remainder reaches zero.',
      ar: step.whyThisStepAr || 'تطبيق خطوة القسمة المتكررة في خوارزمية إقليدس لاختزال القاسم المشترك حتى بلوغ باقي الصفر.',
    };
  }

  if (title.includes('determinant') || titleAr.includes('محدد') || math.includes('det')) {
    return {
      en: step.whyThisStep || 'Compute det(K) to verify the invertibility condition gcd(det(K), 26) = 1 required for decipherment.',
      ar: step.whyThisStepAr || 'حساب محدد المصفوفة للتأكد من شرط قابلية الانعكاس gcd(det(K), 26) = 1 اللازم لفك التشفير.',
    };
  }

  if (title.includes('inverse') || titleAr.includes('معكوس')) {
    return {
      en: step.whyThisStep || 'Calculate the modular multiplicative inverse using the Extended Euclidean algorithm to perform modular division.',
      ar: step.whyThisStepAr || 'حساب المعكوس الضربي المعياري باستخدام خوارزمية إقليدس الممتدة لتمكين القسمة المعيارية.',
    };
  }

  if (title.includes('reduce') || title.includes('mod') || titleAr.includes('اختزال') || titleAr.includes('معياري')) {
    return {
      en: step.whyThisStep || 'Reduce intermediate terms modulo n to keep all computations strictly within the integer residue system.',
      ar: step.whyThisStepAr || 'اختزال النواتج المرحلية بالمقياس المعياري لضمان بقاء الأعداد داخل نظام البواقي المعتمد.',
    };
  }

  if (title.includes('substitut') || titleAr.includes('تعويض')) {
    return {
      en: step.whyThisStep || 'Substitute numerical values directly into the cryptographic equation to compute exact state transitions.',
      ar: step.whyThisStepAr || 'التعويض المباشر بالقيم العددية في المعادلة التشفيرية لتوليد القيم المرحلية الصحيحة.',
    };
  }

  if (stepIdx === totalSteps - 1 || title.includes('verify') || title.includes('final') || titleAr.includes('تحقق') || titleAr.includes('ناتج')) {
    return {
      en: step.whyThisStep || 'Confirm that the final result satisfies all governing equations and is verified against official course criteria.',
      ar: step.whyThisStepAr || 'التحقق الرياضي من مطابقة الناتج النهائي لمعادلات المسألة والتأكد من دقته وفق المنهج الجامعي.',
    };
  }

  return {
    en: step.whyThisStep || 'Execute the core algebraic derivation step in accordance with the governing cryptographic standard.',
    ar: step.whyThisStepAr || 'تنفيذ الخطوة الجبرية المقررة وفق المعيار التشفيري المعتمد للانتقال إلى المرحلة التالية من الحل.',
  };
}

export default function InteractiveSolvingBoard({
  title,
  titleAr,
  sourceRef,
  problem,
  problemAr,
  givenParameters,
  steps,
  finalResult,
  verification,
  verificationAr,
  commonMistakes,
  examTrapNote,
  examTrapNoteAr,
  className = '',
  initialMode = 'interactive',
  hidePrompt = false,
}: InteractiveSolvingBoardProps): React.ReactElement {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'overview'>(initialMode);
  const [boardTheme, setBoardTheme] = useState<'slate' | 'white'>('white');
  const [copied, setCopied] = useState<boolean>(false);

  const totalSteps = steps.length;
  const currentStep = steps[currentStepIdx] || steps[0];
  const isFinalStep = currentStepIdx === totalSteps - 1;

  // Keyboard navigation for interactive board
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (viewMode !== 'interactive') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentStepIdx((prev) => Math.min(prev + 1, totalSteps - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentStepIdx((prev) => Math.max(prev - 1, 0));
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, totalSteps]);

  const handleCopyResult = () => {
    if (!finalResult) return;
    navigator.clipboard.writeText(finalResult).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isSlate = boardTheme === 'slate';

  return (
    <section
      aria-label="Interactive Solving Board"
      className={`rounded-2xl border-2 transition-all shadow-xs overflow-hidden ${
        isSlate
          ? 'bg-[#0f141c] border-[#222f3e] text-[#f1f5f9]'
          : 'bg-[#FFFFFF] border-[#D4D4D0] text-[#222222]'
      } ${className}`}
    >
      {/* ======================================================== */}
      {/* 1. Board Header / Classroom Toolbar                      */}
      {/* ======================================================== */}
      <div
        className={`px-5 py-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-3 ${
          isSlate
            ? 'bg-[#161f2c] border-[#222f3e]'
            : 'bg-[#F7F7F5] border-[#E2E2DF]'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
              isSlate
                ? 'bg-[#1e293b] border-[#334155] text-[#38bdf8]'
                : 'bg-[#222222] border-[#222222] text-[#FFFFFF]'
            }`}
          >
            <Calculator size={19} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                  isSlate
                    ? 'bg-[#334155] text-[#93c5fd]'
                    : 'bg-[#222222] text-[#FFFFFF]'
                }`}
              >
                Interactive Solving Board • سبورة الحل الرياضي
              </span>
              {sourceRef && (
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    isSlate
                      ? 'border-[#334155] text-[#94a3b8] bg-[#0f172a]'
                      : 'border-[#E2E2DF] text-[#505050] bg-[#FFFFFF]'
                  }`}
                >
                  {sourceRef}
                </span>
              )}
            </div>
            <h3
              className={`text-base sm:text-lg font-bold tracking-tight truncate mt-0.5 ${
                isSlate ? 'text-[#f8fafc]' : 'text-[#222222]'
              }`}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Board Controls */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0 flex-wrap">
          {titleAr && (
            <span
              dir="rtl"
              className={`hidden lg:inline text-sm font-semibold font-serif px-2 ${
                isSlate ? 'text-[#94a3b8]' : 'text-[#505050]'
              }`}
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}

          {/* Theme switcher */}
          <button
            type="button"
            onClick={() => setBoardTheme((t) => (t === 'slate' ? 'white' : 'slate'))}
            className={`px-2.5 py-1 text-xs font-mono font-medium rounded border transition-colors ${
              isSlate
                ? 'border-[#334155] bg-[#1e293b] text-[#cbd5e1] hover:text-[#FFFFFF]'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB]'
            }`}
            title="Toggle Classroom Slate / Whiteboard"
          >
            {isSlate ? '☀️ Whiteboard' : '🌙 Chalkboard'}
          </button>

          {/* View mode toggle */}
          <button
            type="button"
            onClick={() =>
              setViewMode((m) => (m === 'interactive' ? 'overview' : 'interactive'))
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded border transition-colors ${
              isSlate
                ? 'border-[#334155] bg-[#1e293b] text-[#38bdf8] hover:bg-[#334155]'
                : 'border-[#D4D4D0] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB]'
            }`}
          >
            {viewMode === 'interactive' ? (
              <>
                <Layers size={13} />
                <span>عرض الكل (Overview)</span>
              </>
            ) : (
              <>
                <MonitorPlay size={13} />
                <span>خطوة بخطوة (Step Focus)</span>
              </>
            )}
          </button>

          {/* AI Helper for this problem */}
          <AIProviderActions
            context={{
              sectionTitle: `Interactive Solving Board: ${title}`,
              content: `Problem: ${problem}\n${problemAr || ''}\n${steps
                .map(
                  (s, idx) =>
                    `Step ${idx + 1}: ${s.title} (${s.titleAr || ''})\nFormula: ${
                      s.formula || s.math || ''
                    }\nWhy: ${s.whyThisStep || s.whyThisStepAr || ''}\nExplanation: ${
                      s.explanation
                    }`
                )
                .join('\n\n')}\nFinal Answer: ${finalResult}`,
              promptType: 'math',
              lessonTitle: title,
            }}
            variant="compact"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Problem Statement Area (The Teacher's Prompt)         */}
      {/* ======================================================== */}
      {!hidePrompt && (
        <div
          className={`p-5 sm:p-6 border-b space-y-3 ${
            isSlate
              ? 'bg-[#131b26] border-[#222f3e]'
              : 'bg-[#F7F7F5] border-[#E2E2DF]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isSlate ? 'text-[#38bdf8]' : 'text-[#222222]'
              }`}
            >
              <Lightbulb size={14} />
              <span>Problem Statement / نص المسألة والمعطيات:</span>
            </span>
            <span
              className={`text-[11px] font-mono font-bold ${
                isSlate ? 'text-[#94a3b8]' : 'text-[#686868]'
              }`}
            >
              {totalSteps} Solving Steps • {totalSteps} خطوات حل
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <p
              className={`text-[16px] sm:text-[17px] font-medium leading-relaxed ${
                isSlate ? 'text-[#f1f5f9]' : 'text-[#222222]'
              }`}
            >
              {problem}
            </p>
            {problemAr && (
              <p
                dir="rtl"
                className={`text-[16px] font-medium leading-[2] font-serif md:border-s md:ps-5 ${
                  isSlate
                    ? 'text-[#cbd5e1] md:border-[#222f3e]'
                    : 'text-[#505050] md:border-[#E2E2DF]'
                }`}
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {problemAr}
              </p>
            )}
          </div>

          {/* Given Parameters Chips */}
          {givenParameters && givenParameters.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <span
                className={`text-xs font-mono uppercase font-bold me-1 ${
                  isSlate ? 'text-[#64748b]' : 'text-[#686868]'
                }`}
              >
                Given:
              </span>
              {givenParameters.map((p, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono border ${
                    isSlate
                      ? 'bg-[#1e293b] border-[#334155] text-[#f8fafc]'
                      : 'bg-[#FFFFFF] border-[#E2E2DF] text-[#222222]'
                  }`}
                >
                  <span className={isSlate ? 'text-[#38bdf8]' : 'text-[#686868]'}>
                    {p.label}:
                  </span>
                  <span className="font-bold">{p.value}</span>
                  {p.labelAr && (
                    <span
                      dir="rtl"
                      className="text-[10px] text-[#686868] font-serif ms-1"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      ({p.labelAr})
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. MODE A: Step-by-Step Interactive Solving Board        */}
      {/* ======================================================== */}
      {viewMode === 'interactive' && (
        <div className="p-5 sm:p-7 space-y-6">
          {/* Step Progression Timeline / Step Pill Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span
                className={`font-bold uppercase tracking-wider ${
                  isSlate ? 'text-[#38bdf8]' : 'text-[#222222]'
                }`}
              >
                Step {currentStepIdx + 1} of {totalSteps} • الخطوة {currentStepIdx + 1} من {totalSteps}
              </span>
              <span className={isSlate ? 'text-[#94a3b8]' : 'text-[#505050]'}>
                {Math.round(((currentStepIdx + 1) / totalSteps) * 100)}% Complete
              </span>
            </div>

            {/* Visual Step Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
              {steps.map((st, idx) => {
                const isActive = idx === currentStepIdx;
                const isPassed = idx < currentStepIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentStepIdx(idx)}
                    className={`flex-1 min-w-[70px] sm:min-w-[90px] py-2 px-2.5 rounded-lg text-xs font-mono font-bold transition-all border text-center flex flex-col items-center gap-1 ${
                      isActive
                        ? isSlate
                          ? 'bg-[#38bdf8] text-[#0f172a] border-[#38bdf8] shadow-md'
                          : 'bg-[#222222] text-[#FFFFFF] border-[#222222] shadow-xs'
                        : isPassed
                        ? isSlate
                          ? 'bg-[#1e293b] text-[#38bdf8] border-[#334155] hover:bg-[#334155]'
                          : 'bg-[#FFFFFF] text-[#222222] border-[#D4D4D0] hover:bg-[#ECEDEB]'
                        : isSlate
                        ? 'bg-[#161f2c] text-[#64748b] border-[#222f3e] hover:border-[#334155]'
                        : 'bg-[#FFFFFF] text-[#686868] border-[#E2E2DF] hover:border-[#D4D4D0]'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {isPassed && <Check size={11} className="stroke-[3]" />}
                      <span>Step {idx + 1}</span>
                    </div>
                    <span className="text-[10px] truncate max-w-[80px] font-normal opacity-85">
                      {st.title.split(':')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Step Blackboard Workspace Card */}
          <div
            className={`p-6 sm:p-8 rounded-xl border-2 space-y-6 transition-all ${
              isSlate
                ? 'bg-[#161f2c] border-[#334155]'
                : 'bg-[#FFFFFF] border-[#D4D4D0]'
            }`}
          >
            {/* Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-dashed gap-2 border-inherit">
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm shrink-0 border ${
                    isSlate
                      ? 'bg-[#38bdf8] text-[#0f172a] border-[#38bdf8]'
                      : 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                  }`}
                >
                  {currentStepIdx + 1}
                </span>
                <div>
                  <h4
                    className={`text-[22px] sm:text-[24px] font-bold tracking-tight ${
                      isSlate ? 'text-[#f8fafc]' : 'text-[#222222]'
                    }`}
                  >
                    {currentStep.title}
                  </h4>
                  {currentStep.titleAr && (
                    <span
                      dir="rtl"
                      className={`text-[18px] sm:text-[20px] font-bold font-serif block pt-0.5 ${
                        isSlate ? 'text-[#94a3b8]' : 'text-[#505050]'
                      }`}
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {currentStep.titleAr}
                    </span>
                  )}
                </div>
              </div>

              {currentStep.intermediateResult && (
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border self-start sm:self-auto ${
                    isSlate
                      ? 'bg-[#0f172a] border-[#38bdf8] text-[#38bdf8]'
                      : 'bg-[#F7F7F5] border-[#D4D4D0] text-[#222222]'
                  }`}
                >
                  <ArrowRight size={13} />
                  <span>Sub-result: {currentStep.intermediateResult}</span>
                </div>
              )}
            </div>

            {/* Why this formula / method? (Requirement 1: Explain why used) */}
            {(() => {
              const why = getWhyThisStep(currentStep, currentStepIdx, totalSteps);
              return (
                <div
                  className={`p-4 rounded-lg border text-sm space-y-1.5 ${
                    isSlate
                      ? 'bg-[#1e293b]/70 border-[#38bdf8]/40 text-[#cbd5e1]'
                      : 'bg-[#FFFFFF] border border-[#222222] text-[#222222]'
                  }`}
                >
                  <div className={`flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${isSlate ? 'text-[#eab308]' : 'text-[#222222]'}`}>
                    <HelpCircle size={14} />
                    <span>
                      Why this formula & method? / لماذا نطبق هذه الصيغة والخطوة؟
                    </span>
                  </div>
                  {why.en && (
                    <p className="text-[16px] sm:text-[17px] leading-[1.65] font-sans">{why.en}</p>
                  )}
                  {why.ar && (
                    <p
                      dir="rtl"
                      className="text-[17px] sm:text-[18px] leading-[1.8] font-serif pt-2 border-t border-inherit"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      <HighlightedText text={why.ar} isArabic />
                    </p>
                  )}
                </div>
              );
            })()}

            {/* Formulas & Algebraic Display Board */}
            <div className="space-y-4">
              {/* Governing Formula */}
              {currentStep.formula && (
                <div className="space-y-1.5">
                  <span
                    className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                      isSlate ? 'text-[#94a3b8]' : 'text-[#686868]'
                    }`}
                  >
                    1. Governing Formula / القانون الرياضي الحاكم:
                  </span>
                  <div
                    className={`p-4 rounded-xl border text-center font-serif text-[22px] sm:text-[26px] overflow-x-auto ${
                      isSlate
                        ? 'bg-[#0b0f17] border-[#334155] text-[#f8fafc]'
                        : 'bg-[#F7F7F5] border-[#D4D4D0] text-[#222222]'
                    }`}
                    dir="ltr"
                  >
                    <MathDisplay latex={currentStep.formula} display />
                  </div>
                </div>
              )}

              {/* Direct Numeric Substitution */}
              {currentStep.substitution && (
                <div className="space-y-1.5">
                  <span
                    className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                      isSlate ? 'text-[#94a3b8]' : 'text-[#686868]'
                    }`}
                  >
                    2. Direct Substitution / التعويض المباشر بالأرقام:
                  </span>
                  <div
                    className={`p-4 rounded-xl border text-center font-serif text-[20px] sm:text-[24px] overflow-x-auto ${
                      isSlate
                        ? 'bg-[#0b0f17] border-[#334155] text-[#38bdf8]'
                        : 'bg-[#FFFFFF] border-[#D4D4D0] text-[#222222]'
                    }`}
                    dir="ltr"
                  >
                    <MathDisplay latex={currentStep.substitution} display />
                  </div>
                </div>
              )}

              {/* Step Math / Derivation */}
              {currentStep.math && !currentStep.formula && (
                <div
                  className={`p-4 rounded-xl border text-center font-serif text-[20px] sm:text-[24px] overflow-x-auto ${
                    isSlate
                      ? 'bg-[#0b0f17] border-[#334155] text-[#f8fafc]'
                      : 'bg-[#F7F7F5] border-[#D4D4D0] text-[#222222]'
                  }`}
                  dir="ltr"
                >
                  <MathDisplay latex={currentStep.math} display />
                </div>
              )}
            </div>

            {/* Arabic Pedagogical Explanation with English terms in parentheses */}
            <div className="space-y-3 pt-2 border-t border-inherit">
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                  isSlate ? 'text-[#38bdf8]' : 'text-[#222222]'
                }`}
              >
                Teacher's Explanation & Practical Details / الشرح الأكاديمي والتفصيل:
              </span>

              <div className="flex flex-col space-y-4 w-full">
                {currentStep.explanation && (
                  <div
                    className={`text-[17px] sm:text-[18px] leading-[1.65] font-sans ${
                      isSlate ? 'text-[#cbd5e1]' : 'text-[#222222]'
                    }`}
                  >
                    <HighlightedText text={currentStep.explanation} />
                  </div>
                )}
                {currentStep.explanationAr && (
                  <div
                    dir="rtl"
                    className={`text-[18px] sm:text-[19px] leading-[1.8] font-serif pt-3 border-t ${
                      isSlate
                        ? 'text-[#f1f5f9] border-[#334155]'
                        : 'text-[#222222] border-[#E2E2DF]'
                    }`}
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    <HighlightedText text={currentStep.explanationAr} isArabic />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="button"
              disabled={currentStepIdx === 0}
              onClick={() => setCurrentStepIdx((prev) => Math.max(prev - 1, 0))}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-mono transition-all border ${
                currentStepIdx === 0
                  ? 'opacity-40 cursor-not-allowed border-[#E2E2DF] text-[#777777] bg-[#EFEFEC]'
                  : isSlate
                  ? 'bg-[#1e293b] border-[#334155] text-[#f8fafc] hover:bg-[#334155]'
                  : 'bg-[#FFFFFF] border-[#D4D4D0] text-[#222222] hover:bg-[#ECEDEB]'
              }`}
            >
              <ChevronLeft size={16} />
              <span>الخطوة السابقة (Previous Step)</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentStepIdx(0)}
                className={`p-2.5 rounded-lg border text-xs font-mono transition-colors ${
                  isSlate
                    ? 'border-[#334155] text-[#94a3b8] hover:text-[#FFFFFF]'
                    : 'border-[#E2E2DF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB]'
                }`}
                title="Reset to Step 1"
              >
                <RotateCcw size={15} />
              </button>
            </div>

            <button
              type="button"
              disabled={isFinalStep}
              onClick={() => setCurrentStepIdx((prev) => Math.min(prev + 1, totalSteps - 1))}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold font-mono transition-all border ${
                isFinalStep
                  ? 'opacity-40 cursor-not-allowed border-[#E2E2DF] text-[#777777] bg-[#EFEFEC]'
                  : isSlate
                  ? 'bg-[#38bdf8] border-[#38bdf8] text-[#0f172a] hover:bg-[#7dd3fc]'
                  : 'bg-[#222222] border-[#222222] text-[#FFFFFF] hover:bg-[#000000]'
              }`}
            >
              <span>الخطوة التالية (Next Step)</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3B. MODE B: Full Board Overview Mode                     */}
      {/* ======================================================== */}
      {viewMode === 'overview' && (
        <div className="p-5 sm:p-7 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-inherit">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isSlate ? 'text-[#38bdf8]' : 'text-[#222222]'
              }`}
            >
              All {totalSteps} Derivation Steps • جميع خطوات الحل بالتسلسل
            </span>
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`text-xs font-mono underline ${
                isSlate ? 'text-[#38bdf8]' : 'text-[#222222]'
              }`}
            >
              Switch to Step-by-Step Focus Mode
            </button>
          </div>

          <div className="space-y-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border space-y-4 ${
                  isSlate
                    ? 'bg-[#161f2c] border-[#334155]'
                    : 'bg-[#FFFFFF] border-[#E2E2DF]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs border ${
                        isSlate
                          ? 'bg-[#38bdf8] text-[#0f172a] border-[#38bdf8]'
                          : 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-base">{st.title}</h4>
                    {st.titleAr && (
                      <span
                        dir="rtl"
                        className="text-xs text-[#686868] font-serif"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        ({st.titleAr})
                      </span>
                    )}
                  </div>
                  {st.intermediateResult && (
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${
                        isSlate
                          ? 'bg-[#0f172a] border-[#38bdf8] text-[#38bdf8]'
                          : 'bg-[#F7F7F5] border-[#D4D4D0] text-[#222222]'
                      }`}
                    >
                      {st.intermediateResult}
                    </span>
                  )}
                </div>

                {(() => {
                  const why = getWhyThisStep(st, idx, totalSteps);
                  return (
                    <div
                      dir="rtl"
                      className={`text-xs font-serif p-2.5 rounded border leading-relaxed ${
                        isSlate
                          ? 'bg-[#1e293b]/50 border-[#334155] text-[#93c5fd]'
                          : 'bg-[#F7F7F5] border-[#E2E2DF] text-[#505050]'
                      }`}
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      <strong>لماذا هذا الإجراء؟ </strong>
                      <HighlightedText text={why.ar} isArabic />
                    </div>
                  );
                })()}

                {st.formula && (
                  <div
                    className={`p-3 rounded-lg border text-center font-serif text-[20px] overflow-x-auto ${
                      isSlate
                        ? 'bg-[#0b0f17] border-[#334155]'
                        : 'bg-[#FFFFFF] border-[#E2E2DF]'
                    }`}
                    dir="ltr"
                  >
                    <MathDisplay latex={st.formula} display />
                  </div>
                )}

                {st.substitution && (
                  <div
                    className={`p-3 rounded-lg border text-center font-serif text-[19px] overflow-x-auto ${
                      isSlate
                        ? 'bg-[#0b0f17] border-[#334155] text-[#38bdf8]'
                        : 'bg-[#F7F7F5] border-[#E2E2DF]'
                    }`}
                    dir="ltr"
                  >
                    <MathDisplay latex={st.substitution} display />
                  </div>
                )}

                <div className="flex flex-col space-y-3 w-full">
                  {st.explanation && (
                    <div className={`text-[17px] sm:text-[18px] leading-[1.65] ${isSlate ? 'text-[#cbd5e1]' : 'text-[#222222]'}`}>
                      <HighlightedText text={st.explanation} />
                    </div>
                  )}
                  {st.explanationAr && (
                    <div
                      dir="rtl"
                      className={`text-[18px] sm:text-[19px] font-serif leading-[1.8] pt-2 border-t ${
                        isSlate
                          ? 'text-[#f1f5f9] border-[#334155]'
                          : 'text-[#505050] border-[#E2E2DF]'
                      }`}
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      <HighlightedText text={st.explanationAr} isArabic />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. Emphasized Final Answer Banner                        */}
      {/* ======================================================== */}
      <div
        className={`p-6 sm:p-7 border-t-2 space-y-4 ${
          isSlate
            ? 'bg-[#0b0f17] border-[#38bdf8]/50'
            : 'bg-[#222222] border-[#222222] text-[#FFFFFF]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span
                className={`text-xs font-mono uppercase font-bold tracking-wider ${
                  isSlate ? 'text-[#38bdf8]' : 'text-[#D4D4D0]'
                }`}
              >
                Definitive Final Answer / الناتج النهائي المعتمد:
              </span>
            </div>
            <div
              className={`text-xl sm:text-2xl font-bold font-mono tracking-wide ${
                isSlate ? 'text-[#f8fafc]' : 'text-[#FFFFFF]'
              }`}
            >
              {finalResult}
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={handleCopyResult}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
                isSlate
                  ? 'bg-[#1e293b] border-[#334155] text-[#cbd5e1] hover:text-[#FFFFFF]'
                  : 'bg-[#333333] border-[#505050] text-[#FFFFFF] hover:bg-[#222222]'
              }`}
            >
              {copied ? <Check size={13} className="text-[#10b981]" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy Result'}</span>
            </button>

            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold border ${
                isSlate
                  ? 'bg-[#10b981]/10 border-[#10b981] text-[#10b981]'
                  : 'bg-[#000000] border-[#505050] text-[#FFFFFF]'
              }`}
            >
              <CheckCircle2 size={14} className="text-[#10b981]" />
              <span>Verified Solution</span>
            </span>
          </div>
        </div>

        {/* Verification Check & Proof */}
        {verification && (
          <div
            className={`p-3.5 rounded-lg border text-xs space-y-1 ${
              isSlate
                ? 'bg-[#161f2c] border-[#334155] text-[#94a3b8]'
                : 'bg-[#2a2a2a] border-[#404040] text-[#FFFFFF]'
            }`}
          >
            <span
              className={`font-mono font-bold uppercase tracking-wider block ${
                isSlate ? 'text-[#cbd5e1]' : 'text-[#FFFFFF]'
              }`}
            >
              Mathematical Verification / التحقق الرياضي من صحة الناتج:
            </span>
            <p className="font-mono text-[13px]">{verification}</p>
            {verificationAr && (
              <p
                dir="rtl"
                className="font-serif text-[13px] pt-0.5 text-inherit"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {verificationAr}
              </p>
            )}
          </div>
        )}

        {/* Common Examination Mistakes & Prevention */}
        {commonMistakes && commonMistakes.length > 0 && (
          <div className="space-y-2">
            <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
              isSlate ? 'text-[#94a3b8]' : 'text-[#D4D4D0]'
            }`}>
              Common Mistakes & Prevention Advice • الأخطاء الشائعة وطرق تجنبها
            </span>
            <div className="space-y-2">
              {commonMistakes.map((cm, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                    isSlate
                      ? 'bg-[#1e1b18] border-[#78350f] text-[#fef3c7]'
                      : 'bg-[#FFFFFF] border border-[#D4D4D0] text-[#222222]'
                  }`}
                >
                  <AlertTriangle size={15} className="text-[#D97706] shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <div>
                      <strong className="font-semibold text-[#B45309]">Common Mistake: </strong>
                      <span>{cm.mistakeEn}</span>
                      <p className="font-sans text-[11px] text-right pt-0.5" dir="rtl">{cm.mistakeAr}</p>
                    </div>
                    <div className={`pt-1 border-t ${isSlate ? 'border-[#78350f]' : 'border-[#E2E2DF]'}`}>
                      <strong className="font-semibold text-emerald-700">Prevention: </strong>
                      <span>{cm.preventionEn}</span>
                      <p className="font-sans text-[11px] text-right pt-0.5" dir="rtl">{cm.preventionAr}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examination Pitfall / Exam Trap Alert */}
        {(examTrapNote || examTrapNoteAr) && (
          <div
            className={`p-3.5 rounded-lg border text-xs flex items-start gap-2.5 ${
              isSlate
                ? 'bg-[#422006]/50 border-[#ca8a04]/50 text-[#fef08a]'
                : 'bg-[#2a2a2a] border border-[#505050] text-[#FFFFFF]'
            }`}
          >
            <AlertTriangle size={16} className="text-[#eab308] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold block text-[#FFF1A6]">
                Examination Trap Alert / فخ امتحاني متعلق بالمسألة:
              </span>
              {examTrapNote && <p>{examTrapNote}</p>}
              {examTrapNoteAr && (
                <p dir="rtl" className="font-serif pt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {examTrapNoteAr}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
