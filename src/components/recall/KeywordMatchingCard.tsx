import React, { useState, useMemo } from 'react';
import type { RecallExercise } from '../../data/keywords/types';
import RecallFeedback from './RecallFeedback';
import { Shuffle, Check, CheckCircle2, RotateCcw } from 'lucide-react';

export interface KeywordMatchingCardProps {
  exercise: RecallExercise;
  onAnswer: (isCorrect: boolean, selectedData: any) => void;
  onNext: () => void;
  isLastQuestion?: boolean;
  isArabic?: boolean;
}

export default function KeywordMatchingCard({
  exercise,
  onAnswer,
  onNext,
  isLastQuestion = false,
  isArabic = false,
}: KeywordMatchingCardProps): React.ReactElement {
  const originalPairs = useMemo(() => exercise.matchingPairs || [], [exercise.matchingPairs]);

  // Shuffled keywords (Left column) and concepts (Right column) initialized stably per exercise
  const [leftItems] = useState(() => {
    const list = [...(exercise.matchingPairs || [])];
    for (let i = list.length - 1; i > 0; i--) {
      const j = (i * 7 + 3) % (i + 1);
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  });

  const [rightItems] = useState(() => {
    const list = [...(exercise.matchingPairs || [])];
    for (let i = list.length - 1; i > 0; i--) {
      const j = (i * 11 + 5) % (i + 1);
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  });

  // Pair state: map of leftId -> rightId
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Check how many are paired
  const pairedCount = Object.keys(pairs).length;
  const isAllPaired = pairedCount === originalPairs.length && originalPairs.length > 0;

  // Handle click on left term
  const handleLeftClick = (id: string) => {
    if (isSubmitted) return;
    if (pairs[id]) {
      // Unpair if already paired
      const next = { ...pairs };
      delete next[id];
      setPairs(next);
      setSelectedLeftId(null);
      return;
    }
    setSelectedLeftId(id === selectedLeftId ? null : id);
  };

  // Handle click on right concept
  const handleRightClick = (id: string) => {
    if (isSubmitted) return;

    // Check if this rightId is already paired with some left
    const existingLeft = Object.keys(pairs).find((l) => pairs[l] === id);
    if (existingLeft) {
      // Unpair it
      const next = { ...pairs };
      delete next[existingLeft];
      setPairs(next);
      return;
    }

    // If a left item is currently selected, form a pair
    if (selectedLeftId) {
      setPairs((prev) => ({
        ...prev,
        [selectedLeftId]: id,
      }));
      setSelectedLeftId(null);
    }
  };

  const handleResetPairs = () => {
    setPairs({});
    setSelectedLeftId(null);
    setIsSubmitted(false);
  };

  const handleCheckAnswers = () => {
    if (!isAllPaired || isSubmitted) return;
    setIsSubmitted(true);

    let correctCount = 0;
    for (const [leftId, rightId] of Object.entries(pairs)) {
      if (leftId === rightId) correctCount++;
    }

    const allCorrect = correctCount === originalPairs.length;
    onAnswer(allCorrect, { pairs, correctCount, total: originalPairs.length });
  };

  // Evaluation results
  const evaluation = useMemo(() => {
    if (!isSubmitted) return null;
    let correct = 0;
    const results: Record<string, boolean> = {};
    for (const [leftId, rightId] of Object.entries(pairs)) {
      const match = leftId === rightId;
      results[leftId] = match;
      if (match) correct++;
    }
    return {
      correctCount: correct,
      total: originalPairs.length,
      allCorrect: correct === originalPairs.length,
      results,
    };
  }, [isSubmitted, pairs, originalPairs]);

  const getPairIndex = (leftId: string): number => {
    const keys = Object.keys(pairs);
    return keys.indexOf(leftId);
  };

  return (
    <div className="border border-[#E5E5E5] rounded-xl bg-[#FFFFFF] p-5 sm:p-6 space-y-6 shadow-xs">
      {/* Category header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#737373] uppercase tracking-wider pb-3 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-1.5">
          <Shuffle className="w-3.5 h-3.5 text-[#171717]" />
          <span>{isArabic ? 'النوع D: مطابقة الكلمات المفتاحية بالمفاهيم' : 'Type D: Match Keywords with Concepts'}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#F5F5F5] text-[#171717] font-semibold">
          {exercise.chapterId.toUpperCase()}
        </span>
      </div>

      {/* Prompt */}
      <div className="space-y-1" dir={isArabic ? 'rtl' : 'ltr'}>
        <h3 className="text-sm sm:text-base font-semibold text-[#171717]">
          {isArabic ? exercise.promptAr : exercise.promptEn}
        </h3>
        <p className="text-xs text-[#737373]">
          {isArabic
            ? 'اضغط على مصطلح في العمود الأول، ثم اضغط على تعريفه المطابق في العمود الثاني لتوصيلهما.'
            : 'Tap a keyword on the left, then tap its matching concept on the right to pair them together.'}
        </p>
      </div>

      {/* Matching Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" dir={isArabic ? 'rtl' : 'ltr'}>
        {/* Left Column: Keywords */}
        <div className="space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#737373] block">
            {isArabic ? 'الكلمات المفتاحية (Keywords)' : 'Academic Keywords'}
          </span>
          <div className="space-y-2">
            {leftItems.map((item) => {
              const isSelected = selectedLeftId === item.id;
              const pairedRightId = pairs[item.id];
              const pIdx = getPairIndex(item.id);
              const isEvalCorrect = evaluation?.results[item.id];

              let borderClass = 'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717]';
              if (isSelected) {
                borderClass = 'border-[#000000] ring-2 ring-[#000000] bg-[#FAFAFA] font-bold';
              } else if (pairedRightId) {
                borderClass = 'border-[#171717] bg-[#F5F5F5] font-semibold';
              }

              if (isSubmitted) {
                borderClass = isEvalCorrect
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#171717] bg-[#F5F5F5] text-[#737373] line-through';
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleLeftClick(item.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 text-xs sm:text-sm transition-all flex items-center justify-between gap-2.5 ${borderClass}`}
                >
                  <span className="truncate">
                    {isArabic ? item.keywordAr : item.keywordEn}
                  </span>
                  {pairedRightId && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${
                        isSubmitted && isEvalCorrect
                          ? 'bg-[#FFFFFF] text-[#171717]'
                          : 'bg-[#171717] text-[#FFFFFF]'
                      }`}
                    >
                      Pair #{pIdx + 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Concepts */}
        <div className="space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#737373] block">
            {isArabic ? 'المفاهيم والتعريفات (Concepts)' : 'Academic Definitions'}
          </span>
          <div className="space-y-2">
            {rightItems.map((item) => {
              const pairedLeftId = Object.keys(pairs).find((l) => pairs[l] === item.id);
              const pIdx = pairedLeftId ? getPairIndex(pairedLeftId) : -1;
              const isEvalCorrect = pairedLeftId ? evaluation?.results[pairedLeftId] : false;

              let borderClass = 'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717]';
              if (pairedLeftId) {
                borderClass = 'border-[#171717] bg-[#F5F5F5] font-semibold';
              } else if (selectedLeftId) {
                borderClass = 'border-[#E5E5E5] hover:border-[#171717] bg-[#FFFFFF] cursor-pointer ring-1 ring-[#D4D4D4]';
              }

              if (isSubmitted) {
                borderClass = isEvalCorrect
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#171717] bg-[#F5F5F5] text-[#737373]';
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleRightClick(item.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 text-xs transition-all flex items-start justify-between gap-2.5 leading-relaxed ${borderClass}`}
                >
                  <span className="flex-1">
                    {isArabic ? item.conceptAr : item.conceptEn}
                  </span>
                  {pairedLeftId && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${
                        isSubmitted && isEvalCorrect
                          ? 'bg-[#FFFFFF] text-[#171717]'
                          : 'bg-[#171717] text-[#FFFFFF]'
                      }`}
                    >
                      Pair #{pIdx + 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress & Submit Bar */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#525252]">
          <span>{isArabic ? 'المطابقات:' : 'Pairs:'}</span>
          <span className="font-bold text-[#171717]">
            {pairedCount} / {originalPairs.length}
          </span>
          {isAllPaired && !isSubmitted && (
            <span className="text-[11px] text-[#171717] font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              {isArabic ? 'جاهز للتدقيق' : 'Ready to verify'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isSubmitted && pairedCount > 0 && (
            <button
              type="button"
              onClick={handleResetPairs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D4D4D4] bg-[#FFFFFF] text-xs font-semibold text-[#171717] hover:bg-[#F5F5F5] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{isArabic ? 'إعادة التعيين' : 'Clear All'}</span>
            </button>
          )}

          {!isSubmitted && (
            <button
              type="button"
              disabled={!isAllPaired}
              onClick={handleCheckAnswers}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold transition-all ${
                isAllPaired
                  ? 'bg-[#171717] text-[#FFFFFF] hover:bg-[#000000] shadow-xs'
                  : 'bg-[#E5E5E5] text-[#A3A3A3] cursor-not-allowed'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تدقيق المطابقات' : 'Check Matches'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Feedback upon submission */}
      {isSubmitted && evaluation && (
        <RecallFeedback
          isCorrect={evaluation.allCorrect}
          explanationEn={`You matched ${evaluation.correctCount} out of ${evaluation.total} concepts correctly. Review the pairs to reinforce your active recognition.`}
          explanationAr={`لقد قمت بمطابقة ${evaluation.correctCount} من أصل ${evaluation.total} مفاهيم بنجاح. راجع الروابط لترسيخ التذكر.`}
          relatedLessonId={exercise.relatedLessonId}
          chapterId={exercise.chapterId}
          onNext={onNext}
          onRetry={handleResetPairs}
          isLastQuestion={isLastQuestion}
          isArabic={isArabic}
        />
      )}
    </div>
  );
}
