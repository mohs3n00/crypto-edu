import type { BasmagaQuestion, BasmagaSourceType, QuestionFormat } from '../../basmaga/types';
import { bigDataBasmagaQuestions } from './basmagaData';
import { bigDataQuickReferenceData } from './quickReferenceData';

export { bigDataBasmagaQuestions, bigDataQuickReferenceData };

export interface BigDataBasmagaFilterOptions {
  chapterId?: string;
  sourceType?: BasmagaSourceType | 'all';
  type?: QuestionFormat | 'all';
  searchQuery?: string;
  frequentlyConfusedOnly?: boolean;
}

export function filterBigDataBasmagaQuestions(options: BigDataBasmagaFilterOptions): BasmagaQuestion[] {
  return bigDataBasmagaQuestions.filter((q) => {
    if (options.chapterId && options.chapterId !== 'all' && q.chapterId !== options.chapterId) {
      return false;
    }
    if (options.sourceType && options.sourceType !== 'all' && q.sourceType !== options.sourceType) {
      return false;
    }
    if (options.type && options.type !== 'all' && q.type !== options.type) {
      return false;
    }
    if (options.frequentlyConfusedOnly && !q.isFrequentlyConfused) {
      return false;
    }
    if (options.searchQuery && options.searchQuery.trim()) {
      const qLower = options.searchQuery.toLowerCase();
      const matchQ =
        q.questionEn.toLowerCase().includes(qLower) ||
        (q.questionAr && q.questionAr.toLowerCase().includes(qLower));
      const matchKeywords = q.importantKeywords.some(
        (k) => k.en.toLowerCase().includes(qLower) || k.ar.toLowerCase().includes(qLower)
      );
      const matchRule =
        q.basmagaRule &&
        (q.basmagaRule.en.toLowerCase().includes(qLower) ||
          q.basmagaRule.ar.toLowerCase().includes(qLower));
      if (!matchQ && !matchKeywords && !matchRule) return false;
    }
    return true;
  });
}

