import { workedProblems } from './problemSolvingData';
import type { ProblemCategory, ProblemSourceType, WorkedProblem } from './types';

export * from './types';
export { workedProblems } from './problemSolvingData';
export * from './practiceChallenges';

export function getWorkedProblems(): WorkedProblem[] {
  return workedProblems;
}

export function getWorkedProblemById(id: string): WorkedProblem | undefined {
  return workedProblems.find((p) => p.id === id);
}

export function filterWorkedProblems(params: {
  chapterId?: string;
  category?: ProblemCategory | 'all';
  sourceType?: ProblemSourceType | 'all';
  searchQuery?: string;
}): WorkedProblem[] {
  let list = workedProblems;

  if (params.chapterId && params.chapterId !== 'all') {
    list = list.filter((p) => p.chapterId === params.chapterId);
  }

  if (params.category && params.category !== 'all') {
    list = list.filter((p) => p.category === params.category);
  }

  if (params.sourceType && params.sourceType !== 'all') {
    list = list.filter((p) => p.sourceType === params.sourceType);
  }

  if (params.searchQuery && params.searchQuery.trim().length > 0) {
    const q = params.searchQuery.toLowerCase().trim();
    list = list.filter((p) => {
      const inTitle = p.title.toLowerCase().includes(q) || p.titleAr.toLowerCase().includes(q);
      const inProblem = p.problem.toLowerCase().includes(q) || p.problemAr.toLowerCase().includes(q);
      const inFormula = p.governingFormula?.name.toLowerCase().includes(q) || false;
      const inKeywords =
        p.keywordIndicators?.some(
          (kw) =>
            kw.keyword.toLowerCase().includes(q) ||
            kw.keywordAr.toLowerCase().includes(q) ||
            kw.indicates.toLowerCase().includes(q) ||
            kw.indicatesAr.toLowerCase().includes(q)
        ) || false;
      return inTitle || inProblem || inFormula || inKeywords;
    });
  }

  return list;
}

