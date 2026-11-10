import React from 'react';
import MathDisplay from '../ui/MathDisplay';

export interface QuestionStatementProps {
  stemEn: string;
  stemAr?: string;
  isDisplayingArabic?: boolean;
  altLangActive?: boolean;
}

export default function QuestionStatement({
  stemEn,
  stemAr,
  isDisplayingArabic = false,
  altLangActive = false,
}: QuestionStatementProps): React.ReactElement {
  const currentStem = isDisplayingArabic && stemAr ? stemAr : stemEn;

  // Render text with math if formula delimiters ($ or $$) exist
  const renderStemContent = (text: string) => {
    if (text.includes('$')) {
      const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]+?\$)/g);
      return (
        <span>
          {parts.map((part, i) => {
            if (part.startsWith('$$') && part.endsWith('$$')) {
              return (
                <span key={i} className="block my-2" dir="ltr">
                  <MathDisplay latex={part.slice(2, -2)} display />
                </span>
              );
            }
            if (part.startsWith('$') && part.endsWith('$')) {
              return (
                <span key={i} className="inline-block mx-1" dir="ltr">
                  <MathDisplay latex={part.slice(1, -1)} />
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </span>
      );
    }

    return <span>{text}</span>;
  };

  return (
    <div className="space-y-1.5">
      <div
        dir={isDisplayingArabic ? 'rtl' : 'ltr'}
        className={`text-[17px] sm:text-[18px] font-bold text-[#222222] leading-relaxed ${
          isDisplayingArabic ? 'font-serif' : 'font-sans'
        }`}
        style={isDisplayingArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
      >
        {renderStemContent(currentStem)}
      </div>

      {altLangActive && (
        <p className="text-xs font-mono text-[#686868]">
          {isDisplayingArabic ? '(Arabic Translation)' : '(Original English Exam Stem)'}
        </p>
      )}
    </div>
  );
}
