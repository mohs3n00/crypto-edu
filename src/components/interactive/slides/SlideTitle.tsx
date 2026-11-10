import React from 'react';
import { BookOpen, Clock, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';

interface SlideTitleProps {
  slide: InteractiveSlide;
  isArabic: boolean;
  onNext: () => void;
}

export const SlideTitle: React.FC<SlideTitleProps> = ({ slide, isArabic, onNext }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
            {isArabic ? slide.badgeAr || slide.badge : slide.badge}
          </span>
          <span className="text-xs text-[#505050] font-mono">
            {slide.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
          <FileText size={14} className="text-[#505050]" />
          <span>{slide.sourceRef.file} • p./slide {slide.sourceRef.page || slide.sourceRef.slide}</span>
        </div>
      </div>

      {/* Main Lecture Title */}
      <div className="space-y-3 my-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#222222] tracking-tight leading-tight">
          {isArabic ? slide.titleAr : slide.title}
        </h1>
        <h2 className="text-lg sm:text-xl text-[#505050] font-medium">
          {isArabic ? slide.title : slide.titleAr}
        </h2>
      </div>

      {/* Learning Objectives Box */}
      {slide.bulletPoints && slide.bulletPoints.length > 0 && (
        <div className="bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#222222] uppercase tracking-wider font-mono">
            <BookOpen size={14} className="text-[#222222]" />
            <span>{isArabic ? 'الأهداف التعليمية للمحاضرة' : 'Lecture Learning Objectives'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {slide.bulletPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2E2DF] text-xs sm:text-sm text-[#222222]"
              >
                <CheckCircle2 size={16} className="text-[#222222] shrink-0 mt-0.5" />
                <span className="leading-snug">{isArabic ? item.ar : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E2E2DF]">
        <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
          <Clock size={14} />
          <span>{isArabic ? slide.arExplanation : slide.enDefinition}</span>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] transition-colors font-semibold text-sm shadow-xs cursor-pointer"
        >
          <span>{isArabic ? 'ابدأ العرض التقديمي' : 'Start Presentation'}</span>
          <ArrowRight size={16} className={isArabic ? 'rotate-180' : ''} />
        </button>
      </div>
    </div>
  );
};

export default SlideTitle;

