import React, { useState } from 'react';
import type { RecallExercise } from '../../data/keywords/types';
import { useProgress } from '../../store/progressStore';
import KeywordToConceptCard from './KeywordToConceptCard';
import ConceptToKeywordCard from './ConceptToKeywordCard';
import MissingKeywordCard from './MissingKeywordCard';
import KeywordMatchingCard from './KeywordMatchingCard';
import MathConditionCard from './MathConditionCard';
import ExamTriggerCard from './ExamTriggerCard';
import { Sparkles, Trophy, X, RotateCcw, Award } from 'lucide-react';

export interface KeywordRecallSessionProps {
  exercises: RecallExercise[];
  onFinish?: () => void;
  onExit: () => void;
  isArabic?: boolean;
}

export interface SessionAnswerRecord {
  exerciseId: string;
  keywordId: string;
  chapterId: string;
  isCorrect: boolean;
  confusedWithId?: string;
}

export default function KeywordRecallSession({
  exercises,
  onFinish,
  onExit,
  isArabic = false,
}: KeywordRecallSessionProps): React.ReactElement {
  const { recordKeywordAttempt } = useProgress();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<SessionAnswerRecord[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isSessionFinished, setIsSessionFinished] = useState<boolean>(false);

  if (!exercises || exercises.length === 0) {
    return (
      <div className="p-8 text-center space-y-4 border border-[#E5E5E5] rounded-xl bg-[#FFFFFF]">
        <p className="text-sm text-[#737373]">
          {isArabic ? 'لا توجد أسئلة استرجاع متاحة لهذا التصنيف حالياً.' : 'No recall exercises available for this filter.'}
        </p>
        <button
          type="button"
          onClick={onExit}
          className="px-4 py-2 bg-[#171717] text-[#FFFFFF] rounded-md text-xs font-semibold"
        >
          {isArabic ? 'العودة إلى لوحة التحكم' : 'Return to Hub'}
        </button>
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];
  const isLast = currentIndex === exercises.length - 1;

  const handleExerciseAnswer = (isCorrect: boolean, selectedData: any) => {
    // Determine confusedWithId if option had a related keyword
    let confusedWithId: string | undefined = undefined;
    if (!isCorrect && selectedData?.relatedKeywordId) {
      confusedWithId = selectedData.relatedKeywordId;
    }

    const newRecord: SessionAnswerRecord = {
      exerciseId: currentExercise.id,
      keywordId: currentExercise.relatedKeywordId,
      chapterId: currentExercise.chapterId,
      isCorrect,
      confusedWithId,
    };

    setAnswers((prev) => [...prev, newRecord]);

    // Record in global spaced repetition progress store
    recordKeywordAttempt(
      currentExercise.relatedKeywordId,
      currentExercise.chapterId,
      isCorrect,
      confusedWithId
    );

    // Update streak
    if (isCorrect) {
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextExercise = () => {
    if (isLast) {
      setIsSessionFinished(true);
      if (onFinish) onFinish();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Calculate summary stats
  const totalQuestions = exercises.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  // If session is complete, render detailed summary
  if (isSessionFinished) {
    return (
      <div className="max-w-2xl mx-auto border-2 border-[#171717] rounded-2xl bg-[#FFFFFF] p-6 sm:p-8 space-y-6 shadow-sm" dir={isArabic ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="text-center space-y-2 pb-4 border-b border-[#E5E5E5]">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#171717] text-[#FFFFFF] flex items-center justify-center">
            <Trophy className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-[#171717]">
            {isArabic ? 'اكتملت جلسة الاسترجاع بنجاح!' : 'Recall Session Completed!'}
          </h2>
          <p className="text-xs text-[#525252]">
            {isArabic
              ? 'تم تسجيل نتائج المحاولات وتحديث فواصل التكرار المتباعد لجميع المفاهيم.'
              : 'All recall attempts recorded. Spaced retention schedules updated.'}
          </p>
        </div>

        {/* Score Metrics */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#737373]">
              {isArabic ? 'الدقة والاستيعاب' : 'Accuracy'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              {scorePercentage}%
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#737373]">
              {isArabic ? 'الإجابات الصحيحة' : 'Correct'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              {correctCount} / {totalQuestions}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#737373]">
              {isArabic ? 'أطول سلسلة صحيحة' : 'Max Streak'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#171717] flex items-center justify-center gap-1">
              <span>{maxStreak}</span>
              <Sparkles className="w-4 h-4 text-[#171717]" />
            </div>
          </div>
        </div>

        {/* Retention impact message */}
        <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center gap-3">
          <Award className="w-5 h-5 text-[#171717] shrink-0" />
          <p className="text-xs text-[#171717] leading-relaxed">
            {scorePercentage >= 80
              ? isArabic
                ? 'أداء ممتاز! تم تمديد فترات مراجعة هذه المفاهيم في جدول التكرار المتباعد إلى فترات أطول.'
                : 'Superb mastery! Correct concepts advanced to higher spaced repetition intervals.'
              : isArabic
                ? 'تمت جدولة المفاهيم التي احتجت فيها مساعدة للمراجعة غداً لترسيخها في الذاكرة الدائمة.'
                : 'Concepts that were missed have been scheduled for tomorrow’s rapid reinforcement queue.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onExit}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#171717] bg-[#FFFFFF] text-[#171717] text-xs font-bold hover:bg-[#F5F5F5] transition-colors"
          >
            {isArabic ? 'العودة إلى لوحة استرجاع الكلمات' : 'Return to Recall Dashboard'}
          </button>

          <button
            type="button"
            onClick={() => {
              setCurrentIndex(0);
              setAnswers([]);
              setStreak(0);
              setIsSessionFinished(false);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#171717] text-[#FFFFFF] text-xs font-bold hover:bg-[#000000] transition-colors shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isArabic ? 'بدء جلسة جديدة' : 'Start Another Session'}</span>
          </button>
        </div>
      </div>
    );
  }

  // Active Session View
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Session Progress Header */}
      <div className="flex items-center justify-between px-2 text-xs text-[#525252]">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-[#171717]">
            {isArabic
              ? `التدريب ${currentIndex + 1} من ${totalQuestions}`
              : `Exercise ${currentIndex + 1} of ${totalQuestions}`}
          </span>
          {streak > 1 && (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-full bg-[#FFF1A6] text-[#171717] font-bold border border-[#E2C65A]">
              <Sparkles className="w-3 h-3" />
              <span>{streak} Streak!</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-1 text-[11px] text-[#737373] hover:text-[#171717] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          <span>{isArabic ? 'مغادرة الجلسة' : 'Exit Session'}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#171717] transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Render Current Exercise Component based on type */}
      {currentExercise.type === 'keyword-to-concept' && (
        <KeywordToConceptCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}

      {currentExercise.type === 'concept-to-keyword' && (
        <ConceptToKeywordCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}

      {currentExercise.type === 'missing-keyword' && (
        <MissingKeywordCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}

      {currentExercise.type === 'matching' && (
        <KeywordMatchingCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}

      {currentExercise.type === 'math-condition' && (
        <MathConditionCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}

      {currentExercise.type === 'exam-trigger' && (
        <ExamTriggerCard
          key={currentExercise.id}
          exercise={currentExercise}
          onAnswer={handleExerciseAnswer}
          onNext={handleNextExercise}
          isLastQuestion={isLast}
          isArabic={isArabic}
        />
      )}
    </div>
  );
}
