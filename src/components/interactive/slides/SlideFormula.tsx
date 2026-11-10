import React from 'react';
import { Sigma, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';
import MathDisplay from '../../ui/MathDisplay';

interface SlideFormulaProps {
  slide: InteractiveSlide;
  isArabic: boolean;
}

export const SlideFormula: React.FC<SlideFormulaProps> = ({ slide, isArabic }) => {
  const form = slide.formula;

  if (!form) {
    return (
      <div className="flex items-center justify-center h-full p-8 text-[#505050] font-mono">
        Formula data unavailable.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
            {isArabic ? slide.badgeAr || 'صيغة رياضية' : slide.badge || 'Mathematical Formula'}
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
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight">
          {isArabic ? slide.titleAr : slide.title}
        </h2>
        <p className="body-content-text text-[#505050]">
          {isArabic ? form.explanationAr : form.explanationEn}
        </p>
      </div>

      {/* Large Central Formula Canvas */}
      <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-xl p-6 sm:p-10 shadow-xs flex flex-col items-center justify-center space-y-4 my-auto">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
          <Sigma size={16} />
          <span>{isArabic ? 'المعادلة والتعريف الرياضي' : 'Mathematical Expression'}</span>
        </div>

        <div className="text-xl sm:text-3xl text-[#222222] overflow-x-auto max-w-full py-2">
          <MathDisplay math={form.latex} block />
        </div>

        <div className="text-xs text-[#737373] font-mono">
          {slide.sourceRef.file}
        </div>
      </div>

      {/* Parameter Table & Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Parameters */}
        {form.parameters && form.parameters.length > 0 && (
          <div className="bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-[#222222] uppercase tracking-wider block">
              {isArabic ? 'المتغيرات والرموز' : 'Parameters & Notation'}
            </span>
            <div className="space-y-1.5">
              {form.parameters.map((param, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#E8E8E5] last:border-0">
                  <span className="font-mono font-bold text-[#222222] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E2E2DF]">
                    {param.symbol}
                  </span>
                  <span className="text-[#505050]">
                    {isArabic ? param.meaningAr : param.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conditions */}
        {form.conditions && form.conditions.length > 0 && (
          <div className="bg-[#FFFDF0] border border-[#E2C65A] rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#856404] uppercase tracking-wider">
              <AlertCircle size={14} />
              <span>{isArabic ? 'شروط المبرهنة والاستثناءات' : 'Theorem Conditions'}</span>
            </div>
            <div className="space-y-1.5">
              {form.conditions.map((cond, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#222222]">
                  <CheckCircle2 size={13} className="text-[#856404] shrink-0 mt-0.5" />
                  <span>{isArabic ? cond.ar : cond.en}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideFormula;

