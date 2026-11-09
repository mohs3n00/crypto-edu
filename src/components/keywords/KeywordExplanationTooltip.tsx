import React, { useState } from 'react';
import type { SemanticRole } from '../../data/keywords/semanticTypes';

export interface KeywordExplanationTooltipProps {
  role: SemanticRole;
  explanation: string;
  explanationAr?: string;
  relatedConcept?: string;
  relatedConceptAr?: string;
  isArabic?: boolean;
  children: React.ReactNode;
}

export default function KeywordExplanationTooltip({
  role,
  explanation,
  explanationAr,
  relatedConcept,
  relatedConceptAr,
  isArabic = false,
  children,
}: KeywordExplanationTooltipProps): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);

  const roleLabels: Record<SemanticRole, { en: string; ar: string }> = {
    concept: { en: 'Core Concept', ar: 'مفهوم جوهري معتمد' },
    action: { en: 'Defining Action', ar: 'إجراء تشغيلي محدد' },
    target: { en: 'Affected Target / Object', ar: 'المورد أو الكيان المستهدف' },
    condition: { en: 'Mandatory Condition', ar: 'شرط جبري لازم' },
    distinction: { en: 'Exam Distinction', ar: 'تمييز امتحاني دقيق' },
    exception: { en: 'Limitation / Exception', ar: 'استثناء أو قيد مانع' },
  };

  const currentRole = roleLabels[role] || roleLabels.concept;

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <span
          role="tooltip"
          dir={isArabic ? 'rtl' : 'ltr'}
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-2.5 rounded-lg border border-[#171717] bg-[#171717] text-[#FFFFFF] shadow-lg text-left pointer-events-none transition-opacity"
        >
          <span className="flex items-center justify-between text-[10px] font-mono uppercase text-[#A3A3A3] pb-1 border-b border-[#333333] mb-1">
            <span>{isArabic ? currentRole.ar : currentRole.en}</span>
            {relatedConcept && (
              <span className="text-[#FFF1A6] font-bold">
                {isArabic ? relatedConceptAr || relatedConcept : relatedConcept}
              </span>
            )}
          </span>
          <span className="text-xs text-[#FAFAFA] leading-snug block font-sans">
            {isArabic ? explanationAr || explanation : explanation}
          </span>
        </span>
      )}
    </span>
  );
}

