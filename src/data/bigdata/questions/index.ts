import type { Question } from '../../../types';
import { midterm2025Questions } from './midterm2025';
import { quizPreprocessing } from './quizPreprocessing';
import { quizLifecycle } from './quizLifecycle';
import { quizClustering } from './quizClustering';

export { midterm2025Questions } from './midterm2025';
export { quizPreprocessing } from './quizPreprocessing';
export { quizLifecycle } from './quizLifecycle';
export { quizClustering } from './quizClustering';

export const allBigDataQuestions: Question[] = [
  ...midterm2025Questions,
  ...quizPreprocessing,
  ...quizLifecycle,
  ...quizClustering,
];

export function getBigDataQuestionById(id: string): Question | undefined {
  return allBigDataQuestions.find((q) => q.id === id);
}

export function getBigDataQuestionsByChapter(chapterId: string): Question[] {
  return allBigDataQuestions.filter((q) => q.chapterId === chapterId);
}

export function getBigDataExamQuestions(examId: string): Question[] {
  if (examId === 'bigdata-mid2025') {
    return midterm2025Questions;
  }
  if (examId === 'bigdata-all') {
    return allBigDataQuestions;
  }
  return allBigDataQuestions;
}

export interface FilterBigDataParams {
  chapterId?: string;
  type?: string;
  difficulty?: string;
  source?: string;
  searchQuery?: string;
}

export function filterBigDataQuestions(params: FilterBigDataParams): Question[] {
  let list = allBigDataQuestions;

  if (params.chapterId && params.chapterId !== 'all') {
    list = list.filter((q) => q.chapterId === params.chapterId);
  }

  if (params.type && params.type !== 'all') {
    list = list.filter((q) => {
      if (params.type === 'mcq') return q.type === 'mcq' || q.type === 'multiple-choice';
      if (params.type === 'truefalse') return q.type === 'truefalse' || q.type === 'true-false';
      if (params.type === 'shortanswer') return q.type === 'shortanswer' || q.type === 'short-answer';
      return q.type === params.type;
    });
  }

  if (params.difficulty && params.difficulty !== 'all') {
    list = list.filter((q) => q.difficulty === params.difficulty);
  }

  if (params.source && params.source !== 'all') {
    list = list.filter((q) => {
      if (params.source === 'midterm2025') return q.id.startsWith('bd-mid25-');
      if (params.source === 'quiz-prep') return q.id.startsWith('bd-prep-');
      if (params.source === 'quiz-lifecycle') return q.id.startsWith('bd-life-');
      if (params.source === 'quiz-clustering') return q.id.startsWith('bd-clust-');
      return q.source === params.source;
    });
  }

  if (params.searchQuery && params.searchQuery.trim().length > 0) {
    const query = params.searchQuery.toLowerCase().trim();
    list = list.filter((q) => {
      const stemEn = q.en.stem.toLowerCase();
      const stemAr = q.ar?.stem.toLowerCase() || '';
      const expEn = q.explanation.toLowerCase();
      const expAr = q.explanationAr.toLowerCase();
      return (
        stemEn.includes(query) ||
        stemAr.includes(query) ||
        expEn.includes(query) ||
        expAr.includes(query)
      );
    });
  }

  return list;
}

