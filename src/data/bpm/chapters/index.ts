import type { Chapter } from '../../../types';
import { bpmChapter1 } from './chapter1';
import { bpmChapter2 } from './chapter2';
import { bpmChapter3 } from './chapter3';
import { bpmChapter4 } from './chapter4';

export const bpmChapters: Chapter[] = [
  bpmChapter1,
  bpmChapter2,
  bpmChapter3,
  bpmChapter4,
];

export function getAllBpmChapters(): Chapter[] {
  return bpmChapters;
}

export function getBpmChapterById(id: string): Chapter | undefined {
  return bpmChapters.find((ch) => ch.id === id);
}

