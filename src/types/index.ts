// ============================================================
// Core course types
// ============================================================

export interface Course {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  titleAr: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  chapterId: string;
  topicId: string;
  title: string;
  titleAr: string;
  objectives: string[];
  objectivesAr: string[];
  content: LessonContent;
  questions?: Question[];
  practiceQuestions?: Question[];
  sourceRef?: SourceRef;
  estimatedMinutes: number;
  formulas?: Formula[];
  workedExamples?: WorkedExample[];
  examNotes?: string;
  examNotesAr?: string;
  contentEn?: string;
  contentAr?: string;
}

// ============================================================
// Lesson content types
// ============================================================

export interface LessonContent {
  enDefinition?: string;
  arExplanation?: string;
  sections?: ContentSection[];
  formulas?: Formula[];
  diagrams?: DiagramRef[];
  workedExamples?: WorkedExample[];
  examNotes?: string | string[];
  examNotesAr?: string | string[];
  commonMistakes?: string[];
  supplementaryNotes?: string[];
}

export type ContentSectionType =
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'table'
  | 'formula'
  | 'diagram'
  | 'code';

export interface ContentSection {
  type: ContentSectionType;
  lang: 'en' | 'ar' | 'both';
  content: string | string[] | TableData | FormulaData;
}

export interface Formula {
  id: string;
  name?: string;
  nameAr?: string;
  label?: string;
  labelAr?: string;
  latex: string;
  explanation?: string;
  explanationAr?: string;
  chapterId?: string;
  variables?: any;
  conditions?: any[];
  conditionsAr?: any[];
  sourceRef?: string;
}

export interface FormulaVariable {
  sym?: string;
  symbol?: string;
  meaning: string;
  meaningAr?: string;
}

export interface DiagramRef {
  id: string;
  type: 'svg' | 'interactive' | 'table';
  title: string;
  titleAr: string;
}

export interface WorkedExample {
  id?: string;
  title: string;
  titleAr?: string;
  problem?: string;
  problemAr?: string;
  steps: WorkedStep[];
  result?: string;
  verification?: string;
}

export interface WorkedStep {
  stepNumber?: number;
  label?: string;
  labelAr?: string;
  math?: string;
  explanation: string;
  explanationAr?: string;
  intermediateResult?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface FormulaData {
  latex: string;
  caption?: string;
}

// ============================================================
// Question types
// ============================================================

export type QuestionType =
  | 'mcq'
  | 'truefalse'
  | 'fillinblank'
  | 'shortanswer'
  | 'matching'
  | 'calculation'
  | 'diagram'
  | 'multiple-choice'
  | 'true-false'
  | 'short-answer'
  | 'practical-problem';

export type DifficultyLevel = 1 | 2 | 3 | 'easy' | 'medium' | 'hard';

export type QuestionSource =
  | 'original-tb01'
  | 'original-tb03'
  | 'original-tb04'
  | 'original-mid22'
  | 'original-mid20'
  | 'tb01'
  | 'tb03'
  | 'tb04'
  | 'generated';

export interface Question {
  id: string;
  chapterId: string;
  topicId?: string;
  type: QuestionType;
  difficulty: DifficultyLevel;
  source: QuestionSource;
  originalNumber?: string;
  en: QuestionData;
  ar?: QuestionData;
  answer?: AnswerData;
  correctAnswer?: number | string | string[] | boolean;
  explanation: string;
  explanationAr: string;
  relatedLessonId?: string;
  relatedFormulas?: string[];
}

export interface QuestionData {
  stem: string;
  options?: string[];
  hint?: string;
  hintLevel1?: string;
  hintLevel2?: string;
}

export interface AnswerData {
  correct: string | boolean | string[] | number;
  explanation: string;
  explanationAr: string;
}

// ============================================================
// Progress / persistence types
// ============================================================

export type TopicMasteryState =
  | 'not-started'
  | 'studying'
  | 'needs-review'
  | 'improving'
  | 'mastered';

export interface TopicReviewRecord {
  topicId: string;
  topicTitle: string;
  topicTitleAr?: string;
  chapterId: string;
  lessonId?: string;
  firstStudiedAt: number;
  lastStudiedAt: number;
  attemptsCount: number;
  correctCount: number;
  incorrectCount: number;
  consecutiveCorrect: number;
  lastScore: number; // percentage (0 - 100)
  masteryState: TopicMasteryState;
  nextReviewDate: number; // timestamp in ms
}

export interface KeywordReviewRecord {
  keywordId: string;
  chapterId?: string;
  attemptsCount: number;
  correctCount: number;
  incorrectCount: number;
  consecutiveCorrect: number;
  lastStudiedAt: number;
  nextReviewDate: number; // timestamp in ms
  masteryState: TopicMasteryState;
  confusedWithHistory?: Record<string, number>; // otherKeywordId -> times chosen mistakenly
}

export interface UserQuestionAnswer {
  correct: boolean;
  selectedAnswer?: any;
  timestamp: number;
}

export interface StudentProgress {
  completedLessons: Record<string, boolean>;
  quizHistory: QuizAttempt[];
  examAttempts: ExamAttempt[];
  incorrectAnswers: IncorrectAnswer[];
  questionAnswers: Record<string, UserQuestionAnswer>;
  topicReviews?: Record<string, TopicReviewRecord>;
  keywordReviews?: Record<string, KeywordReviewRecord>;
  bookmarks: string[];
  lastVisited?: string;
  settings: UserSettings;
}

export interface QuizAttempt {
  lessonId: string;
  questionId: string;
  selectedAnswer: any;
  correct: boolean;
  timestamp: number;
}

export interface ExamAttempt {
  id?: string;
  examId: string;
  title?: string;
  date?: string;
  startTime?: number;
  endTime?: number;
  answers: Record<string, any>;
  score?: number;
  totalQuestions?: number;
  percentage?: number;
  timeSpentSeconds?: number;
}

export interface IncorrectAnswer {
  questionId: string;
  source: QuestionSource;
  selectedAnswer: string;
  correctAnswer: string;
  timestamp: number;
}

export interface UserSettings {
  lang: 'ar' | 'en' | 'both';
  fontSize: 'sm' | 'md' | 'lg';
  reducedMotion: boolean;
}

// ============================================================
// Source reference
// ============================================================

export interface SourceRef {
  file: string;
  page?: string;
  slide?: string;
  originalNumber?: string;
}
