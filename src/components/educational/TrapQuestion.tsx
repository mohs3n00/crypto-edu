import React, { useState } from 'react';
import { Check, X, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { useUI } from '../../store/uiStore';

export interface TrapQuestionProps {
  id: string;
  stem: string;
  stemAr?: string;
  options: string[];
  optionsAr?: string[];
  correctAnswer: number;
  explanation: string;
  explanationAr?: string;
  temptingDistractorIndex?: number;
  distractorTrapExplanation?: string;
  distractorTrapExplanationAr?: string;
  className?: string;
}

export default function TrapQuestion({
  id,
  stem,
  stemAr,
  options,
  optionsAr,
  correctAnswer,
  explanation,
  explanationAr,
  temptingDistractorIndex,
  distractorTrapExplanation,
  distractorTrapExplanationAr,
  className = '',
}: TrapQuestionProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const isCorrect = selected === correctAnswer;
  const isTemptingDistractor = selected === temptingDistractorIndex;

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
  };

  return (
    <div className={`border-2 border-[#171717] rounded-lg p-5 bg-[#FFFFFF] space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E5] text-xs font-mono">
        <div className="flex items-center gap-2">
          <HelpCircle size={15} className="text-[#171717]" />
          <span className="font-bold text-[#171717] uppercase tracking-wider">
            Interactive Exam Challenge / تدريب امتحاني تطبيقي
          </span>
        </div>
        <span className="px-2 py-0.5 border border-[#171717] bg-[#FAFAFA] rounded text-[11px] font-bold text-[#171717]">
          {options.length === 2 ? 'True / False' : 'Multiple Choice'}
        </span>
      </div>

      {/* Question Stem (17-19px) */}
      <div className="space-y-1">
        <p className="text-base sm:text-[18px] font-bold text-[#171717] leading-relaxed">
          {stem}
        </p>
        {stemAr && (
          <p
            dir="rtl"
            className="text-base sm:text-[18px] font-bold text-[#525252] font-serif leading-relaxed pt-1"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {stemAr}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2.5 pt-1">
        {options.map((opt, idx) => {
          const isCurrentSelected = selected === idx;
          let btnStyle =
            'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] text-[#171717] group';

          if (submitted) {
            if (idx === correctAnswer) {
              btnStyle = 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-bold shadow-xs';
            } else if (isCurrentSelected && !isCorrect) {
              btnStyle = 'border-[#525252] bg-[#F2F2F2] text-[#525252] line-through';
            } else {
              btnStyle = 'border-[#E5E5E5] bg-[#FAFAFA] text-[#737373] opacity-60';
            }
          } else if (isCurrentSelected) {
            btnStyle = 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs';
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={submitted}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left px-4 py-3.5 border rounded-md text-sm sm:text-[16px] flex items-center justify-between transition-all ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs shrink-0 ${
                    isCurrentSelected || (submitted && idx === correctAnswer)
                      ? 'text-[#FFFFFF]'
                      : 'opacity-75 group-hover:text-[#FFFFFF]'
                  }`}
                >
                  {options.length === 2
                    ? idx === 0
                      ? 'T)'
                      : 'F)'
                    : `${String.fromCharCode(65 + idx)})`}
                </span>
                <span className="font-medium">
                  {isArabic && optionsAr && optionsAr[idx] ? optionsAr[idx] : opt}
                </span>
              </div>

              {submitted && (
                <span className="shrink-0 ml-2">
                  {idx === correctAnswer ? (
                    <Check className="w-5 h-5 text-[#FFFFFF]" />
                  ) : isCurrentSelected && !isCorrect ? (
                    <X className="w-5 h-5 text-[#525252]" />
                  ) : null}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Action / Submit */}
      {!submitted ? (
        <button
          type="button"
          disabled={selected === null}
          onClick={handleSubmit}
          className="px-5 py-2.5 text-xs sm:text-sm font-semibold border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded hover:bg-[#333333] disabled:opacity-40 transition-colors"
        >
          Check Answer / التحقق من الإجابة
        </button>
      ) : (
        <div className="mt-4 p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-3 text-sm sm:text-[17px] leading-relaxed">
          {/* Result Banner */}
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-bold font-mono">
                <CheckCircle2 size={16} /> Correct! الإجابة صحيحة
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#525252] bg-[#F2F2F2] text-[#171717] rounded text-xs font-bold font-mono">
                <XCircle size={16} /> Incorrect / وقعت في الفخ
              </span>
            )}
          </div>

          {/* Warning for tempting distractor */}
          {!isCorrect && isTemptingDistractor && distractorTrapExplanation && (
            <div className="p-3 border border-[#171717] bg-[#FFFFFF] rounded text-xs sm:text-[15px] space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#171717] block">
                Why this distractor is tempting / لماذا خيارك المغري خاطئ:
              </span>
              <p className="text-[#171717]">{distractorTrapExplanation}</p>
              {distractorTrapExplanationAr && (
                <p dir="rtl" className="text-[#525252] font-serif pt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {distractorTrapExplanationAr}
                </p>
              )}
            </div>
          )}

          {/* Academic Explanation */}
          <div className="space-y-1 pt-1">
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#737373] block">
              Official Examination Rationale / التعليل الأكاديمي النموذجي:
            </span>
            <p className="text-[#171717] leading-relaxed">{explanation}</p>
            {explanationAr && (
              <p dir="rtl" className="text-[#525252] font-serif leading-[2.1] pt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                {explanationAr}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

