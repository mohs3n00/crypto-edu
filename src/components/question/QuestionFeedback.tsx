import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export interface QuestionFeedbackProps {
  isCorrect: boolean;
  isVerified: boolean;
  userAnswerFormatted: string;
  expectedAnswerFormatted: string;
  isArabic?: boolean;
  feedbackText?: string;
}

export default function QuestionFeedback({
  isCorrect,
  isVerified,
  userAnswerFormatted,
  expectedAnswerFormatted,
  isArabic = false,
  feedbackText,
}: QuestionFeedbackProps): React.ReactElement {
  if (!isVerified) {
    return (
      <div className="p-4 border border-[#525252] bg-[#FAFAFA] rounded-md space-y-2 text-xs">
        <div className="flex items-center gap-2 font-bold text-[#171717]">
          <AlertTriangle className="w-4 h-4 text-[#171717]" />
          <span>
            {isArabic
              ? 'مفتاح الإجابة غير متاح — يتطلب مراجعة يدوية'
              : 'Answer key unavailable — manual review required.'}
          </span>
        </div>
        <p className="text-[#525252] leading-relaxed">
          {feedbackText ||
            (isArabic
              ? 'تم حفظ إجابتك بنجاح ولكن هذا السؤال يتطلب مراجعة تصحيح يدوي لعدم توفر نموذج إجابة رسمي في المصدر.'
              : 'Your response was recorded, but this question requires manual review as no official answer key was provided in the examination source.')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 pt-1">
      {/* Status Pill */}
      <div className="flex items-center gap-3">
        {isCorrect ? (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs sm:text-sm font-bold font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isArabic ? 'إجابة صحيحة ومؤكدة' : 'Correct Answer'}</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#525252] bg-[#F2F2F2] text-[#171717] rounded text-xs sm:text-sm font-bold font-mono">
            <XCircle className="w-4 h-4 text-[#171717]" />
            <span>{isArabic ? 'إجابة خاطئة' : 'Incorrect Answer'}</span>
          </div>
        )}
      </div>

      {/* Answer Comparison Summary */}
      <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#737373] block mb-0.5">
            {isArabic ? 'إجابتك المسجلة:' : 'Your Answer:'}
          </span>
          <span className={`font-semibold ${!isCorrect ? 'text-[#525252] line-through' : 'text-[#171717]'}`}>
            {userAnswerFormatted}
          </span>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#737373] block mb-0.5">
            {isArabic ? 'الإجابة الأكاديمية المعتمدة:' : 'Verified Correct Answer:'}
          </span>
          <span className="font-bold text-[#171717]">
            {expectedAnswerFormatted}
          </span>
        </div>
      </div>
    </div>
  );
}

