export type QuestionFormat = 'mcq' | 'true-false';
export type BasmagaSourceType =
  | 'original-exam'
  | 'original-testbank'
  | 'lecture'
  | 'generated-practice'
  | 'original'
  | 'exam-style'
  | 'keyword-exercise';

export interface KeywordMeaning {
  en: string;
  ar: string;
  role?: 'trigger' | 'condition' | 'action' | 'concept' | 'distinction';
}

export interface OptionDistractor {
  optionKey: string;
  reasonEn: string;
  reasonAr: string;
}

export interface BasmagaQuestion {
  id: string;
  chapterId: string;
  topicId: string;
  sourceType: BasmagaSourceType;
  sourceLabel: string; // e.g. "Original Exam: Midterm 2020 Q1(1)", "Original Test Bank: Stallings Ch 1 T/F 1"
  type: QuestionFormat;
  questionEn: string;
  questionAr?: string;
  options: { key: string; textEn: string; textAr?: string }[];
  correctAnswer: string; // e.g. "B" or "True"
  importantKeywords: KeywordMeaning[];
  academicPoint?: string; // Exact examinable syllabus detail tested
  sourceRef?: {
    file: string;
    pageOrSlide: string;
  };
  basmagaRule?: {
    en: string;
    ar: string;
    targetConcept: string;
    targetConceptAr: string;
  };
  quickReasoning?: {
    en: string;
    ar: string;
  };
  fullExplanation?: {
    en: string;
    ar: string;
  };
  distractorAnalysis?: OptionDistractor[];
  examTrap?: {
    en: string;
    ar: string;
  };
  relatedLessonId?: string;
  relatedProblemId?: string;
  isFrequentlyConfused?: boolean;
  tags?: string[];
}

export interface BasmagaQuickReferenceEntry {
  id: string;
  keywordEn: string;
  keywordAr: string;
  conceptEn: string;
  conceptAr: string;
  ruleEn: string;
  ruleAr: string;
  chapterId: string;
  relatedQuestionId?: string;
  relatedLessonId?: string;
  exceptionOrTrap?: {
    en: string;
    ar: string;
  };
}

