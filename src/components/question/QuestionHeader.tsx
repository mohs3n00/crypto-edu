import React from 'react';
import { Bookmark, Languages } from 'lucide-react';
import type { DifficultyLevel, QuestionSource } from '../../types';
import type { CanonicalQuestionType } from '../../utils/questionNormalizer';

export interface QuestionHeaderProps {
  index?: number;
  source: QuestionSource;
  type: CanonicalQuestionType;
  difficulty: DifficultyLevel;
  originalNumber?: string;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  hasTranslation?: boolean;
  isDisplayingArabic?: boolean;
  onToggleLanguage?: () => void;
  allowBookmark?: boolean;
}

export default function QuestionHeader({
  index,
  source,
  type,
  difficulty,
  originalNumber,
  isBookmarked = false,
  onToggleBookmark,
  hasTranslation = false,
  isDisplayingArabic = false,
  onToggleLanguage,
  allowBookmark = true,
}: QuestionHeaderProps): React.ReactElement {
  // Human readable type label
  const getTypeLabel = (t: CanonicalQuestionType): string => {
    switch (t) {
      case 'true-false':
        return 'True / False';
      case 'multiple-choice':
        return 'Multiple Choice';
      case 'multiple-select':
        return 'Multiple Select';
      case 'short-answer':
        return 'Short Answer';
      case 'fill-blank':
        return 'Fill in the Blank';
      case 'mathematical':
        return 'Mathematical Problem';
      case 'diagram':
        return 'Diagram-Based';
      case 'practical-problem':
        return 'Practical Exercise';
      default:
        return 'Question';
    }
  };

  // Human readable source label
  const getSourceLabel = (s: QuestionSource): string => {
    switch (s) {
      case 'original-tb01':
      case 'tb01':
        return 'Test Bank Unit 1';
      case 'original-tb03':
      case 'tb03':
        return 'Test Bank Unit 3';
      case 'original-tb04':
      case 'tb04':
        return 'Test Bank Unit 4';
      case 'original-mid22':
        return 'Midterm 2022 (IS401)';
      case 'original-mid20':
        return 'Midterm 2020 (IS410)';
      case 'generated':
        return 'Additional Practice';
      default:
        return s;
    }
  };

  // Human readable difficulty label
  const getDifficultyLabel = (d: DifficultyLevel): string => {
    if (d === 1 || d === 'easy') return 'Easy';
    if (d === 2 || d === 'medium') return 'Medium';
    if (d === 3 || d === 'hard') return 'Advanced';
    return String(d);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F2F2F2] text-xs">
      <div className="flex flex-wrap items-center gap-2 font-mono">
        {index !== undefined && (
          <span className="px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-[11px] font-bold">
            Q{index}
          </span>
        )}
        <span className="px-2 py-0.5 border border-[#E5E5E5] bg-[#FAFAFA] text-[#171717] font-semibold rounded text-[11px] uppercase tracking-wider">
          {getSourceLabel(source)}
        </span>
        <span className="px-2 py-0.5 border border-[#171717] bg-[#FFFFFF] text-[#171717] font-bold rounded text-[11px] uppercase tracking-wider">
          {getTypeLabel(type)}
        </span>
        <span className="px-2 py-0.5 border border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] rounded text-[11px] uppercase tracking-wider">
          {getDifficultyLabel(difficulty)}
        </span>
        {originalNumber && (
          <span className="text-[11px] text-[#737373] hidden sm:inline-block">
            ({originalNumber})
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {hasTranslation && onToggleLanguage && (
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#E5E5E5] hover:border-[#171717] bg-[#FFFFFF] rounded text-[11px] text-[#525252] hover:text-[#171717] transition-colors"
            title={
              isDisplayingArabic
                ? 'Switch to original English wording'
                : 'التبديل إلى الترجمة العربية'
            }
          >
            <Languages className="w-3.5 h-3.5" />
            <span>
              {isDisplayingArabic ? 'View Original English' : 'عرض الترجمة العربية'}
            </span>
          </button>
        )}

        {allowBookmark && onToggleBookmark && (
          <button
            type="button"
            onClick={onToggleBookmark}
            className={`p-1.5 border rounded text-xs transition-colors ${
              isBookmarked
                ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                : 'border-[#E5E5E5] text-[#737373] hover:text-[#171717] hover:border-[#171717] bg-[#FFFFFF]'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            aria-label="Bookmark Question"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        )}
      </div>
    </div>
  );
}

