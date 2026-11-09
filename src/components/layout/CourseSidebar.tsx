import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Search } from 'lucide-react';
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
    <div className="w-full h-full flex flex-col select-none overflow-hidden bg-[#FFFFFF] border-r border-[#E5E5E5]">
      {/* Sidebar Subject & Search Header */}
      <div className="p-3 sm:p-4 border-b border-[#E5E5E5] bg-[#FAFAFA] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[#171717] tracking-tight">
            {t('courseOutline')}
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[#E5E5E5] bg-[#FFFFFF] text-[#525252] font-semibold">
            {chapters.length} {t('chaptersCount')}
          </span>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className={`w-4 h-4 text-[#A3A3A3] absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            placeholder={isRTL ? 'بحث في الدروس والموضوعات...' : 'Search lessons & topics...'}
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className={`w-full py-2 text-[14px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#000000] placeholder-[#A3A3A3] text-[#171717] ${
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
            <div key={ch.id} className="border border-[#E5E5E5] rounded-lg overflow-hidden bg-[#FFFFFF]">
              {/* Chapter Header Button */}
              <button
                type="button"
                onClick={() => toggleChapter(ch.id)}
                className={`w-full text-left px-3.5 py-3 flex items-center justify-between text-[15px] sm:text-[16px] font-semibold tracking-wide transition-colors ${
                  isCurrentChapter ? 'bg-[#FAFAFA] text-[#000000]' : 'hover:bg-[#F2F2F2] text-[#171717]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate flex-1">
                  <span className="font-mono text-[12px] px-2 py-0.5 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] shrink-0 font-bold">
                    Unit {ch.number}
                  </span>
                  <span className="truncate">
                    {isRTL ? ch.titleAr : ch.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-[#737373] ml-2">
                  <span className="text-[11px] font-mono font-medium">
                    {completedCount}/{totalCount}
                  </span>
                  {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                </div>
              </button>

              {/* Topics & Lessons Accordion Content */}
              {isExpanded && (
                <div className="border-t border-[#E5E5E5] bg-[#FAFAFA] divide-y divide-[#E5E5E5]">
                  {visibleTopics.map((topic) => (
                    <div key={topic.id} className="py-1.5">
                      {/* Topic Title */}
                      <div className="px-3.5 py-1 text-[13px] sm:text-[14px] font-mono uppercase text-[#525252] font-bold">
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
                                  ? 'bg-[#000000] text-[#FFFFFF] font-semibold border-[#000000] shadow-xs'
                                  : 'border-transparent text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
                              }`}
                            >
                              <div className="shrink-0">
                                {isDone ? (
                                  <CheckCircle2
                                    size={16}
                                    className={isCurrent ? 'text-[#FFFFFF]' : 'text-[#171717] group-hover:text-[#FFFFFF]'}
                                  />
                                ) : (
                                  <Circle
                                    size={16}
                                    className={isCurrent ? 'text-[#FFFFFF] stroke-[2]' : 'text-[#A3A3A3] group-hover:text-[#FFFFFF] stroke-[1.75]'}
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

      {/* Bottom Quick Links to Practice & Review */}
      <div className="p-3.5 border-t border-[#E5E5E5] bg-[#FFFFFF] flex items-center justify-between text-[14px] font-semibold text-[#525252]">
        <NavLink to="/practice" className="hover:text-[#000000] hover:underline">
          {t('practice')}
        </NavLink>
        <span className="text-[#E5E5E5]">·</span>
        <NavLink to="/review" className="hover:text-[#000000] hover:underline">
          {t('review')}
        </NavLink>
      </div>
    </div>
  );
};

export default CourseSidebar;
