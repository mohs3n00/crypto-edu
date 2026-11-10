import React from 'react';
import { X, CheckCircle2, LayoutGrid } from 'lucide-react';
import type { InteractiveSlide } from '../../types/interactive';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: InteractiveSlide[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  isArabic: boolean;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
  isArabic,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#E2E2DF] bg-[#F7F7F5]">
          <div className="flex items-center gap-2.5">
            <LayoutGrid size={18} className="text-[#222222]" />
            <span className="font-bold text-sm sm:text-base text-[#222222]">
              {isArabic ? 'نظرة عامة على شرائح المحاضرة' : 'Lecture Slide Overview'}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E8E8E5] text-[#505050]">
              {slides.length} {isArabic ? 'شريحة' : 'Slides'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#E2E2DF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] transition-colors cursor-pointer"
            aria-label="Close overview"
          >
            <X size={16} />
          </button>
        </div>

        {/* Thumbnail Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
          {slides.map((sl, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <button
                key={sl.id}
                type="button"
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`flex flex-col justify-between p-3 rounded-xl border text-left transition-all cursor-pointer h-32 group ${
                  isCurrent
                    ? 'border-[#222222] bg-[#F7F7F5] shadow-xs ring-2 ring-[#222222]/20'
                    : 'border-[#E2E2DF] bg-[#FFFFFF] hover:border-[#D4D4D0] hover:bg-[#FDFDFD]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#E8E8E5] text-[#222222] font-bold">
                    #{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#737373]">
                    {sl.type}
                  </span>
                </div>

                <div className="my-auto">
                  <h4 className="text-xs font-bold text-[#222222] line-clamp-2 leading-snug group-hover:underline">
                    {isArabic ? sl.titleAr : sl.title}
                  </h4>
                </div>

                <div className="text-[10px] text-[#737373] truncate font-mono">
                  {sl.sourceRef.file}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-[#E2E2DF] bg-[#F7F7F5] flex items-center justify-between text-xs text-[#505050]">
          <span>{isArabic ? 'انقر على أي شريحة للانتقال الفوري إليها' : 'Click any slide thumbnail to jump directly to it'}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] font-semibold text-xs cursor-pointer"
          >
            {isArabic ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideOverviewModal;

