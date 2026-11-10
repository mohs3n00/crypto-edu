import React from 'react';
import { Bookmark, FileText, CheckCircle2 } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';

interface SlideDefinitionProps {
  slide: InteractiveSlide;
  isArabic: boolean;
}

export const SlideDefinition: React.FC<SlideDefinitionProps> = ({ slide, isArabic }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#E8E8E5] text-[#222222] font-bold">
            {isArabic ? slide.badgeAr || 'تعريف' : slide.badge || 'Definition'}
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

      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight">
          {isArabic ? slide.titleAr : slide.title}
        </h2>
        <p className="text-sm text-[#505050]">
          {isArabic ? slide.title : slide.titleAr}
        </p>
      </div>

      {/* Prominent Formal Definition Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-xl p-6 sm:p-8 shadow-xs space-y-4 my-auto">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">
          <Bookmark size={15} />
          <span>{isArabic ? 'التعريف الأكاديمي المعتمد' : 'Authoritative Academic Definition'}</span>
        </div>

        <div className="body-content-text font-medium text-[#222222]">
          {isArabic ? slide.arExplanation : slide.enDefinition}
        </div>

        <div className="pt-4 border-t border-[#E2E2DF] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#505050]">
          <span className="font-mono">Reference: {slide.sourceRef.file}</span>
          <span className="body-content-text font-serif opacity-80" style={{ fontFamily: 'var(--font-arabic)' }}>
            {isArabic ? slide.enDefinition : slide.arExplanation}
          </span>
        </div>
      </div>

      {/* Bullets if any */}
      {slide.bulletPoints && slide.bulletPoints.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {slide.bulletPoints.map((item, idx) => (
            <div
              key={idx}
              className="body-content-text flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] text-[#222222]"
            >
              <CheckCircle2 size={14} className="text-[#222222] shrink-0" />
              <span>{isArabic ? item.ar : item.en}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideDefinition;

