import React, { useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  Calculator,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Key,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Award,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { WorkedProblem } from '../../data/problemSolving/types';
import { getPracticeChallenge } from '../../data/problemSolving/practiceChallenges';
import InteractiveSolvingBoard from '../educational/InteractiveSolvingBoard';
import MathDisplay from '../ui/MathDisplay';
import HighlightedText from '../keywords/HighlightedText';
import AIProviderActions from '../ai/AIProviderActions';

interface ProblemSolvingCardProps {
  problem: WorkedProblem;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  onOpenBasmaga?: (basmagaId: string) => void;
  defaultExpanded?: boolean;
}

export const ProblemSolvingCard: React.FC<ProblemSolvingCardProps> = ({
  problem,
  isBookmarked = false,
  onToggleBookmark,
  onOpenBasmaga,
  defaultExpanded = true,
}) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [copiedFormula, setCopiedFormula] = useState<boolean>(false);

  // Step 7 Practice State
  const challenge = problem.practiceChallenge || getPracticeChallenge(problem.id);
  const [selectedPracticeOption, setSelectedPracticeOption] = useState<string | null>(null);
  const [showPracticeHint, setShowPracticeHint] = useState<boolean>(false);

  const handleCopyFormula = () => {
    if (!problem.governingFormula) return;
    navigator.clipboard.writeText(problem.governingFormula.latex).then(() => {
      setCopiedFormula(true);
      setTimeout(() => setCopiedFormula(false), 2000);
    });
  };

  const getSourceBadgeStyle = () => {
    switch (problem.sourceType) {
      case 'original-midterm':
        return 'bg-[#222222] text-[#FFFFFF] border-[#222222]';
      case 'original-lecture':
        return 'bg-[#ECEDEB] text-[#222222] border-[#D4D4D0]';
      case 'additional-practice':
        return 'bg-[#F7F7F5] text-[#505050] border-[#E2E2DF]';
      default:
        return 'bg-[#F7F7F5] text-[#505050] border-[#E2E2DF]';
    }
  };

  const getSourceLabelText = () => {
    switch (problem.sourceType) {
      case 'original-midterm':
        return 'Official Midterm Exam • امتحان نصفي معتمد';
      case 'original-lecture':
        return 'Official Textbook • المرجع والمحاضرات';
      case 'additional-practice':
        return 'University Practice • تدريب امتحاني معياري';
    }
  };

  return (
    <article
      id={problem.id}
      className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-2xl overflow-hidden shadow-xs hover:border-[#222222] transition-colors flex flex-col"
    >
      {/* ======================================================== */}
      {/* 0. Header Toolbar                                        */}
      {/* ======================================================== */}
      <div className="px-5 py-3.5 bg-[#F7F7F5] border-b border-[#E2E2DF] flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span
            className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getSourceBadgeStyle()}`}
          >
            {getSourceLabelText()}
          </span>

          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] text-[#505050] border border-[#E2E2DF]">
            {problem.sourceRef}
          </span>

          <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#222222] text-[#FFFFFF] border border-[#222222]">
            {problem.category.replace('-', ' ')}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {onToggleBookmark && (
            <button
              onClick={() => onToggleBookmark(problem.id)}
              title={isBookmarked ? 'إلغاء الحفظ' : 'حفظ المسألة'}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'border-[#222222] bg-[#E8E8E5] text-[#222222]'
                  : 'border-[#E2E2DF] hover:bg-[#ECEDEB] text-[#505050] hover:text-[#222222]'
              }`}
            >
              {isBookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
            </button>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg border border-[#E2E2DF] hover:bg-[#ECEDEB] text-[#505050] hover:text-[#222222] transition-colors flex items-center gap-1 text-xs font-medium"
          >
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            <span>{expanded ? 'Collapse' : 'Expand'}</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Main Container                                           */}
      {/* ======================================================== */}
      <div className="p-5 space-y-5">
        {/* Title Bar */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg md:text-xl font-bold text-[#222222] leading-snug">
              {problem.title}
            </h3>
            <AIProviderActions
              context={{
                promptType: 'math',
                topic: problem.title,
                formulaOrProblem: problem.problem,
                content: `Problem: ${problem.problem}\nGiven: ${problem.givenParameters.map((p) => `${p.label}: ${p.value}`).join(', ')}`,
              }}
            />
          </div>
          <div className="text-sm font-semibold text-[#505050] font-sans mt-0.5" dir="rtl">
            {problem.titleAr}
          </div>
        </div>

        {/* ======================================================== */}
        {/* STEP 1: Exam-Style Problem Statement                     */}
        {/* ======================================================== */}
        <section className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
              1
            </span>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
              Exam-Style Question • نص المسألة الامتحانية
            </h4>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E2E2DF] space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#686868] block">
                Original Question Text (English)
              </span>
              <p className="text-sm text-[#222222] leading-relaxed font-medium">
                <HighlightedText text={problem.problem} />
              </p>
            </div>

            <div className="pt-2 border-t border-[#E2E2DF] text-right" dir="rtl">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#686868] block mb-1">
                الترجمة العربية الدقيقة للنص
              </span>
              <p className="text-sm text-[#505050] leading-relaxed font-sans">
                <HighlightedText text={problem.problemAr} isArabic />
              </p>
            </div>

            {/* Target result */}
            <div className="pt-2 border-t border-[#E2E2DF] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#222222] font-semibold">
                <span className="text-[#686868] font-mono uppercase text-[10px]">Required Result:</span>
                <span>{problem.requiredResult.en}</span>
              </div>
              <div className="text-[#505050] font-sans text-right" dir="rtl">
                <span className="text-[#686868] text-[10px] ml-1">المطلوب إيجاده:</span>
                <span>{problem.requiredResult.ar}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* STEP 2: Extract the Given Values (Table)                 */}
        {/* ======================================================== */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
                Extract Given Values • استخراج معطيات المسألة
              </h4>
            </div>
            <span className="text-[11px] font-mono text-[#686868]">
              {problem.givenParameters.length} Parameters Identified
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E2E2DF] bg-[#FFFFFF]">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#F7F7F5] border-b border-[#E2E2DF] text-[10px] font-mono uppercase text-[#505050]">
                <tr>
                  <th className="px-3.5 py-2 font-bold">Extracted Parameter</th>
                  <th className="px-3.5 py-2 font-bold">Numerical / Symbolic Value</th>
                  <th className="px-3.5 py-2 font-bold text-right" dir="rtl">
                    المعنى / المصدر في نص المسألة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E2DF]">
                {problem.givenParameters.map((param, i) => (
                  <tr key={i} className="hover:bg-[#F7F7F5] transition-colors">
                    <td className="px-3.5 py-2.5 font-mono font-bold text-[#222222] whitespace-nowrap">
                      {param.label}
                    </td>
                    <td className="px-3.5 py-2.5 font-mono font-bold text-[#222222] bg-[#F7F7F5]/50 whitespace-nowrap">
                      {param.value}
                    </td>
                    <td className="px-3.5 py-2.5 text-right font-sans text-[#505050]" dir="rtl">
                      {param.extractedFromAr || param.labelAr || 'معطى مستخرج من السؤال'}
                      {param.extractedFrom && (
                        <span className="text-[10px] font-mono text-[#686868] block mt-0.5" dir="ltr">
                          Source: {param.extractedFrom}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ======================================================== */}
        {/* STEP 3: Select Appropriate Formula or Method             */}
        {/* ======================================================== */}
        {problem.governingFormula && (
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
                  3
                </span>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
                  Select Formula / Method • تحديد القانون الرياضي المناسب
                </h4>
              </div>
              <button
                onClick={handleCopyFormula}
                className="text-[11px] text-[#505050] hover:text-[#222222] flex items-center gap-1 font-mono"
              >
                {copiedFormula ? <Check size={12} className="text-[#222222]" /> : <Copy size={12} />}
                <span>{copiedFormula ? 'Copied' : 'Copy LaTeX'}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D4D4D0] space-y-2.5 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-[#222222] flex items-center gap-1.5">
                  <Calculator size={15} />
                  <span>{problem.governingFormula.name}</span>
                </span>
                <span className="text-xs font-semibold text-[#505050] font-sans" dir="rtl">
                  {problem.governingFormula.nameAr}
                </span>
              </div>

              {/* Formula LaTeX Display */}
              <div className="py-2.5 px-3 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] overflow-x-auto text-center">
                <MathDisplay latex={problem.governingFormula.latex} display />
              </div>

              {/* Conditions or Rationale */}
              {(problem.governingFormula.conditions || problem.governingFormula.conditionsAr) && (
                <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] text-xs space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#505050] block">
                    Mathematical Conditions • الشروط الرياضية للتطبيق
                  </span>
                  {problem.governingFormula.conditions && (
                    <p className="font-mono text-[#222222] text-[11px]">
                      {problem.governingFormula.conditions}
                    </p>
                  )}
                  {problem.governingFormula.conditionsAr && (
                    <p className="text-[#505050] font-sans text-right text-[11px]" dir="rtl">
                      {problem.governingFormula.conditionsAr}
                    </p>
                  )}
                </div>
              )}

              {/* Concise Selection Rationale */}
              {problem.governingFormula.explanation && (
                <p className="text-xs text-[#505050] leading-relaxed">
                  <strong className="text-[#222222]">Why this formula: </strong>
                  {problem.governingFormula.explanation}
                </p>
              )}
            </div>
          </section>
        )}
      </div>

      {/* ======================================================== */}
      {/* STEPS 4, 5, 6: Interactive Solving Board                 */}
      {/* ======================================================== */}
      {expanded && (
        <div className="border-t border-[#D4D4D0] bg-[#F7F7F5] p-5 space-y-6">
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
                  4-6
                </span>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
                  Apply, Calculate & Verify • التطبيق والحل المرحلي والتحقق
                </h4>
              </div>
              <span className="text-xs text-[#686868] font-mono">
                {problem.steps.length} Calculation Steps
              </span>
            </div>

            <InteractiveSolvingBoard
              id={problem.id}
              title={problem.title}
              titleAr={problem.titleAr}
              sourceRef={problem.sourceRef}
              problem={problem.problem}
              problemAr={problem.problemAr}
              givenParameters={problem.givenParameters}
              steps={problem.steps}
              finalResult={problem.finalResult}
              verification={problem.verification}
              verificationAr={problem.verificationAr}
              commonMistakes={problem.commonMistakes}
              hidePrompt={true}
            />
          </section>

          {/* ======================================================== */}
          {/* STEP 7: Interactive Student Practice Challenge           */}
          {/* ======================================================== */}
          {challenge && (
            <section className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#222222] shadow-sm space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
                    7
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#222222] flex items-center gap-1.5">
                    <Sparkles size={15} />
                    <span>Now Test Yourself • اختبر نفسك بمسألة امتحانية مماثلة</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {challenge.hintEn && (
                    <button
                      onClick={() => setShowPracticeHint(!showPracticeHint)}
                      className="text-xs font-mono text-[#505050] hover:text-[#222222] border border-[#E2E2DF] px-2.5 py-1 rounded-lg hover:bg-[#ECEDEB] transition-colors flex items-center gap-1"
                    >
                      <HelpCircle size={13} />
                      <span>{showPracticeHint ? 'Hide Hint' : 'Exam Hint'}</span>
                    </button>
                  )}

                  {selectedPracticeOption && (
                    <button
                      onClick={() => {
                        setSelectedPracticeOption(null);
                        setShowPracticeHint(false);
                      }}
                      className="text-xs font-mono text-[#505050] hover:text-[#222222] border border-[#E2E2DF] px-2.5 py-1 rounded-lg hover:bg-[#ECEDEB] transition-colors flex items-center gap-1"
                    >
                      <RotateCcw size={13} />
                      <span>Retry • إعادة المحاولة</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Practice Hint Callout */}
              {showPracticeHint && challenge.hintEn && (
                <div className="p-3 rounded-xl bg-[#FFF1A6]/30 border border-[#FFF1A6] text-xs space-y-1">
                  <div className="font-mono font-bold text-[#222222] text-[11px]">
                    Exam Hint: {challenge.hintEn}
                  </div>
                  {challenge.hintAr && (
                    <div className="font-sans text-[#505050] text-[11px] text-right" dir="rtl">
                      تلميح الحل: {challenge.hintAr}
                    </div>
                  )}
                </div>
              )}

              {/* Practice Question */}
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-[#222222] leading-relaxed">
                  {challenge.questionEn}
                </p>
                <p className="text-xs font-sans text-[#505050] text-right leading-relaxed" dir="rtl">
                  {challenge.questionAr}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                {challenge.options.map((opt) => {
                  const isSelected = selectedPracticeOption === opt.key;
                  const isCorrect = opt.key === challenge.correctAnswer;
                  const hasAnswered = selectedPracticeOption !== null;

                  let optionClass =
                    'border-[#E2E2DF] bg-[#FFFFFF] hover:border-[#222222] hover:bg-[#F7F7F5] text-[#222222]';

                  if (hasAnswered) {
                    if (isCorrect) {
                      optionClass = 'border-[#222222] bg-[#E8E8E5] font-bold text-[#222222]';
                    } else if (isSelected && !isCorrect) {
                      optionClass = 'border-[#D4D4D0] bg-[#F7F7F5] text-[#686868] opacity-75';
                    } else {
                      optionClass = 'border-[#E2E2DF] bg-[#FFFFFF] opacity-50';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => !hasAnswered && setSelectedPracticeOption(opt.key)}
                      disabled={hasAnswered}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${optionClass}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border ${
                          hasAnswered && isCorrect
                            ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                            : isSelected
                            ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                            : 'bg-[#F7F7F5] text-[#505050] border-[#E2E2DF]'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="text-xs font-medium text-[#222222] leading-snug">
                          {opt.textEn}
                        </div>
                        {opt.textAr && (
                          <div
                            className="text-[11px] font-sans text-[#505050] text-right leading-snug"
                            dir="rtl"
                          >
                            {opt.textAr}
                          </div>
                        )}
                      </div>
                      {hasAnswered && isCorrect && (
                        <CheckCircle2 size={16} className="text-[#222222] shrink-0 mt-0.5" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle size={16} className="text-[#686868] shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Step-by-Step Solution Reveal */}
              {selectedPracticeOption && (
                <div
                  className={`p-4 rounded-xl border space-y-2 text-xs transition-all ${
                    selectedPracticeOption === challenge.correctAnswer
                      ? 'bg-[#E8E8E5] border-[#222222] text-[#222222]'
                      : 'bg-[#F7F7F5] border-[#D4D4D0] text-[#222222]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono font-bold text-xs">
                    {selectedPracticeOption === challenge.correctAnswer ? (
                      <>
                        <Award size={16} className="text-[#222222]" />
                        <span>Correct Answer! You solved the examination challenge.</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle size={16} className="text-[#505050]" />
                        <span>
                          Incorrect choice. The correct option is ({challenge.correctAnswer}).
                        </span>
                      </>
                    )}
                  </div>

                  <div className="pt-1 border-t border-[#D4D4D0] space-y-1">
                    <p className="leading-relaxed">
                      <strong className="font-mono">Step-by-Step Solution: </strong>
                      {challenge.explanationEn}
                    </p>
                    <p className="leading-relaxed font-sans text-[#505050] text-right" dir="rtl">
                      <strong>الشرح والحل التفصيلي: </strong>
                      {challenge.explanationAr}
                    </p>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Links & Navigation */}
          <div className="pt-3 border-t border-[#E2E2DF] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {problem.relatedLessonId && (
                <Link
                  to={`/learn/${problem.chapterId}/${problem.relatedLessonId}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] hover:bg-[#ECEDEB] px-3 py-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] transition-colors"
                >
                  <BookOpen size={13} />
                  <span>Review Lesson • مراجعة الدرس الأصلي</span>
                </Link>
              )}

              {problem.relatedBasmagaQuestionId && onOpenBasmaga && (
                <button
                  onClick={() => onOpenBasmaga(problem.relatedBasmagaQuestionId!)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] hover:bg-[#ECEDEB] px-3 py-1.5 rounded-lg border border-[#D4D4D0] bg-[#FFFFFF] transition-colors"
                >
                  <Key size={13} />
                  <span>Basmaga Exam Question • حل السؤال البصمجي المقابل</span>
                </button>
              )}
            </div>

            <span className="text-[11px] font-mono text-[#686868]">
              Chapter: {problem.chapterId.toUpperCase()} • Problem ID: {problem.id}
            </span>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProblemSolvingCard;
