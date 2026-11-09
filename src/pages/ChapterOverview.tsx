import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, PlayCircle, CheckCircle2, Circle } from 'lucide-react';
import { getChapterById } from '../data/chapters';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import { ProgressBar } from '../components/ui/ProgressBar';

export default function ChapterOverview(): React.ReactElement {
  const { chapterId } = useParams<{ chapterId: string }>();
  const chapter = chapterId ? getChapterById(chapterId) : undefined;
  const { isLessonCompleted } = useProgress();
  const { language } = useUI();

  if (!chapter) {
    return (
      <div className="p-12 max-w-content mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold text-[#171717]">Chapter Not Found</h2>
        <p className="text-xs text-[#525252]">The requested chapter does not exist in the syllabus.</p>
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs"
        >
          View Course Outline
        </Link>
      </div>
    );
  }

  const allLessons = chapter.topics.flatMap((t) => t.lessons);
  const completedCount = allLessons.filter((l) => isLessonCompleted(l.id)).length;
  const totalMinutes = allLessons.reduce((acc, l) => acc + l.estimatedMinutes, 0);
  const percent = allLessons.length > 0 ? Math.round((completedCount / allLessons.length) * 100) : 0;
  const firstLesson = allLessons[0];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Chapter Banner */}
      <div className="border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
            Unit {chapter.number}
          </span>
          <span className="text-xs text-[#737373] flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" /> ~{totalMinutes} min total
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-[#171717]">{chapter.title}</h1>
          <h2
            dir="rtl"
            className="text-xl font-bold text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {chapter.titleAr}
          </h2>
        </div>

        <p className="text-sm text-[#525252] leading-relaxed">{chapter.description}</p>

        <div className="pt-4 border-t border-[#F2F2F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#737373]">
              Chapter Progress: {completedCount} / {allLessons.length} lessons ({percent}%)
            </div>
            <div className="w-48">
              <ProgressBar value={percent} />
            </div>
          </div>

          {firstLesson && (
            <Link
              to={`/learn/${chapter.id}/${firstLesson.id}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              <span>{completedCount > 0 ? 'Continue Studying' : 'Start Chapter'}</span>
            </Link>
          )}
        </div>
      </div>

      {/* Topics & Lessons breakdown */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#171717] border-b border-[#E5E5E5] pb-2">
          Topics in this Chapter
        </h3>

        <div className="space-y-6">
          {chapter.topics.map((topic, tIdx) => (
            <div key={topic.id} className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FFFFFF] space-y-3">
              <div className="flex items-baseline justify-between border-b border-[#F2F2F2] pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#171717]">
                    § {chapter.number}.{tIdx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#171717]">{topic.title}</h4>
                </div>
                <span
                  dir="rtl"
                  className="text-xs text-[#525252] font-serif"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {topic.titleAr}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {topic.lessons.map((lesson) => {
                  const completed = isLessonCompleted(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      to={`/learn/${chapter.id}/${lesson.id}`}
                      className="p-3 border border-[#E5E5E5] rounded hover:border-[#171717] hover:bg-[#FAFAFA] transition-colors flex items-center justify-between text-xs group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        {completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#D4D4D4] group-hover:text-[#171717] shrink-0" />
                        )}
                        <span className="font-medium text-[#171717] truncate">{lesson.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#A3A3A3] shrink-0 ml-2">
                        {lesson.estimatedMinutes}m
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
