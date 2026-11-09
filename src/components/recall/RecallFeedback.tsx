import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, RotateCcw, Sparkles } from 'lucide-react';

export interface RecallFeedbackProps {
  isCorrect: boolean;
  explanationEn: string;
  explanationAr: string;
  feedbackEn?: string;
  feedbackAr?: string;
  relatedLessonId?: string;
  chapterId?: string;
  memoryCue?: {
    triggerEn: string;
    targetEn: string;
    triggerAr: string;
    targetAr: string;
  };
  onNext: () => void;
  onRetry?: () => void;
  isLastQuestion?: boolean;
  isArabic?: boolean;
}

export default function RecallFeedback({
  isCorrect,
  explanationEn,
  explanationAr,
  feedbackEn,
  feedbackAr,
  relatedLessonId,
  chapterId,
  memoryCue,
  onNext,
  onRetry,
  isLastQuestion = false,
  isArabic = false,
}: RecallFeedbackProps): React.ReactElement {
  return (
    <div
      className={`p-4 sm:p-5 rounded-xl border-2 transition-all space-y-4 ${
        isCorrect
          ? 'bg-[#FAFAFA] border-[#171717]'
          : 'bg-[#FFFDFD] border-[#171717]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* 1. Status Banner */}
      <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          {isCorrect ? (
            <div className="w-8 h-8 rounded-full bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#171717] text-[#171717] flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
          )}
          <div>
            <h4 className="text-base font-bold text-[#171717]">
              {isCorrect
                ? isArabic
                  ? 'إجابة صحيحة ومتقنة! ✓'
                  : 'Correct! Memory Association Verified ✓'
                : isArabic
                ? 'تحتاج إلى تدقيق ومراجعة'
                : 'Needs Review & Association'}
            </h4>
            <p className="text-xs text-[#525252]">
              {isCorrect
                ? isArabic
                  ? 'تم تسجيل الاستجابة الصحيحة وتحديث فاصل التكرار المتباعد.'
                  : 'Answer logged. Spaced repetition retention interval extended.'
                : isArabic
                ? 'تم تسجيل هذا المفهوم في قائمة المراجعة القادمة لإتقانه.'
                : 'Item queued for reinforcement review.'}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {!isCorrect && onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D4D4D4] bg-[#FFFFFF] text-xs font-semibold text-[#171717] hover:bg-[#F5F5F5] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إعادة المحاولة' : 'Retry'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#171717] text-[#FFFFFF] text-xs font-bold hover:bg-[#000000] transition-colors shadow-xs"
          >
            <span>
              {isLastQuestion
                ? isArabic
                  ? 'إنهاء الجلسة والاطلاع على النتائج'
                  : 'Finish Session'
                : isArabic
                ? 'التدريب التالي'
                : 'Next Exercise'}
            </span>
            <ArrowRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. Specific Feedback if option was chosen */}
      {(feedbackEn || feedbackAr) && !isCorrect && (
        <div className="p-3 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg text-xs text-[#171717]">
          <span className="font-semibold block mb-0.5">
            {isArabic ? 'ملاحظة التصحيح:' : 'Diagnostic Note:'}
          </span>
          <p>{isArabic ? feedbackAr || feedbackEn : feedbackEn || feedbackAr}</p>
        </div>
      )}

      {/* 3. Detailed Explanation */}
      <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg space-y-2">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#171717]" />
          <span>{isArabic ? 'الشرح والتوثيق الأكاديمي المعتمد' : 'Authoritative Academic Explanation'}</span>
        </div>
        <p className="text-xs sm:text-[13px] text-[#171717] leading-relaxed font-sans">
          {isArabic ? explanationAr : explanationEn}
        </p>
        {!isArabic && explanationAr && (
          <p
            className="text-xs text-[#525252] leading-relaxed pt-1.5 border-t border-[#F0F0F0]"
            dir="rtl"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {explanationAr}
          </p>
        )}
      </div>

      {/* 4. Memory Cue Card */}
      {memoryCue && (
        <div className="p-3 bg-[#FFFEEB] border border-[#E2C65A] rounded-lg flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold text-[#5C450C] block">
              {isArabic ? 'مفتاح الربط الذهني السريع (Memory Cue):' : 'Rapid Memory Association Cue:'}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[#3D2E07]">
              <span className="font-semibold px-2 py-0.5 bg-[#FFF1A6] rounded border border-[#E2C65A]">
                {isArabic ? memoryCue.triggerAr : memoryCue.triggerEn}
              </span>
              <span className="text-[#8C6D1F] font-bold">➔</span>
              <span className="font-semibold px-2 py-0.5 bg-[#FFFFFF] rounded border border-[#E2C65A]">
                {isArabic ? memoryCue.targetAr : memoryCue.targetEn}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 5. Related Lesson Link */}
      {relatedLessonId && (
        <div className="flex items-center justify-between text-xs text-[#525252] pt-1">
          <span>
            {isArabic ? 'هل ترغب بالاستزادة من شرح هذا الموضوع؟' : 'Need a deeper review of this topic?'}
          </span>
          <Link
            to={`/learn/${chapterId || 'ch1'}/${relatedLessonId}`}
            className="inline-flex items-center gap-1 font-semibold text-[#171717] underline hover:text-[#000000]"
          >
            <span>{isArabic ? 'الانتقال إلى الدرس الكامل' : 'Open Comprehensive Lesson'}</span>
            <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      )}
    </div>
  );
}

