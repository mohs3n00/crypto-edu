import React, { useState } from 'react';
import type { RecallExercise, RecallOption } from '../../data/keywords/types';
import RecallHint from './RecallHint';
import RecallFeedback from './RecallFeedback';
import { HelpCircle } from 'lucide-react';

export interface MissingKeywordCardProps {
  exercise: RecallExercise;
  onAnswer: (isCorrect: boolean, selectedOption: RecallOption) => void;
  onNext: () => void;
  isLastQuestion?: boolean;
  isArabic?: boolean;
}

export default function MissingKeywordCard({
  exercise,
  onAnswer,
  onNext,
  isLastQuestion = false,
  isArabic = false,
}: MissingKeywordCardProps): React.ReactElement {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const selectedOption = exercise.options.find((opt) => opt.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSubmit = (opt: RecallOption) => {
    if (isSubmitted) return;
    setSelectedOptionId(opt.id);
    setIsSubmitted(true);
    onAnswer(opt.isCorrect, opt);
  };

  const handleRetry = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  // Render text with blank replaced
  const baseSentence = isArabic
    ? exercise.highlightedTermAr || ''
    : exercise.highlightedTermEn || '';

  const renderSentenceWithBlank = () => {
    const parts = baseSentence.split(/\[______\]/);
    if (parts.length < 2) {
      return <span>{baseSentence}</span>;
    }

    const filledTerm = selectedOption
      ? isArabic
        ? selectedOption.textAr
        : selectedOption.textEn
      : null;

    return (
      <span className="leading-relaxed">
        {parts[0]}
        <span
          className={`inline-block px-2.5 py-0.5 mx-1 font-bold rounded border ${
            filledTerm
              ? isSubmitted && isCorrect
                ? 'bg-[#171717] text-[#FFFFFF] border-[#000000]'
                : isSubmitted && !isCorrect
                ? 'bg-[#F5F5F5] text-[#737373] border-[#171717] line-through'
                : 'bg-[#FFF1A6] text-[#171717] border-[#E2C65A]'
              : 'bg-[#FFF1A6] text-[#737373] border-[#E2C65A] border-dashed min-w-[90px] text-center'
          }`}
        >
          {filledTerm || (isArabic ? '______ ؟ ______' : '______ ? ______')}
        </span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="border border-[#E5E5E5] rounded-xl bg-[#FFFFFF] p-5 sm:p-6 space-y-6 shadow-xs">
      {/* Category header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#737373] uppercase tracking-wider pb-3 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#171717]" />
          <span>{isArabic ? 'النوع C: إكمال المصطلح المفقود في التعريف' : 'Type C: Complete the Missing Keyword'}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#F5F5F5] text-[#171717] font-semibold">
          {exercise.chapterId.toUpperCase()}
        </span>
      </div>

      {/* Prompt */}
      <div className="space-y-3" dir={isArabic ? 'rtl' : 'ltr'}>
        <h3 className="text-sm sm:text-base font-semibold text-[#525252]">
          {isArabic ? exercise.promptAr : exercise.promptEn}
        </h3>

        {/* Fill in the blank sentence box */}
        <div className="p-4 sm:p-5 rounded-xl border-2 border-[#171717] bg-[#FAFAFA] text-sm sm:text-base text-[#171717] font-medium">
          {renderSentenceWithBlank()}
        </div>
      </div>

      {/* Progressive Hints */}
      {!isSubmitted && (
        <RecallHint
          hintsEn={exercise.hints}
          hintsAr={exercise.hintsAr}
          isArabic={isArabic}
        />
      )}

      {/* Options */}
      <div className="space-y-3" dir={isArabic ? 'rtl' : 'ltr'}>
        <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider block">
          {isArabic ? 'اختر الكلمة المناسبة لملء الفراغ:' : 'Choose the term that fills the blank:'}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exercise.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            let optStyle = 'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] hover:bg-[#FAFAFA] text-[#171717]';

            if (isSubmitted) {
              if (opt.isCorrect) {
                optStyle = 'border-[#171717] bg-[#171717] text-[#FFFFFF] shadow-xs';
              } else if (isSelected && !opt.isCorrect) {
                optStyle = 'border-[#171717] bg-[#F5F5F5] text-[#737373] line-through';
              } else {
                optStyle = 'border-[#E5E5E5] bg-[#FFFFFF] text-[#A3A3A3] opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleSubmit(opt)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-lg border-2 text-xs sm:text-sm font-semibold transition-all flex items-center gap-3 ${optStyle}`}
              >
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                    isSubmitted && opt.isCorrect
                      ? 'bg-[#FFFFFF] text-[#171717]'
                      : isSelected
                      ? 'bg-[#171717] text-[#FFFFFF]'
                      : 'bg-[#F0F0F0] text-[#525252]'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-snug flex-1">
                  {isArabic ? opt.textAr : opt.textEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {isSubmitted && selectedOption && (
        <RecallFeedback
          isCorrect={isCorrect}
          explanationEn={exercise.explanationEn}
          explanationAr={exercise.explanationAr}
          feedbackEn={selectedOption.feedbackEn}
          feedbackAr={selectedOption.feedbackAr}
          relatedLessonId={exercise.relatedLessonId}
          chapterId={exercise.chapterId}
          onNext={onNext}
          onRetry={handleRetry}
          isLastQuestion={isLastQuestion}
          isArabic={isArabic}
        />
      )}
    </div>
  );
}

