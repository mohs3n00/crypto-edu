import React from 'react';
import { BookOpen } from 'lucide-react';
import AIProviderActions from '../ai/AIProviderActions';
import { HighlightedText, MemoryCueBadge } from '../keywords';
import { academicKeywords } from '../../data/keywords/keywordDatabase';

interface DefinitionCardProps {
  term: string;
  termAr?: string;
  formalDefinition: string;
  formalDefinitionAr?: string;
  sourceStandard?: string; // e.g. "NIST SP 800-33" or "FIPS PUB 199" or "William Stallings"
  keyProperties?: string[];
  keyPropertiesAr?: string[];
  className?: string;
}

export default function DefinitionCard({
  term,
  termAr,
  formalDefinition,
  formalDefinitionAr,
  sourceStandard,
  keyProperties,
  keyPropertiesAr,
  className = '',
}: DefinitionCardProps): React.ReactElement {
  const hasBoth = Boolean(formalDefinition && formalDefinitionAr);

  // Identify matching academic keyword and memory cue
  const matchingKeyword = academicKeywords.find(
    (k) =>
      term.toLowerCase().includes(k.termEn.toLowerCase()) ||
      k.termEn.toLowerCase().includes(term.toLowerCase()) ||
      (termAr && k.termAr.includes(termAr))
  );

  return (
    <div
      className={`@container w-full border-2 border-[#171717] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 md:p-7 space-y-4 shadow-sm hover:border-[#000000] transition-all ${className}`}
    >
      {/* Horizontally Efficient Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3.5 gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <BookOpen size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#737373] block">
              Formal Academic Definition / التعريف الأكاديمي المعتمد
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-0.5">
              <h3 className="text-xl sm:text-[22px] font-bold text-[#171717] tracking-tight">
                {term}
              </h3>
              {termAr && (
                <span
                  dir="rtl"
                  className="text-lg sm:text-[20px] font-bold text-[#525252] font-serif"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {termAr}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
          {sourceStandard && (
            <span className="font-mono text-xs border border-[#171717] bg-[#FAFAFA] px-2.5 py-1 rounded text-[#171717] font-semibold shrink-0">
              {sourceStandard}
            </span>
          )}
          <div className="border-s border-[#E5E5E5] ps-2.5 ms-1">
            <AIProviderActions
              context={{
                sectionTitle: `Definition: ${term}${termAr ? ` / ${termAr}` : ''}`,
                content: `${formalDefinition}${formalDefinitionAr ? `\n\n${formalDefinitionAr}` : ''}${
                  keyProperties ? `\n\nKey Properties:\n- ${keyProperties.join('\n- ')}` : ''
                }`,
                promptType: 'concept',
              }}
              variant="compact"
            />
          </div>
        </div>
      </div>

      {/* Adaptive Bilingual Content: Side-by-Side on Wide screens, Stacked on Narrow */}
      {hasBoth ? (
        <div className="grid grid-cols-1 @2xl:grid-cols-2 gap-6 pt-1">
          {/* English Academic Definition Column */}
          <div className="space-y-1.5 flex flex-col justify-start">
            <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#737373] block">
              Academic Definition (English)
            </span>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#171717] font-sans font-medium">
              <HighlightedText text={formalDefinition} />
            </p>
          </div>

          {/* Arabic Academic Explanation Column */}
          <div className="space-y-1.5 flex flex-col justify-start @2xl:border-s @2xl:border-[#E5E5E5] @2xl:ps-6 pt-4 @2xl:pt-0 border-t @2xl:border-t-0 border-[#F2F2F2]">
            <span
              dir="rtl"
              className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#737373] block font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              التعريف والتأصيل الأكاديمي (بالعربية)
            </span>
            <p
              dir="rtl"
              className="text-[16px] sm:text-[17px] leading-[2] text-[#171717] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <HighlightedText text={formalDefinitionAr || ''} isArabic />
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-2 pt-1">
          {formalDefinition && (
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#171717] font-sans font-medium">
              <HighlightedText text={formalDefinition} />
            </p>
          )}
          {formalDefinitionAr && (
            <p
              dir="rtl"
              className="text-[16px] sm:text-[17px] leading-[2] text-[#171717] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <HighlightedText text={formalDefinitionAr} isArabic />
            </p>
          )}
        </div>
      )}

      {/* Memory Cue Banner (if available) */}
      {matchingKeyword?.memoryCue && (
        <div className="pt-1">
          <MemoryCueBadge cue={matchingKeyword.memoryCue} />
        </div>
      )}

      {/* Key Properties / Essential Characteristics */}
      {((keyProperties && keyProperties.length > 0) || (keyPropertiesAr && keyPropertiesAr.length > 0)) && (
        <div className="pt-3 border-t border-[#E5E5E5] bg-[#FAFAFA] -mx-5 sm:-mx-6 md:-mx-7 -mb-5 sm:-mb-6 md:-mb-7 p-4 sm:p-5 rounded-b-xl space-y-2">
          <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#525252] block">
            Essential Characteristics / الخصائص والمعايير الأساسية:
          </span>
          <div className="grid grid-cols-1 @2xl:grid-cols-2 gap-4 text-sm">
            {keyProperties && keyProperties.length > 0 && (
              <ul className="space-y-1 text-[#171717] list-disc list-inside">
                {keyProperties.map((prop, idx) => (
                  <li key={idx} className="leading-snug">
                    {prop}
                  </li>
                ))}
              </ul>
            )}
            {keyPropertiesAr && keyPropertiesAr.length > 0 && (
              <ul
                dir="rtl"
                className="space-y-1 text-[#171717] list-disc list-inside font-serif @2xl:border-s @2xl:border-[#E5E5E5] @2xl:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {keyPropertiesAr.map((prop, idx) => (
                  <li key={idx} className="leading-snug">
                    {prop}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
