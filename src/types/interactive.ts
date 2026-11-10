export type SlideType =
  | 'title'
  | 'concept'
  | 'definition'
  | 'comparison'
  | 'diagram'
  | 'process'
  | 'algorithm'
  | 'formula'
  | 'example'
  | 'calculation'
  | 'table'
  | 'crypto-operation'
  | 'architecture'
  | 'knowledge-check'
  | 'summary';

export interface KeyTerm {
  term: string;
  termAr: string;
  definition: string;
  definitionAr: string;
}

export interface BulletPoint {
  en: string;
  ar: string;
  emphasis?: boolean;
}

export interface SlideFormula {
  latex: string;
  explanationEn: string;
  explanationAr: string;
  parameters?: Array<{
    symbol: string;
    meaning: string;
    meaningAr: string;
  }>;
  conditions?: Array<{
    en: string;
    ar: string;
  }>;
}

export interface CalculationStep {
  stepNumber: number;
  label: string;
  labelAr: string;
  math?: string;
  explanation: string;
  explanationAr: string;
  intermediateResult?: string;
}

export interface SlideWorkedExample {
  id?: string;
  problem: string;
  problemAr: string;
  steps: CalculationStep[];
  result: string;
  resultAr?: string;
  verification?: string;
  verificationAr?: string;
}

export interface SlideComparison {
  headers: [string, string];
  headersAr: [string, string];
  rows: Array<{
    criteria: string;
    criteriaAr: string;
    col1: string;
    col1Ar: string;
    col2: string;
    col2Ar: string;
  }>;
}

export interface SlideKnowledgeCheckOption {
  text: string;
  textAr: string;
  isCorrect: boolean;
  explanation?: string;
  explanationAr?: string;
}

export interface SlideKnowledgeCheck {
  id: string;
  question: string;
  questionAr: string;
  options: SlideKnowledgeCheckOption[];
  explanation: string;
  explanationAr: string;
  officialExamTrap?: boolean;
}

export interface SlideTable {
  headers: string[];
  headersAr?: string[];
  rows: string[][];
  caption?: string;
  captionAr?: string;
}

export interface SlideSummary {
  takeaways: Array<{ en: string; ar: string }>;
  nextLessonId?: string;
  nextLessonTitle?: string;
  nextLessonTitleAr?: string;
}

export interface InteractiveSlide {
  id: string;
  lessonId: string;
  chapterId: string;
  slideNumber: number;
  totalSlides: number;
  type: SlideType;
  title: string;
  titleAr: string;
  subtitle?: string;
  subtitleAr?: string;
  sourceRef: {
    file: string;
    page?: string;
    slide?: string;
  };
  badge?: string;
  badgeAr?: string;
  enDefinition?: string;
  arExplanation?: string;
  keyTerms?: KeyTerm[];
  bulletPoints?: BulletPoint[];
  importantDistinction?: {
    en: string;
    ar: string;
  };
  formula?: SlideFormula;
  diagramId?: string;
  diagramProps?: Record<string, any>;
  diagramCaption?: string;
  diagramCaptionAr?: string;
  workedExample?: SlideWorkedExample;
  comparison?: SlideComparison;
  knowledgeCheck?: SlideKnowledgeCheck;
  table?: SlideTable;
  summary?: SlideSummary;
}

export interface InteractiveLessonDeck {
  lessonId: string;
  chapterId: string;
  title: string;
  titleAr: string;
  estimatedMinutes: number;
  sourceRef: {
    file: string;
    page?: string;
    slide?: string;
  };
  slides: InteractiveSlide[];
  totalSlides: number;
}

