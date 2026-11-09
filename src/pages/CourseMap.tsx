import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { getAllChapters } from '../data/chapters';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import { ProgressBar } from '../components/ui/ProgressBar';

export default function CourseMap(): React.ReactElement {
  const chapters = getAllChapters();
  const { isLessonCompleted } = useProgress();
  const { language } = useUI();

  // Expanded chapter cards
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    chapters.forEach((ch) => {
      init[ch.id] = true; // All expanded by default for full map overview
    });
    return init;
  });

  const toggleChapter = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <Map className="w-4 h-4 text-[#171717]" />
          <span>Curriculum Road Map / خريطة المنهج الأكاديمي</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
          Course Structure & Syllabus Hierarchy
        </h1>
        <p
          dir="rtl"
          className="text-sm text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          خريطة المسار الأكاديمي الشاملة للوحدات الدراسية الخمس وفقاً للمحاضرات الرسمية ومراجع ويليام ستالينجز
        </p>
      </div>

      {/* Chapters Outline */}
      <div className="space-y-6">
        {chapters.map((chapter) => {
          const isExp = expanded[chapter.id];
          const allLessons = chapter.topics.flatMap((t) => t.lessons);
          const completedCount = allLessons.filter((l) => isLessonCompleted(l.id)).length;
          const totalCount = allLessons.length;
          const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
          const totalMinutes = allLessons.reduce((acc, l) => acc + l.estimatedMinutes, 0);

          return (
            <div
              key={chapter.id}
              id={chapter.id}
              className="border border-[#E5E5E5] rounded-lg bg-[#FFFFFF] overflow-hidden shadow-sm"
            >
              {/* Chapter Header Bar */}
              <div
                onClick={() => toggleChapter(chapter.id)}
                className="p-5 bg-[#FAFAFA] border-b border-[#E5E5E5] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-[#F2F2F2] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center font-mono font-bold text-base shrink-0 mt-0.5">
                    {chapter.number}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-[#737373] uppercase tracking-wider">
                        Chapter {chapter.number}
                      </span>
                      <span className="text-[11px] text-[#A3A3A3]">•</span>
                      <span className="text-[11px] text-[#737373] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> ~{totalMinutes} min total
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#171717]">{chapter.title}</h2>
                    <h3
                      dir="rtl"
                      className="text-sm font-medium text-[#525252] font-serif"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {chapter.titleAr}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-[#171717]">
                      {completedCount} / {totalCount} Completed
                    </span>
                    <div className="w-28 mt-1">
                      <ProgressBar value={percent} />
                    </div>
                  </div>
                  <button type="button" className="p-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-[#171717]">
                    {isExp ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Topics and Lessons List */}
              {isExp && (
                <div className="p-5 space-y-6">
                  <p className="text-xs text-[#525252] border-b border-[#F2F2F2] pb-3">
                    {chapter.description}
                  </p>

                  <div className="space-y-6">
                    {chapter.topics.map((topic, topicIdx) => (
                      <div key={topic.id} className="space-y-3">
                        <div className="flex items-baseline justify-between border-b border-[#E5E5E5] pb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#171717]">
                              § {chapter.number}.{topicIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-[#171717]">
                              {topic.title}
                            </span>
                          </div>
                          <span
                            dir="rtl"
                            className="text-xs text-[#525252] font-serif"
                            style={{ fontFamily: 'var(--font-arabic)' }}
                          >
                            {topic.titleAr}
                          </span>
                        </div>

                        {/* Lessons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                          {topic.lessons.map((lesson) => {
                            const completed = isLessonCompleted(lesson.id);

                            return (
                              <Link
                                key={lesson.id}
                                to={`/learn/${chapter.id}/${lesson.id}`}
                                className="group p-3 border border-[#E5E5E5] rounded hover:border-[#171717] bg-[#FFFFFF] hover:bg-[#FAFAFA] transition-all flex items-start gap-3"
                              >
                                {completed ? (
                                  <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                                ) : (
                                  <Circle className="w-4 h-4 text-[#D4D4D4] group-hover:text-[#171717] shrink-0 mt-0.5" />
                                )}

                                <div className="flex-1 space-y-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-xs font-semibold text-[#171717] group-hover:underline truncate">
                                      {lesson.title}
                                    </h4>
                                    <span className="text-[10px] font-mono text-[#A3A3A3] shrink-0">
                                      {lesson.estimatedMinutes}m
                                    </span>
                                  </div>
                                  <p
                                    dir="rtl"
                                    className="text-[11px] text-[#737373] truncate font-serif"
                                    style={{ fontFamily: 'var(--font-arabic)' }}
                                  >
                                    {lesson.titleAr}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
