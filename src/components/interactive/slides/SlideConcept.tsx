import React from 'react';
import { AlertCircle, CheckCircle2, FileText, Info } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';

interface SlideConceptProps {
  slide: InteractiveSlide;
  isArabic: boolean;
}

export const SlideConcept: React.FC<SlideConceptProps> = ({ slide, isArabic }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#E8E8E5] text-[#222222] font-bold">
            {isArabic ? slide.badgeAr || slide.badge : slide.badge}
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

      {/* Main Dual Language Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* English Column */}
        <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#222222]" />
              <span>English Academic Formulation</span>
            </div>
            <div className="body-content-text text-[#222222] whitespace-pre-line font-sans">
              {slide.enDefinition}
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#737373] pt-2 border-t border-[#F0F0EE]">
            Source: {slide.sourceRef.file}
          </div>
        </div>

        {/* Arabic Column */}
        <div
          className="bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl p-5 flex flex-col justify-between space-y-3"
          dir="rtl"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#505050]" />
              <span>الشرح والبيان الأكاديمي</span>
            </div>
            <div
              className="body-content-text text-[#222222] whitespace-pre-line"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {slide.arExplanation}
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#737373] pt-2 border-t border-[#E8E8E5]">
            مرجع المحاضرة المعتمد
          </div>
        </div>
      </div>

      {/* Bullet Points (if available) */}
      {slide.bulletPoints && slide.bulletPoints.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-4">
          {slide.bulletPoints.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222]">
              <CheckCircle2 size={15} className="text-[#222222] shrink-0 mt-0.5" />
              <span>{isArabic ? item.ar : item.en}</span>
            </div>
          ))}
        </div>
      )}

      {/* Important Distinction / Alert Box */}
      {slide.importantDistinction && (
        <div className="bg-[#FFFDF0] border border-[#E2C65A] rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-[#856404] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="font-bold text-[#856404] font-mono uppercase tracking-wider block">
              {isArabic ? 'تنبيه أكاديمي وامتحاني حاسم' : 'Critical Academic Distinction'}
            </span>
            <p className="text-[#222222] leading-snug">
              {isArabic ? slide.importantDistinction.ar : slide.importantDistinction.en}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideConcept;

