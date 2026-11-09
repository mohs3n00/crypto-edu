import React from 'react';
import { HighlightedText } from '../keywords';

export interface ConceptItem {
  number: string; // e.g. "01", "02", "03", "04"
  titleEn: string;
  titleAr: string;
  academicDefinition: string;
  academicDefinitionAr?: string;
  conceptualExplanation?: string;
  conceptualExplanationAr?: string;
  applications?: string[];
  applicationsAr?: string[];
  keyDistinction?: string;
  keyDistinctionAr?: string;
  illustration?: React.ReactNode;
}

interface ConceptCardProps {
  item: ConceptItem;
}

export function ConceptCard({ item }: ConceptCardProps): React.ReactElement {
  return (
    <div className="@container w-full border border-[#171717] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
      {/* Card Header: Number + Titles in Single Balanced Horizontal Row */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-xs px-2.5 py-1 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold shrink-0">
              {item.number}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#171717] tracking-tight">
              {item.titleEn}
            </h3>
          </div>
          <span
            dir="rtl"
            className="text-base sm:text-lg font-bold text-[#525252] font-serif shrink-0"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {item.titleAr}
          </span>
        </div>

        {/* Prominent Educational Diagram / Illustration */}
        {item.illustration && (
          <div className="w-full my-3 border border-[#E5E5E5] rounded-xl bg-[#FAFAFA] p-3 sm:p-5 text-[#171717] overflow-x-auto shadow-2xs">
            <div className="w-full min-w-[540px] flex justify-center items-center">
              {item.illustration}
            </div>
          </div>
        )}

        {/* Academic Definition — Side-by-Side on Sufficient Width */}
        <div className="space-y-1.5 pt-1">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#737373] block">
            Academic Definition / التعريف الأكاديمي:
          </span>
          <div className="grid grid-cols-1 @lg:grid-cols-2 gap-3.5 items-start">
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#171717] font-medium">
              <HighlightedText text={item.academicDefinition} />
            </p>
            {item.academicDefinitionAr && (
              <p
                dir="rtl"
                className="text-[15px] sm:text-[16px] leading-[1.9] text-[#525252] font-serif @lg:border-s @lg:border-[#E5E5E5] @lg:ps-3.5 pt-2 @lg:pt-0 border-t @lg:border-t-0 border-[#F2F2F2]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={item.academicDefinitionAr} isArabic />
              </p>
            )}
          </div>
        </div>

        {/* Conceptual Explanation — Responsive Side-by-Side */}
        {(item.conceptualExplanation || item.conceptualExplanationAr) && (
          <div className="p-3.5 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg text-sm space-y-1.5">
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#737373] block">
              Core Concept / المفهوم الجوهري:
            </span>
            <div className="grid grid-cols-1 @lg:grid-cols-2 gap-3 items-start">
              {item.conceptualExplanation && (
                <p className="text-[#171717] leading-relaxed text-[14px] sm:text-[15px]">
                  {item.conceptualExplanation}
                </p>
              )}
              {item.conceptualExplanationAr && (
                <p
                  dir="rtl"
                  className="text-[#525252] leading-[1.8] text-[14px] sm:text-[15px] font-serif @lg:border-s @lg:border-[#E5E5E5] @lg:ps-3"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {item.conceptualExplanationAr}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer: Typical Applications & Key Distinction */}
      <div className="pt-3 border-t border-[#E5E5E5] space-y-3">
        {item.applications && item.applications.length > 0 && (
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase font-bold text-[#737373] block">
              Typical Applications / التطبيقات النموذجية:
            </span>
            <ul className="text-xs text-[#171717] space-y-1 list-disc list-inside">
              {item.applications.map((app, idx) => (
                <li key={idx} className="leading-snug">
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.keyDistinction && (
          <div className="p-3 border-l-2 border-[#171717] bg-[#F2F2F2] rounded-r text-xs space-y-1">
            <span className="font-bold text-[#171717] block">Key Distinction / الفارق المميز:</span>
            <div className="grid grid-cols-1 @lg:grid-cols-2 gap-2.5 items-start">
              <p className="text-[#171717] leading-relaxed">
                <HighlightedText text={item.keyDistinction} />
              </p>
              {item.keyDistinctionAr && (
                <p
                  dir="rtl"
                  className="text-[#525252] font-serif @lg:border-s @lg:border-[#E5E5E5] @lg:ps-2.5"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  <HighlightedText text={item.keyDistinctionAr} isArabic />
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ConceptCardGridProps {
  title?: string;
  titleAr?: string;
  subtitle?: string;
  items: ConceptItem[];
  columns?: 2 | 3 | 4;
}

export default function ConceptCardGrid({
  title,
  titleAr,
  subtitle,
  items,
  columns = 2,
}: ConceptCardGridProps): React.ReactElement {
  const colClass =
    columns === 4
      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 lg:grid-cols-2';

  return (
    <div className="space-y-4 my-6 w-full">
      {(title || titleAr) && (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5E5E5] pb-2.5 gap-2">
          <div>
            {title && <h3 className="text-xl font-bold text-[#171717] tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs text-[#737373] mt-0.5">{subtitle}</p>}
          </div>
          {titleAr && (
            <span
              dir="rtl"
              className="text-base font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      )}

      <div className={`grid gap-5 ${colClass}`}>
        {items.map((item) => (
          <ConceptCard key={item.number} item={item} />
        ))}
      </div>
    </div>
  );
}
