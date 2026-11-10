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
      className={`@container w-full border border-[#D4D4D0] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 md:p-7 space-y-4 hover:border-[#222222] transition-all ${className}`}
    >
      {/* Horizontally Efficient Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 rounded border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <BookOpen size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-xs sm:text-[13px] font-mono uppercase font-bold tracking-wider text-[#686868] block">
              Formal Academic Definition / التعريف الأكاديمي المعتمد
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-1">
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
                {term}
              </h3>
              {termAr && (
                <span
                  dir="rtl"
                  className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
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
            <span className="font-mono text-xs border border-[#222222] bg-[#F7F7F5] px-2.5 py-1 rounded text-[#222222] font-semibold shrink-0">
              {sourceStandard}
            </span>
          )}
          <div className="border-s border-[#E2E2DF] ps-2.5 ms-1">
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

      {/* Single-Column Full-Width Content: English on top, Arabic directly below */}
      <div className="space-y-4 pt-1 w-full">
        {formalDefinition && (
          <div className="space-y-1.5 w-full">
            <span className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#686868] block">
              Academic Definition (English)
            </span>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-[#222222] font-sans font-medium">
              <HighlightedText text={formalDefinition} />
            </p>
          </div>
        )}

        {formalDefinitionAr && (
          <div className="space-y-1.5 w-full pt-3 border-t border-[#E2E2DF]">
            <span
              dir="rtl"
              className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#686868] block font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              التعريف والتأصيل الأكاديمي (بالعربية)
            </span>
            <p
              dir="rtl"
              className="text-[18px] sm:text-[19px] leading-[1.8] text-[#222222] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <HighlightedText text={formalDefinitionAr} isArabic />
            </p>
          </div>
        )}
      </div>

      {/* Memory Cue Banner (if available) */}
      {matchingKeyword?.memoryCue && (
        <div className="pt-1">
          <MemoryCueBadge cue={matchingKeyword.memoryCue} />
        </div>
      )}

      {/* Key Properties / Essential Characteristics */}
      {((keyProperties && keyProperties.length > 0) || (keyPropertiesAr && keyPropertiesAr.length > 0)) && (
        <div className="pt-3 border-t border-[#E2E2DF] bg-[#F7F7F5] -mx-5 sm:-mx-6 md:-mx-7 -mb-5 sm:-mb-6 md:-mb-7 p-4 sm:p-5 rounded-b-xl space-y-2">
          <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#505050] block">
            Essential Characteristics / الخصائص والمعايير الأساسية:
          </span>
          <div className="flex flex-col space-y-3 text-[15px] sm:text-[16px]">
            {keyProperties && keyProperties.length > 0 && (
              <ul className="space-y-1.5 text-[#222222] list-disc list-inside leading-relaxed font-sans">
                {keyProperties.map((prop, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {prop}
                  </li>
                ))}
              </ul>
            )}
            {keyPropertiesAr && keyPropertiesAr.length > 0 && (
              <ul
                dir="rtl"
                className="space-y-1.5 text-[#222222] list-disc list-inside font-serif leading-[1.8] pt-2 border-t border-[#E2E2DF]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {keyPropertiesAr.map((prop, idx) => (
                  <li key={idx} className="leading-relaxed">
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
