import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Layers,
  GraduationCap,
  HelpCircle,
  Calculator,
  Key,
  Presentation,
} from 'lucide-react';
import { useUI } from '../store/uiStore';
import { getAllChapters } from '../data/chapters';
import { allQuestions } from '../data/questions';
import StudyJumpBar from '../components/study/StudyJumpBar';
import StudyChapterSection from '../components/study/StudyChapterSection';
import FontSizeSlider from '../components/ui/FontSizeSlider';

export default function StudyGuide(): React.ReactElement {
  const { language } = useUI();
  const location = useLocation();
  const isArabic = language === 'ar';

  const chapters = getAllChapters();
  const [activeChapterId, setActiveChapterId] = useState<string>('ch1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle URL hash navigation (e.g. #ch1-l5 or #ch2)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Track active chapter on scroll
  useEffect(() => {
    const mainEl = document.getElementById('main-content');
    const handleScroll = () => {
      const scrollPos = (mainEl ? mainEl.scrollTop : window.scrollY) + 150;
      const chapterEls = chapters.map((c) => document.getElementById(c.id));

      for (let i = chapterEls.length - 1; i >= 0; i--) {
        const el = chapterEls[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapterId(chapters[i].id);
          break;
        }
      }
    };

    const target = mainEl || window;
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, [chapters]);

  const handleSelectChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Group questions by chapter
  const questionsByChapter = useMemo(() => {
    const map: Record<string, typeof allQuestions> = {};
    for (const q of allQuestions) {
      if (!map[q.chapterId]) {
        map[q.chapterId] = [];
      }
      map[q.chapterId].push(q);
    }
    return map;
  }, []);

  // Filtered chapters if search query active
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;
    const q = searchQuery.toLowerCase();

    return chapters.map((ch) => {
      const matchingTopics = ch.topics.filter((t) => {
        const titleMatch = t.title.toLowerCase().includes(q) || t.titleAr.toLowerCase().includes(q);
        const lessonMatch = t.lessons.some(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.titleAr.toLowerCase().includes(q) ||
            (l.content?.enDefinition && l.content.enDefinition.toLowerCase().includes(q)) ||
            (l.content?.arExplanation && l.content.arExplanation.toLowerCase().includes(q))
        );
        return titleMatch || lessonMatch;
      });

      return {
        ...ch,
        topics: matchingTopics,
      };
    }).filter((ch) => ch.topics.length > 0);
  }, [chapters, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#222222]">
      {/* Sticky In-Page Chapter Jump Bar */}
      <StudyJumpBar
        activeChapterId={activeChapterId}
        onSelectChapter={handleSelectChapter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isArabic={isArabic}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Document Hero Header */}
        <header className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl p-6 sm:p-10 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] text-[#FFFFFF] font-mono text-xs font-bold">
              <BookOpen size={14} />
              <span>{isArabic ? 'المذكرة الدراسية الموحدة' : 'Unified Study Guide'}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#505050] hidden sm:inline">
                5 University Units • 1 Continuous Study Document
              </span>
              <FontSizeSlider />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              {isArabic ? 'الدراسة — المنهج الجامعي الشامل' : 'Study — Complete University Curriculum'}
            </h1>
            <p className="text-sm sm:text-base text-[#505050] max-w-3xl leading-relaxed">
              {isArabic
                ? 'مذكرة دراسية أكاديمية متكاملة تغطي كامل موضوعات مساق أمن المعلومات وتشفير البيانات (IS401). ادرس كافة الفصول والمسائل والمخططات التقنية في وثيقة تعليمية واحدة ومستمرة دون تشتيت.'
                : 'A unified academic study guide covering the complete Cryptography and Network Security (IS401) curriculum. Study all five units, mathematical formulas, technical diagrams, and contextual practice questions in a single continuous document.'}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 border-t border-[#F0F0EE] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-[#505050]">
            <div>
              <span className="font-bold text-[#222222] text-sm block">5 Units</span>
              <span>Chapters 1, 2, 3, 4, 7</span>
            </div>
            <div>
              <span className="font-bold text-[#222222] text-sm block">185 Questions</span>
              <span>Contextual practice</span>
            </div>
            <div>
              <span className="font-bold text-[#222222] text-sm block">27 Diagrams</span>
              <span>Interactive visualizers</span>
            </div>
            <div>
              <span className="font-bold text-[#222222] text-sm block">Step-by-Step</span>
              <span>Worked mathematical problems</span>
            </div>
          </div>
        </header>

        {/* Chapters Continuous Feed */}
        <main className="space-y-12">
          {filteredChapters.map((ch) => (
            <StudyChapterSection
              key={ch.id}
              chapter={ch}
              chapterQuestions={questionsByChapter[ch.id] || []}
              isArabic={isArabic}
            />
          ))}

          {filteredChapters.length === 0 && (
            <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl p-12 text-center space-y-3">
              <p className="text-base font-bold text-[#222222]">
                {isArabic ? 'لم يتم العثور على موضوعات تطابق بحثك' : 'No curriculum topics match your search'}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-lg bg-[#222222] text-[#FFFFFF] text-xs font-semibold cursor-pointer"
              >
                {isArabic ? 'مسح البحث وعرض المنهج كاملاً' : 'Clear search and show full curriculum'}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

