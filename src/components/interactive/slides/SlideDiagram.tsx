import React from 'react';
import { Eye, FileText, Sparkles } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';
import DiagramRenderer from '../../../data/interactive/diagramRegistry';

interface SlideDiagramProps {
  slide: InteractiveSlide;
  isArabic: boolean;
}

export const SlideDiagram: React.FC<SlideDiagramProps> = ({ slide, isArabic }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
            {isArabic ? slide.badgeAr || 'مخطط تفاعلي' : slide.badge || 'Interactive Diagram'}
          </span>
          <span className="text-xs text-[#505050] font-mono">
            Slide {slide.slideNumber} of {slide.totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
          <FileText size={13} />
          <span>{slide.sourceRef.file} • p./slide {slide.sourceRef.page || slide.sourceRef.slide}</span>
        </div>
      </div>

      {/* Slide Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-0.5">
          <h2 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight">
            {isArabic ? slide.titleAr : slide.title}
          </h2>
          <p className="body-content-text text-[#505050]">
            {isArabic ? slide.diagramCaptionAr || slide.diagramCaption : slide.diagramCaption}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F7F7F5] border border-[#E2E2DF] text-[11px] text-[#505050] font-mono shrink-0">
          <Sparkles size={12} className="text-[#222222]" />
          <span>{isArabic ? 'انقر على عناصر المخطط للاستكشاف التفاعلي' : 'Click diagram elements to interact'}</span>
        </div>
      </div>

      {/* Interactive Diagram Canvas */}
      <div className="flex-1 w-full bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-3 sm:p-5 overflow-auto shadow-xs">
        {slide.diagramId ? (
          <DiagramRenderer diagramId={slide.diagramId} diagramProps={slide.diagramProps} />
        ) : (
          <div className="flex items-center justify-center h-48 text-[#505050] text-sm font-mono">
            Diagram representation active in lecture notes.
          </div>
        )}
      </div>

      {/* Bottom Explanatory Caption */}
      <div className="body-content-text flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
        <div className="flex items-center gap-2">
          <Eye size={14} className="text-[#222222] shrink-0" />
          <span className="font-medium text-[#222222]">
            {isArabic ? slide.diagramCaptionAr : slide.diagramCaption}
          </span>
        </div>
        <span className="font-mono text-[11px]">
          {slide.sourceRef.file}
        </span>
      </div>
    </div>
  );
};

export default SlideDiagram;

