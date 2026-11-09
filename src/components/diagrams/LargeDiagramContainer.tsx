import React from 'react';
import { Shield } from 'lucide-react';
import AIProviderActions from '../ai/AIProviderActions';
import { useUI } from '../../store/uiStore';

export interface LargeDiagramContainerProps {
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  sourceStandard?: string;
  widthMode?: 'standard' | 'wide' | 'full';
  children: React.ReactNode;
  className?: string;
}

export default function LargeDiagramContainer({
  title,
  titleAr,
  description,
  descriptionAr,
  sourceStandard,
  widthMode = 'wide',
  children,
  className = '',
}: LargeDiagramContainerProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';
  const hasBothDescriptions = Boolean(description && descriptionAr);

  // Determine width constraint based on mode
  const widthClass =
    widthMode === 'full'
      ? 'w-full'
      : widthMode === 'wide'
      ? 'w-full'
      : 'w-full max-w-4xl mx-auto';

  return (
    <div
      className={`my-8 border-2 border-[#171717] rounded-xl p-5 sm:p-7 bg-[#FFFFFF] space-y-5 shadow-xs hover:border-[#000000] transition-all ${widthClass} ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3.5 gap-3">
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2.5 py-0.5 rounded font-bold inline-flex items-center gap-1.5 shrink-0">
              <Shield size={11} />
              <span>{isArabic ? 'مخطط معماري تقني' : 'Technical Architecture Diagram'}</span>
            </span>
            {sourceStandard && (
              <span className="font-mono text-[10px] text-[#525252] border border-[#E5E5E5] bg-[#FAFAFA] px-2 py-0.5 rounded shrink-0">
                {sourceStandard}
              </span>
            )}
            <h4 className="text-[17px] sm:text-[18px] font-bold text-[#171717] tracking-tight">
              {title}
            </h4>
          </div>

          {titleAr && (
            <h5
              dir="rtl"
              className="text-sm sm:text-[15px] font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </h5>
          )}
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
          <AIProviderActions
            context={{
              sectionTitle: `Technical Diagram: ${title}${titleAr ? ` / ${titleAr}` : ''}`,
              content: `${title} - ${description}${sourceStandard ? ` (Standard: ${sourceStandard})` : ''}`,
              promptType: 'diagram',
            }}
            variant="compact"
          />
        </div>
      </div>

      {/* Description: Side-by-Side Bilingual Layout */}
      {(description || descriptionAr) && (
        <div className="w-full">
          {hasBothDescriptions ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-[#525252] leading-relaxed">
              <p className="leading-relaxed">{description}</p>
              <p
                dir="rtl"
                className="font-serif text-[#525252] leading-relaxed md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {descriptionAr}
              </p>
            </div>
          ) : (
            <div className="text-xs sm:text-[13px] text-[#525252] leading-relaxed max-w-4xl space-y-1">
              {description && <p>{description}</p>}
              {descriptionAr && (
                <p dir="rtl" className="font-serif text-[#525252]" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {descriptionAr}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Diagram Canvas with full-width rendering and controlled mobile overflow */}
      <div className="w-full overflow-x-auto py-3 flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
