import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';
import type { Question } from '../../types';
import { useProgress } from '../../store/progressStore';

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

  const stemEn = question.en?.stem || '';
  const stemAr = question.ar?.stem || stemEn;
  const optionsEn = question.en?.options || [];
  const optionsAr = question.ar?.options || optionsEn;
  const correctVal = question.answer?.correct ?? question.correctAnswer;

  const isCorrectOption = (optIdx: number): boolean => {
    if (typeof correctVal === 'number') {
      return correctVal === optIdx;
    }
    if (typeof correctVal === 'string') {
      return correctVal === String.fromCharCode(65 + optIdx) || correctVal === optionsEn[optIdx];
    }
    return false;
  };

  const handleSelectOption = (idx: number) => {
    if (!hasSubmitted) {
      setSelectedOption(idx);
      setHasSubmitted(true);
      const isRight = isCorrectOption(idx);
      recordQuestionResult(question.id, isRight, idx);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const isUserCorrect = selectedOption !== null && isCorrectOption(selectedOption);

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
            {question.source || 'Exam Bank'}
          </span>
        </div>

        {hasSubmitted && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] font-mono text-[#505050] hover:text-[#222222] cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>{isArabic ? 'إعادة' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Question Statement */}
      <div className="space-y-1">
        <p className="body-content-text font-semibold text-[#222222]">
          {isArabic ? stemAr : stemEn}
        </p>
        <p className="body-content-text text-[#505050] opacity-80">
          {isArabic ? stemEn : stemAr}
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {optionsEn.map((optText, idx) => {
          const isSelected = selectedOption === idx;
          const isRight = isCorrectOption(idx);

          let btnClass = 'border-[#E2E2DF] bg-[#F7F7F5] text-[#222222] hover:bg-[#ECEDEB]';
          if (hasSubmitted) {
            if (isRight) {
              btnClass = 'border-[#217346] bg-[#EBF7EE] text-[#1E392A] font-semibold';
            } else if (isSelected && !isRight) {
              btnClass = 'border-[#C53929] bg-[#FDF2F2] text-[#5C1D18]';
            } else {
              btnClass = 'border-[#E2E2DF] bg-[#FFFFFF] text-[#888888] opacity-60';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={hasSubmitted}
              onClick={() => handleSelectOption(idx)}
              className={`p-3 rounded-lg border text-xs sm:text-sm text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer ${btnClass}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-snug">{isArabic ? optionsAr[idx] || optText : optText}</span>
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

      {/* Immediate Academic Feedback */}
      {hasSubmitted && (
        <div
          className={`p-3 rounded-lg border text-xs leading-relaxed space-y-1 ${
            isUserCorrect
              ? 'bg-[#EBF7EE] border-[#217346] text-[#1E392A]'
              : 'bg-[#FFFDF0] border-[#E2C65A] text-[#222222]'
          }`}
        >
          <div className="font-bold flex items-center gap-1.5 uppercase font-mono tracking-wider">
            {isUserCorrect ? (
              <>
                <CheckCircle2 size={14} className="text-[#217346]" />
                <span className="text-[#217346]">{isArabic ? 'إجابة صحيحة' : 'Correct Answer'}</span>
              </>
            ) : (
              <>
                <AlertTriangle size={14} className="text-[#856404]" />
                <span className="text-[#856404]">{isArabic ? 'التعليل الأكاديمي النموذجي' : 'Academic Explanation'}</span>
              </>
            )}
          </div>
          <p className="body-content-text">{isArabic ? question.explanationAr || question.explanation : question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default StudyContextualQuestion;

