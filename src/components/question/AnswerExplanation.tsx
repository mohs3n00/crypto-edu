import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIProviderActions from '../ai/AIProviderActions';

export interface AnswerExplanationProps {
  explanationEn: string;
  explanationAr?: string;
  relatedLessonId?: string;
  stemEn: string;
  stemAr?: string;
  optionsEn?: string[];
  correctAnswerText?: string;
  userAnswerFormatted?: string;
  isCorrect?: boolean;
  chapterId?: string;
  source?: string;
  isArabic?: boolean;
}

export default function AnswerExplanation({
  explanationEn,
  explanationAr,
  relatedLessonId,
  stemEn,
  stemAr,
  optionsEn,
  correctAnswerText,
  userAnswerFormatted,
  isCorrect,
  chapterId,
  source,
  isArabic = false,
}: AnswerExplanationProps): React.ReactElement {
  return (
    <div className="mt-4 p-4 sm:p-5 border border-[#E2E2DF] bg-[#FFFFFF] rounded-md space-y-3.5 leading-relaxed">
      {/* Header with AI Trigger */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E2DF]">
        <div className="flex items-center gap-2 text-sm sm:text-[15px] font-mono font-bold text-[#222222]">
          <BookOpen className="w-4 h-4 text-[#222222]" />
          <span>
            {isArabic
              ? 'الشرح والتعليل الأكاديمي المعتمد'
              : 'Official Academic Rationale & Explanation'}
          </span>
        </div>

        <AIProviderActions
          context={{
            sectionTitle: `Question: ${stemEn}`,
            content: `Exam Question (${source || 'Official Course Material'}):\n"${stemEn}"${
              stemAr ? `\nArabic: "${stemAr}"` : ''
            }\n\nOptions:\n${
              optionsEn
                ? optionsEn.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`).join('\n')
                : ''
            }\n\nCorrect Answer:\n${correctAnswerText || 'N/A'}\n\nStudent Answer:\n${
              userAnswerFormatted || 'N/A'
            } (${isCorrect ? 'Correct' : 'Incorrect'})\n\nOfficial Academic Explanation:\n${explanationEn}${
              explanationAr ? `\nArabic: ${explanationAr}` : ''
            }`,
            promptType: 'concept',
            chapterTitle: `Chapter: ${(chapterId || '').toUpperCase()}`,
          }}
          variant="compact"
        />
      </div>

      {/* English Rationale */}
      <div className="space-y-1.5">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#686868] block">
          Academic Rationale
        </span>
        <div className="text-[#222222] text-[16px] sm:text-[17px] font-medium leading-[1.65]">
          {explanationEn}
        </div>
      </div>

      {/* Arabic Rationale */}
      {explanationAr && (
        <div className="space-y-1.5 pt-3 border-t border-[#E2E2DF]" dir="rtl">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#686868] block">
            الشرح والتعليل بالعربية
          </span>
          <p
            className="text-[#505050] font-serif text-[17px] sm:text-[18px] leading-[1.8]"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {explanationAr}
          </p>
        </div>
      )}

      {/* Related Lesson Link */}
      {relatedLessonId && (
        <div className="pt-2.5 border-t border-[#E2E2DF] flex items-center justify-between text-xs sm:text-[13px] font-mono">
          <span className="text-[#686868]">
            {isArabic ? 'المفهوم مرتبط بالدرس:' : 'Related Curriculum Lesson:'}
          </span>
          <Link
            to={`/learn/${relatedLessonId}`}
            className="inline-flex items-center gap-1 font-bold text-[#222222] hover:underline"
          >
            <span>{relatedLessonId}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

