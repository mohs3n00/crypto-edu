import type { Chapter } from '../../types';
import { getAllChapters } from '../chapters';

export interface Subject {
  id: string;
  code: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  chapters: Chapter[];
  icon: 'lock' | 'shield' | 'code' | 'cpu';
  level: string;
  levelAr: string;
}

export const subjectsRegistry: Subject[] = [
  {
    id: 'cryptography',
    code: 'IS401',
    title: 'Cryptography & Network Security',
    titleAr: 'أمن المعلومات وتشفير البيانات',
    description:
      'Mathematical foundations, classical ciphers, DES block cipher architecture, operational modes, and network security models based on William Stallings and faculty university curriculum.',
    descriptionAr:
      'الأسس الرياضية لنظرية الأعداد، الشفرات الكلاسيكية، معمارية DES، أنماط تشغيل الشفرات الكتلية، ونماذج أمان الشبكات وفق كتاب ويليام ستالينجز والمحاضرات الجامعية.',
    chapters: getAllChapters(),
    icon: 'lock',
    level: 'Year 4 — Computer Science',
    levelAr: 'الفرقة الرابعة — علوم الحاسب',
  },
];

export function getAllSubjects(): Subject[] {
  return subjectsRegistry;
}

export function getSubjectById(id: string): Subject {
  const found = subjectsRegistry.find((s) => s.id === id);
  return found || subjectsRegistry[0];
}

export function getDefaultSubject(): Subject {
  return subjectsRegistry[0];
}
