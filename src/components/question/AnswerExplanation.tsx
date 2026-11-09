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
    <div className="mt-4 p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-3 text-xs leading-relaxed">
      {/* Header with AI Trigger */}
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717]">
          <BookOpen className="w-3.5 h-3.5" />
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
      <div className="space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
          Academic Rationale
        </span>
        <div className="text-[#171717] font-medium leading-relaxed">
          {explanationEn}
        </div>
      </div>

      {/* Arabic Rationale */}
      {explanationAr && (
        <div className="space-y-1 pt-2 border-t border-[#E5E5E5]" dir="rtl">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
            الشرح والتعليل بالعربية
          </span>
          <p
            className="text-[#171717] font-serif text-[13px] leading-relaxed"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {explanationAr}
          </p>
        </div>
      )}

      {/* Related Lesson Link */}
      {relatedLessonId && (
        <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#737373]">
            {isArabic ? 'المفهوم مرتبط بالدرس:' : 'Related Curriculum Lesson:'}
          </span>
          <Link
            to={`/learn/${relatedLessonId}`}
            className="inline-flex items-center gap-1 font-bold text-[#171717] hover:underline"
          >
            <span>{relatedLessonId}</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
}

