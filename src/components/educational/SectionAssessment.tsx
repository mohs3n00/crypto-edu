import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ClipboardCheck,
  Languages,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import type { Question } from '../../types';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import QuestionSourceBadge from './QuestionSourceBadge';
import ContextualHint from './ContextualHint';
import TopicMasteryBadge from './TopicMasteryBadge';
import ExamCluesSection from './ExamCluesSection';
import { normalizeQuestion, validateQuestionAnswer } from '../../utils/questionNormalizer';

export interface SectionAssessmentProps {
  id: string;
  title: string;
  titleAr?: string;
  description?: string;
  descriptionAr?: string;
  questions: Question[];
  chapterId: string;
  lessonId: string;
  topicId?: string;
  className?: string;
  onComplete?: (score: number, total: number) => void;
}

export default function SectionAssessment({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  questions,
  chapterId,
  lessonId,
  topicId,
  className = '',
  onComplete,
}: SectionAssessmentProps): React.ReactElement {
  const { recordQuestionResult, recordSectionScore, getTopicReview } = useProgress();
  const { language } = useUI();
  const isArabicUI = language === 'ar';

  // State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bilingualToggles, setBilingualToggles] = useState<Record<string, boolean>>({});

  // Existing topic review record
  const topicKey = topicId || `topic-${chapterId}-${lessonId}`;
  const reviewRecord = getTopicReview(topicKey);

  // Normalization for options & correct answers
  const getIsChoiceCorrect = (q: Question, choiceIdx: number): boolean => {
    const normQ = normalizeQuestion(q);
    return validateQuestionAnswer(normQ, choiceIdx).isCorrect;
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalCount = questions.length;
  const allAnswered = answeredCount === totalCount;

  // Calculate score after submission
  let correctCount = 0;
  if (isSubmitted) {
    for (const q of questions) {
      const userChoiceIdx = selectedAnswers[q.id];
      if (userChoiceIdx !== undefined) {
        if (getIsChoiceCorrect(q, userChoiceIdx)) {
          correctCount++;
        }
      }
    }
  }

  const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  const handleSelect = (questionId: string, choiceIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceIdx,
    }));
  };

  const handleSubmit = () => {
    if (isSubmitted || answeredCount === 0) return;

    setIsSubmitted(true);

    // Record each question answer
    let correctTotal = 0;
    for (const q of questions) {
      const userChoiceIdx = selectedAnswers[q.id];
      const isCorrect = userChoiceIdx !== undefined && getIsChoiceCorrect(q, userChoiceIdx);
      if (isCorrect) correctTotal++;
      recordQuestionResult(q.id, isCorrect, userChoiceIdx);
    }

    // Record section score in spaced repetition progress
    recordSectionScore(
      topicKey,
      title,
      chapterId,
      lessonId,
      correctTotal,
      totalCount,
      titleAr
    );

    if (onComplete) {
      onComplete(correctTotal, totalCount);
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const toggleLanguageForQuestion = (qId: string) => {
    setBilingualToggles((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  return (
    <div
      id={id}
      className={`border-2 border-[#171717] bg-[#FFFFFF] rounded-xl p-6 sm:p-8 space-y-8 shadow-sm ${className}`}
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded inline-flex items-center gap-1.5">
              <ClipboardCheck size={12} />
              <span>{isArabicUI ? 'اختبار تقييم استيعاب الوحدة' : 'Section Summative Assessment'}</span>
            </span>
            {reviewRecord && (
              <TopicMasteryBadge state={reviewRecord.masteryState} />
            )}
          </div>
          <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
            {title}
          </h3>
          {titleAr && (
            <h4
              dir="rtl"
              className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </h4>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 font-mono text-xs self-end sm:self-auto shrink-0">
          <span className="px-3 py-1 border border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] rounded">
            {isSubmitted
              ? `${correctCount} / ${totalCount} Correct (${scorePercentage}%)`
              : `${answeredCount} of ${totalCount} Answered`}
          </span>
        </div>
      </div>

      {description && (
        <p className="text-sm text-[#525252] leading-relaxed max-w-3xl">
          {isArabicUI && descriptionAr ? descriptionAr : description}
        </p>
      )}

      {/* Questions List */}
      <div className="space-y-8">
        {questions.map((q, qIndex) => {
          const normQ = normalizeQuestion(q);
          const isArabicView = bilingualToggles[q.id] ? !isArabicUI : isArabicUI;
          const currentStem = isArabicView && normQ.stemAr ? normQ.stemAr : normQ.stemEn;
          const rawOptions =
            isArabicView && normQ.optionsAr && normQ.optionsAr.length > 0
              ? normQ.optionsAr
              : normQ.optionsEn;

          const userChoiceIdx = selectedAnswers[q.id];
          const isAnswered = userChoiceIdx !== undefined;
          const isChoiceCorrect = isSubmitted && isAnswered && getIsChoiceCorrect(q, userChoiceIdx);

          return (
            <div
              key={q.id}
              className={`p-5 sm:p-6 rounded-lg border transition-all space-y-4 ${
                isSubmitted
                  ? isChoiceCorrect
                    ? 'border-2 border-[#171717] bg-[#FAFAFA]'
                    : 'border border-[#525252] bg-[#F2F2F2]'
                  : 'border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#A3A3A3]'
              }`}
            >
              {/* Question Subheader: Number, Source, and Language Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5E5] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#171717] px-2 py-0.5 rounded border border-[#171717] bg-[#FFFFFF]">
                    Question {qIndex + 1}
                  </span>
                  <QuestionSourceBadge
                    source={q.source}
                    originalNumber={q.originalNumber}
                  />
                </div>

                {q.ar && (
                  <button
                    type="button"
                    onClick={() => toggleLanguageForQuestion(q.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#525252] hover:text-[#171717] border border-[#E5E5E5] rounded px-2 py-0.5 bg-[#FAFAFA]"
                  >
                    <Languages size={11} />
                    <span>{isArabicView ? 'View English' : 'عرض الترجمة العربية'}</span>
                  </button>
                )}
              </div>

              {/* Question Stem */}
              <h5
                className="text-[17px] sm:text-[18px] font-bold text-[#222222] leading-relaxed"
                dir={isArabicView ? 'rtl' : 'ltr'}
                style={isArabicView ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {currentStem}
              </h5>

              {/* Options: Single-Column Full-Width Stack */}
              <div
                className="flex flex-col space-y-2.5 w-full"
                role="radiogroup"
              >
                {rawOptions.map((opt, optIdx) => {
                  const isSelected = userChoiceIdx === optIdx;
                  const isOptCorrect = isSubmitted && getIsChoiceCorrect(q, optIdx);

                  let optionStyle = 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#171717]';

                  if (isSubmitted) {
                    if (isSelected) {
                      optionStyle = isOptCorrect
                        ? 'border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                        : 'border-2 border-[#525252] bg-[#F2F2F2] text-[#171717] line-through font-medium';
                    } else if (isOptCorrect) {
                      optionStyle = 'border-2 border-[#171717] bg-[#FAFAFA] text-[#171717] font-semibold';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-2 border-[#000000] bg-[#000000] text-[#FFFFFF] font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-md border text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                      dir={isArabicView ? 'rtl' : 'ltr'}
                      style={isArabicView ? { fontFamily: 'var(--font-arabic)' } : undefined}
                    >
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 border ${
                          isSelected && (!isSubmitted || isOptCorrect)
                            ? 'border-[#FFFFFF] bg-[#FFFFFF] text-[#171717]'
                            : isSelected && isSubmitted && !isOptCorrect
                            ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                            : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252]'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-snug pt-0.5">{opt}</span>
                      {isSelected && isSubmitted && (
                        <span className="shrink-0 pt-0.5">
                          {isOptCorrect ? <CheckCircle2 size={16} className="text-[#FFFFFF]" /> : <XCircle size={16} className="text-[#171717]" />}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Post-submission Review & Explanation */}
              {isSubmitted && (
                <div className="pt-3 border-t border-[#E5E5E5] space-y-2">
                  {!isChoiceCorrect && (
                    <ContextualHint
                      hint={q.en.hint || q.ar?.hint}
                      hintAr={q.ar?.hint}
                      hintLevel1={q.en.hintLevel1}
                      hintLevel1Ar={q.ar?.hintLevel1}
                      hintLevel2={q.en.hintLevel2}
                      hintLevel2Ar={q.ar?.hintLevel2}
                    />
                  )}

                  <div className="p-3 border border-[#171717] bg-[#FFFFFF] rounded text-xs sm:text-[13px] leading-relaxed text-[#171717]">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block mb-1">
                      {isArabicUI ? 'التعليل النموذجي:' : 'Academic Explanation:'}
                    </span>
                    <p
                      style={isArabicUI ? { fontFamily: 'var(--font-arabic)' } : undefined}
                      dir={isArabicUI ? 'rtl' : 'ltr'}
                    >
                      {isArabicUI ? q.explanationAr || q.explanation : q.explanation}
                    </p>
                  </div>

                  {/* Requirement 4: KEYWORDS TO REMEMBER | Exam Clues Section */}
                  <ExamCluesSection question={q} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Area */}
      <div className="pt-4 border-t border-[#E5E5E5]">
        {!isSubmitted ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#525252] flex items-center gap-1.5">
              {!allAnswered && (
                <>
                  <AlertCircle size={14} className="text-[#737373]" />
                  <span>
                    {isArabicUI
                      ? `تمت الإجابة على ${answeredCount} من أصل ${totalCount} أسئلة.`
                      : `You have answered ${answeredCount} of ${totalCount} questions.`}
                  </span>
                </>
              )}
            </div>

            <button
              type="button"
              disabled={answeredCount === 0}
              onClick={handleSubmit}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-bold transition-all inline-flex items-center justify-center gap-2 ${
                answeredCount > 0
                  ? 'border-2 border-[#000000] bg-[#000000] text-[#FFFFFF] hover:bg-[#333333] shadow-sm cursor-pointer'
                  : 'border border-[#E5E5E5] bg-[#F2F2F2] text-[#A3A3A3] cursor-not-allowed'
              }`}
            >
              <ClipboardCheck size={16} />
              <span>{isArabicUI ? 'تسليم الإجابات وتصحيح الاختبار' : 'Submit Answers & Check Results'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="p-5 border-2 border-[#171717] bg-[#FAFAFA] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-[#171717]">
                  {isArabicUI
                    ? `النتيجة النهائية: ${correctCount} من ${totalCount} (${scorePercentage}%)`
                    : `Final Score: ${correctCount} of ${totalCount} (${scorePercentage}%)`}
                </span>
                <TopicMasteryBadge state={scorePercentage >= 80 ? 'mastered' : scorePercentage >= 60 ? 'improving' : 'needs-review'} />
              </div>
              <p className="text-xs text-[#525252]">
                {scorePercentage >= 80
                  ? isArabicUI
                    ? 'أداء ممتاز! تم تحديث جدول التكرار المتباعد لهذه الوحدة.'
                    : 'Excellent comprehension! Your spaced repetition interval has been increased.'
                  : isArabicUI
                    ? 'تم تسجيل الأخطاء في دفتر المراجعة لتكرار التدريب لاحقاً.'
                    : 'Missed questions were recorded in your Personal Mistakes Notebook for targeted review.'}
              </p>
            </div>

            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF] rounded-lg text-xs font-bold transition-all"
            >
              <RotateCcw size={14} />
              <span>{isArabicUI ? 'إعادة محاولة الاختبار' : 'Retry Assessment'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

