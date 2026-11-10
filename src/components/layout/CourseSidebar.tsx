import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Search, Key, Calculator } from 'lucide-react';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import { getSubjectById } from '../../data/subjects';

export const CourseSidebar: React.FC = () => {
  const { chapterId, lessonId } = useParams<{ chapterId?: string; lessonId?: string }>();
  const { isLessonCompleted } = useProgress();
  const { language, activeSubjectId, t } = useUI();

  const currentSubject = getSubjectById(activeSubjectId);
  const chapters = currentSubject.chapters;

  // Search filter inside sidebar
  const [filterText, setFilterText] = useState('');

  // Track expanded state for chapters
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    chapters.forEach((ch, idx) => {
      // Current active chapter or first chapter open by default
      initial[ch.id] = ch.id === chapterId || idx === 0;
    });
    return initial;
  });

  const toggleChapter = (cId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [cId]: !prev[cId],
    }));
  };

  const isRTL = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col select-none overflow-hidden bg-[#FFFFFF] border-r border-[#E2E2DF]">
      {/* Sidebar Subject & Search Header */}
      <div className="p-3 sm:p-4 border-b border-[#E2E2DF] bg-[#F7F7F5] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[#222222] tracking-tight">
            {t('courseOutline')}
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] font-semibold">
            {chapters.length} {t('chaptersCount')}
          </span>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className={`w-4 h-4 text-[#686868] absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            placeholder={isRTL ? 'بحث في الدروس والموضوعات...' : 'Search lessons & topics...'}
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className={`w-full py-2 text-[14px] bg-[#FFFFFF] border border-[#E2E2DF] rounded-md focus:outline-none focus:border-[#222222] placeholder-[#686868] text-[#222222] ${
              isRTL ? 'pr-9 pl-3' : 'pl-9 pr-3'
            }`}
          />
        </div>
      </div>

      {/* Chapters & Lessons Tree */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-2.5">
        {chapters.map((ch) => {
          const isExpanded = expandedChapters[ch.id] || filterText.trim().length > 0;
          const chapterLessons = ch.topics.flatMap((t) => t.lessons);
          const completedCount = chapterLessons.filter((l) => isLessonCompleted(l.id)).length;
          const totalCount = chapterLessons.length;
          const isCurrentChapter = ch.id === chapterId;

          // Filter by search text
          const matchesSearch = (text: string) => text.toLowerCase().includes(filterText.toLowerCase());
          const visibleTopics = ch.topics
            .map((top) => {
              const visibleLessons = top.lessons.filter(
                (l) =>
                  filterText.trim() === '' ||
                  matchesSearch(l.title) ||
                  matchesSearch(l.titleAr) ||
                  matchesSearch(top.title) ||
                  matchesSearch(top.titleAr)
              );
              return { ...top, lessons: visibleLessons };
            })
            .filter((top) => top.lessons.length > 0);

          if (filterText.trim() !== '' && visibleTopics.length === 0) {
            return null;
          }

          return (
            <div key={ch.id} className="border border-[#E2E2DF] rounded-lg overflow-hidden bg-[#FFFFFF]">
              {/* Chapter Header Button */}
              <button
                type="button"
                onClick={() => toggleChapter(ch.id)}
                className={`w-full text-left px-3.5 py-3 flex items-center justify-between text-[15px] sm:text-[16px] font-semibold tracking-wide transition-colors ${
                  isCurrentChapter ? 'bg-[#E8E8E5] text-[#222222]' : 'hover:bg-[#ECEDEB] text-[#222222]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate flex-1">
                  <span className="font-mono text-[12px] px-2 py-0.5 rounded border border-[#222222] bg-[#222222] text-[#FFFFFF] shrink-0 font-bold">
                    Unit {ch.number}
                  </span>
                  <span className="truncate">
                    {isRTL ? ch.titleAr : ch.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-[#686868] ml-2">
                  <span className="text-[11px] font-mono font-medium">
                    {completedCount}/{totalCount}
                  </span>
                  {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                </div>
              </button>

              {/* Topics & Lessons Accordion Content */}
              {isExpanded && (
                <div className="border-t border-[#E2E2DF] bg-[#F7F7F5] divide-y divide-[#E2E2DF]">
                  {visibleTopics.map((topic) => (
                    <div key={topic.id} className="py-1.5">
                      {/* Topic Title */}
                      <div className="px-3.5 py-1 text-[13px] sm:text-[14px] font-mono uppercase text-[#505050] font-bold">
                        {isRTL ? topic.titleAr : topic.title}
                      </div>

                      {/* Lesson Links */}
                      <div className="space-y-1 px-2 pt-0.5">
                        {topic.lessons.map((les) => {
                          const isDone = isLessonCompleted(les.id);
                          const isCurrent = les.id === lessonId;

                          return (
                            <NavLink
                              key={les.id}
                              to={`/learn/${ch.id}/${les.id}`}
                              data-nav-item
                              title={isRTL ? les.titleAr : les.title}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-[15px] transition-all min-h-[44px] group border ${
                                isCurrent
                                  ? 'bg-[#E8E8E5] text-[#222222] font-semibold border-[#D4D4D0] shadow-xs'
                                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
                              }`}
                            >
                              <div className="shrink-0">
                                {isDone ? (
                                  <CheckCircle2
                                    size={16}
                                    className={isCurrent ? 'text-[#222222]' : 'text-[#222222] group-hover:text-[#222222]'}
                                  />
                                ) : (
                                  <Circle
                                    size={16}
                                    className={isCurrent ? 'text-[#222222] stroke-[2]' : 'text-[#686868] group-hover:text-[#222222] stroke-[1.75]'}
                                  />
                                )}
                              </div>
                              <span className="flex-1 leading-snug break-words">
                                {isRTL ? les.titleAr : les.title}
                              </span>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dedicated Study Sections: Basmaga & Problem Solving */}
      <div className="p-2.5 border-t border-[#E2E2DF] bg-[#F7F7F5] space-y-1.5 shrink-0">
        <NavLink
          to="/basmaga"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              isActive
                ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0]'
                : 'bg-[#FFFFFF] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:border-[#D4D4D0]'
            }`
          }
        >
          <Key size={13} className="text-[#505050] shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="leading-tight truncate">Basmaga • بصمجة بالكلمات</div>
          </div>
        </NavLink>

        <NavLink
          to="/problem-solving"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              isActive
                ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0]'
                : 'bg-[#FFFFFF] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:border-[#D4D4D0]'
            }`
          }
        >
          <Calculator size={13} className="text-[#505050] shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="leading-tight truncate">Problem Solving • حل المسائل</div>
          </div>
        </NavLink>
      </div>

      {/* Bottom Quick Links to Practice & Review */}
      <div className="p-3 border-t border-[#E2E2DF] bg-[#FFFFFF] flex items-center justify-between text-[13px] font-semibold text-[#505050] shrink-0">
        <NavLink to="/practice" className="hover:text-[#222222] hover:underline">
          {t('practice')}
        </NavLink>
        <span className="text-[#E2E2DF]">·</span>
        <NavLink to="/review" className="hover:text-[#222222] hover:underline">
          {t('review')}
        </NavLink>
      </div>
    </div>
  );
};

export default CourseSidebar;
