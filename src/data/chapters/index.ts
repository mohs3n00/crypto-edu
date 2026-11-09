import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter7 } from './chapter7';
import type { Course, Chapter, Lesson } from '../../types';

export const courseData: Course = {
  id: 'crypto-is401',
  title: 'Cryptography and Network Security',
  titleAr: 'أمن المعلومات والتشفير وشبكات الحاسوب',
  description: 'Comprehensive university-level interactive course based on William Stallings (7th & 8th Editions), official faculty lectures, test banks, and midterm examinations.',
  descriptionAr: 'مساق جامعي تفاعلي شامل استناداً لكتاب ويليام ستالينجز والمحاضرات الرسمية وبنوك الأسئلة وامتحانات الميدتيرم الفعلية.',
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter7,
  ],
};

// Helper utilities for querying course
export function getAllChapters(): Chapter[] {
  return courseData.chapters;
}

export function getChapterById(chapterId: string): Chapter | undefined {
  return courseData.chapters.find((ch) => ch.id === chapterId);
}

export function getAllLessons(): Lesson[] {
  const lessons: Lesson[] = [];
  for (const ch of courseData.chapters) {
    for (const t of ch.topics) {
      lessons.push(...t.lessons);
    }
  }
  return lessons;
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const ch of courseData.chapters) {
    for (const t of ch.topics) {
      const found = t.lessons.find((l) => l.id === lessonId);
      if (found) return found;
    }
  }
  return undefined;
}

export function getAdjacentLessons(lessonId: string): { prev?: Lesson; next?: Lesson } {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === lessonId);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}

