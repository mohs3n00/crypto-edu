import type { BoardStep } from '../../components/educational/InteractiveSolvingBoard';

export type ProblemSourceType =
  | 'original-lecture'
  | 'original-midterm'
  | 'additional-practice';

export type ProblemCategory =
  | 'security-architecture'
  | 'number-theory'
  | 'classical-cipher'
  | 'block-cipher'
  | 'modes-operation'
  | 'data-cleansing'
  | 'normalization'
  | 'clustering';

export interface KeywordIndicator {
  keyword: string;
  keywordAr: string;
  indicates: string;
  indicatesAr: string;
}

export interface VariableMeaning {
  symbol: string;
  meaningEn: string;
  meaningAr: string;
}

export interface CommonMistake {
  mistakeEn: string;
  mistakeAr: string;
  preventionEn: string;
  preventionAr: string;
}

export interface ExtractedParameter {
  label: string;
  value: string;
  labelAr?: string;
  extractedFrom?: string;
  extractedFromAr?: string;
}

export interface StudentPracticeProblem {
  questionEn: string;
  questionAr: string;
  options: { key: string; textEn: string; textAr?: string }[];
  correctAnswer: string;
  explanationEn: string;
  explanationAr: string;
  hintEn?: string;
  hintAr?: string;
}

export interface WorkedProblem {
  id: string;
  chapterId: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7' | 'bd-ch1' | 'bd-ch2' | 'bd-ch3' | 'bd-ch4' | 'bd-ch5' | string;
  topicId: string;
  sourceType: ProblemSourceType;
  sourceRef: string; // e.g. "Midterm 2020 Exam Q3(1)", "Stallings 7th Ed. Table 2.1"
  category: ProblemCategory;
  title: string;
  titleAr: string;
  problem: string;
  problemAr: string;
  givenParameters: ExtractedParameter[];
  requiredResult: { en: string; ar: string };
  governingFormula?: {
    name: string;
    nameAr: string;
    latex: string;
    conditions?: string;
    conditionsAr?: string;
    explanation?: string;
    explanationAr?: string;
  };
  variableDictionary?: VariableMeaning[];
  keywordIndicators?: KeywordIndicator[];
  steps: BoardStep[];
  finalResult: string;
  verification: string;
  verificationAr: string;
  commonMistakes: CommonMistake[];
  practiceChallenge?: StudentPracticeProblem;
  relatedExamQuestionId?: string;
  relatedBasmagaQuestionId?: string;
  relatedLessonId?: string;
}
