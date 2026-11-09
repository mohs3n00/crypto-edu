import React from 'react';
import { BookOpen } from 'lucide-react';
import { useUI } from '../../store/uiStore';
import VariableDefinitions, { type VariableItem } from './VariableDefinitions';

export interface FormulaExplanationProps {
  description: string;
  descriptionAr?: string;
  variables?: VariableItem[];
  proofSketch?: string;
  proofSketchAr?: string;
  className?: string;
}

export default function FormulaExplanation({
  description,
  descriptionAr,
  variables,
  proofSketch,
  proofSketchAr,
  className = '',
}: FormulaExplanationProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Bilingual Explanations: Responsive Side-by-Side on Sufficient Width */}
      {description && descriptionAr ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-1">
          {/* English Description */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#737373] block">
              Academic Rationale & Mechanism (English)
            </span>
            <p className="text-[16px] sm:text-[17px] text-[#171717] font-sans leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arabic Description */}
          <div className="space-y-1.5 md:border-s md:border-[#E5E5E5] md:ps-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#F2F2F2]">
            <span
              dir="rtl"
              className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#737373] block font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              التأصيل والشرح التحليلي (باللغة العربية)
            </span>
            <p
              dir="rtl"
              className="text-[16px] sm:text-[17px] text-[#171717] font-serif leading-[2.1]"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {descriptionAr}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {description && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#737373] block">
                Academic Rationale & Mechanism (English)
              </span>
              <p className="text-[16px] sm:text-[17px] text-[#171717] font-sans leading-relaxed">
                {description}
              </p>
            </div>
          )}
          {descriptionAr && (
            <div className="space-y-1.5">
              <span
                dir="rtl"
                className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#737373] block font-serif"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                التأصيل والشرح التحليلي (باللغة العربية)
              </span>
              <p
                dir="rtl"
                className="text-[16px] sm:text-[17px] text-[#171717] font-serif leading-[2.1]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {descriptionAr}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Proof Sketch if present */}
      {(proofSketch || proofSketchAr) && (
        <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-2 text-sm sm:text-[16px]">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717] block">
            Mathematical Proof & Derivation Sketch / البرهان الرياضي:
          </span>
          {proofSketch && proofSketchAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[#171717] leading-relaxed font-sans">{proofSketch}</p>
              <p
                dir="rtl"
                className="text-[#525252] font-serif leading-relaxed md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {proofSketchAr}
              </p>
            </div>
          ) : (
            <div>
              {proofSketch && <p className="text-[#171717] leading-relaxed font-sans">{proofSketch}</p>}
              {proofSketchAr && (
                <p dir="rtl" className="text-[#525252] font-serif leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {proofSketchAr}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Variables */}
      {variables && variables.length > 0 && (
        <VariableDefinitions variables={variables} />
      )}
    </div>
  );
}

