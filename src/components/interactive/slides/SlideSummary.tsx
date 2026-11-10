import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle2, RotateCcw, ArrowRight, LayoutGrid, Sparkles } from 'lucide-react';
import type { InteractiveSlide } from '../../../types/interactive';
import { useProgress } from '../../../store/progressStore';

interface SlideSummaryProps {
  slide: InteractiveSlide;
  isArabic: boolean;
  onReplay: () => void;
}

export const SlideSummary: React.FC<SlideSummaryProps> = ({ slide, isArabic, onReplay }) => {
  const navigate = useNavigate();
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const summary = slide.summary;

  const isCompleted = isLessonCompleted(slide.lessonId);
  const [justMarked, setJustMarked] = useState<boolean>(false);

  const handleMarkComplete = () => {
    markLessonComplete(slide.lessonId);
    setJustMarked(true);
  };

  const handleGoNext = () => {
    if (summary?.nextLessonId) {
      navigate(`/interactive/${slide.chapterId}/${summary.nextLessonId}`);
    } else {
      navigate('/interactive');
    }
  };

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-8 space-y-6">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#217346] text-[#FFFFFF] font-bold">
            {isArabic ? 'اكتملت المحاضرة' : 'Lecture Complete'}
          </span>
          <span className="text-xs text-[#505050] font-mono">
            Slide {slide.slideNumber} of {slide.totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
          <span>{slide.sourceRef.file}</span>
        </div>
      </div>

      {/* Main Congratulation & Takeaways Card */}
      <div className="space-y-4 my-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] border border-[#68B684] flex items-center justify-center text-[#217346]">
            <Award size={26} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {isArabic ? slide.titleAr : slide.title}
            </h2>
            <p className="body-content-text text-[#505050]">
              {isArabic ? slide.arExplanation : slide.enDefinition}
            </p>
          </div>
        </div>

        {/* Takeaways List */}
        {summary?.takeaways && summary.takeaways.length > 0 && (
          <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-5 space-y-3 shadow-2xs">
            <span className="text-xs font-mono font-bold text-[#505050] uppercase tracking-wider block">
              {isArabic ? 'أهم المخرجات التعليمية المكتسبة' : 'Key Lecture Takeaways'}
            </span>

            <div className="space-y-2.5">
              {summary.takeaways.map((item, idx) => (
                <div key={idx} className="body-content-text flex items-start gap-2.5 text-[#222222]">
                  <CheckCircle2 size={16} className="text-[#217346] shrink-0 mt-0.5" />
                  <span className="leading-snug">{isArabic ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completion Action Button */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#F7F7F5] border border-[#E2E2DF]">
          <div className="flex items-center gap-2.5">
            <Sparkles size={18} className="text-[#222222]" />
            <span className="text-xs sm:text-sm font-medium text-[#222222]">
              {isCompleted || justMarked
                ? isArabic
                  ? 'تم تسجيل هذه المحاضرة كمكتملة في سجل تقدمك الدراسي'
                  : 'This lecture is marked as completed in your study records'
                : isArabic
                ? 'سجّل هذه المحاضرة في تقدمك الدراسي'
                : 'Save this lecture completion to your study tracker'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleMarkComplete}
            disabled={isCompleted || justMarked}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isCompleted || justMarked
                ? 'bg-[#EBF7EE] text-[#217346] border border-[#68B684] cursor-default'
                : 'bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] shadow-xs'
            }`}
          >
            {isCompleted || justMarked
              ? isArabic
                ? 'مكتملة ✓'
                : 'Completed ✓'
              : isArabic
              ? 'تأكيد الإتمام'
              : 'Mark Complete'}
          </button>
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#E2E2DF]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] text-xs font-semibold cursor-pointer transition-colors"
          >
            <RotateCcw size={14} />
            <span>{isArabic ? 'إعادة تشغيل العرض' : 'Replay Lecture'}</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/interactive')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] text-xs font-semibold cursor-pointer transition-colors"
          >
            <LayoutGrid size={14} />
            <span>{isArabic ? 'كتالوج المحاضرات' : 'Lecture Catalog'}</span>
          </button>
        </div>

        {summary?.nextLessonId && (
          <button
            type="button"
            onClick={handleGoNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <div className="text-left">
              <span className="text-[10px] block opacity-70 font-mono">
                {isArabic ? 'المحاضرة التالية' : 'Next Lecture'}:
              </span>
              <span className="truncate max-w-[200px] block">
                {isArabic ? summary.nextLessonTitleAr : summary.nextLessonTitle}
              </span>
            </div>
            <ArrowRight size={16} className={isArabic ? 'rotate-180' : ''} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SlideSummary;

