import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, AlertTriangle, FileText, ArrowRight, RotateCcw } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';

interface SlideKnowledgeCheckProps {
  slide: InteractiveSlide;
  isArabic: boolean;
  onNext: () => void;
}

export const SlideKnowledgeCheck: React.FC<SlideKnowledgeCheckProps> = ({ slide, isArabic, onNext }) => {
  const check = slide.knowledgeCheck;
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  if (!check) {
    return (
      <div className="flex items-center justify-center h-full p-8 text-[#505050] font-mono">
        No knowledge check available for this lesson.
      </div>
    );
  }

  const handleSelectOption = (idx: number) => {
    if (!hasSubmitted) {
      setSelectedOptionIndex(idx);
      setHasSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOptionIndex(null);
    setHasSubmitted(false);
  };

  const isSelectedCorrect =
    selectedOptionIndex !== null && check.options[selectedOptionIndex]?.isCorrect;

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
            {isArabic ? slide.badgeAr || 'اختبار معرفي' : slide.badge || 'Knowledge Check'}
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
        <div className="flex items-center gap-2">
          <HelpCircle size={18} className="text-[#222222]" />
          <h2 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight">
            {isArabic ? slide.titleAr : slide.title}
          </h2>
        </div>
        <p className="text-xs text-[#505050]">
          {isArabic ? 'اختر الإجابة الصحيحة للتحقق من استيعابك للمحاضرة' : 'Select the correct option to verify your understanding'}
        </p>
      </div>

      {/* Question Prompt Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#E2E2DF] rounded-xl p-5 shadow-2xs space-y-2">
        <div className="text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
          {isArabic ? 'نص السؤال' : 'Question Prompt'}
        </div>
        <p className="text-sm sm:text-base font-semibold text-[#222222] leading-relaxed">
          {isArabic ? check.questionAr : check.question}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-2.5">
        {check.options.map((opt, idx) => {
          const isSelected = selectedOptionIndex === idx;
          let buttonStyles =
            'border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#F7F7F5] hover:border-[#D4D4D0]';

          if (hasSubmitted) {
            if (opt.isCorrect) {
              buttonStyles = 'border-[#217346] bg-[#EBF7EE] text-[#1E392A] font-semibold';
            } else if (isSelected && !opt.isCorrect) {
              buttonStyles = 'border-[#C53929] bg-[#FDF2F2] text-[#5C1D18]';
            } else {
              buttonStyles = 'border-[#E2E2DF] bg-[#FFFFFF] text-[#888888] opacity-60';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={hasSubmitted}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${buttonStyles}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-snug">{isArabic ? opt.textAr : opt.text}</span>
              </div>

              {hasSubmitted && (
                <div className="shrink-0">
                  {opt.isCorrect && <CheckCircle2 size={18} className="text-[#217346]" />}
                  {isSelected && !opt.isCorrect && <XCircle size={18} className="text-[#C53929]" />}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation Card */}
      {hasSubmitted && (
        <div
          className={`p-4 rounded-xl border space-y-2 animate-fade-in ${
            isSelectedCorrect
              ? 'bg-[#EBF7EE] border-[#217346] text-[#1E392A]'
              : 'bg-[#FFFDF0] border-[#E2C65A] text-[#222222]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isSelectedCorrect ? (
                <>
                  <CheckCircle2 size={18} className="text-[#217346]" />
                  <span className="font-bold text-xs uppercase font-mono tracking-wider text-[#217346]">
                    {isArabic ? 'إجابة صحيحة! أحسنت' : 'Correct Answer! Well done'}
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle size={18} className="text-[#856404]" />
                  <span className="font-bold text-xs uppercase font-mono tracking-wider text-[#856404]">
                    {isArabic ? 'تنبيه: مراجعة التعليل الأكاديمي' : 'Review Academic Reasoning'}
                  </span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-[#505050] hover:text-[#222222] font-mono cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>{isArabic ? 'إعادة المحاولة' : 'Try Again'}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-[#222222]">
            {isArabic ? check.explanationAr : check.explanation}
          </p>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="flex items-center justify-end pt-3 border-t border-[#E2E2DF]">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] transition-colors font-semibold text-xs sm:text-sm cursor-pointer shadow-xs"
        >
          <span>{isArabic ? 'متابعة إلى ملخص المحاضرة' : 'Continue to Summary'}</span>
          <ArrowRight size={15} className={isArabic ? 'rotate-180' : ''} />
        </button>
      </div>
    </div>
  );
};

export default SlideKnowledgeCheck;

