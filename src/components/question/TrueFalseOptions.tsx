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
      className="flex flex-col space-y-2.5 pt-2 w-full"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {options.map((opt) => {
        const isSelected = selectedIndex === opt.index;
        const isCorrectChoice = isSubmitted && correctAnswerIndex === opt.index;
        const isWrongChoice = isSubmitted && isSelected && correctAnswerIndex !== opt.index;

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
                    ? 'border-[#222222] bg-[#222222]'
                    : 'border-[#D4D4D0] bg-[#FFFFFF] group-hover:border-[#222222]'
                }`}
              >
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
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
                  className={`text-xs opacity-70 ${
                    isSelected || isCorrectChoice ? 'text-[#222222]' : 'text-[#686868]'
                  }`}
                >
                  ({secondaryText})
                </span>
              </div>
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
