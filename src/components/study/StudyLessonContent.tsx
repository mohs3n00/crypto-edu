import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Presentation,
  Bookmark,
  Sparkles,
} from 'lucide-react';
import type { Lesson, Question } from '../../types';
import { LESSON_DIAGRAM_MAP } from '../../data/interactive/slideBuilder';
import StudyDiagramCard from './StudyDiagramCard';
import StudyFormulaCard from './StudyFormulaCard';
import StudyWorkedExampleCard from './StudyWorkedExampleCard';
import StudyContextualQuestion from './StudyContextualQuestion';

interface StudyLessonContentProps {
  lesson: Lesson;
  contextualQuestion?: Question;
  isArabic: boolean;
}

export const StudyLessonContent: React.FC<StudyLessonContentProps> = ({
  lesson,
  contextualQuestion,
  isArabic,
}) => {
  const diagInfo = LESSON_DIAGRAM_MAP[lesson.id];
  const formulas = lesson.content?.formulas || lesson.formulas || [];
  const workedExamples = lesson.content?.workedExamples || lesson.workedExamples || [];
  const examNotes = lesson.content?.examNotes || lesson.examNotes;
  const examNotesAr = lesson.content?.examNotesAr || lesson.examNotesAr;

  // Extract sections text
  const sections = lesson.content?.sections || [];
  const enSections = sections.filter((s) => s.lang === 'en').map((s) => s.content);
  const arSections = sections.filter((s) => s.lang === 'ar').map((s) => s.content);

  return (
    <article
      id={lesson.id}
      className="scroll-mt-28 py-6 border-b border-[#E2E2DF] last:border-b-0 space-y-4"
    >
      {/* Lesson Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E8E8E5] text-[#222222]">
              {lesson.id.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-[#505050] flex items-center gap-1">
              <FileText size={12} />
              <span>{lesson.sourceRef?.file} • p./slide {lesson.sourceRef?.page || lesson.sourceRef?.slide}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight">
            {isArabic ? lesson.titleAr : lesson.title}
          </h3>
          <p className="text-xs text-[#505050]">
            {isArabic ? lesson.title : lesson.titleAr}
          </p>
        </div>

        {/* Quick Launch Interactive Lecture CTA */}
        <Link
          to={`/interactive/${lesson.chapterId}/${lesson.id}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] hover:border-[#D4D4D0] text-xs font-semibold shrink-0 cursor-pointer transition-colors shadow-2xs"
          title="Open interactive PowerPoint presentation for this topic"
        >
          <Presentation size={14} className="text-[#505050]" />
          <span>{isArabic ? 'عرض تفاعلي' : 'Interactive Slides'}</span>
        </Link>
      </div>

      {/* Main Core Concept & Dual-Language Memorandum Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* English Academic Formulation */}
        <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-4 sm:p-5 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#222222]" />
            <span>Academic Definition & Scope</span>
          </div>

          <div className="body-content-text text-[#222222] whitespace-pre-line font-sans">
            {lesson.content?.enDefinition || lesson.contentEn || 'Formal academic concept definition.'}
          </div>

          {enSections.length > 0 && (
            <div className="body-content-text pt-2 border-t border-[#F0F0EE] space-y-1.5 text-[#505050] whitespace-pre-line">
              {enSections.map((sec, idx) => (
                <div key={idx}>
                  {typeof sec === 'string' ? sec : Array.isArray(sec) ? sec.join('\n') : ''}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Arabic Explanation */}
        <div className="bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl p-4 sm:p-5 space-y-2.5" dir="rtl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#505050]" />
            <span>البيان والشرح الأكاديمي المعتمد</span>
          </div>

          <div
            className="body-content-text text-[#222222] whitespace-pre-line"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {lesson.content?.arExplanation || lesson.contentAr || 'شرح المفهوم الأكاديمي المعتمد.'}
          </div>

          {arSections.length > 0 && (
            <div
              className="body-content-text pt-2 border-t border-[#E8E8E5] space-y-1.5 text-[#505050] whitespace-pre-line"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {arSections.map((sec, idx) => (
                <div key={idx}>
                  {typeof sec === 'string' ? sec : Array.isArray(sec) ? sec.join('\n') : ''}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Critical Exam Distinctions & Misconceptions */}
      {(examNotes || examNotesAr) && (
        <div className="bg-[#FFFDF0] border border-[#E2C65A] rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
          <AlertCircle size={17} className="text-[#856404] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="font-bold text-[#856404] font-mono uppercase tracking-wider block">
              {isArabic ? 'تنبيه امتحاني وتمييز أكاديمي حاسم' : 'Critical Exam Distinction & Clue'}
            </span>
            <p className="body-content-text text-[#222222] whitespace-pre-line">
              {isArabic
                ? Array.isArray(examNotesAr)
                  ? examNotesAr.join('\n• ')
                  : examNotesAr || examNotes
                : Array.isArray(examNotes)
                ? examNotes.join('\n• ')
                : examNotes || ''}
            </p>
          </div>
        </div>
      )}

      {/* Interactive Diagram Card (if applicable) */}
      {diagInfo && (
        <StudyDiagramCard
          diagramId={diagInfo.diagramId}
          props={diagInfo.props}
          title={diagInfo.caption}
          titleAr={diagInfo.captionAr}
          sourceRef={lesson.sourceRef?.file}
          isArabic={isArabic}
        />
      )}

      {/* Formulas (if applicable) */}
      {formulas.map((form, fIdx) => (
        <StudyFormulaCard key={form.id || fIdx} formula={form} isArabic={isArabic} />
      ))}

      {/* Worked Problems & Step-by-Step Practical Calculations */}
      {workedExamples.map((ex, eIdx) => (
        <StudyWorkedExampleCard key={ex.id || eIdx} example={ex} isArabic={isArabic} />
      ))}

      {/* Contextual Practice Question */}
      {contextualQuestion && (
        <StudyContextualQuestion question={contextualQuestion} isArabic={isArabic} />
      )}
    </article>
  );
};

export default StudyLessonContent;

