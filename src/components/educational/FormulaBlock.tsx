import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';
import AIProviderActions from '../ai/AIProviderActions';

export interface FormulaBlockProps {
  id?: string;
  name: string;
  nameAr?: string;
  latex: string;
  chapterTitle?: string;
  conditions?: string;
  conditionsAr?: string;
  sourceStandard?: string;
  className?: string;
}

export default function FormulaBlock({
  id,
  name,
  nameAr,
  latex,
  chapterTitle,
  conditions,
  conditionsAr,
  sourceStandard,
  className = '',
}: FormulaBlockProps): React.ReactElement {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(latex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={id}
      className={`border-2 border-[#171717] bg-[#FFFFFF] rounded-lg p-5 sm:p-6 space-y-4 shadow-sm hover:border-[#000000] transition-all ${className}`}
    >
      {/* Header: Name, Arabic, Pills & AI Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            {chapterTitle && (
              <span className="font-mono text-[11px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded font-bold">
                {chapterTitle}
              </span>
            )}
            {sourceStandard && (
              <span className="font-mono text-[11px] text-[#525252] border border-[#E5E5E5] bg-[#FAFAFA] px-2 py-0.5 rounded">
                {sourceStandard}
              </span>
            )}
            <h3 className="text-lg sm:text-[20px] font-bold text-[#171717] tracking-tight">
              {name}
            </h3>
          </div>
          {nameAr && (
            <h4
              dir="rtl"
              className="text-base sm:text-[18px] font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {nameAr}
            </h4>
          )}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E5] hover:border-[#171717] rounded text-xs font-mono text-[#525252] hover:text-[#171717] bg-[#FFFFFF] transition-colors"
            title="Copy LaTeX Expression"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#171717]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>LaTeX</span>
              </>
            )}
          </button>

          <AIProviderActions
            context={{
              sectionTitle: `Formula: ${name}${nameAr ? ` / ${nameAr}` : ''}`,
              content: `Mathematical Formula: ${name}\nLaTeX: ${latex}${
                conditions ? `\nConditions of use: ${conditions}` : ''
              }`,
              promptType: 'math',
              chapterTitle,
            }}
            variant="compact"
          />
        </div>
      </div>

      {/* Prominent Formula Display: 26-32px KaTeX in isolated LTR box */}
      <div
        className="p-5 sm:p-6 bg-[#FAFAFA] border border-[#171717] rounded-md overflow-x-auto text-center font-serif text-[24px] sm:text-[28px] md:text-[32px] leading-relaxed select-text"
        dir="ltr"
      >
        <MathDisplay latex={latex} display />
      </div>

      {/* Conditions / Usage Constraints Pill */}
      {(conditions || conditionsAr) && (
        <div className="flex items-start gap-2.5 p-3.5 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg text-xs sm:text-[15px] leading-snug">
          <Info size={16} className="text-[#171717] shrink-0 mt-0.5" />
          <div className="space-y-1 flex-1">
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#737373] block">
              Mathematical Assumptions & Valid Range / الشروط والمعايير الحتمية:
            </span>
            {conditions && conditionsAr ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start pt-0.5">
                <p className="text-[#171717] font-mono text-xs sm:text-sm">
                  {conditions}
                </p>
                <p
                  dir="rtl"
                  className="text-[#525252] font-serif text-sm md:border-s md:border-[#E5E5E5] md:ps-3"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {conditionsAr}
                </p>
              </div>
            ) : (
              <div>
                {conditions && (
                  <p className="text-[#171717] font-mono text-xs sm:text-sm">
                    {conditions}
                  </p>
                )}
                {conditionsAr && (
                  <p dir="rtl" className="text-[#525252] font-serif text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {conditionsAr}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

