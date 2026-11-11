import React, { useState, useMemo } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, AlertTriangle, Eye } from 'lucide-react';
import type { Question } from '../../types';
import { useProgress } from '../../store/progressStore';
import { normalizeQuestion } from '../../utils/questionNormalizer';

interface StudyContextualQuestionProps {
  question: Question;
  isArabic: boolean;
}

export const StudyContextualQuestion: React.FC<StudyContextualQuestionProps> = ({
  question,
  isArabic,
}) => {
  const { recordQuestionResult } = useProgress();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  const normQ = useMemo(() => normalizeQuestion(question), [question]);

  const stemEn = normQ.stemEn || '';
  const stemAr = normQ.stemAr || '';
  const hasDistinctAr = Boolean(
    stemAr && stemAr.trim() !== '' && stemAr.trim().toLowerCase() !== stemEn.trim().toLowerCase()
  );

  const optionsEn = normQ.optionsEn || [];
  const optionsAr = normQ.optionsAr || optionsEn;
  const isChoiceQuestion = optionsEn.length > 0;

  const isOptionCorrect = (optIdx: number): boolean => {
    return normQ.correctAnswerIndex === optIdx;
  };

  const handleSelectOption = (idx: number) => {
    if (!hasSubmitted) {
      setSelectedOption(idx);
      setHasSubmitted(true);
      const isRight = isOptionCorrect(idx);
      recordQuestionResult(question.id, isRight, idx);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowModelAnswer(false);
  };

  const isUserCorrect = selectedOption !== null && isOptionCorrect(selectedOption);

  // Model explanation text
  const academicExplanation = isArabic
    ? normQ.explanationAr || normQ.explanationEn
    : normQ.explanationEn || normQ.explanationAr;

  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-4 sm:p-5 space-y-3.5 shadow-2xs my-4">
      {/* Question Header */}
      <div className="flex items-center justify-between gap-2 border-b border-[#F0F0EE] pb-2.5">
        <div className="flex items-center gap-2">
          <HelpCircle size={15} className="text-[#222222]" />
          <span className="text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">
            {isArabic ? 'سؤال تدريبي سياقي' : 'Contextual Practice Question'}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
            {question.originalNumber || question.source || 'Exam Bank'}
          </span>
          {normQ.type === 'true-false' && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0F0EE] text-[#505050]">
              {isArabic ? 'صواب / خطأ' : 'True / False'}
            </span>
          )}
        </div>

        {(hasSubmitted || showModelAnswer) && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] font-mono text-[#505050] hover:text-[#222222] cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>{isArabic ? 'إعادة المحاولة' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Question Statement */}
      <div className="space-y-1">
        <p className="body-content-text font-semibold text-[#222222]">
          {isArabic ? (hasDistinctAr ? stemAr : stemEn) : stemEn}
        </p>
        {hasDistinctAr && (
          <p className="body-content-text text-[#505050] opacity-80">
            {isArabic ? stemEn : stemAr}
          </p>
        )}
      </div>

      {/* Options Grid for True/False and MCQ */}
      {isChoiceQuestion ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {optionsEn.map((optText, idx) => {
            const isSelected = selectedOption === idx;
            const isRight = isOptionCorrect(idx);

            let btnClass = 'border-[#E2E2DF] bg-[#F7F7F5] text-[#222222] hover:bg-[#ECEDEB]';
            if (hasSubmitted) {
              if (isRight) {
                // Correct answer is ALWAYS clearly highlighted in green with checkmark
                btnClass = 'border-[#217346] bg-[#EBF7EE] text-[#1E392A] font-semibold ring-1 ring-[#217346]';
              } else if (isSelected && !isRight) {
                // Selected wrong answer is styled in red with X
                btnClass = 'border-[#C53929] bg-[#FDF2F2] text-[#5C1D18]';
              } else {
                // Other options are dimmed
                btnClass = 'border-[#E2E2DF] bg-[#FFFFFF] text-[#888888] opacity-60';
              }
            }

            const letterLabel = String.fromCharCode(65 + idx);
            const labelText = isArabic ? optionsAr[idx] || optText : optText;

            return (
              <button
                key={idx}
                type="button"
                disabled={hasSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`p-3 rounded-lg border text-xs sm:text-sm text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer disabled:cursor-default ${btnClass}`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                    {letterLabel}
                  </span>
                  <span className="leading-snug">{labelText}</span>
                </div>

                {hasSubmitted && (
                  <div className="shrink-0">
                    {isRight && <CheckCircle2 size={16} className="text-[#217346]" />}
                    {isSelected && !isRight && <XCircle size={16} className="text-[#C53929]" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        /* Short-Answer / Open-Ended Fallback */
        <div className="space-y-2">
          {!showModelAnswer && (
            <button
              type="button"
              onClick={() => setShowModelAnswer(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#222222] bg-[#222222] text-[#FFFFFF] text-xs font-semibold cursor-pointer hover:bg-[#333333] transition-colors"
            >
              <Eye size={13} />
              <span>{isArabic ? 'عرض الإجابة النموذجية الأكاديمية' : 'Reveal Academic Model Answer'}</span>
            </button>
          )}
        </div>
      )}

      {/* Immediate Academic Feedback */}
      {(hasSubmitted || showModelAnswer) && (
        <div
          className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-2 ${
            isChoiceQuestion && isUserCorrect
              ? 'bg-[#EBF7EE] border-[#217346] text-[#1E392A]'
              : 'bg-[#FFFDF0] border-[#E2C65A] text-[#222222]'
          }`}
        >
          <div className="font-bold flex items-center justify-between gap-1.5 font-mono tracking-wider">
            <div className="flex items-center gap-1.5">
              {isChoiceQuestion && isUserCorrect ? (
                <>
                  <CheckCircle2 size={15} className="text-[#217346]" />
                  <span className="text-[#217346] font-bold">
                    {isArabic ? 'إجابة صحيحة ومطابقة لنموذج الامتحان' : 'Correct Answer'}
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle size={15} className="text-[#856404]" />
                  <span className="text-[#856404] font-bold">
                    {isChoiceQuestion
                      ? (isArabic ? 'إجابة غير صحيحة — التحليل الأكاديمي' : 'Incorrect — Academic Explanation')
                      : (isArabic ? 'عناصر الإجابة النموذجية المعتمدة' : 'Official Academic Model Answer')}
                  </span>
                </>
              )}
            </div>

            {isChoiceQuestion && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF]/80 border border-current">
                {isArabic ? 'الإجابة المعتمدة:' : 'Key:'}{' '}
                {normQ.correctAnswerIndex !== undefined
                  ? `${String.fromCharCode(65 + normQ.correctAnswerIndex)} (${
                      isArabic
                        ? optionsAr[normQ.correctAnswerIndex] || optionsEn[normQ.correctAnswerIndex]
                        : optionsEn[normQ.correctAnswerIndex]
                    })`
                  : normQ.correctAnswerText || ''}
              </span>
            )}
          </div>

          {/* Model Answer if short answer */}
          {!isChoiceQuestion && normQ.correctAnswerText && (
            <div className="p-2.5 rounded bg-[#FFFFFF] border border-[#E2E2DF] font-sans">
              <span className="font-bold text-[#222222] block mb-0.5">
                {isArabic ? 'نص الإجابة المعتمد:' : 'Model Answer:'}
              </span>
              <p className="text-[#1A1A1A] leading-relaxed">{normQ.correctAnswerText}</p>
            </div>
          )}

          {/* Academic Explanation */}
          {academicExplanation && (
            <div className="pt-1 border-t border-black/10">
              <p className="body-content-text text-[#222222] font-sans whitespace-pre-line">
                {academicExplanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyContextualQuestion;
