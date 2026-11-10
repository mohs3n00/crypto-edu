import { basmagaQuestions } from './basmagaData';
import { quickReferenceData } from './quickReferenceData';
import type { BasmagaQuestion, BasmagaQuickReferenceEntry, BasmagaSourceType } from './types';

export * from './types';
export { basmagaQuestions } from './basmagaData';
export { quickReferenceData } from './quickReferenceData';

export function getBasmagaQuestions(): BasmagaQuestion[] {
  return basmagaQuestions;
}

export function getBasmagaQuestionById(id: string): BasmagaQuestion | undefined {
  return basmagaQuestions.find((q) => q.id === id);
}

export function getQuickReferenceEntries(): BasmagaQuickReferenceEntry[] {
  return quickReferenceData;
}

export function filterBasmagaQuestions(params: {
  chapterId?: string;
  sourceType?: BasmagaSourceType | 'all';
  type?: 'mcq' | 'true-false' | 'all';
  searchQuery?: string;
  frequentlyConfusedOnly?: boolean;
}): BasmagaQuestion[] {
  let list = basmagaQuestions;

  if (params.chapterId && params.chapterId !== 'all') {
    list = list.filter((q) => q.chapterId === params.chapterId);
  }

  if (params.sourceType && params.sourceType !== 'all') {
    list = list.filter((q) => q.sourceType === params.sourceType);
  }

  if (params.type && params.type !== 'all') {
    list = list.filter((q) => q.type === params.type);
  }

  if (params.frequentlyConfusedOnly) {
    list = list.filter((q) => q.isFrequentlyConfused);
  }

  if (params.searchQuery && params.searchQuery.trim().length > 0) {
    const q = params.searchQuery.toLowerCase().trim();
    list = list.filter((item) => {
      const inEn = item.questionEn.toLowerCase().includes(q);
      const inAr = item.questionAr?.toLowerCase().includes(q) || false;
      const inKeywords = item.importantKeywords.some(
        (kw) => kw.en.toLowerCase().includes(q) || kw.ar.toLowerCase().includes(q)
      );
      const inConcept =
        item.basmagaRule.targetConcept.toLowerCase().includes(q) ||
        item.basmagaRule.targetConceptAr.toLowerCase().includes(q);
      const inRule =
        item.basmagaRule.en.toLowerCase().includes(q) || item.basmagaRule.ar.toLowerCase().includes(q);
      return inEn || inAr || inKeywords || inConcept || inRule;
    });
  }

  return list;
}

export function filterQuickReference(params: {
  chapterId?: string;
  searchQuery?: string;
}): BasmagaQuickReferenceEntry[] {
  let list = quickReferenceData;

  if (params.chapterId && params.chapterId !== 'all') {
    list = list.filter((e) => e.chapterId === params.chapterId);
  }

  if (params.searchQuery && params.searchQuery.trim().length > 0) {
    const q = params.searchQuery.toLowerCase().trim();
    list = list.filter((item) => {
      return (
        item.keywordEn.toLowerCase().includes(q) ||
        item.keywordAr.toLowerCase().includes(q) ||
        item.conceptEn.toLowerCase().includes(q) ||
        item.conceptAr.toLowerCase().includes(q) ||
        item.ruleEn.toLowerCase().includes(q) ||
        item.ruleAr.toLowerCase().includes(q)
      );
    });
  }

  return list;
}

