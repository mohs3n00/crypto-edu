import type { Chapter, Question } from '../../types';
import type { BasmagaQuestion, BasmagaQuickReferenceEntry } from '../basmaga/types';
import type { WorkedProblem } from '../problemSolving/types';
import type { FormulaItem } from '../formulas';
import { getAllChapters } from '../chapters';
import { getAllBpmChapters } from '../bpm/chapters';
import { getAllBigDataChapters } from '../bigdata/chapters';
import { allQuestions as allCryptoQuestions } from '../questions';
import { allBpmQuestions } from '../bpm/questions';
import { allBigDataQuestions } from '../bigdata/questions';
import { basmagaQuestions as cryptoBasmagaQuestions } from '../basmaga';
import { quickReferenceData as cryptoQuickReferenceData } from '../basmaga';
import { bpmBasmagaQuestions, bpmQuickReferenceData } from '../bpm/basmaga';
import { bigDataBasmagaQuestions, bigDataQuickReferenceData } from '../bigdata/basmaga';
import { workedProblems as cryptoWorkedProblems } from '../problemSolving';
import { bigDataWorkedProblems } from '../bigdata/problems/workedProblems';
import { formulasData as cryptoFormulasData } from '../formulas';
import { bigDataFormulas } from '../bigdata/formulas';

export interface Subject {
  id: string;
  code: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  chapters: Chapter[];
  icon: 'lock' | 'shield' | 'code' | 'cpu' | 'workflow';
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
  {
    id: 'bpm',
    code: 'IS412',
    title: 'Business Process Management',
    titleAr: 'إدارة عمليات الأعمال',
    description:
      'Process modeling, BPMN 2.0 notation, Canon HR digitization case study, WfMC reference model, workflow control-flow patterns, and strategic business management tools based on faculty curriculum and official test banks.',
    descriptionAr:
      'نمذجة العمليات، معيار BPMN 2.0، دراسة حالة التحول الرقمي لموارد كانون البشرية، النموذج المرجعي WfMC، أنماط تدفق العمل، وأدوات الإدارة الاستراتيجية استناداً للمحاضرات الجامعية والكويزات الرسمية.',
    chapters: getAllBpmChapters(),
    icon: 'cpu',
    level: 'Year 4 — Information Systems',
    levelAr: 'الفرقة الرابعة — نظم المعلومات',
  },
  {
    id: 'big-data',
    code: 'IS445',
    title: 'Big Data Analytics',
    titleAr: 'تحليلات البيانات الضخمة',
    description:
      'Big Data ecosystem, Analytic Sandboxes, 6-phase lifecycle, data cleansing, IQR outlier detection, Min-Max & Z-Score normalization, EDA & Anscombe\'s Quartet, K-Means centroid recalculation, and DBSCAN density clustering.',
    descriptionAr:
      'منظومة البيانات الضخمة، الحاوية التحليلية، دورة حياة التحليلات ذات الـ 6 مراحل، تنقية البيانات، كشف الشواذ بالمدى الربيعي IQR، تسوية Min-Max و Z-Score، التحليل الاستكشافي ورباعية أنسكومب، مراكز K-Means، وعنقدة الكثافة DBSCAN.',
    chapters: getAllBigDataChapters(),
    icon: 'workflow',
    level: 'Year 4 — Information Systems',
    levelAr: 'الفرقة الرابعة — نظم المعلومات',
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

export function getSubjectQuestions(subjectId: string): Question[] {
  if (subjectId === 'bpm') {
    return allBpmQuestions;
  }
  if (subjectId === 'big-data') {
    return allBigDataQuestions;
  }
  return allCryptoQuestions;
}

export function getSubjectBasmagaQuestions(subjectId: string): BasmagaQuestion[] {
  if (subjectId === 'bpm') {
    return bpmBasmagaQuestions;
  }
  if (subjectId === 'big-data') {
    return bigDataBasmagaQuestions;
  }
  return cryptoBasmagaQuestions;
}

export function getSubjectQuickReference(subjectId: string): BasmagaQuickReferenceEntry[] {
  if (subjectId === 'bpm') {
    return bpmQuickReferenceData;
  }
  if (subjectId === 'big-data') {
    return bigDataQuickReferenceData;
  }
  return cryptoQuickReferenceData;
}

export function getSubjectWorkedProblems(subjectId: string): WorkedProblem[] {
  if (subjectId === 'big-data') {
    return bigDataWorkedProblems;
  }
  return cryptoWorkedProblems;
}

export function getSubjectFormulas(subjectId: string): FormulaItem[] {
  if (subjectId === 'big-data') {
    return bigDataFormulas;
  }
  return cryptoFormulasData;
}
