import { allQuestions } from '../data/questions';
import {
  normalizeQuestion,
  validateQuestionAnswer,
  type NormalizedQuestion,
} from './questionNormalizer';

/**
 * Functional verification suite for the global EDU question system
 */
export function runQuestionSystemTests(): {
  totalQuestions: number;
  passedTests: number;
  failedTests: number;
  errors: string[];
} {
  const errors: string[] = [];
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition: boolean, msg: string) {
    if (condition) {
      passedTests++;
    } else {
      failedTests++;
      errors.push(msg);
    }
  }

  // 1. Overall catalog check
  assert(allQuestions.length === 170, `Expected 170 questions, got ${allQuestions.length}`);

  // 2. Type test: True / False
  const tfQuestions = allQuestions.filter((q) => q.type === 'true-false');
  assert(tfQuestions.length >= 60, `Expected at least 60 True/False questions, got ${tfQuestions.length}`);

  for (const q of tfQuestions) {
    const norm = normalizeQuestion(q);
    assert(norm.optionsEn.length === 2, `Q ${q.id} (TF) must have 2 English options`);
    assert(norm.optionsEn[0] === 'True' && norm.optionsEn[1] === 'False', `Q ${q.id} (TF) options must be True/False`);
    assert(norm.correctAnswerIndex === 0 || norm.correctAnswerIndex === 1, `Q ${q.id} (TF) must have valid correct index (0 or 1), got ${norm.correctAnswerIndex}`);

    // Test correct answer validation
    const correctRes = validateQuestionAnswer(norm, norm.correctAnswerIndex);
    assert(correctRes.isCorrect === true, `Q ${q.id} (TF) failed to validate correct answer`);

    // Test incorrect answer validation
    const wrongIdx = norm.correctAnswerIndex === 0 ? 1 : 0;
    const wrongRes = validateQuestionAnswer(norm, wrongIdx);
    assert(wrongRes.isCorrect === false, `Q ${q.id} (TF) should be false for opposite choice`);
  }

  // 3. Type test: Multiple Choice (MCQ)
  const mcqQuestions = allQuestions.filter((q) => q.type === 'multiple-choice');
  assert(mcqQuestions.length >= 70, `Expected at least 70 MCQ questions, got ${mcqQuestions.length}`);

  for (const q of mcqQuestions) {
    const norm = normalizeQuestion(q);
    assert(norm.optionsEn.length >= 2, `Q ${q.id} (MCQ) must have at least 2 options, got ${norm.optionsEn.length}`);
    assert(
      norm.correctAnswerIndex !== undefined && norm.correctAnswerIndex >= 0 && norm.correctAnswerIndex < norm.optionsEn.length,
      `Q ${q.id} (MCQ) must have valid correct index in bounds [0, ${norm.optionsEn.length - 1}], got ${norm.correctAnswerIndex}`
    );

    // Test correct answer validation
    const correctRes = validateQuestionAnswer(norm, norm.correctAnswerIndex);
    assert(correctRes.isCorrect === true, `Q ${q.id} (MCQ) failed to validate correct answer`);

    // Test incorrect answer validation
    const wrongIdx = (norm.correctAnswerIndex! + 1) % norm.optionsEn.length;
    const wrongRes = validateQuestionAnswer(norm, wrongIdx);
    assert(wrongRes.isCorrect === false, `Q ${q.id} (MCQ) should be false for wrong index ${wrongIdx}`);
  }

  // 4. Midterm Questions: True / False specific checks
  const mid22Tf4 = allQuestions.find((q) => q.id === 'mid22-tf-4');
  assert(mid22Tf4 !== undefined, 'Midterm 2022 Q2.4 must exist');
  if (mid22Tf4) {
    assert(!mid22Tf4.en.stem.endsWith('True'), 'Midterm 2022 Q2.4 stem must not have trailing True');
    const norm = normalizeQuestion(mid22Tf4);
    assert(norm.correctAnswerIndex === 0, 'OSI security architecture statement is True');
    assert(validateQuestionAnswer(norm, 0).isCorrect === true, 'OSI statement should validate to True');
    assert(validateQuestionAnswer(norm, 1).isCorrect === false, 'OSI statement should fail on False');
  }

  const mid22Tf2 = allQuestions.find((q) => q.id === 'mid22-tf-2');
  assert(mid22Tf2 !== undefined, 'Midterm 2022 Q2.2 must exist');
  if (mid22Tf2) {
    assert(!mid22Tf2.en.stem.endsWith('False'), 'Midterm 2022 Q2.2 stem must not have trailing False');
    const norm = normalizeQuestion(mid22Tf2);
    assert(norm.correctAnswerIndex === 1, 'DES 56-bit block statement is False');
    assert(validateQuestionAnswer(norm, 1).isCorrect === true, 'DES swapped numbers statement should validate to False');
    assert(validateQuestionAnswer(norm, 0).isCorrect === false, 'DES swapped numbers statement should fail on True');
  }

  // 5. Practical / Mathematical Problems check
  const hillQ = allQuestions.find((q) => q.id === 'mid22-prob-hill');
  assert(hillQ !== undefined, 'Midterm 2022 Hill Cipher question must exist');
  if (hillQ) {
    const norm = normalizeQuestion(hillQ);
    assert(validateQuestionAnswer(norm, 'HDS').isCorrect === true, 'Hill cipher question must accept HDS');
    assert(validateQuestionAnswer(norm, 'hds').isCorrect === true, 'Hill cipher validation must be case-insensitive');
    assert(validateQuestionAnswer(norm, 'ABC').isCorrect === false, 'Hill cipher must reject incorrect ABC');
  }

  const s2Q = allQuestions.find((q) => q.id === 'mid20-prob-s2');
  assert(s2Q !== undefined, 'Midterm 2020 S2 question must exist');
  if (s2Q) {
    const norm = normalizeQuestion(s2Q);
    assert(validateQuestionAnswer(norm, '2 = 0010').isCorrect === true, 'S2 question must accept 2 = 0010');
    assert(validateQuestionAnswer(norm, '0010').isCorrect === true, 'S2 question must accept binary 0010');
  }

  // 6. Test Synthetic Multiple-Select Question
  const syntheticMultiQ: NormalizedQuestion = {
    raw: {} as any,
    id: 'test-multi',
    chapterId: 'ch1',
    type: 'multiple-select',
    difficulty: 2,
    source: 'generated',
    stemEn: 'Which of the following are passive attacks? (Select all that apply)',
    optionsEn: ['Traffic analysis', 'Masquerade', 'Release of message contents', 'Replay'],
    options: [],
    correctAnswerIndices: [0, 2], // Traffic analysis & Release of message contents
    isAnswerKeyVerified: true,
    explanationEn: 'Passive attacks monitor traffic without modifying system data.',
    explanationAr: 'الهجمات السلبية تراقب حركة المرور دون تعديل.',
  };

  assert(validateQuestionAnswer(syntheticMultiQ, [0, 2]).isCorrect === true, 'Multi-select with [0, 2] must be correct');
  assert(validateQuestionAnswer(syntheticMultiQ, [2, 0]).isCorrect === true, 'Multi-select order should not matter');
  assert(validateQuestionAnswer(syntheticMultiQ, [0]).isCorrect === false, 'Partial multi-select must be incorrect');
  assert(validateQuestionAnswer(syntheticMultiQ, [0, 1, 2]).isCorrect === false, 'Multi-select with distractor must be incorrect');

  // 7. Test Unverified Answer Key Handling
  const syntheticUnverifiedQ: NormalizedQuestion = {
    raw: {} as any,
    id: 'test-unverified',
    chapterId: 'ch1',
    type: 'short-answer',
    difficulty: 3,
    source: 'generated',
    stemEn: 'Describe an open research problem in quantum cryptanalysis.',
    optionsEn: [],
    options: [],
    isAnswerKeyVerified: false,
    explanationEn: 'Open discussion topic.',
    explanationAr: 'موضوع نقاش مفتوح.',
  };

  const unverifiedRes = validateQuestionAnswer(syntheticUnverifiedQ, 'Grover algorithm speedup');
  assert(unverifiedRes.isVerified === false, 'Unverified question must flag isVerified as false');
  assert(unverifiedRes.isCorrect === false, 'Unverified question must not falsely mark correct');
  assert(
    unverifiedRes.feedbackText?.includes('manual review') === true,
    'Unverified question feedback must indicate manual review required'
  );

  return {
    totalQuestions: allQuestions.length,
    passedTests,
    failedTests,
    errors,
  };
}
