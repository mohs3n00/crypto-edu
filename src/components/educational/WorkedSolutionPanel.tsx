import React from 'react';
import { Lightbulb, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';
import AIProviderActions from '../ai/AIProviderActions';
import HighlightedText from '../keywords/HighlightedText';

export interface SolutionStep {
  stepNumber: number;
  title: string;
  titleAr?: string;
  math?: string;
  explanation: string;
  explanationAr?: string;
  intermediateResult?: string;
}

interface WorkedSolutionPanelProps {
  title: string;
  titleAr?: string;
  problem: string;
  problemAr?: string;
  initialParameters?: { label: string; value: string }[];
  steps: SolutionStep[];
  finalResult: string;
  verification?: string;
  verificationAr?: string;
  examTrapNote?: string;
  className?: string;
}

export default function WorkedSolutionPanel({
  title,
  titleAr,
  problem,
  problemAr,
  initialParameters,
  steps,
  finalResult,
  verification,
  verificationAr,
  examTrapNote,
  className = '',
}: WorkedSolutionPanelProps): React.ReactElement {
  return (
    <div
      className={`border-2 border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <Lightbulb size={17} />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#737373] block">
              Step-by-Step Mathematical Derivation / الحل الرياضي المفصل
            </span>
            <h3 className="text-lg font-bold text-[#171717] tracking-tight">{title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {titleAr && (
            <span
              dir="rtl"
              className="text-base font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
          <div className="border-s border-[#E5E5E5] ps-2.5 ms-1">
            <AIProviderActions
              context={{
                sectionTitle: `Mathematical Derivation: ${title}${titleAr ? ` / ${titleAr}` : ''}`,
                content: [
                  `Problem: ${problem}${problemAr ? `\n${problemAr}` : ''}`,
                  initialParameters && initialParameters.length > 0
                    ? `Parameters: ${initialParameters.map((p) => `${p.label} = ${p.value}`).join(', ')}`
                    : '',
                  `Derivation Steps:\n${steps
                    .map(
                      (s) =>
                        `${s.stepNumber}. ${s.title}: ${s.explanation}${
                          s.math ? ` [Formula: ${s.math}]` : ''
                        }${s.intermediateResult ? ` -> Result: ${s.intermediateResult}` : ''}`
                    )
                    .join('\n')}`,
                  `Final Result: ${finalResult}`,
                  verification ? `Verification: ${verification}` : '',
                  examTrapNote ? `Exam Trap Note: ${examTrapNote}` : '',
                ]
                  .filter(Boolean)
                  .join('\n\n'),
                promptType: 'math',
              }}
              variant="compact"
            />
          </div>
        </div>
      </div>

      {/* Problem Statement Box */}
      <div className="p-4 sm:p-5 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-3">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase font-bold text-[#737373] block">
            Problem Statement / نص المسألة:
          </span>
          {problem && problemAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[16px] font-semibold text-[#171717] leading-relaxed">{problem}</p>
              <p
                dir="rtl"
                className="text-[15px] font-medium text-[#525252] font-serif leading-[1.9] md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {problemAr}
              </p>
            </div>
          ) : (
            <p className="text-[16px] font-semibold text-[#171717] leading-relaxed">{problem}</p>
          )}
        </div>

        {/* Initial Parameters Pill Grid */}
        {initialParameters && initialParameters.length > 0 && (
          <div className="pt-2 border-t border-[#E5E5E5] flex flex-wrap gap-2">
            {initialParameters.map((param, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-xs font-mono"
              >
                <span className="text-[#737373]">{param.label}:</span>
                <span className="font-bold text-[#171717]">{param.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Steps */}
      <div className="space-y-4">
        <span className="text-xs font-mono uppercase font-bold text-[#737373] block tracking-wider">
          Execution Steps / خطوات الحل التفصيلية:
        </span>

        <div className="space-y-4 divide-y divide-[#F2F2F2]">
          {steps.map((st) => (
            <div key={st.stepNumber} className="pt-4 first:pt-0 flex gap-4 text-sm">
              {/* Step Number Circle */}
              <div className="w-7 h-7 rounded-full border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                {st.stepNumber}
              </div>

              {/* Step Content */}
              <div className="flex-1 space-y-2 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-[15px] font-bold text-[#171717]">{st.title}</h4>
                  {st.titleAr && (
                    <span
                      dir="rtl"
                      className="text-xs font-medium text-[#737373] font-serif"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {st.titleAr}
                    </span>
                  )}
                </div>

                {st.explanation && st.explanationAr ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    <div className="text-[15px] leading-relaxed text-[#171717]">
                      <HighlightedText text={st.explanation} />
                    </div>
                    <div
                      dir="rtl"
                      className="text-[14px] leading-[1.8] text-[#525252] font-serif md:border-s md:border-[#E5E5E5] md:ps-4"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      <HighlightedText text={st.explanationAr} />
                    </div>
                  </div>
                ) : (
                  <>
                    {st.explanation && (
                      <div className="text-[15px] leading-relaxed text-[#171717]">
                        <HighlightedText text={st.explanation} />
                      </div>
                    )}
                    {st.explanationAr && (
                      <div
                        dir="rtl"
                        className="text-[14px] leading-relaxed text-[#525252] font-serif"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        <HighlightedText text={st.explanationAr} />
                      </div>
                    )}
                  </>
                )}

                {/* KaTeX Math Box */}
                {st.math && (
                  <div className="my-2 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded overflow-x-auto text-center font-serif">
                    <MathDisplay latex={st.math} display />
                  </div>
                )}

                {/* Intermediate Result Pill */}
                {st.intermediateResult && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#171717] rounded text-xs font-mono font-semibold text-[#171717]">
                    <ArrowRight size={12} />
                    <span>Sub-result: {st.intermediateResult}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Result Callout */}
      <div className="p-4 border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block font-bold">
            Definitive Solution / الناتج النهائي المعتمد:
          </span>
          <span className="text-lg font-bold font-mono tracking-wide">{finalResult}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono border border-[#525252] px-3 py-1.5 rounded bg-[#333333] shrink-0">
          <CheckCircle2 size={14} />
          <span>Verified Solution</span>
        </div>
      </div>

      {/* Verification & Proof */}
      {verification && (
        <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1">
          <span className="font-mono font-bold text-[#171717] uppercase block">
            Verification Check / التحقق من صحة الناتج:
          </span>
          <p className="text-[#525252] font-mono">{verification}</p>
          {verificationAr && (
            <p dir="rtl" className="text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              {verificationAr}
            </p>
          )}
        </div>
      )}

      {/* Optional Exam Trap Note */}
      {examTrapNote && (
        <div className="p-3 border border-[#171717] bg-[#FFFFFF] rounded text-xs flex items-start gap-2.5">
          <AlertTriangle size={16} className="text-[#171717] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-[#171717] block">Examination Pitfall / فخ امتحاني شائع:</span>
            <p className="text-[#525252]">{examTrapNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}

