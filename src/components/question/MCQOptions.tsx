import React from 'react';
import { Check, X } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

export interface MCQOptionsProps {
  optionsEn: string[];
  optionsAr?: string[];
  selectedAnswer?: number | string;
  isSubmitted?: boolean;
  correctAnswerIndex?: number;
  onSelect: (value: number) => void;
  isArabic?: boolean;
  disabled?: boolean;
}

export default function MCQOptions({
  optionsEn,
  optionsAr,
  selectedAnswer,
  isSubmitted = false,
  correctAnswerIndex,
  onSelect,
  isArabic = false,
  disabled = false,
}: MCQOptionsProps): React.ReactElement {
  // Determine selected index
  let selectedIndex: number | undefined;
  if (typeof selectedAnswer === 'number') {
    selectedIndex = selectedAnswer;
  } else if (typeof selectedAnswer === 'string') {
    const idx = optionsEn.findIndex(
      (opt) => opt.trim().toLowerCase() === selectedAnswer.trim().toLowerCase()
    );
    if (idx !== -1) selectedIndex = idx;
  }

  // Check if options are short enough for 2-column grid
  const isShortGrid =
    optionsEn.length <= 4 && optionsEn.every((o) => (o || '').length < 60);

  // Render option text with LaTeX formula support if necessary
  const renderOptionContent = (text: string) => {
    if (text.includes('$')) {
      const parts = text.split(/(\$[^\$]+?\$)/g);
      return (
        <span>
          {parts.map((p, i) =>
            p.startsWith('$') && p.endsWith('$') ? (
              <span key={i} className="inline-block mx-0.5" dir="ltr">
                <MathDisplay latex={p.slice(1, -1)} />
              </span>
            ) : (
              <span key={i}>{p}</span>
            )
          )}
        </span>
      );
    }
    return <span>{text}</span>;
  };

  return (
    <div
      role="radiogroup"
      aria-label="Multiple choice options"
      className="flex flex-col space-y-2.5 pt-2 w-full"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {optionsEn.map((optEn, oIdx) => {
        const isSelected = selectedIndex === oIdx;
        const isCorrectChoice = isSubmitted && correctAnswerIndex === oIdx;
        const isWrongChoice = isSubmitted && isSelected && correctAnswerIndex !== oIdx;

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
        const hasAltArabic = isArabic && optionsAr && optionsAr[oIdx];

        return (
          <button
            key={oIdx}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled || isSubmitted}
            onClick={() => onSelect(oIdx)}
            className={`w-full text-left px-4 py-3.5 border rounded-md text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
          >
            <div className="flex items-center gap-3">
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

              {/* Letter Label (A, B, C, D) */}
              <span
                className={`font-mono text-xs font-bold shrink-0 ${
                  isSelected || isCorrectChoice
                    ? 'text-[#222222]'
                    : 'text-[#686868] group-hover:text-[#222222]'
                }`}
              >
                {String.fromCharCode(65 + oIdx)})
              </span>

              {/* Option Text */}
              <div className="flex flex-col">
                <span
                  className={hasAltArabic ? 'font-serif text-[15px]' : 'font-sans'}
                  style={hasAltArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
                >
                  {renderOptionContent(primaryText)}
                </span>
                {hasAltArabic && (
                  <span
                    className={`text-xs opacity-70 font-sans ${
                      isSelected || isCorrectChoice ? 'text-[#222222]' : 'text-[#686868]'
                    }`}
                    dir="ltr"
                  >
                    ({optEn})
                  </span>
                )}
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

