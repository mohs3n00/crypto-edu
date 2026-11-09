import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type {
  StudentProgress,
  ExamAttempt,
  UserSettings,
  UserQuestionAnswer,
  TopicReviewRecord,
  KeywordReviewRecord,
  TopicMasteryState,
} from '../types';

const STORAGE_KEY = 'crypto-edu:student-progress';

const DEFAULT_SETTINGS: UserSettings = {
  lang: 'both',
  fontSize: 'md',
  reducedMotion: false,
};

const DEFAULT_PROGRESS: StudentProgress = {
  completedLessons: {},
  quizHistory: [],
  examAttempts: [],
  incorrectAnswers: [],
  questionAnswers: {},
  topicReviews: {},
  keywordReviews: {},
  bookmarks: [],
  lastVisited: undefined,
  settings: DEFAULT_SETTINGS,
};

const INTERVAL_DAYS = [1, 3, 7, 14, 30];

function calculateNextIntervalMs(consecutiveCorrect: number, isCorrect: boolean): number {
  if (!isCorrect) {
    return 1 * 24 * 60 * 60 * 1000; // 1 day upon mistake
  }
  const idx = Math.min(Math.max(0, consecutiveCorrect - 1), INTERVAL_DAYS.length - 1);
  const days = INTERVAL_DAYS[idx] || 30;
  return days * 24 * 60 * 60 * 1000;
}

function calculateMasteryState(
  attemptsCount: number,
  consecutiveCorrect: number,
  lastScore: number,
  isLastCorrect: boolean
): TopicMasteryState {
  if (attemptsCount === 0) return 'not-started';
  if (!isLastCorrect || lastScore < 50) return 'needs-review';
  if (consecutiveCorrect >= 3 && lastScore >= 80) return 'mastered';
  if (consecutiveCorrect >= 1 && lastScore >= 60) return 'improving';
  return 'studying';
}

