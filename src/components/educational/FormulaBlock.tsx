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
      className={`border border-[#D4D4D0] bg-[#FFFFFF] rounded-lg p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#222222] transition-all ${className}`}
    >
      {/* Header: Name, Arabic, Pills & AI Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3.5">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            {chapterTitle && (
              <span className="font-mono text-xs uppercase border border-[#222222] bg-[#222222] text-[#FFFFFF] px-2.5 py-0.5 rounded font-bold">
                {chapterTitle}
              </span>
            )}
            {sourceStandard && (
              <span className="font-mono text-xs text-[#505050] border border-[#E2E2DF] bg-[#F7F7F5] px-2.5 py-0.5 rounded">
                {sourceStandard}
              </span>
            )}
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
              {name}
            </h3>
          </div>
          {nameAr && (
            <h4
              dir="rtl"
              className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E2DF] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] rounded text-xs font-mono text-[#505050] hover:text-[#222222] bg-[#FFFFFF] transition-colors"
            title="Copy LaTeX Expression"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#222222]" />
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
        className="p-5 sm:p-6 bg-[#F7F7F5] border border-[#D4D4D0] rounded-md overflow-x-auto text-center font-serif text-[24px] sm:text-[28px] md:text-[32px] leading-relaxed select-text text-[#222222]"
        dir="ltr"
      >
        <MathDisplay latex={latex} display />
      </div>

      {/* Conditions / Usage Constraints Pill — Single-Column Full-Width */}
      {(conditions || conditionsAr) && (
        <div className="flex items-start gap-3 p-4 bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl text-sm sm:text-[16px] leading-relaxed w-full">
          <Info size={18} className="text-[#222222] shrink-0 mt-0.5" />
          <div className="space-y-2 flex-1 w-full">
            <span className="font-mono text-xs sm:text-[13px] uppercase tracking-wider font-bold text-[#686868] block">
              Mathematical Assumptions & Valid Range / الشروط والمعايير الحتمية:
            </span>
            <div className="space-y-2 w-full">
              {conditions && (
                <p className="text-[#222222] font-mono text-[15px] sm:text-[16px] leading-[1.65]">
                  {conditions}
                </p>
              )}
              {conditionsAr && (
                <p
                  dir="rtl"
                  className="text-[#505050] font-serif text-[16px] sm:text-[17px] leading-[1.8] pt-1.5 border-t border-[#F2F2F0]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {conditionsAr}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

