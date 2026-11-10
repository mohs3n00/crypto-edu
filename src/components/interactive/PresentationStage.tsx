import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  X,
} from 'lucide-react';
import type { InteractiveLessonDeck, InteractiveSlide } from '../../types/interactive';
import SlideTitle from './slides/SlideTitle';
import SlideConcept from './slides/SlideConcept';
import SlideDefinition from './slides/SlideDefinition';
import SlideDiagram from './slides/SlideDiagram';
import SlideCalculation from './slides/SlideCalculation';
import SlideFormula from './slides/SlideFormula';
import SlideKnowledgeCheck from './slides/SlideKnowledgeCheck';
import SlideSummary from './slides/SlideSummary';
import SlideOverviewModal from './SlideOverviewModal';
import { useUI } from '../../store/uiStore';
import FontSizeSlider from '../ui/FontSizeSlider';

interface PresentationStageProps {
  deck: InteractiveLessonDeck;
  initialSlideIndex?: number;
}

export const PresentationStage: React.FC<PresentationStageProps> = ({
  deck,
  initialSlideIndex = 0,
}) => {
  const navigate = useNavigate();
  const { language } = useUI();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlideIndex);
  const [presentationLang, setPresentationLang] = useState<'ar' | 'en'>(language === 'ar' ? 'ar' : 'en');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const slides = deck.slides;
  const currentSlide: InteractiveSlide = slides[currentSlideIndex] || slides[0];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;
  const isArabic = presentationLang === 'ar';

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = (idx: number) => {
    if (idx >= 0 && idx < slides.length) {
      setCurrentSlideIndex(idx);
    }
  };

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.warn('Error entering fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.warn('Error exiting fullscreen:', err);
      });
    }
  };

  // Listen to native fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Guard: Ignore if user is typing in form inputs
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case ' ': // Space bar
          e.preventDefault();
          goToNextSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isOverviewOpen) {
            setIsOverviewOpen(false);
          } else if (isFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else {
            navigate('/interactive');
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, isOverviewOpen, isFullscreen, navigate]);

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swiped Left ➔ Next Slide
        goToNextSlide();
      } else {
        // Swiped Right ➔ Previous Slide
        goToPrevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Slide Renderer
  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'title':
        return <SlideTitle slide={currentSlide} isArabic={isArabic} onNext={goToNextSlide} />;
      case 'definition':
        return <SlideDefinition slide={currentSlide} isArabic={isArabic} />;
      case 'diagram':
        return <SlideDiagram slide={currentSlide} isArabic={isArabic} />;
      case 'calculation':
      case 'example':
        return <SlideCalculation slide={currentSlide} isArabic={isArabic} />;
      case 'formula':
        return <SlideFormula slide={currentSlide} isArabic={isArabic} />;
      case 'knowledge-check':
        return <SlideKnowledgeCheck slide={currentSlide} isArabic={isArabic} onNext={goToNextSlide} />;
      case 'summary':
        return (
          <SlideSummary
            slide={currentSlide}
            isArabic={isArabic}
            onReplay={() => setCurrentSlideIndex(0)}
          />
        );
      case 'concept':
      default:
        return <SlideConcept slide={currentSlide} isArabic={isArabic} />;
    }
  };

  const progressPercent = Math.round(((currentSlideIndex + 1) / slides.length) * 100);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-[#F7F7F5] select-none text-[#222222] ${
        isFullscreen ? 'fixed inset-0 z-50 h-screen w-screen p-2 sm:p-4' : 'min-h-[calc(100vh-56px)] p-2 sm:p-6'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Presentation Bar */}
      <header className="flex items-center justify-between gap-3 bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl px-4 py-2.5 mb-3 shadow-2xs">
        {/* Left: Exit & Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/interactive')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] text-xs font-semibold cursor-pointer transition-colors"
            title="Exit Presentation"
          >
            <X size={15} />
            <span className="hidden sm:inline">{isArabic ? 'إنهاء العرض' : 'Exit'}</span>
          </button>

          <div className="h-4 w-px bg-[#E2E2DF] hidden sm:block" />

          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#222222] text-[#FFFFFF]">
                Unit {deck.chapterId.replace('ch', '')}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#222222] truncate max-w-[200px] sm:max-w-[400px]">
                {isArabic ? deck.titleAr : deck.title}
              </span>
            </div>
          </div>
        </div>

        {/* Right Controls: Font Size Slider, Slide Counter, Language, Overview, Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Explanation Text Size Control */}
          <FontSizeSlider showLabel={false} />

          {/* Slide Counter */}
          <div className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] text-[#222222]">
            {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center border border-[#E2E2DF] rounded-lg p-0.5 bg-[#FFFFFF]">
            <button
              type="button"
              onClick={() => setPresentationLang('ar')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                presentationLang === 'ar'
                  ? 'bg-[#E8E8E5] text-[#222222]'
                  : 'text-[#737373] hover:text-[#222222]'
              }`}
            >
              عربي
            </button>
            <button
              type="button"
              onClick={() => setPresentationLang('en')}
              className={`px-2 py-1 text-xs font-bold font-mono rounded transition-colors cursor-pointer ${
                presentationLang === 'en'
                  ? 'bg-[#E8E8E5] text-[#222222]'
                  : 'text-[#737373] hover:text-[#222222]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Slide Overview Drawer Button */}
          <button
            type="button"
            onClick={() => setIsOverviewOpen(true)}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5"
            title="Slide Overview"
          >
            <LayoutGrid size={15} />
            <span className="hidden md:inline">{isArabic ? 'الشرائح' : 'Slides'}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] cursor-pointer transition-colors"
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
        </div>
      </header>

      {/* Main Presentation Stage (Slide Canvas) */}
      <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl shadow-sm overflow-hidden min-h-[550px] relative">
        {/* Progress Bar Header */}
        <div className="w-full h-1 bg-[#F0F0EE]">
          <div
            className="h-full bg-[#222222] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Slide Content Viewport */}
        <div className="flex-1 overflow-y-auto">
          {renderSlideContent()}
        </div>
      </main>

      {/* Bottom Navigation Controller */}
      <footer className="w-full max-w-6xl mx-auto flex items-center justify-between gap-3 mt-3 px-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={isFirstSlide}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold text-xs sm:text-sm transition-all shadow-2xs"
        >
          <ChevronLeft size={18} className={isArabic ? 'rotate-180' : ''} />
          <span>{isArabic ? 'السابق' : 'Previous'}</span>
          <span className="hidden sm:inline font-mono text-[10px] text-[#737373] ml-1">[←]</span>
        </button>

        {/* Slide Dots / Center Navigator */}
        <div className="hidden md:flex items-center gap-1 max-w-[400px] overflow-x-auto py-1 px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-7 bg-[#222222]'
                  : 'w-2 bg-[#D4D4D0] hover:bg-[#888888]'
              }`}
              title={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={goToNextSlide}
          disabled={isLastSlide}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold text-xs sm:text-sm transition-all shadow-xs"
        >
          <span>{isArabic ? 'التالي' : 'Next'}</span>
          <span className="hidden sm:inline font-mono text-[10px] opacity-70 mr-1">[→]</span>
          <ChevronRight size={18} className={isArabic ? 'rotate-180' : ''} />
        </button>
      </footer>

      {/* Slide Overview Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
        isArabic={isArabic}
      />
    </div>
  );
};

export default PresentationStage;
