import { questionsTb01 } from './tb01';
import { questionsTb03 } from './tb03';
import { questionsTb04 } from './tb04';
import { questionsMidterms } from './midterms';
import { questionsSuppCh2 } from './suppCh2';
import { questionsSuppCh7 } from './suppCh7';
import type { Question, QuestionSource, QuestionType, DifficultyLevel } from '../../types';
import { toNormalizedQuestionObject } from '../../utils/questionNormalizer';

// Combine all verbatim university questions and clearly-labeled supplementary questions:
// 45 (tb01) + 45 (tb03) + 45 (tb04) + 26 (midterms) + 14 (suppCh2) + 10 (suppCh7) = 185 verified questions!
const rawAllQuestions: Question[] = [
  ...questionsTb01,
  ...questionsTb03,
  ...questionsTb04,
  ...questionsMidterms,
  ...questionsSuppCh2,
  ...questionsSuppCh7,
];

// All questions normalized with guaranteed canonical types, complete options, and verified answer keys
export const allQuestions: Question[] = rawAllQuestions.map(toNormalizedQuestionObject);

export interface QuestionFilters {
  chapterId?: string;
  source?: QuestionSource | 'all';
  type?: QuestionType | 'all';
  difficulty?: DifficultyLevel | 'all';
  searchQuery?: string;
}

export function filterQuestions(filters: QuestionFilters): Question[] {
  return allQuestions.filter((q) => {
    if (filters.chapterId && filters.chapterId !== 'all' && q.chapterId !== filters.chapterId) {
      return false;
    }
    if (filters.source && filters.source !== 'all' && q.source !== filters.source) {
      return false;
    }
    if (filters.type && filters.type !== 'all') {
      const targetType = filters.type.toLowerCase().replace(/[^a-z]/g, '');
      const qType = q.type.toLowerCase().replace(/[^a-z]/g, '');
      if (targetType === 'truefalse' && qType !== 'truefalse' && qType !== 'tf') return false;
      if (targetType === 'multiplechoice' && qType !== 'multiplechoice' && qType !== 'mcq') return false;
      if (targetType === 'shortanswer' && qType !== 'shortanswer') return false;
      if (targetType !== 'truefalse' && targetType !== 'multiplechoice' && targetType !== 'shortanswer' && q.type !== filters.type) {
        return false;
      }
    }
    if (filters.difficulty && filters.difficulty !== 'all' && q.difficulty !== filters.difficulty) {
      return false;
    }
    if (filters.searchQuery && filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      const stemMatch = q.en.stem.toLowerCase().includes(query) || (q.ar?.stem ? q.ar.stem.includes(query) : false);
      const explMatch = q.explanation.toLowerCase().includes(query) || q.explanationAr.includes(query);
      if (!stemMatch && !explMatch) return false;
    }
    return true;
  });
}

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function getExamQuestions(examId: 'midterm-2022' | 'midterm-2020'): Question[] {
  if (examId === 'midterm-2022') {
    return allQuestions.filter((q) => q.source === 'original-mid22');
  }
  return allQuestions.filter((q) => q.source === 'original-mid20');
}
