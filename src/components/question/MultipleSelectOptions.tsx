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
          'border-[#E2E2DF] bg-[#FFFFFF] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] text-[#222222] group';

        if (isSubmitted) {
          if (isCorrectChoice) {
            btnStyle = 'border-2 border-[#222222] bg-[#FFFFFF] text-[#222222] font-bold shadow-xs';
          } else if (isWrongChoice) {
            btnStyle = 'border border-dashed border-[#686868] bg-[#ECEDEB] text-[#505050] line-through';
          } else {
            btnStyle = 'border-[#E2E2DF] bg-[#F7F7F5] text-[#686868] opacity-60';
          }
        } else if (isSelected) {
          btnStyle = 'border-2 border-[#222222] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs';
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
                    ? 'border-[#222222] bg-[#222222]'
                    : 'border-[#D4D4D0] bg-[#FFFFFF] group-hover:border-[#222222]'
                }`}
              >
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[2.5]" />
                )}
              </span>

              <span
                className={`font-mono text-xs font-bold shrink-0 ${
                  isSelected || isCorrectChoice
                    ? 'text-[#222222]'
                    : 'text-[#686868] group-hover:text-[#222222]'
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
                  <Check className="w-5 h-5 text-[#222222] stroke-[2.5]" />
                ) : isWrongChoice ? (
                  <X className="w-5 h-5 text-[#505050] stroke-[2.5]" />
                ) : null}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

