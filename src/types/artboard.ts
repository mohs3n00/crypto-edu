import type { WorkedProblem, ProblemSourceType } from '../data/problemSolving/types';

export type ArtboardSectionId =
  | 'question'
  | 'understanding'
  | 'givens'
  | 'required'
  | 'concepts'
  | 'method'
  | 'formula'
  | 'steps'
  | 'final'
  | 'variations'
  | 'review';

export type ArtboardSlideType =
  | 'intro'
  | 'question'
  | 'understanding'
  | 'givens'
  | 'required'
  | 'concepts'
  | 'method'
  | 'formula'
  | 'step'
  | 'final'
  | 'practice';

export interface GivenParameterWithOrigin {
  label: string;
  value: string;
  labelAr: string;
  meaningAr: string;
  originType: 'explicit' | 'derived' | 'calculated';
  originExplanation: string;
}

export interface ArtboardStepDetail {
  stepNumber: number;
  titleEn: string;
  titleAr: string;
  operation: string;
  numbersUsed: { num: string; origin: string }[];
  whyThisOperation: string;
  mathLatex: string;
  substitutionLatex: string;
  detailedCalculation: string;
  intermediateResult: string;
  forwardUse: string;
  teacherTip?: string;
}

export interface ConceptVariation {
  problemId: string;
  variationTitle: string;
  variationTitleAr: string;
  sourceType: ProblemSourceType;
  sourceRef: string;
  keyDifference: string;
  keyDifferenceAr: string;
  isCurrent?: boolean;
}

export interface ConceptGroup {
  id: string;
  chapterId: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  variations: ConceptVariation[];
}

export interface CoverageItem {
  id: string;
  chapterId: string;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
  problemType: string;
  problemTypeAr: string;
  originalFileName: string;
  locationRef: string;
  sourceType: 'official-exam' | 'question-bank' | 'lecture-slide' | 'generated-practice';
  status: 'completed' | 'gap-theoretical-only' | 'planned';
  problemId?: string;
  variationsCount: number;
  notes?: string;
}

export interface ArtboardSlide {
  id: string;
  slideNumber: number;
  type: ArtboardSlideType;
  titleEn: string;
  titleAr: string;
  subtitleEn?: string;
  subtitleAr?: string;
  stepData?: ArtboardStepDetail;
  stepIndex?: number;
  totalSteps?: number;
}

export interface ArtboardDeck {
  problem: WorkedProblem;
  conceptGroup?: ConceptGroup;
  slides: ArtboardSlide[];
  sourceClassification: {
    category: 'Official Exam Question' | 'Question Bank' | 'Lecture Slide Example' | 'Generated Practice';
    badgeClass: string;
    descriptionAr: string;
  };
}

export type AuditCoverageStatus =
  | 'actual-problem' // A. Actual Problem (Exams / Question Banks)
  | 'lecture-example' // B. Worked Lecture Example (Slides)
  | 'theory-only' // C. Theory Only (In lecture, but no numerical calculation / problem)
  | 'not-found' // D. Not Found
  | 'unclear'; // E. Unclear

export interface SourceAuditRecord {
  id: string;
  chapter: string;
  chapterTitleAr: string;
  topic: string;
  topicAr: string;
  sourceFile: string;
  location: string;
  originalQuestion: string;
  sourceType: 'Official Exam' | 'Question Bank' | 'Lecture Slide' | 'Theoretical Lecture';
  problemType: string;
  problemTypeAr: string;
  coverageStatus: AuditCoverageStatus;
  statusLabelAr: string;
  problemId?: string;
  notesAr: string;
}

export interface VariationComparisonRow {
  aspect: string;
  aspectAr: string;
  col1: string;
  col2: string;
  col3?: string;
}

export interface VariationComparisonTable {
  title: string;
  titleAr: string;
  headers: { en: string; ar: string }[];
  rows: VariationComparisonRow[];
}
