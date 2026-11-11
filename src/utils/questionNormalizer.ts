import type { Question, DifficultyLevel, QuestionSource, QuestionType } from '../types';

export type CanonicalQuestionType =
  | 'true-false'
  | 'multiple-choice'
  | 'multiple-select'
  | 'short-answer'
  | 'fill-blank'
  | 'mathematical'
  | 'diagram'
  | 'practical-problem';

export interface NormalizedQuestionOption {
  index: number;
  id: string; // 'A', 'B', 'C', 'D' or 'true', 'false'
  label: string; // 'A', 'B' or 'True', 'False'
  textEn: string;
  textAr?: string;
}

export interface NormalizedQuestion {
  raw: Question;
  id: string;
  chapterId: string;
  topicId?: string;
  type: CanonicalQuestionType;
  difficulty: DifficultyLevel;
  source: QuestionSource;
  originalNumber?: string;
  stemEn: string;
  stemAr?: string;
  optionsEn: string[];
  optionsAr?: string[];
  options: NormalizedQuestionOption[];
  correctAnswerIndex?: number; // for single-choice & true-false
  correctAnswerIndices?: number[]; // for multiple-select
  correctAnswerText?: string;
  isAnswerKeyVerified: boolean;
  explanationEn: string;
  explanationAr: string;
  hintEn?: string;
  hintAr?: string;
  hintLevel1En?: string;
  hintLevel2En?: string;
  hintLevel1Ar?: string;
  hintLevel2Ar?: string;
  relatedLessonId?: string;
}

export interface ValidationResult {
  isCorrect: boolean;
  isVerified: boolean;
  userAnswerFormatted: string;
  expectedAnswerFormatted: string;
  feedbackText?: string;
  hint?: string;
}

/**
 * Normalizes raw string question type into a canonical type
 */
export function toCanonicalQuestionType(rawType: string): CanonicalQuestionType {
  const t = (rawType || '').toLowerCase().replace(/[^a-z]/g, '');
  if (t === 'truefalse' || t === 'tf' || t === 'truefalsequestion') return 'true-false';
  if (t === 'mcq' || t === 'multiplechoice' || t === 'singlechoice') return 'multiple-choice';
  if (t === 'multipleselect' || t === 'multiselect') return 'multiple-select';
  if (t === 'shortanswer' || t === 'short') return 'short-answer';
  if (t === 'fillinblank' || t === 'fillblank') return 'fill-blank';
  if (t === 'calculation' || t === 'mathematical' || t === 'math') return 'mathematical';
  if (t === 'diagram') return 'diagram';
  if (t === 'practicalproblem' || t === 'practical') return 'practical-problem';
  return 'multiple-choice';
}

/**
 * Normalizes question options for both English and Arabic
 */
export function getNormalizedOptions(
  q: Question,
  canonicalType: CanonicalQuestionType
): { en: string[]; ar?: string[] } {
  if (canonicalType === 'true-false') {
    const enOpts =
      q.en?.options && q.en.options.length === 2 ? q.en.options : ['True', 'False'];
    const arOpts =
      q.ar?.options && q.ar.options.length === 2 ? q.ar.options : ['صواب', 'خطأ'];
    return { en: enOpts, ar: arOpts };
  }

  if (canonicalType === 'multiple-choice' || canonicalType === 'multiple-select') {
    const enOpts = q.en?.options && q.en.options.length > 0 ? q.en.options : [];
    const arOpts = q.ar?.options && q.ar.options.length > 0 ? q.ar.options : undefined;
    return { en: enOpts, ar: arOpts };
  }

  return { en: q.en?.options || [], ar: q.ar?.options };
}

/**
 * Resolves 0-based correct answer index for True/False and MCQ
 */
