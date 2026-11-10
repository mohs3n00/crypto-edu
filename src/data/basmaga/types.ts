export type QuestionFormat = 'mcq' | 'true-false';
export type BasmagaSourceType = 'original' | 'exam-style' | 'keyword-exercise';

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
  chapterId: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
  topicId: string;
  sourceType: BasmagaSourceType;
  sourceLabel: string; // e.g. "ch01-testbank.pdf Q3", "Midterm 2022 Model 1 Q1"
  type: QuestionFormat;
  questionEn: string;
  questionAr?: string;
  options: { key: string; textEn: string; textAr?: string }[];
  correctAnswer: string; // e.g. "B" or "True"
  importantKeywords: KeywordMeaning[];
  basmagaRule: {
    en: string;
    ar: string;
    targetConcept: string;
    targetConceptAr: string;
  };
  quickReasoning: {
    en: string;
    ar: string;
  };
  fullExplanation: {
    en: string;
    ar: string;
  };
  distractorAnalysis?: OptionDistractor[];
  examTrap: {
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
  chapterId: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
  relatedQuestionId?: string;
  relatedLessonId?: string;
  exceptionOrTrap?: {
    en: string;
    ar: string;
  };
}

