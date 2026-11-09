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
      className={
        isShortGrid
          ? 'grid grid-cols-1 md:grid-cols-2 gap-3 pt-2'
          : 'space-y-3 pt-2'
      }
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {optionsEn.map((optEn, oIdx) => {
        const isSelected = selectedIndex === oIdx;
        const isCorrectChoice = isSubmitted && correctAnswerIndex === oIdx;
        const isWrongChoice = isSubmitted && isSelected && correctAnswerIndex !== oIdx;

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
                    ? 'border-[#FFFFFF] bg-[#000000]'
                    : 'border-[#737373] group-hover:border-[#FFFFFF]'
                }`}
              >
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF]" />
                )}
              </span>

              {/* Letter Label (A, B, C, D) */}
              <span
                className={`font-mono text-xs font-bold shrink-0 ${
                  isSelected || isCorrectChoice
                    ? 'text-[#FFFFFF]'
                    : 'opacity-75 group-hover:text-[#FFFFFF]'
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
                    className={`text-xs opacity-60 font-sans ${
                      isSelected || isCorrectChoice ? 'text-[#FFFFFF]' : 'text-[#737373] group-hover:text-[#FFFFFF]'
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