function loadFromStorage(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedLessons: parsed.completedLessons || {},
      questionAnswers: parsed.questionAnswers || {},
      topicReviews: parsed.topicReviews || {},
      keywordReviews: parsed.keywordReviews || {},
      bookmarks: parsed.bookmarks || [],
      examAttempts: parsed.examAttempts || [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveToStorage(progress: StudentProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Silently ignore quota errors
  }
}

export interface KeywordRecallStats {
  totalTracked: number;
  mastered: number;
  learning: number;
  due: number;
  topConfusions: Array<{
    id1: string;
    id2: string;
    count: number;
  }>;
}

export interface ProgressContextValue {
  progress: StudentProgress;
  isLessonCompleted: (lessonId: string) => boolean;
  toggleLessonCompleted: (lessonId: string) => void;
  markLessonComplete: (lessonId: string) => void;
  recordQuestionResult: (questionId: string, correct: boolean, selectedAnswer?: any) => void;
  recordExamAttempt: (attempt: ExamAttempt) => void;
  recordTopicCheck: (
    topicId: string,
    topicTitle: string,
    chapterId: string,
    lessonId: string | undefined,
    isCorrect: boolean,
    topicTitleAr?: string
  ) => void;
  recordSectionScore: (
    topicId: string,
    topicTitle: string,
    chapterId: string,
    lessonId: string | undefined,
    score: number,
    total: number,
    topicTitleAr?: string
  ) => void;
  getTopicReview: (topicId: string) => TopicReviewRecord | undefined;
  getDueTopics: () => TopicReviewRecord[];
  recordKeywordAttempt: (
    keywordId: string,
    chapterId: string,
    isCorrect: boolean,
    confusedWithId?: string
  ) => void;
  getKeywordReview: (keywordId: string) => KeywordReviewRecord | undefined;
  getDueKeywords: () => KeywordReviewRecord[];
  getKeywordRecallStats: () => KeywordRecallStats;
  isBookmarked: (itemId: string) => boolean;
  toggleBookmark: (itemId: string) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [progress, setProgress] = useState<StudentProgress>(loadFromStorage);

  useEffect(() => {
    saveToStorage(progress);
  }, [progress]);

  const isLessonCompleted = useCallback(
    (lessonId: string) => Boolean(progress.completedLessons[lessonId]),
    [progress.completedLessons]
  );

  const toggleLessonCompleted = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const nextCompleted = { ...prev.completedLessons };
      if (nextCompleted[lessonId]) {
        delete nextCompleted[lessonId];
      } else {
        nextCompleted[lessonId] = true;
      }
      return {
        ...prev,
        completedLessons: nextCompleted,
        lastVisited: lessonId,
      };
    });
  }, []);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: {
        ...prev.completedLessons,
        [lessonId]: true,
      },
      lastVisited: lessonId,
    }));
  }, []);

  const recordQuestionResult = useCallback(
    (questionId: string, correct: boolean, selectedAnswer?: any) => {
      setProgress((prev) => {
        const entry: UserQuestionAnswer = {
          correct,
          selectedAnswer,
          timestamp: Date.now(),
        };

        const updatedAnswers = {
          ...prev.questionAnswers,
          [questionId]: entry,
        };

        return {
          ...prev,
          questionAnswers: updatedAnswers,
        };
      });
    },
    []
  );

  const recordTopicCheck = useCallback(
    (
      topicId: string,
      topicTitle: string,
      chapterId: string,
      lessonId: string | undefined,
      isCorrect: boolean,
      topicTitleAr?: string
    ) => {
      setProgress((prev) => {
        const existing = prev.topicReviews?.[topicId];
        const now = Date.now();
        const attempts = (existing?.attemptsCount || 0) + 1;
        const correctCount = (existing?.correctCount || 0) + (isCorrect ? 1 : 0);
        const incorrectCount = (existing?.incorrectCount || 0) + (isCorrect ? 0 : 1);
        const consecutive = isCorrect ? (existing?.consecutiveCorrect || 0) + 1 : 0;
        const score = isCorrect ? 100 : 0;
        const intervalMs = calculateNextIntervalMs(consecutive, isCorrect);
        const mastery = calculateMasteryState(attempts, consecutive, score, isCorrect);

        const updatedRecord: TopicReviewRecord = {
          topicId,
          topicTitle,
          topicTitleAr: topicTitleAr || existing?.topicTitleAr,
          chapterId,
          lessonId: lessonId || existing?.lessonId,
          firstStudiedAt: existing?.firstStudiedAt || now,
          lastStudiedAt: now,
          attemptsCount: attempts,
          correctCount,
          incorrectCount,
          consecutiveCorrect: consecutive,
          lastScore: score,
          masteryState: mastery,
          nextReviewDate: now + intervalMs,
        };

        return {
          ...prev,
          topicReviews: {
            ...(prev.topicReviews || {}),
            [topicId]: updatedRecord,
          },
        };
      });
    },
    []
  );

  const recordSectionScore = useCallback(
    (
      topicId: string,
      topicTitle: string,
      chapterId: string,
      lessonId: string | undefined,
      score: number,
      total: number,
      topicTitleAr?: string
    ) => {
      setProgress((prev) => {
        const existing = prev.topicReviews?.[topicId];
        const now = Date.now();
        const attempts = (existing?.attemptsCount || 0) + 1;
        const pct = total > 0 ? Math.round((score / total) * 100) : 0;
        const isPassing = pct >= 70;
        const correctCount = (existing?.correctCount || 0) + score;
        const incorrectCount = (existing?.incorrectCount || 0) + (total - score);
        const consecutive = isPassing ? (existing?.consecutiveCorrect || 0) + 1 : 0;
        const intervalMs = calculateNextIntervalMs(consecutive, isPassing);
        const mastery = calculateMasteryState(attempts, consecutive, pct, isPassing);

        const updatedRecord: TopicReviewRecord = {
          topicId,
          topicTitle,
          topicTitleAr: topicTitleAr || existing?.topicTitleAr,
          chapterId,
          lessonId: lessonId || existing?.lessonId,
          firstStudiedAt: existing?.firstStudiedAt || now,
          lastStudiedAt: now,
          attemptsCount: attempts,
          correctCount,
          incorrectCount,
          consecutiveCorrect: consecutive,
          lastScore: pct,
          masteryState: mastery,
          nextReviewDate: now + intervalMs,
        };

        return {
          ...prev,
          topicReviews: {
            ...(prev.topicReviews || {}),
            [topicId]: updatedRecord,
          },
        };
      });
    },
    []
  );

  const getTopicReview = useCallback(
    (topicId: string) => progress.topicReviews?.[topicId],
    [progress.topicReviews]
  );

  const getDueTopics = useCallback(() => {
    const reviews = Object.values(progress.topicReviews || {});
    const now = Date.now();
    return reviews.filter((r) => r.nextReviewDate <= now);
  }, [progress.topicReviews]);

  const recordKeywordAttempt = useCallback(
    (
      keywordId: string,
      chapterId: string,
      isCorrect: boolean,
      confusedWithId?: string
    ) => {
      setProgress((prev) => {
        const existing = prev.keywordReviews?.[keywordId];
        const now = Date.now();
        const attempts = (existing?.attemptsCount || 0) + 1;
        const correctCount = (existing?.correctCount || 0) + (isCorrect ? 1 : 0);
        const incorrectCount = (existing?.incorrectCount || 0) + (isCorrect ? 0 : 1);
        const consecutive = isCorrect ? (existing?.consecutiveCorrect || 0) + 1 : 0;
        const intervalMs = calculateNextIntervalMs(consecutive, isCorrect);

        let mastery: TopicMasteryState = 'studying';
        if (!isCorrect) {
          mastery = 'needs-review';
        } else if (consecutive >= 3) {
          mastery = 'mastered';
        } else if (consecutive >= 1) {
          mastery = 'improving';
        }

        const confusedWithHistory = { ...(existing?.confusedWithHistory || {}) };
        if (!isCorrect && confusedWithId) {
          confusedWithHistory[confusedWithId] = (confusedWithHistory[confusedWithId] || 0) + 1;
        }

        const updatedRecord: KeywordReviewRecord = {
          keywordId,
          chapterId: chapterId || existing?.chapterId,
          attemptsCount: attempts,
          correctCount,
          incorrectCount,
          consecutiveCorrect: consecutive,
          lastStudiedAt: now,
          nextReviewDate: now + intervalMs,
          masteryState: mastery,
          confusedWithHistory,
        };

        return {
          ...prev,
          keywordReviews: {
            ...(prev.keywordReviews || {}),
            [keywordId]: updatedRecord,
          },
        };
      });
    },
    []
  );

  const getKeywordReview = useCallback(
    (keywordId: string) => progress.keywordReviews?.[keywordId],
    [progress.keywordReviews]
  );

  const getDueKeywords = useCallback(() => {
    const reviews = Object.values(progress.keywordReviews || {});
    const now = Date.now();
    return reviews.filter((r) => r.nextReviewDate <= now);
  }, [progress.keywordReviews]);

  const getKeywordRecallStats = useCallback((): KeywordRecallStats => {
    const records = Object.values(progress.keywordReviews || {});
    const now = Date.now();
    let mastered = 0;
    let learning = 0;
    let due = 0;
    const confusionMap = new Map<string, number>();

    for (const r of records) {
      if (r.masteryState === 'mastered') mastered++;
      else if (r.attemptsCount > 0) learning++;
      if (r.nextReviewDate <= now) due++;

      if (r.confusedWithHistory) {
        for (const [otherId, count] of Object.entries(r.confusedWithHistory)) {
          const pairKey = [r.keywordId, otherId].sort().join(':::');
          confusionMap.set(pairKey, (confusionMap.get(pairKey) || 0) + count);
        }
      }
    }

    const topConfusions: Array<{ id1: string; id2: string; count: number }> = [];
    confusionMap.forEach((count, key) => {
      const [id1, id2] = key.split(':::');
      topConfusions.push({ id1, id2, count });
    });
    topConfusions.sort((a, b) => b.count - a.count);

    return {
      totalTracked: records.length,
      mastered,
      learning,
      due,
      topConfusions: topConfusions.slice(0, 5),
    };
  }, [progress.keywordReviews]);

  const recordExamAttempt = useCallback((attempt: ExamAttempt) => {
    setProgress((prev) => ({
      ...prev,
      examAttempts: [attempt, ...prev.examAttempts],
    }));
  }, []);

  const isBookmarked = useCallback(
    (itemId: string) => progress.bookmarks.includes(itemId),
    [progress.bookmarks]
  );

  const toggleBookmark = useCallback((itemId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarks.includes(itemId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter((b) => b !== itemId)
          : [...prev.bookmarks, itemId],
      };
    });
  }, []);

  const updateSettings = useCallback((partial: Partial<UserSettings>) => {
    setProgress((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const clearProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
    saveToStorage(DEFAULT_PROGRESS);
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLessonCompleted,
        toggleLessonCompleted,
        markLessonComplete,
        recordQuestionResult,
        recordExamAttempt,
        recordTopicCheck,
        recordSectionScore,
        getTopicReview,
        getDueTopics,
        recordKeywordAttempt,
        getKeywordReview,
        getDueKeywords,
        getKeywordRecallStats,
        isBookmarked,
        toggleBookmark,
        updateSettings,
        clearProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return ctx;
}