export function getCorrectAnswerIndex(
  q: Question,
  canonicalType: CanonicalQuestionType,
  optionsEn: string[]
): number | undefined {
  if (canonicalType === 'true-false') {
    // 0 = True, 1 = False
    if (q.correctAnswer === 0 || q.correctAnswer === 1) return q.correctAnswer;
    if (q.correctAnswer === true) return 0;
    if (q.correctAnswer === false) return 1;

    if (typeof q.correctAnswer === 'string') {
      const lower = q.correctAnswer.trim().toLowerCase();
      if (lower === 'true' || lower === 't' || lower === '0' || lower === 'صواب') return 0;
      if (lower === 'false' || lower === 'f' || lower === '1' || lower === 'خطأ') return 1;
    }

    if (q.answer) {
      if (q.answer.correct === true) return 0;
      if (q.answer.correct === false) return 1;
      if (typeof q.answer.correct === 'number' && (q.answer.correct === 0 || q.answer.correct === 1)) {
        return q.answer.correct;
      }
      if (typeof q.answer.correct === 'string') {
        const lower = q.answer.correct.trim().toLowerCase();
        if (lower.startsWith('t') || lower.includes('true') || lower === 'صواب') return 0;
        if (lower.startsWith('f') || lower.includes('false') || lower === 'خطأ') return 1;
      }
    }
    return undefined;
  }

  if (canonicalType === 'multiple-choice') {
    // Check direct numeric correctAnswer
    if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < optionsEn.length) {
      return q.correctAnswer;
    }

    // Check direct numeric answer.correct
    if (typeof q.answer?.correct === 'number' && q.answer.correct >= 0 && q.answer.correct < optionsEn.length) {
      return q.answer.correct;
    }

    // Check string match from answer.correct or correctAnswer
    const textTarget =
      typeof q.answer?.correct === 'string'
        ? q.answer.correct
        : typeof q.correctAnswer === 'string'
          ? q.correctAnswer
          : undefined;

    if (textTarget) {
      const cleanTarget = textTarget.trim().toLowerCase();

      // Check letter e.g. "A", "B", "C", "D"
      if (/^[a-d]$/i.test(cleanTarget)) {
        const letterIdx = cleanTarget.toUpperCase().charCodeAt(0) - 65;
        if (letterIdx >= 0 && letterIdx < optionsEn.length) {
          return letterIdx;
        }
      }

      // Check exact match in optionsEn
      const exactIdx = optionsEn.findIndex((opt) => opt.trim().toLowerCase() === cleanTarget);
      if (exactIdx !== -1) return exactIdx;

      // Check substring or containment
      const partialIdx = optionsEn.findIndex((opt) => {
        const oClean = opt.trim().toLowerCase();
        return oClean.includes(cleanTarget) || cleanTarget.includes(oClean);
      });
      if (partialIdx !== -1) return partialIdx;
    }
  }

  return undefined;
}

/**
 * Resolves canonical textual representation of correct answer
 */
export function getCanonicalAnswerText(
  q: Question,
  canonicalType: CanonicalQuestionType,
  optionsEn: string[],
  correctIdx?: number,
  lang: 'en' | 'ar' = 'en'
): string {
  if (canonicalType === 'true-false') {
    if (correctIdx === 0) return lang === 'ar' ? 'صواب' : 'True';
    if (correctIdx === 1) return lang === 'ar' ? 'خطأ' : 'False';
  }

  if (canonicalType === 'multiple-choice' && correctIdx !== undefined && optionsEn[correctIdx]) {
    const letter = String.fromCharCode(65 + correctIdx);
    return `${letter}) ${optionsEn[correctIdx]}`;
  }

  if (q.answer?.correct !== undefined) {
    return String(q.answer.correct);
  }

  if (q.correctAnswer !== undefined) {
    return String(q.correctAnswer);
  }

  return '';
}

/**
 * Converts any Question object into a NormalizedQuestion
 */
