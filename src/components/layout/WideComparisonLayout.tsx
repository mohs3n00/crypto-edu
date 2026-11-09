import React from 'react';
import AIProviderActions from '../ai/AIProviderActions';

export interface ComparisonColumnItem {
  title: string;
  titleAr?: string;
  badge?: string;
  content: React.ReactNode;
}

export interface WideComparisonLayoutProps {
  title: string;
  titleAr?: string;
  columns: ComparisonColumnItem[];
  className?: string;
}

export default function WideComparisonLayout({
  title,
  titleAr,
  columns,
  className = '',
}: WideComparisonLayoutProps): React.ReactElement {
  const colCount = columns.length;
  const gridClass =
    colCount === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : colCount === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div
      className={`my-8 border-2 border-[#171717] rounded-xl p-6 sm:p-7 bg-[#FFFFFF] space-y-6 shadow-xs w-full max-w-[1400px] ${className}`}
    >
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] uppercase font-bold text-[#737373] tracking-wider block">
            Comparative Architecture / مقارنة معمارية تحليلية
          </span>
          <h4 className="text-[18px] sm:text-[20px] font-bold text-[#171717] tracking-tight">
            {title}
          </h4>
          {titleAr && (
            <h5
              dir="rtl"
              className="text-[15px] font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </h5>
          )}
        </div>

        <AIProviderActions
          context={{
            sectionTitle: `Comparison: ${title}${titleAr ? ` / ${titleAr}` : ''}`,
            content: `Comparative analysis of: ${columns.map((c) => c.title).join(' vs ')}`,
            promptType: 'concept',
          }}
          variant="compact"
        />
      </div>

      {/* Side-by-Side Comparison Columns */}
      <div className={`grid ${gridClass} gap-6`}>
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FAFAFA] space-y-4 flex flex-col justify-between hover:border-[#171717] transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#171717]">
                  Option {idx + 1}
                </span>
                {col.badge && (
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold">
                    {col.badge}
                  </span>
                )}
              </div>

              <h5 className="text-[16px] font-bold text-[#171717]">
                {col.title}
              </h5>
              {col.titleAr && (
                <p
                  dir="rtl"
                  className="text-xs font-serif text-[#525252]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {col.titleAr}
                </p>
              )}

              <div className="pt-2 text-sm text-[#171717] leading-relaxed space-y-2">
                {col.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

