import React from 'react';
import { Check, X } from 'lucide-react';

export interface TrueFalseOptionsProps {
  selectedAnswer?: number | string | boolean;
  isSubmitted?: boolean;
  correctAnswerIndex?: number;
  onSelect: (value: number) => void;
  isArabic?: boolean;
  disabled?: boolean;
}

export default function TrueFalseOptions({
  selectedAnswer,
  isSubmitted = false,
  correctAnswerIndex,
  onSelect,
  isArabic = false,
  disabled = false,
}: TrueFalseOptionsProps): React.ReactElement {
  // Normalize selected index
  let selectedIndex: number | undefined;
  if (selectedAnswer === 0 || selectedAnswer === 1) {
    selectedIndex = selectedAnswer;
  } else if (selectedAnswer === true || String(selectedAnswer).toLowerCase() === 'true' || selectedAnswer === 'صواب') {
    selectedIndex = 0;
  } else if (selectedAnswer === false || String(selectedAnswer).toLowerCase() === 'false' || selectedAnswer === 'خطأ') {
    selectedIndex = 1;
  }

  const options = [
    {
      index: 0,
      labelEn: 'True',
      labelAr: 'صواب',
    },
    {
      index: 1,
      labelEn: 'False',
      labelAr: 'خطأ',
    },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="True or False selection"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {options.map((opt) => {
        const isSelected = selectedIndex === opt.index;
        const isCorrectChoice = isSubmitted && correctAnswerIndex === opt.index;
        const isWrongChoice = isSubmitted && isSelected && correctAnswerIndex !== opt.index;

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

        const displayText = isArabic ? opt.labelAr : opt.labelEn;
        const secondaryText = isArabic ? opt.labelEn : opt.labelAr;

        return (
          <button
            key={opt.index}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled || isSubmitted}
            onClick={() => onSelect(opt.index)}
            className={`w-full text-left px-5 py-4 border rounded-md text-base sm:text-lg flex items-center justify-between transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
          >
            <div className="flex items-center gap-3.5">
              {/* Radio Indicator */}
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  isSelected || isCorrectChoice
                    ? 'border-[#FFFFFF] bg-[#000000]'
                    : 'border-[#737373] group-hover:border-[#FFFFFF]'
                }`}
              >
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF]" />
                )}
              </span>

              <div className="flex items-baseline gap-2">
                <span
                  className={`font-bold ${isArabic ? 'font-serif text-lg' : 'font-sans'}`}
                  style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
                >
                  {displayText}
                </span>
                <span
                  className={`text-xs opacity-60 ${
                    isSelected || isCorrectChoice ? 'text-[#FFFFFF]' : 'text-[#737373] group-hover:text-[#FFFFFF]'
                  }`}
                >
                  ({secondaryText})
                </span>
              </div>
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
