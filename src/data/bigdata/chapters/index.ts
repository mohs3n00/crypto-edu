import { bigDataChapter1 } from './chapter1';
import { bigDataChapter2 } from './chapter2';
import { bigDataChapter3 } from './chapter3';
import { bigDataChapter4 } from './chapter4';
import { bigDataChapter5 } from './chapter5';
import type { Chapter } from '../../../types';

export const bigDataChapters: Chapter[] = [
  bigDataChapter1,
  bigDataChapter2,
  bigDataChapter3,
  bigDataChapter4,
  bigDataChapter5,
];

export function getAllBigDataChapters(): Chapter[] {
  return bigDataChapters;
}

export function getBigDataChapterById(id: string): Chapter | undefined {
  return bigDataChapters.find((ch) => ch.id === id);
}

