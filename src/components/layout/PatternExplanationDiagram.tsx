import React from 'react';
import AIProviderActions from '../ai/AIProviderActions';
import { useUI } from '../../store/uiStore';

export interface PatternExplanationDiagramProps {
  title: string;
  titleAr?: string;
  explanation: React.ReactNode;
  diagram: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export default function PatternExplanationDiagram({
  title,
  titleAr,
  explanation,
  diagram,
  reversed = false,
  className = '',
}: PatternExplanationDiagramProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  return (
    <div
      className={`my-8 border-2 border-[#171717] rounded-xl p-6 sm:p-7 bg-[#FFFFFF] space-y-6 shadow-xs ${className}`}
    >
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div className="space-y-0.5">
          <h4 className="text-[18px] sm:text-[19px] font-bold text-[#171717] tracking-tight">
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
            sectionTitle: `${title}${titleAr ? ` / ${titleAr}` : ''}`,
            content: `Interactive Explanation and Vector Diagram: ${title}`,
            promptType: 'diagram',
          }}
          variant="compact"
        />
      </div>

      {/* 2-Column Responsive Grid: Explanation on one side, Diagram on the other */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Explanation Column */}
        <div className={`lg:col-span-5 space-y-4 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="text-sm sm:text-[15px] text-[#171717] leading-relaxed space-y-3">
            {explanation}
          </div>
        </div>

        {/* Diagram Column */}
        <div
          className={`lg:col-span-7 overflow-x-auto p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg flex items-center justify-center ${
            reversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="w-full flex justify-center">
            {diagram}
          </div>
        </div>
      </div>
    </div>
  );
}

