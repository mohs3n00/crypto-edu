import React from 'react';
import { useUI } from '../../store/uiStore';

export interface VariableItem {
  symbol: string;
  meaning: string;
  meaningAr?: string;
  domain?: string;
}

export interface VariableDefinitionsProps {
  variables: VariableItem[];
  title?: string;
  titleAr?: string;
  className?: string;
}

export default function VariableDefinitions({
  variables,
  title = 'Variables & Mathematical Constraints',
  titleAr = 'المتغيرات والشروط الرياضية المعتمدة',
  className = '',
}: VariableDefinitionsProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  if (!variables || variables.length === 0) return <></>;

  return (
    <div className={`space-y-2 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md p-4 ${className}`}>
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#737373] pb-1 border-b border-[#E5E5E5]">
        <span>{title}</span>
        {titleAr && (
          <span dir="rtl" className="font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
            {titleAr}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        {variables.map((v, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-2.5 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-sm sm:text-[16px] leading-snug"
          >
            <span className="font-mono font-bold text-[#171717] px-1.5 py-0.5 border border-[#E5E5E5] rounded bg-[#FAFAFA] shrink-0 text-sm">
              {v.symbol}
            </span>
            <div className="flex-1 space-y-0.5">
              <p className="text-[#171717] font-medium">
                {isArabic && v.meaningAr ? v.meaningAr : v.meaning}
              </p>
              {v.meaningAr && !isArabic && (
                <p dir="rtl" className="text-xs text-[#737373] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {v.meaningAr}
                </p>
              )}
              {v.domain && (
                <span className="inline-block text-[11px] font-mono text-[#525252]">
                  Domain: {v.domain}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

