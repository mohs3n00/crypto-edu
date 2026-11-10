import React, { useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from 'lucide-react';
import type { BasmagaQuestion } from '../../data/basmaga/types';
import HighlightedText from '../keywords/HighlightedText';

interface BasmagaCardProps {
  question: BasmagaQuestion;
  mode?: 'study' | 'practice';
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  onOpenProblem?: (problemId: string) => void;
}

export const BasmagaCard: React.FC<BasmagaCardProps> = ({
  question,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctAnswer;
  const correctOpt = question.options.find((o) => o.key === question.correctAnswer);

  const handleSelectOption = (key: string) => {
    if (isAnswered) return;
    setSelectedOption(key);
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

  // Determine source label and badge
  const isOriginal = question.sourceType === 'original';

  return (
    <article
      id={question.id}
      className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-xl overflow-hidden shadow-xs hover:border-[#222222] transition-colors flex flex-col"
    >
      {/* 1. Source Header: Small, unobtrusive label */}
      <div className="px-4 py-2.5 bg-[#F7F7F5] border-b border-[#E2E2DF] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span
            className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${
              isOriginal
                ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                : 'bg-[#FFFFFF] text-[#505050] border-[#E2E2DF]'
            }`}
          >
            {isOriginal ? 'Official Exam' : 'Exam-Style Practice'}
          </span>

          <span className="text-[11px] font-mono text-[#505050] truncate">
            {question.sourceLabel}
          </span>

          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#ECEDEB] text-[#505050] border border-[#E2E2DF]">
            Unit {question.chapterId.replace('ch', '')}
          </span>
        </div>

        {/* Unobtrusive bookmark button */}
        {onToggleBookmark && (
          <button
            type="button"
            onClick={() => onToggleBookmark(question.id)}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
            className={`p-1 rounded border transition-colors ${
              isBookmarked
                ? 'border-[#222222] bg-[#E8E8E5] text-[#222222]'
                : 'border-[#E2E2DF] text-[#686868] hover:text-[#222222] hover:bg-[#ECEDEB]'
            }`}
          >
            {isBookmarked ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
          </button>
        )}
      </div>

      {/* 2. Question Area */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Original English Question Statement */}
        <div className="space-y-1.5">
          <h3 className="text-[17px] sm:text-[18px] font-bold text-[#222222] leading-relaxed">
            <HighlightedText text={question.questionEn} />
          </h3>

          {/* Concise Arabic Translation */}
          {question.questionAr && (
            <p
              dir="rtl"
              className="text-[16px] sm:text-[17px] text-[#505050] leading-[1.8] font-serif pt-1.5 border-t border-[#E2E2DF]"
            >
              <HighlightedText text={question.questionAr} isArabic />
            </p>
          )}
        </div>

        {/* Answer Choices — Single-Column Full-Width Stack */}
        <div className="space-y-2.5 pt-1 w-full">
          <div className="flex flex-col space-y-2.5 w-full">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt.key;
              const isOptCorrect = opt.key === question.correctAnswer;

              let btnStyle = 'border-[#E2E2DF] bg-[#FFFFFF] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] text-[#222222]';

              if (isAnswered) {
                if (isOptCorrect) {
                  btnStyle = 'border-2 border-[#222222] bg-[#FFFFFF] text-[#222222] font-bold shadow-xs';
                } else if (isSelected && !isOptCorrect) {
                  btnStyle = 'border border-dashed border-[#686868] bg-[#ECEDEB] text-[#505050] line-through';
                } else {
                  btnStyle = 'border-[#E2E2DF] bg-[#F7F7F5] text-[#686868] opacity-60';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`w-full p-3 sm:p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                      isAnswered && isOptCorrect
                        ? 'bg-[#222222] text-[#FFFFFF]'
                        : isAnswered && isSelected && !isOptCorrect
                        ? 'bg-[#ECEDEB] text-[#505050] border border-[#686868]'
                        : 'bg-[#F7F7F5] text-[#222222] border border-[#E2E2DF]'
                    }`}
                  >
                    {opt.key}
                  </span>

                  <div className="flex-1 min-w-0 text-[15px] sm:text-[16px]">
                    <span className="leading-relaxed font-sans">{opt.textEn}</span>
                    {opt.textAr && (
                      <span className="text-[#505050] font-serif text-[15px] sm:text-[16px] block mt-1 leading-[1.8]" dir="rtl">
                        {opt.textAr}
                      </span>
                    )}
                  </div>

                  {isAnswered && isOptCorrect && (
                    <CheckCircle2 size={18} className="text-[#222222] shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !isOptCorrect && (
                    <XCircle size={18} className="text-[#686868] shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Answer & 4. Important Keywords (Shown after submission) */}
        {isAnswered && (
          <div className="pt-3 border-t border-[#E2E2DF] space-y-3">
            {/* Answer Display */}
            <div className="p-3 rounded-lg bg-[#F7F7F5] border border-[#D4D4D0] flex flex-wrap items-center justify-between gap-2.5">
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="text-xs font-mono uppercase font-bold text-[#686868]">
                  Answer:
                </div>
                <div className="text-sm font-bold text-[#222222]">
                  {question.correctAnswer} — {correctOpt?.textEn}
                  {correctOpt?.textAr && (
                    <span className="text-xs font-normal text-[#505050] ml-2 font-sans" dir="rtl">
                      ({correctOpt.textAr})
                    </span>
                  )}
                </div>
                {/* One short explanation only when necessary to distinguish the concept */}
                {question.quickReasoning?.en && (
                  <p className="text-xs text-[#505050] pt-1 leading-relaxed">
                    {question.quickReasoning.en}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                    isCorrect
                      ? 'bg-[#FFFFFF] text-[#222222] border-[#222222]'
                      : 'bg-[#ECEDEB] text-[#505050] border-[#D4D4D0]'
                  }`}
                >
                  {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>

                <button
                  type="button"
                  onClick={handleReset}
                  title="Try question again"
                  className="p-1.5 rounded border border-[#E2E2DF] bg-[#FFFFFF] hover:bg-[#ECEDEB] text-[#505050] hover:text-[#222222] transition-colors"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            {/* Important Keywords: Compact Table */}
            {question.importantKeywords && question.importantKeywords.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase font-bold text-[#686868] block">
                  Important Keywords:
                </span>
                <div className="overflow-x-auto rounded-lg border border-[#E2E2DF]">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-[#F7F7F5] border-b border-[#E2E2DF] text-[#686868] font-mono text-[11px]">
                        <th className="px-3 py-1.5 font-semibold">Exam Keyword</th>
                        <th className="px-3 py-1.5 font-semibold">Meaning / What it indicates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E2DF] bg-[#FFFFFF]">
                      {question.importantKeywords.map((kw, i) => (
                        <tr key={i} className="hover:bg-[#F7F7F5]">
                          <td className="px-3 py-1.5 font-medium text-[#222222] whitespace-nowrap">
                            <span className="bg-[#FFF1A6] text-[#222222] px-1.5 py-0.5 rounded font-mono font-semibold">
                              {kw.en}
                            </span>
                          </td>
                          <td className="px-3 py-1.5 text-[#222222]">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span dir="rtl" className="font-sans text-[#505050]">
                                {kw.ar}
                              </span>
                              <span className="text-[#686868] font-mono text-[11px]">→</span>
                              <span className="font-semibold text-[#222222] font-mono">
                                {question.basmagaRule.targetConcept}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BasmagaCard;
