import React, { useState, useEffect } from 'react';
import { Search, ArrowUp, X } from 'lucide-react';
import { getAllChapters } from '../../data/chapters';
import FontSizeSlider from '../ui/FontSizeSlider';

interface StudyJumpBarProps {
  activeChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isArabic: boolean;
}

const shortTitles: Record<string, { en: string; ar: string }> = {
  ch1: { en: 'Concepts & Attacks', ar: 'المفاهيم والهجمات' },
  ch2: { en: 'Number Theory', ar: 'نظرية الأعداد' },
  ch3: { en: 'Classical Ciphers', ar: 'التشفير التقليدي' },
  ch4: { en: 'Block & DES', ar: 'تشفير الكتل و DES' },
  ch7: { en: '3DES & Modes', ar: '3DES وأنماط التشغيل' },
};

export const StudyJumpBar: React.FC<StudyJumpBarProps> = ({
  activeChapterId,
  onSelectChapter,
  searchQuery,
  onSearchChange,
  isArabic,
}) => {
  const chapters = getAllChapters();
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const mainEl = document.getElementById('main-content');
    const handleScroll = () => {
      const scrollY = mainEl ? mainEl.scrollTop : window.scrollY;
      setShowScrollTop(scrollY > 300);
    };
    const target = mainEl || window;
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E2DF] px-3 sm:px-6 py-2 shadow-2xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Chapter Jump Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5 no-scrollbar">
          <span className="text-xs font-mono font-bold text-[#505050] uppercase tracking-wider shrink-0 hidden md:inline">
            {isArabic ? 'انتقال سريع:' : 'Jump to:'}
          </span>

          {chapters.map((ch) => {
            const isCurrent = ch.id === activeChapterId;
            const titleLabel = isArabic
              ? shortTitles[ch.id]?.ar || ch.titleAr
              : shortTitles[ch.id]?.en || ch.title;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => onSelectChapter(ch.id)}
                title={isArabic ? ch.titleAr : ch.title}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] shadow-2xs'
                    : 'bg-[#F7F7F5] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:border-[#D4D4D0]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isCurrent ? 'bg-[#282828] text-[#FFFFFF]' : 'bg-[#E8E8E5] text-[#222222]'
                  }`}
                >
                  {isArabic ? `الوحدة ${ch.number}` : `Unit ${ch.number}`}
                </span>
                <span className={`truncate max-w-[105px] sm:max-w-[145px] md:max-w-none ${
                  isCurrent ? 'text-[#FFFFFF] font-bold' : 'text-[#222222]'
                }`}>
                  {titleLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Font Size Slider + Search Input + Scroll to Top */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
          {/* Explanation / Body Content Font Size Slider */}
          <FontSizeSlider />

          <div className="relative w-full sm:w-48 lg:w-56">
            <Search
              className={`w-3.5 h-3.5 text-[#737373] absolute top-1/2 -translate-y-1/2 ${
                isArabic ? 'right-2.5' : 'left-2.5'
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={isArabic ? 'بحث في المذكرة...' : 'Search curriculum...'}
              className={`w-full py-1.5 text-xs bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg focus:outline-none focus:border-[#222222] placeholder-[#737373] text-[#222222] transition-colors ${
                isArabic ? 'pr-8 pl-7' : 'pl-8 pr-7'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className={`absolute top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#222222] cursor-pointer p-0.5 ${
                  isArabic ? 'left-2' : 'right-2'
                }`}
                title={isArabic ? 'مسح البحث' : 'Clear search'}
              >
                <X size={13} />
              </button>
            )}
          </div>

          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] cursor-pointer transition-colors shrink-0"
              title={isArabic ? 'العودة للأعلى' : 'Scroll to top'}
            >
              <ArrowUp size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyJumpBar;

