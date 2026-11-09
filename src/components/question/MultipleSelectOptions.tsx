import React from 'react';
import { Check, X } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

export interface MultipleSelectOptionsProps {
  optionsEn: string[];
  optionsAr?: string[];
  selectedAnswers?: number[];
  isSubmitted?: boolean;
  correctAnswerIndices?: number[];
  onToggle: (index: number) => void;
  isArabic?: boolean;
  disabled?: boolean;
}

export default function MultipleSelectOptions({
  optionsEn,
  optionsAr,
  selectedAnswers = [],
  isSubmitted = false,
  correctAnswerIndices = [],
  onToggle,
  isArabic = false,
  disabled = false,
}: MultipleSelectOptionsProps): React.ReactElement {
  return (
    <div
      role="group"
      aria-label="Multiple selection options"
      className="space-y-3 pt-2"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="text-xs text-[#737373] font-mono pb-1">
        {isArabic ? 'اختر كل الإجابات الصحيحة (اختيار متعدد):' : 'Select all that apply (Multiple Select):'}
      </div>

      {optionsEn.map((optEn, oIdx) => {
        const isSelected = selectedAnswers.includes(oIdx);
        const isExpected = correctAnswerIndices.includes(oIdx);
        const isCorrectChoice = isSubmitted && isExpected;
        const isWrongChoice = isSubmitted && isSelected && !isExpected;

        let btnStyle =
          'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] text-[#171717] group';

        if (isSubmitted) {
          if (isCorrectChoice) {
            btnStyle = 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-bold shadow-xs';
          } else if (isWrongChoice) {
            btnStyle = 'border-[#525252] bg-[#F2F2F2] text-[#525252] line-through';
          } else {
            btnStyle = 'border-[#E5E5E5] bg-[#FAFAFA] text-[#737373] opacity-60';
          }
        } else if (isSelected) {
          btnStyle = 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs';
        }

        const primaryText = isArabic && optionsAr && optionsAr[oIdx] ? optionsAr[oIdx] : optEn;

        return (
          <button
            key={oIdx}
            type="button"
            role="checkbox"
            aria-checked={isSelected}
            disabled={disabled || isSubmitted}
            onClick={() => onToggle(oIdx)}
            className={`w-full text-left px-4 py-3.5 border rounded-md text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
          >
            <div className="flex items-center gap-3">
              {/* Checkbox indicator */}
              <span
                className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  isSelected || isCorrectChoice
                    ? 'border-[#FFFFFF] bg-[#000000]'
                    : 'border-[#737373] group-hover:border-[#FFFFFF]'
                }`}
              >
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#FFFFFF]" />
                )}
              </span>

              <span
                className={`font-mono text-xs font-bold shrink-0 ${
                  isSelected || isCorrectChoice
                    ? 'text-[#FFFFFF]'
                    : 'opacity-75 group-hover:text-[#FFFFFF]'
                }`}
              >
                {String.fromCharCode(65 + oIdx)})
              </span>

              <span
                className={isArabic && optionsAr ? 'font-serif text-[15px]' : 'font-sans'}
                style={isArabic && optionsAr ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {primaryText.includes('$') ? (
                  <MathDisplay latex={primaryText.replace(/\$/g, '')} />
                ) : (
                  primaryText
                )}
              </span>
            </div>

            {isSubmitted && (
              <span className="shrink-0 ml-2">
                {isCorrectChoice ? (
                  <Check className="w-5 h-5 text-[#FFFFFF]" />
                ) : isWrongChoice ? (
                  <X className="w-5 h-5 text-[#525252]" />
                ) : null}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

