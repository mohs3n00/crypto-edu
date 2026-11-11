import type { Question, QuestionSource, QuestionType, DifficultyLevel } from '../../../types';
import { toNormalizedQuestionObject } from '../../../utils/questionNormalizer';
import { quiz1ManagementTools } from './quiz1ManagementTools';
import { quiz2WorkflowManagement } from './quiz2WorkflowManagement';
import { quiz3ToolsBuildingProcesses } from './quiz3ToolsBuildingProcesses';
import { practiceQuestions } from './practiceQuestions';

const rawBpmQuestions: Question[] = [
  ...quiz1ManagementTools,
  ...quiz2WorkflowManagement,
  ...quiz3ToolsBuildingProcesses,
  ...practiceQuestions,
];

export const allBpmQuestions: Question[] = rawBpmQuestions.map(toNormalizedQuestionObject);

export interface BpmQuestionFilter {
  chapterId?: string;
  source?: QuestionSource;
  type?: QuestionType;
  difficulty?: DifficultyLevel;
  searchQuery?: string;
}

export function filterBpmQuestions(filter: BpmQuestionFilter): Question[] {
  return allBpmQuestions.filter((q) => {
    if (filter.chapterId && filter.chapterId !== 'all' && q.chapterId !== filter.chapterId) {
      return false;
    }
    if (filter.source && filter.source !== ('all' as any) && q.source !== filter.source) {
      return false;
    }
    if (filter.type && filter.type !== ('all' as any) && q.type !== filter.type) {
      return false;
    }
    if (filter.difficulty && filter.difficulty !== ('all' as any) && q.difficulty !== filter.difficulty) {
      return false;
    }
    if (filter.searchQuery && filter.searchQuery.trim()) {
      const query = filter.searchQuery.toLowerCase();
      const stemEn = q.en.stem.toLowerCase();
      const stemAr = (q.ar?.stem || '').toLowerCase();
      const explEn = (q.explanation || '').toLowerCase();
      const explAr = (q.explanationAr || '').toLowerCase();
      const idMatch = q.id.toLowerCase().includes(query);
      const matches =
        stemEn.includes(query) ||
        stemAr.includes(query) ||
        explEn.includes(query) ||
        explAr.includes(query) ||
        idMatch;
      if (!matches) return false;
    }
    return true;
  });
}

export function getBpmQuestionsByChapter(chapterId: string): Question[] {
  return allBpmQuestions.filter((q) => q.chapterId === chapterId);
}

export function getBpmQuestionById(id: string): Question | undefined {
  return allBpmQuestions.find((q) => q.id === id);
}

