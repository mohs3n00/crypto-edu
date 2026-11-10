import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Eye,
  Languages,
} from 'lucide-react';
import type { Question } from '../../types';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import QuestionSourceBadge from './QuestionSourceBadge';
import ContextualHint from './ContextualHint';
import ExamCluesSection from './ExamCluesSection';
import AIProviderActions from '../ai/AIProviderActions';
import { normalizeQuestion, validateQuestionAnswer } from '../../utils/questionNormalizer';

export interface KnowledgeCheckProps {
  question: Question;
  topicId?: string;
  topicTitle?: string;
  topicTitleAr?: string;
  chapterId?: string;
  lessonId?: string;
  className?: string;
  onComplete?: (correct: boolean) => void;
}

export default function KnowledgeCheck({
  question,
  topicId,
  topicTitle,
  topicTitleAr,
  chapterId,
  lessonId,
  className = '',
  onComplete,
}: KnowledgeCheckProps): React.ReactElement {
  const { recordQuestionResult, recordTopicCheck } = useProgress();
  const { language } = useUI();
  const isArabicUI = language === 'ar';

  const normQ = normalizeQuestion(question);

  // Local state
  const [selectedOption, setSelectedOption] = useState<number | string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [viewLanguage, setViewLanguage] = useState<'default' | 'alternate'>('default');

  // Determine current display language for question
  const isDisplayingArabic = viewLanguage === 'default' ? isArabicUI : !isArabicUI;

  // Options normalization
  const rawOptions =
    isDisplayingArabic && normQ.optionsAr && normQ.optionsAr.length > 0
      ? normQ.optionsAr
      : normQ.optionsEn;

  // Correct answer normalization
  const getIsCorrect = (choiceIdx: number, _choiceVal: string): boolean => {
    return validateQuestionAnswer(normQ, choiceIdx, isDisplayingArabic ? 'ar' : 'en').isCorrect;
  };

  const handleSelectOption = (index: number, val: string) => {
    if (isAnswered && isCorrect) return; // already solved correctly

    setSelectedOption(index);
    setIsAnswered(true);

    const correct = getIsCorrect(index, val);
    setIsCorrect(correct);

    // Persist question answer
    recordQuestionResult(question.id, correct, index);

    // Persist topic spaced repetition progress
    if (topicId) {
      recordTopicCheck(
        topicId,
        topicTitle || question.en.stem.slice(0, 40),
        chapterId || question.chapterId,
        lessonId || question.relatedLessonId,
        correct,
        topicTitleAr
      );
    }

    if (onComplete) {
      onComplete(correct);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  const currentStem = isDisplayingArabic && question.ar?.stem ? question.ar.stem : question.en.stem;
  const currentExplanation = isArabicUI ? question.explanationAr || question.explanation : question.explanation;

  return (
    <div
      className={`border-2 border-[#171717] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 space-y-5 shadow-xs transition-all ${className}`}
    >
      {/* Header: Mode Badge, Source Badge, and Bilingual Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded inline-flex items-center gap-1.5">
            <Sparkles size={12} />
            <span>{isArabicUI ? 'اختبار استيعاب فوري' : 'Immediate Knowledge Check'}</span>
          </span>
          <QuestionSourceBadge
            source={question.source}
            originalNumber={question.originalNumber}
          />
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          {question.ar && (
            <button
              type="button"
              onClick={() => setViewLanguage((prev) => (prev === 'default' ? 'alternate' : 'default'))}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#525252] hover:text-[#171717] border border-[#E5E5E5] hover:border-[#171717] rounded bg-[#FAFAFA] transition-colors"
              title="Toggle English / Arabic view for this question"
            >
              <Languages size={13} />
              <span>{isDisplayingArabic ? 'View English' : 'عرض الترجمة العربية'}</span>
            </button>
          )}

          <AIProviderActions
            context={{
              sectionTitle: `Knowledge Check Question: ${question.originalNumber || question.id}`,
              content: `Question: ${question.en.stem}\nOptions:\n${(question.en.options || []).map((o, idx) => `${idx + 1}. ${o}`).join('\n')}\nExplanation: ${question.explanation}`,
              promptType: 'concept',
            }}
            variant="compact"
          />
        </div>
      </div>

      {/* Question Stem */}
      <div className="space-y-1">
        <h4
          className="text-[17px] sm:text-[18px] font-bold text-[#171717] leading-relaxed"
          dir={isDisplayingArabic ? 'rtl' : 'ltr'}
          style={isDisplayingArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
        >
          {currentStem}
        </h4>
      </div>

      {/* Answer Options: Structured 2-column Grid for Short Options / True-False, Stacked for Long */}
      <div
        className={
          rawOptions.length <= 4 && rawOptions.every((o) => (o || '').length < 60)
            ? 'grid grid-cols-1 md:grid-cols-2 gap-2.5'
            : 'space-y-2.5'
        }
        role="radiogroup"
      >
        {rawOptions.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isChoiceCorrect = isAnswered && getIsCorrect(idx, opt);

          let buttonStyle = 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#171717] hover:bg-[#FAFAFA]';

          if (isAnswered) {
            if (isSelected) {
              buttonStyle = isCorrect
                ? 'border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                : 'border-2 border-[#525252] bg-[#F2F2F2] text-[#171717] line-through font-medium';
            } else if (isChoiceCorrect && showExplanation) {
              buttonStyle = 'border-2 border-[#171717] bg-[#FAFAFA] text-[#171717] font-semibold';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswered && isCorrect}
              onClick={() => handleSelectOption(idx, opt)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-lg border text-sm sm:text-[15px] transition-all flex items-start gap-3 ${buttonStyle}`}
              dir={isDisplayingArabic ? 'rtl' : 'ltr'}
              style={isDisplayingArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
            >
              <span
                className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 border ${
                  isSelected && isCorrect
                    ? 'border-[#FFFFFF] bg-[#FFFFFF] text-[#171717]'
                    : isSelected && !isCorrect
                    ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                    : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252]'
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1 leading-snug pt-0.5">{opt}</span>
              {isSelected && isAnswered && (
                <span className="shrink-0 pt-0.5">
                  {isCorrect ? <CheckCircle2 size={18} className="text-[#FFFFFF]" /> : <XCircle size={18} className="text-[#171717]" />}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Contextual Hint (Rendered when student has not yet answered or answered incorrectly) */}
      {!isCorrect && (
        <ContextualHint
          hint={question.en.hint || question.ar?.hint}
          hintAr={question.ar?.hint}
          hintLevel1={question.en.hintLevel1}
          hintLevel1Ar={question.ar?.hintLevel1}
          hintLevel2={question.en.hintLevel2}
          hintLevel2Ar={question.ar?.hintLevel2}
        />
      )}

      {/* Immediate Evaluation Feedback */}
      {isAnswered && (
        <div
          className={`p-4 sm:p-5 rounded-lg border ${
            isCorrect
              ? 'border-2 border-[#171717] bg-[#FAFAFA]'
              : 'border border-[#525252] bg-[#F2F2F2]'
          } space-y-3`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 size={18} className="text-[#171717]" />
                  <span className="font-bold text-sm text-[#171717]">
                    {isArabicUI
                      ? 'إجابة صحيحة! أحسنت في استيعاب المفهوم وتطبيق القاعدة.'
                      : 'Correct! You correctly verified and applied the academic condition.'}
                  </span>
                </>
              ) : (
                <>
                  <XCircle size={18} className="text-[#171717]" />
                  <span className="font-bold text-sm text-[#171717]">
                    {isArabicUI
                      ? 'إجابة غير دقيقة. راجع الشرط الحاكم وحاول مرة أخرى.'
                      : 'Incorrect. Reconsider the governing condition and try again.'}
                  </span>
                </>
              )}
            </div>

            {!isCorrect && (
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] hover:bg-[#333333] rounded text-xs font-semibold transition-colors"
              >
                <RotateCcw size={13} />
                <span>{isArabicUI ? 'إعادة المحاولة' : 'Try Again'}</span>
              </button>
            )}
          </div>

          {/* Explanation reveal */}
          {(isCorrect || showExplanation) ? (
            <div className="space-y-4">
              <div className="pt-2 border-t border-[#E5E5E5] space-y-1.5 text-xs sm:text-[14px] leading-relaxed text-[#171717]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#737373] block">
                  {isArabicUI ? 'التعليل الأكاديمي المعتمد من المرجع:' : 'Academic Explanation & Verified Solution Key:'}
                </span>
                <p
                  style={isArabicUI ? { fontFamily: 'var(--font-arabic)' } : undefined}
                  dir={isArabicUI ? 'rtl' : 'ltr'}
                >
                  {currentExplanation}
                </p>
              </div>

              {/* Requirement 4: KEYWORDS TO REMEMBER | Exam Clues Section */}
              <ExamCluesSection question={question} />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowExplanation(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#525252] hover:text-[#171717] hover:underline"
            >
              <Eye size={13} />
              <span>{isArabicUI ? 'عرض الشرح والحل النموذجي' : 'Reveal Full Academic Explanation'}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

