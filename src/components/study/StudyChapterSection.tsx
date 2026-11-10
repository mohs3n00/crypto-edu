import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Presentation, FileText, Layers } from 'lucide-react';
import type { Chapter, Question } from '../../types';
import StudyTopicSection from './StudyTopicSection';

interface StudyChapterSectionProps {
  chapter: Chapter;
  chapterQuestions: Question[];
  isArabic: boolean;
}

export const StudyChapterSection: React.FC<StudyChapterSectionProps> = ({
  chapter,
  chapterQuestions,
  isArabic,
}) => {
  const firstLessonId = chapter.topics[0]?.lessons[0]?.id;

  return (
    <section id={chapter.id} className="scroll-mt-28 space-y-6 pt-8 pb-12 border-b-4 border-[#E2E2DF] last:border-b-0">
      {/* Chapter Major Separator Banner */}
      <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-3 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
              Unit {chapter.number}
            </span>
            <span className="text-xs font-mono text-[#505050]">
              {chapter.topics.length} Topics • {chapter.topics.flatMap((t) => t.lessons).length} Sections
            </span>
          </div>

          {firstLessonId && (
            <Link
              to={`/interactive/${chapter.id}/${firstLessonId}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] text-xs font-semibold cursor-pointer transition-colors shadow-2xs"
            >
              <Presentation size={14} />
              <span>{isArabic ? 'تشغيل عرض الوحدة التفاعلي' : 'Launch Unit Presentation'}</span>
            </Link>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
            {isArabic ? chapter.titleAr : chapter.title}
          </h2>
          <h3 className="text-base sm:text-lg text-[#505050] font-medium">
            {isArabic ? chapter.title : chapter.titleAr}
          </h3>
          <p className="text-xs sm:text-sm text-[#505050] leading-relaxed pt-1">
            {isArabic ? chapter.descriptionAr : chapter.description}
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-8 pl-1 sm:pl-3">
        {chapter.topics.map((topic) => (
          <StudyTopicSection
            key={topic.id}
            topic={topic}
            questionsPool={chapterQuestions}
            isArabic={isArabic}
          />
        ))}
      </div>
    </section>
  );
};

export default StudyChapterSection;

