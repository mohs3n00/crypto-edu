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
    <div className="w-full border border-[#D4D4D0] bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#222222] transition-colors shadow-xs">
      {/* Card Header: Number + Titles in Single Balanced Horizontal Row */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-sm px-3 py-1 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded-lg font-bold shrink-0">
              {item.number}
            </span>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
              {item.titleEn}
            </h3>
          </div>
          <span
            dir="rtl"
            className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif shrink-0"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {item.titleAr}
          </span>
        </div>

        {/* Prominent Educational Diagram / Illustration */}
        {item.illustration && (
          <div className="w-full my-3 border border-[#E2E2DF] rounded-xl bg-[#F7F7F5] p-4 sm:p-6 text-[#222222] overflow-x-auto shadow-2xs">
            <div className="w-full min-w-[540px] flex justify-center items-center">
              {item.illustration}
            </div>
          </div>
        )}

        {/* Academic Definition — Single-Column Full-Width */}
        <div className="space-y-2 pt-1 w-full">
          <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#686868] block">
            Academic Definition / التعريف الأكاديمي:
          </span>
          <div className="space-y-2.5 w-full">
            <p className="body-content-text text-[#222222] font-medium font-sans">
              <HighlightedText text={item.academicDefinition} />
            </p>
            {item.academicDefinitionAr && (
              <p
                dir="rtl"
                className="body-content-text text-[#505050] font-serif pt-2 border-t border-[#F2F2F0]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={item.academicDefinitionAr} isArabic />
              </p>
            )}
          </div>
        </div>

        {/* Conceptual Explanation — Single-Column Full-Width */}
        {(item.conceptualExplanation || item.conceptualExplanationAr) && (
          <div className="p-4 sm:p-5 border border-[#E2E2DF] bg-[#F7F7F5] rounded-xl space-y-2.5 w-full">
            <span className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#686868] block">
              Core Concept / المفهوم الجوهري:
            </span>
            <div className="space-y-2 w-full">
              {item.conceptualExplanation && (
                <p className="body-content-text text-[#222222] font-sans">
                  <HighlightedText text={item.conceptualExplanation} />
                </p>
              )}
              {item.conceptualExplanationAr && (
                <p
                  dir="rtl"
                  className="body-content-text text-[#505050] font-serif pt-2 border-t border-[#E8E8E5]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  <HighlightedText text={item.conceptualExplanationAr} isArabic />
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer: Typical Applications & Key Distinction */}
      <div className="pt-4 border-t border-[#E2E2DF] space-y-4">
        {item.applications && item.applications.length > 0 && (
          <div className="space-y-1.5">
            <span className="text-xs sm:text-[13px] font-mono uppercase font-bold text-[#686868] block">
              Typical Applications / التطبيقات النموذجية:
            </span>
            <ul className="body-content-text text-[#222222] space-y-1.5 list-disc list-inside">
              {item.applications.map((app, idx) => (
                <li key={idx} className="leading-relaxed">
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.keyDistinction && (
          <div className="p-4 border-l-4 border-[#222222] bg-[#F7F7F5] rounded-r-xl space-y-2">
            <span className="font-bold text-[#222222] text-xs sm:text-[13px] font-mono uppercase block">
              Key Distinction / الفارق المميز:
            </span>
            <div className="space-y-1.5 w-full">
              <p className="body-content-text text-[#222222] font-medium">
                <HighlightedText text={item.keyDistinction} />
              </p>
              {item.keyDistinctionAr && (
                <p
                  dir="rtl"
                  className="body-content-text text-[#505050] font-serif pt-1.5 border-t border-[#E8E8E5]"
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
  columns?: 1 | 2 | 3 | 4;
}

export default function ConceptCardGrid({
  title,
  titleAr,
  subtitle,
  items,
}: ConceptCardGridProps): React.ReactElement {
  return (
    <div className="space-y-6 my-8 w-full">
      {(title || titleAr) && (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E2E2DF] pb-3 gap-2">
          <div>
            {title && <h3 className="text-[23px] sm:text-[25px] font-bold text-[#222222] tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs sm:text-[13px] text-[#686868] mt-0.5">{subtitle}</p>}
          </div>
          {titleAr && (
            <span
              dir="rtl"
              className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      )}

      {/* Single-Column Full-Width Card Stack */}
      <div className="flex flex-col space-y-6 w-full">
        {items.map((item, idx) => (
          <ConceptCard key={item.number || idx} item={item} />
        ))}
      </div>
    </div>
  );
}
