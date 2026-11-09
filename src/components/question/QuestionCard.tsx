import React, { useState } from 'react';
import type { Question } from '../../types';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import {
  normalizeQuestion,
  validateQuestionAnswer,
  type NormalizedQuestion,
} from '../../utils/questionNormalizer';
import QuestionHeader from './QuestionHeader';
import QuestionStatement from './QuestionStatement';
import TrueFalseOptions from './TrueFalseOptions';
import MCQOptions from './MCQOptions';
import MultipleSelectOptions from './MultipleSelectOptions';
import ShortAnswerInput from './ShortAnswerInput';
import MathematicalAnswerInput from './MathematicalAnswerInput';
import QuestionSubmitButton from './QuestionSubmitButton';
import QuestionFeedback from './QuestionFeedback';
import QuestionHint from './QuestionHint';
import AnswerExplanation from './AnswerExplanation';
import FeistelNetworkDiagram from '../diagrams/FeistelNetworkDiagram';

export interface QuestionCardProps {
  question: Question;
  index?: number;
  userAnswer?: any;
  isSubmitted?: boolean;
  onSelectAnswer?: (answer: any) => void;
  onSubmitAnswer?: (result: { isCorrect: boolean; answer: any }) => void;
  allowBookmark?: boolean;
  showIndex?: boolean;
  className?: string;
}