export function normalizeQuestion(q: Question): NormalizedQuestion {
  const canonicalType = toCanonicalQuestionType(q.type);
  const options = getNormalizedOptions(q, canonicalType);
  const correctIdx = getCorrectAnswerIndex(q, canonicalType, options.en);
  const answerText = getCanonicalAnswerText(q, canonicalType, options.en, correctIdx);

  const isVerified =
    canonicalType === 'true-false'
      ? correctIdx !== undefined
      : canonicalType === 'multiple-choice'
        ? correctIdx !== undefined
        : Boolean(q.answer?.correct !== undefined || q.correctAnswer !== undefined);

  const structuredOptions: NormalizedQuestionOption[] = options.en.map((textEn, idx) => {
    const isTF = canonicalType === 'true-false';
    const id = isTF ? (idx === 0 ? 'true' : 'false') : String.fromCharCode(65 + idx);
    const label = isTF ? (idx === 0 ? 'True' : 'False') : String.fromCharCode(65 + idx);
    const textAr = options.ar && options.ar[idx] ? options.ar[idx] : undefined;
    return {
      index: idx,
      id,
      label,
      textEn,
      textAr,
    };
  });

  const rawExplEn = q.explanation?.trim() || '';
  const ansExplEn = q.answer?.explanation?.trim() || '';
  const isDuplicateEn = rawExplEn.toLowerCase() === q.en?.stem?.trim().toLowerCase();
  const explanationEn =
    ansExplEn && (isDuplicateEn || ansExplEn.length > rawExplEn.length || /^(true|false):/i.test(ansExplEn))
      ? ansExplEn
      : rawExplEn || ansExplEn;

  const rawExplAr = q.explanationAr?.trim() || '';
  const ansExplAr = q.answer?.explanationAr?.trim() || '';
  const isDuplicateAr = Boolean(q.ar?.stem && rawExplAr.toLowerCase() === q.ar.stem.trim().toLowerCase());
  const explanationAr =
    ansExplAr && (isDuplicateAr || ansExplAr.length > rawExplAr.length || /^(صواب|خطأ):/.test(ansExplAr))
      ? ansExplAr
      : rawExplAr || ansExplAr;

  return {
    raw: q,
    id: q.id,
    chapterId: q.chapterId,
    topicId: q.topicId,
    type: canonicalType,
    difficulty: q.difficulty,
    source: q.source,
    originalNumber: q.originalNumber,
    stemEn: q.en.stem,
    stemAr: q.ar?.stem,
    optionsEn: options.en,
    optionsAr: options.ar,
    options: structuredOptions,
    correctAnswerIndex: correctIdx,
    correctAnswerText: answerText,
    isAnswerKeyVerified: isVerified,
    explanationEn,
    explanationAr,
    hintEn: q.en.hint || q.en.hintLevel1 || q.en.hintLevel2,
    hintAr: q.ar?.hint || q.ar?.hintLevel1 || q.ar?.hintLevel2,
    hintLevel1En: q.en.hintLevel1 || q.en.hint,
    hintLevel2En: q.en.hintLevel2,
    hintLevel1Ar: q.ar?.hintLevel1 || q.ar?.hint,
    hintLevel2Ar: q.ar?.hintLevel2,
    relatedLessonId: q.relatedLessonId,
  };
}

/**
 * Converts a raw Question into a normalized Question conforming to the original interface
 * with guaranteed options, canonical type, and correctAnswer populated.
 */
export function toNormalizedQuestionObject(q: Question): Question {
  const norm = normalizeQuestion(q);
  return {
    ...q,
    type: norm.type as QuestionType,
    en: {
      ...q.en,
      stem: norm.stemEn,
      options: norm.optionsEn,
      hint: norm.hintEn,
    },
    ar: q.ar
      ? {
          ...q.ar,
          options: norm.optionsAr,
          hint: norm.hintAr,
        }
      : norm.type === 'true-false'
        ? {
            stem: '',
            options: norm.optionsAr,
          }
        : undefined,
    correctAnswer: norm.correctAnswerIndex !== undefined ? norm.correctAnswerIndex : q.correctAnswer,
    answer: q.answer
      ? {
          ...q.answer,
          correct: norm.correctAnswerIndex !== undefined ? norm.correctAnswerIndex : q.answer.correct,
          explanation: norm.explanationEn,
          explanationAr: norm.explanationAr,
        }
      : {
          correct: norm.correctAnswerIndex !== undefined ? norm.correctAnswerIndex : '',
          explanation: norm.explanationEn,
          explanationAr: norm.explanationAr,
        },
    explanation: norm.explanationEn,
    explanationAr: norm.explanationAr,
  };
}

/**
 * Validates a user response against the verified question answer key
 */
