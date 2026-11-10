import React from 'react';
import type { Topic, Question } from '../../types';
import StudyLessonContent from './StudyLessonContent';

interface StudyTopicSectionProps {
  topic: Topic;
  questionsPool: Question[];
  isArabic: boolean;
}

export const StudyTopicSection: React.FC<StudyTopicSectionProps> = ({
  topic,
  questionsPool,
  isArabic,
}) => {
  return (
    <section id={topic.id} className="scroll-mt-24 space-y-4 pt-4">
      {/* Topic Subheader */}
      <div className="flex items-center gap-2.5 pb-2 border-b-2 border-[#222222]">
        <span className="w-2.5 h-2.5 rounded-xs bg-[#222222]" />
        <h3 className="text-base sm:text-lg font-bold text-[#222222] tracking-tight uppercase font-mono">
          {isArabic ? topic.titleAr : topic.title}
        </h3>
        <span className="text-xs text-[#737373] hidden sm:inline">
          ({topic.lessons.length} {isArabic ? 'أقسام تعليمية' : 'sections'})
        </span>
      </div>

      {/* Topic Lessons */}
      <div className="space-y-4">
        {topic.lessons.map((lesson, idx) => {
          // Find matching contextual question from questionsPool
          const contextualQ = questionsPool.find(
            (q) =>
              q.relatedLessonId === lesson.id ||
              (q.chapterId === lesson.chapterId && q.id.endsWith(String(idx + 1)))
          ) || questionsPool[idx % questionsPool.length];

          return (
            <StudyLessonContent
              key={lesson.id}
              lesson={lesson}
              contextualQuestion={contextualQ}
              isArabic={isArabic}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StudyTopicSection;