export default function QuestionCard({
  question,
  index,
  userAnswer,
  isSubmitted = false,
  onSelectAnswer,
  onSubmitAnswer,
  allowBookmark = true,
  showIndex = true,
  className = '',
}: QuestionCardProps): React.ReactElement {
  const { language } = useUI();
  const { isBookmarked, toggleBookmark, recordQuestionResult } = useProgress();

  // Normalize question once
  const normQ: NormalizedQuestion = normalizeQuestion(question);

  // Local state for translation toggle
  const [altLangActive, setAltLangActive] = useState<boolean>(false);

  // Local answer & submission state if not managed externally
  const [localAnswer, setLocalAnswer] = useState<any>(userAnswer);
  const [localSubmitted, setLocalSubmitted] = useState<boolean>(isSubmitted);

  const activeAnswer = userAnswer !== undefined ? userAnswer : localAnswer;
  const activeSubmitted = isSubmitted || localSubmitted;

  const bookmarked = isBookmarked(normQ.id);

  // Determine active language
  const isArabicDisplay = language === 'ar' ? !altLangActive : altLangActive;
  const hasTranslation = Boolean(normQ.stemAr);

  // Evaluate answer if submitted
  const validation = activeSubmitted
    ? validateQuestionAnswer(normQ, activeAnswer, isArabicDisplay ? 'ar' : 'en')
    : null;

  // Answer selection handlers
  const handleSelect = (val: any) => {
    if (activeSubmitted) return;
    setLocalAnswer(val);
    onSelectAnswer?.(val);
  };

  const handleToggleMultiSelect = (idx: number) => {
    if (activeSubmitted) return;
    const currentList: number[] = Array.isArray(activeAnswer) ? [...activeAnswer] : [];
    const existing = currentList.indexOf(idx);
    if (existing !== -1) {
      currentList.splice(existing, 1);
    } else {
      currentList.push(idx);
    }
    setLocalAnswer(currentList);
    onSelectAnswer?.(currentList);
  };

  const handleSubmit = () => {
    if (activeAnswer === undefined || activeAnswer === '' || (Array.isArray(activeAnswer) && activeAnswer.length === 0)) {
      return;
    }
    setLocalSubmitted(true);
    const result = validateQuestionAnswer(normQ, activeAnswer, isArabicDisplay ? 'ar' : 'en');
    recordQuestionResult(normQ.id, result.isCorrect, activeAnswer);
    onSubmitAnswer?.({ isCorrect: result.isCorrect, answer: activeAnswer });
  };

  const handleRetry = () => {
    setLocalAnswer(undefined);
    setLocalSubmitted(false);
  };

  // Determine if student has provided a valid answer to submit
  const canSubmit =
    activeAnswer !== undefined &&
    activeAnswer !== '' &&
    !(Array.isArray(activeAnswer) && activeAnswer.length === 0);

  return (
    <div
      id={`q-${normQ.id}`}
      className={`border border-[#E5E5E5] bg-[#FFFFFF] rounded-lg p-5 sm:p-6 space-y-5 hover:border-[#171717] transition-all shadow-xs ${className}`}
    >
      {/* 1. Question Header */}
      <QuestionHeader
        index={showIndex ? index : undefined}
        source={normQ.source}
        type={normQ.type}
        difficulty={normQ.difficulty}
        originalNumber={normQ.originalNumber}
        isBookmarked={bookmarked}
        onToggleBookmark={() => toggleBookmark(normQ.id)}
        hasTranslation={hasTranslation}
        isDisplayingArabic={isArabicDisplay}
        onToggleLanguage={() => setAltLangActive(!altLangActive)}
        allowBookmark={allowBookmark}
      />

      {/* 2. Question Statement */}
      <QuestionStatement
        stemEn={normQ.stemEn}
        stemAr={normQ.stemAr}
        isDisplayingArabic={isArabicDisplay}
        altLangActive={altLangActive}
      />

      {/* Embedded Feistel Network Diagram for mid22 diagram problem */}
      {normQ.id.includes('feistel') && (
        <div className="my-3 border border-[#E5E5E5] rounded p-4 bg-[#FAFAFA]">
          <FeistelNetworkDiagram />
        </div>
      )}

      {/* 3. Question Options / Input Controls by Type */}
      <div className="space-y-3">
        {/* Type A: True / False */}
        {normQ.type === 'true-false' && (
          <TrueFalseOptions
            selectedAnswer={activeAnswer}
            isSubmitted={activeSubmitted}
            correctAnswerIndex={normQ.correctAnswerIndex}
            onSelect={handleSelect}
            isArabic={isArabicDisplay}
          />
        )}

        {/* Type B: Multiple Choice */}
        {normQ.type === 'multiple-choice' && (
          <MCQOptions
            optionsEn={normQ.optionsEn}
            optionsAr={normQ.optionsAr}
            selectedAnswer={activeAnswer}
            isSubmitted={activeSubmitted}
            correctAnswerIndex={normQ.correctAnswerIndex}
            onSelect={handleSelect}
            isArabic={isArabicDisplay}
          />
        )}

        {/* Type C: Multiple Select */}
        {normQ.type === 'multiple-select' && (
          <MultipleSelectOptions
            optionsEn={normQ.optionsEn}
            optionsAr={normQ.optionsAr}
            selectedAnswers={Array.isArray(activeAnswer) ? activeAnswer : []}
            isSubmitted={activeSubmitted}
            correctAnswerIndices={normQ.correctAnswerIndices}
            onToggle={handleToggleMultiSelect}
            isArabic={isArabicDisplay}
          />
        )}

        {/* Type D: Short Answer & Fill Blank */}
        {(normQ.type === 'short-answer' || normQ.type === 'fill-blank') && (
          <ShortAnswerInput
            value={activeAnswer !== undefined ? String(activeAnswer) : ''}
            onChange={handleSelect}
            isSubmitted={activeSubmitted}
            isArabic={isArabicDisplay}
          />
        )}

        {/* Type E: Mathematical, Diagram & Practical Problems */}
        {(normQ.type === 'mathematical' || normQ.type === 'practical-problem' || normQ.type === 'diagram') && (
          <MathematicalAnswerInput
            value={activeAnswer !== undefined ? String(activeAnswer) : ''}
            onChange={handleSelect}
            isSubmitted={activeSubmitted}
            isArabic={isArabicDisplay}
            expectedFormatHint={
              normQ.id.includes('s2')
                ? 'Format: 2 = 0010'
                : normQ.id.includes('hill')
                  ? 'Format: ciphertext string (e.g. HDS)'
                  : undefined
            }
          />
        )}
      </div>

      {/* 4. Submission & Action Controls */}
      <div className="pt-2 border-t border-[#F2F2F2]">
        <QuestionSubmitButton
          isSubmitted={activeSubmitted}
          canSubmit={canSubmit}
          onSubmit={handleSubmit}
          onRetry={handleRetry}
          isArabic={isArabicDisplay}
        />
      </div>

      {/* 5. Post-Submission Feedback */}
      {activeSubmitted && validation && (
        <QuestionFeedback
          isCorrect={validation.isCorrect}
          isVerified={validation.isVerified}
          userAnswerFormatted={validation.userAnswerFormatted}
          expectedAnswerFormatted={validation.expectedAnswerFormatted}
          isArabic={isArabicDisplay}
          feedbackText={validation.feedbackText}
        />
      )}

      {/* 6. Contextual Hint (Visible or Expandable) */}
      {(normQ.hintEn || normQ.hintAr) && (
        <QuestionHint
          hintEn={normQ.hintEn}
          hintAr={normQ.hintAr}
          hintLevel1En={normQ.hintLevel1En}
          hintLevel2En={normQ.hintLevel2En}
          hintLevel1Ar={normQ.hintLevel1Ar}
          hintLevel2Ar={normQ.hintLevel2Ar}
          isArabic={isArabicDisplay}
        />
      )}

      {/* 7. Comprehensive Academic Explanation (Revealed when submitted) */}
      {activeSubmitted && (
        <AnswerExplanation
          explanationEn={normQ.explanationEn}
          explanationAr={normQ.explanationAr}
          relatedLessonId={normQ.relatedLessonId}
          stemEn={normQ.stemEn}
          stemAr={normQ.stemAr}
          optionsEn={normQ.optionsEn}
          correctAnswerText={validation?.expectedAnswerFormatted}
          userAnswerFormatted={validation?.userAnswerFormatted}
          isCorrect={validation?.isCorrect}
          chapterId={normQ.chapterId}
          source={normQ.source}
          isArabic={isArabicDisplay}
        />
      )}
    </div>
  );
}