export function validateQuestionAnswer(
  q: NormalizedQuestion,
  userAnswer: any,
  lang: 'en' | 'ar' = 'en'
): ValidationResult {
  if (!q.isAnswerKeyVerified) {
    return {
      isCorrect: false,
      isVerified: false,
      userAnswerFormatted: String(userAnswer || ''),
      expectedAnswerFormatted:
        lang === 'ar'
          ? 'مفتاح الإجابة غير متاح — يتطلب مراجعة يدوية.'
          : 'Answer key unavailable — manual review required.',
      feedbackText:
        lang === 'ar'
          ? 'مفتاح الإجابة غير متاح — يتطلب مراجعة يدوية.'
          : 'Answer key unavailable — manual review required.',
    };
  }

  if (q.type === 'true-false') {
    let userIdx: number | undefined;
    if (userAnswer === 0 || userAnswer === 1) userIdx = userAnswer;
    else if (userAnswer === true || String(userAnswer).toLowerCase() === 'true' || String(userAnswer) === 'صواب')
      userIdx = 0;
    else if (userAnswer === false || String(userAnswer).toLowerCase() === 'false' || String(userAnswer) === 'خطأ')
      userIdx = 1;

    const isCorrect = userIdx !== undefined && userIdx === q.correctAnswerIndex;
    return {
      isCorrect,
      isVerified: true,
      userAnswerFormatted:
        userIdx === 0
          ? lang === 'ar'
            ? 'صواب'
            : 'True'
          : userIdx === 1
            ? lang === 'ar'
              ? 'خطأ'
              : 'False'
            : 'None',
      expectedAnswerFormatted:
        q.correctAnswerIndex === 0
          ? lang === 'ar'
            ? 'صواب'
            : 'True'
          : lang === 'ar'
            ? 'خطأ'
            : 'False',
      hint: !isCorrect ? (lang === 'ar' ? q.hintAr : q.hintEn) : undefined,
    };
  }

  if (q.type === 'multiple-choice') {
    let userIdx: number | undefined;
    if (typeof userAnswer === 'number') userIdx = userAnswer;
    else if (typeof userAnswer === 'string') {
      const idx = q.optionsEn.findIndex((o) => o.trim().toLowerCase() === userAnswer.trim().toLowerCase());
      if (idx !== -1) userIdx = idx;
    }

    const isCorrect = userIdx !== undefined && userIdx === q.correctAnswerIndex;
    const userText =
      userIdx !== undefined && q.optionsEn[userIdx]
        ? `${String.fromCharCode(65 + userIdx)}) ${q.optionsEn[userIdx]}`
        : String(userAnswer || 'None');

    const expectedText =
      q.correctAnswerIndex !== undefined && q.optionsEn[q.correctAnswerIndex]
        ? `${String.fromCharCode(65 + q.correctAnswerIndex)}) ${q.optionsEn[q.correctAnswerIndex]}`
        : q.correctAnswerText || '';

    return {
      isCorrect,
      isVerified: true,
      userAnswerFormatted: userText,
      expectedAnswerFormatted: expectedText,
      hint: !isCorrect ? (lang === 'ar' ? q.hintAr : q.hintEn) : undefined,
    };
  }

  if (q.type === 'multiple-select') {
    const userIndices = Array.isArray(userAnswer) ? (userAnswer as number[]).slice().sort() : [];
    const expected = (q.correctAnswerIndices || []).slice().sort();
    const isCorrect =
      userIndices.length === expected.length && userIndices.every((val, i) => val === expected[i]);
    return {
      isCorrect,
      isVerified: true,
      userAnswerFormatted: userIndices.map((i) => String.fromCharCode(65 + i)).join(', '),
      expectedAnswerFormatted: expected.map((i) => String.fromCharCode(65 + i)).join(', '),
      hint: !isCorrect ? (lang === 'ar' ? q.hintAr : q.hintEn) : undefined,
    };
  }

  // Text-based: short-answer, mathematical, practical-problem, diagram
  const userStr = String(userAnswer || '').trim().toLowerCase();
  const expectedStr = String(q.correctAnswerText || '').trim().toLowerCase();

  const cleanUser = userStr.replace(/\s+/g, ' ').replace(/[;.,]/g, '');
  const cleanExp = expectedStr.replace(/\s+/g, ' ').replace(/[;.,]/g, '');

  let isCorrect = cleanUser === cleanExp;
  if (!isCorrect && cleanExp.length >= 2) {
    isCorrect = cleanUser.includes(cleanExp) || cleanExp.includes(cleanUser);
  }

  return {
    isCorrect,
    isVerified: Boolean(q.correctAnswerText),
    userAnswerFormatted: String(userAnswer || 'None'),
    expectedAnswerFormatted: q.correctAnswerText || 'Manual grading',
    hint: !isCorrect ? (lang === 'ar' ? q.hintAr : q.hintEn) : undefined,
  };
}

