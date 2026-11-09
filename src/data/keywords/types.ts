export type KeywordCategory =
  | 'definition'
  | 'condition'
  | 'action'
  | 'distinction'
  | 'exception'
  | 'trigger';

export interface MemoryCue {
  triggerEn: string;
  targetEn: string;
  triggerAr: string;
  targetAr: string;
}

export interface AcademicKeyword {
  id: string;
  termEn: string;
  termAr: string;
  category: KeywordCategory;
  explanationEn: string;
  explanationAr: string;
  memoryCue?: MemoryCue;
  chapterId?: string;
  relatedLessonId?: string;
  tags?: string[];
  confusedWith?: string[];
  mathConditionLatex?: string;
  mathConditionExplanationEn?: string;
  mathConditionExplanationAr?: string;
  missingSentenceEn?: string;
  missingSentenceAr?: string;
  examTriggerPromptEn?: string;
  examTriggerPromptAr?: string;
  distractorsEn?: string[];
  distractorsAr?: string[];
}

// =========================================================================
// RECALL EXERCISE TYPES
// =========================================================================

export type RecallExerciseType =
  | 'keyword-to-concept'   // Type A
  | 'concept-to-keyword'   // Type B
  | 'missing-keyword'      // Type C
  | 'matching'             // Type D
  | 'math-condition'       // Type E
  | 'exam-trigger';        // Type F

export interface RecallOption {
  id: string;
  textEn: string;
  textAr: string;
  isCorrect: boolean;
  latex?: string;
  feedbackEn?: string;
  feedbackAr?: string;
  relatedKeywordId?: string;
}

export interface MatchingPair {
  id: string;
  keywordEn: string;
  keywordAr: string;
  conceptEn: string;
  conceptAr: string;
}

export interface RecallExercise {
  id: string;
  type: RecallExerciseType;
  chapterId: string;
  relatedKeywordId: string;
  relatedLessonId?: string;
  promptEn: string;
  promptAr: string;
  latexPrompt?: string;
  highlightedTermEn?: string;
  highlightedTermAr?: string;
  options: RecallOption[];
  matchingPairs?: MatchingPair[];
  hints: [string, string, string]; // [Context Hint, Memory Cue Hint, Critical Distinction Hint]
  hintsAr: [string, string, string];
  explanationEn: string;
  explanationAr: string;
  sourceExamRef?: string;
}
