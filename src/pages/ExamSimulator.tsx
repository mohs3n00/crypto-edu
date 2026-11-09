import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  Zap,
  Clock,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Flag,
  Award,
} from 'lucide-react';
import { getExamQuestions } from '../data/questions';
import type { ExamAttempt } from '../types';
import { useProgress } from '../store/progressStore';
import FeistelNetworkDiagram from '../components/diagrams/FeistelNetworkDiagram';
import { TrueFalseOptions, MCQOptions } from '../components/question';
import { normalizeQuestion, validateQuestionAnswer } from '../utils/questionNormalizer';

export default function ExamSimulator(): React.ReactElement {
  const { recordExamAttempt } = useProgress();

  // Active exam selection
  const [selectedExamId, setSelectedExamId] = useState<'midterm-2022' | 'midterm-2020' | null>(null);

  // Exam session state
  const [isExamActive, setIsExamActive] = useState(false);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [finalScore, setFinalScore] = useState<ExamAttempt | null>(null);

  const examQuestions = useMemo(
    () => (selectedExamId ? getExamQuestions(selectedExamId) : []),
    [selectedExamId]
  );

  const handleFinishExam = useCallback(() => {
    setIsExamActive(false);
    setIsExamFinished(true);

    // Calculate score with verified question normalizer
    let earnedScore = 0;
    const totalPoints = examQuestions.length;

    examQuestions.forEach((q) => {
      const userAns = answers[q.id];
      const normQ = normalizeQuestion(q);
      const val = validateQuestionAnswer(normQ, userAns);
      if (val.isCorrect) earnedScore += 1;
    });

    const now = Date.now();
    const isoDate = new Date(now).toISOString();

    const attempt: ExamAttempt = {
      id: `attempt-${now}`,
      examId: selectedExamId!,
      title:
        selectedExamId === 'midterm-2022'
          ? 'Midterm 2022 (IS401 Model 1)'
          : 'Midterm 2020 (IS410 Model 1)',
      date: isoDate,
      score: earnedScore,
      totalQuestions: totalPoints,
      percentage: totalPoints > 0 ? Math.round((earnedScore / totalPoints) * 100) : 0,
      timeSpentSeconds: 3600 - timeLeft,
      answers,
    };

    setFinalScore(attempt);
    recordExamAttempt(attempt);
  }, [examQuestions, answers, selectedExamId, timeLeft, recordExamAttempt]);

  const handleFinishRef = useRef(handleFinishExam);
  useEffect(() => {
    handleFinishRef.current = handleFinishExam;
  }, [handleFinishExam]);

  // Countdown timer: decrements time until 0, then calls finish via ref
  useEffect(() => {
    if (!isExamActive || isExamFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => handleFinishRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isExamFinished]);

  const handleStartExam = (examId: 'midterm-2022' | 'midterm-2020') => {
    setSelectedExamId(examId);
    setIsExamActive(true);
    setIsExamFinished(false);
    setCurrentQIndex(0);
    setAnswers({});
    setFlagged({});
    setTimeLeft(3600); // 60 mins
    setFinalScore(null);
  };

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (isExamFinished) return;
    setAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleTextInput = (qId: string, text: string) => {
    if (isExamFinished) return;
    setAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Exam Selection Screen
  if (!isExamActive && !isExamFinished) {
    return (
      <div className="w-full max-w-[1400px] mx-auto px-4 py-8 space-y-8">
        <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#171717]" />
            <span>Official Midterm Simulator / محاكي الامتحانات الفصلية الفعلي</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
            Actual Faculty Midterm Examination Simulator
          </h1>
          <p
            dir="rtl"
            className="text-sm text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            امتحانات الميدتيرم الفعلية بالزمن الحقيقي والدرجات التقديرية ونفس الأسئلة والمسائل الحسابية الأصلية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2022 Exam Card */}
          <div className="border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] space-y-4 hover:border-[#171717] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                  IS401 • Model 1
                </span>
                <span className="text-xs font-mono text-[#737373] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 60 Minutes
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#171717]">Midterm Exam 2022 (IS401)</h2>
              <p className="text-xs text-[#525252] leading-relaxed">
                Covers Chapter 1, Chapter 3, and Chapter 4. Includes:
              </p>
              <ul className="text-xs text-[#525252] list-disc list-inside space-y-1">
                <li>Multiple Choice (Passive attacks, Playfair, Symmetric key)</li>
                <li>True/False (Security mechanisms, Product ciphers, Shannon)</li>
                <li>Feistel Network diagram question</li>
                <li>Hill Cipher 3×3 matrix calculation: <span className="font-mono font-bold">"saf" → "HDS"</span></li>
                <li>Playfair 5×5 matrix with keyword "security"</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#F2F2F2]">
              <button
                type="button"
                onClick={() => handleStartExam('midterm-2022')}
                className="w-full py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch 2022 Midterm (60 min)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2020 Exam Card */}
          <div className="border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] space-y-4 hover:border-[#171717] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                  IS410 • Model 1
                </span>
                <span className="text-xs font-mono text-[#737373] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 60 Minutes
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#171717]">Midterm Exam 2020 (IS410)</h2>
              <p className="text-xs text-[#525252] leading-relaxed">
                Covers Chapter 1, Chapter 3, and Chapter 4. Includes:
              </p>
              <ul className="text-xs text-[#525252] list-disc list-inside space-y-1">
                <li>Multiple Choice (Confidentiality, Substitution, Cryptanalysis)</li>
                <li>Hill Cipher 3×3 matrix calculation: <span className="font-mono font-bold">"Sec" → "e s g"</span></li>
                <li>DES S-Box S2 calculation: input <span className="font-mono font-bold">101111 → 2 = 0010</span></li>
                <li>Playfair matrix encryption: <span className="font-mono font-bold">"cryptography" → "US BN AM KC BO GA"</span></li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#F2F2F2]">
              <button
                type="button"
                onClick={() => handleStartExam('midterm-2020')}
                className="w-full py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch 2020 Midterm (60 min)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Post-Exam Review Screen
  if (isExamFinished && finalScore) {
    return (
      <div className="w-full max-w-[1400px] mx-auto px-4 py-8 space-y-8">
        <div className="border border-[#171717] rounded-lg p-6 bg-[#FAFAFA] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#171717]" />
            <span>Official Exam Result & Evaluation</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#171717]">{finalScore.title}</h1>
              <p className="text-xs text-[#737373] mt-1">
                Completed on {finalScore.date ? new Date(finalScore.date).toLocaleDateString() : ''} in{' '}
                {Math.floor((finalScore.timeSpentSeconds || 0) / 60)} minutes
              </p>
            </div>
            <div className="text-center md:text-right border border-[#171717] bg-[#FFFFFF] p-4 rounded">
              <span className="text-xs uppercase text-[#737373] block">Final Score</span>
              <span className="text-3xl font-bold font-mono text-[#171717]">
                {finalScore.score} / {finalScore.totalQuestions}
              </span>
              <span className="block text-xs font-bold text-[#525252] mt-0.5">
                ({finalScore.percentage}%)
              </span>
            </div>
          </div>

          <div className="pt-4 flex gap-3 border-t border-[#E5E5E5]">
            <button
              onClick={() => handleStartExam(selectedExamId!)}
              className="px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </button>
            <button
              onClick={() => {
                setIsExamActive(false);
                setIsExamFinished(false);
                setSelectedExamId(null);
              }}
              className="px-4 py-2 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] rounded text-xs font-medium hover:bg-[#F2F2F2]"
            >
              Back to Exam Selection
            </button>
          </div>
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-[#171717] border-b border-[#E5E5E5] pb-2">
            Detailed Solution & Question Breakdown
          </h2>

          {examQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const normQ = normalizeQuestion(q);
            const val = validateQuestionAnswer(normQ, userAns);
            const isCorrect = val.isCorrect;

            return (
              <div
                key={q.id}
                className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FFFFFF] space-y-4"
              >
                <div className="flex items-center justify-between text-xs border-b border-[#F2F2F2] pb-2">
                  <span className="font-mono font-bold text-[#171717]">Question {idx + 1}</span>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${
                      isCorrect
                        ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                        : 'border-[#525252] bg-[#F2F2F2] text-[#525252]'
                    }`}
                  >
                    {isCorrect ? 'Correct (+1 pt)' : 'Incorrect (0 pt)'}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#171717]">{q.en.stem}</p>
                  {q.ar?.stem && (
                    <p
                      dir="rtl"
                      className="text-xs text-[#525252] font-serif"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {q.ar.stem}
                    </p>
                  )}
                </div>

                {/* Show Options if MCQ / TF */}
                {normQ.optionsEn && normQ.optionsEn.length > 0 && (normQ.type === 'true-false' || normQ.type === 'multiple-choice') && (
                  <div className="space-y-1 text-xs">
                    {normQ.optionsEn.map((opt, oIdx) => {
                      const isUserChoice = userAns === oIdx;
                      const isCorrectChoice = normQ.correctAnswerIndex === oIdx;

                      let rowClass = 'text-[#737373]';
                      if (isCorrectChoice) rowClass = 'text-[#171717] font-bold bg-[#F2F2F2] p-1.5 rounded';
                      else if (isUserChoice && !isCorrectChoice)
                        rowClass = 'text-[#525252] line-through p-1.5';

                      return (
                        <div key={oIdx} className={`flex items-center gap-2 ${rowClass}`}>
                          <span>{String.fromCharCode(65 + oIdx)})</span>
                          <span>{opt}</span>
                          {isCorrectChoice && <span className="text-[10px] uppercase font-mono">(Correct Answer)</span>}
                          {isUserChoice && !isCorrectChoice && (
                            <span className="text-[10px] uppercase font-mono">(Your Answer)</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* If practical problem / text */}
                {(normQ.type !== 'true-false' && normQ.type !== 'multiple-choice') && (
                  <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1">
                    <div>
                      <span className="text-[#737373]">Your Answer: </span>
                      <span className="font-mono font-medium text-[#171717]">{String(userAns || 'None')}</span>
                    </div>
                    <div>
                      <span className="text-[#737373]">Official Model Answer: </span>
                      <span className="font-mono font-bold text-[#171717]">{val.expectedAnswerFormatted}</span>
                    </div>
                  </div>
                )}

                {/* Academic Explanation */}
                <div className="p-3 border-t border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1.5 text-[#525252]">
                  <div>
                    <strong className="text-[#171717]">Step-by-step Solution: </strong>
                    {q.explanation}
                  </div>
                  {q.explanationAr && (
                    <div dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                      <strong className="text-[#171717]">الشرح الأكاديمي: </strong>
                      {q.explanationAr}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Timed Exam View
  const currentQ = examQuestions[currentQIndex];
  const isLastQ = currentQIndex === examQuestions.length - 1;
  const isFlagged = flagged[currentQ?.id];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-6 space-y-6">
      {/* Sticky Top Exam Control Bar */}
      <div className="sticky top-16 z-20 border border-[#171717] bg-[#FFFFFF] p-4 rounded-lg shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
            {selectedExamId === 'midterm-2022' ? 'IS401 (2022)' : 'IS410 (2020)'}
          </span>
          <span className="text-xs font-mono font-semibold text-[#171717]">
            Question {currentQIndex + 1} of {examQuestions.length}
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-[#171717] animate-pulse' : 'text-[#525252]'}`} />
          <span
            className={`font-mono text-base font-bold ${
              timeLeft < 300 ? 'text-[#171717] underline' : 'text-[#171717]'
            }`}
          >
            {formatTimer(timeLeft)}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure you want to finish and submit the exam for grading?')) {
              handleFinishExam();
            }
          }}
          className="px-4 py-1.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors"
        >
          Finish Exam
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Question Navigation Palette */}
        <div className="border border-[#E5E5E5] rounded-lg p-4 bg-[#FAFAFA] space-y-4 lg:col-span-3 h-fit">
          <div className="text-xs font-semibold uppercase text-[#171717]">Questions Palette</div>
          <div className="grid grid-cols-5 gap-1.5">
            {examQuestions.map((q, idx) => {
              const hasAnswer = answers[q.id] !== undefined && answers[q.id] !== '';
              const isCurrent = idx === currentQIndex;
              const isMarked = flagged[q.id];

              let cellClass = 'border-[#E5E5E5] bg-[#FFFFFF] text-[#525252]';
              if (isCurrent) cellClass = 'border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold';
              else if (hasAnswer) cellClass = 'border-[#171717] bg-[#F2F2F2] text-[#171717] font-medium';

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentQIndex(idx)}
                  className={`h-8 rounded text-xs border flex items-center justify-center relative font-mono transition-colors ${cellClass}`}
                >
                  <span>{idx + 1}</span>
                  {isMarked && (
                    <span className="w-1.5 h-1.5 bg-[#171717] rounded-full absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#E5E5E5] text-[11px] space-y-1 text-[#737373]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#171717] bg-[#171717] inline-block rounded" />
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#171717] bg-[#F2F2F2] inline-block rounded" />
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#E5E5E5] bg-[#FFFFFF] inline-block rounded" />
              <span>Unanswered</span>
            </div>
          </div>
        </div>

        {/* Right: Active Question Card */}
        <div className="lg:col-span-9 border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
          <div className="flex items-center justify-between border-b border-[#F2F2F2] pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 border border-[#E5E5E5] rounded text-[#525252]">
                Q {currentQIndex + 1} of {examQuestions.length}
              </span>
              <span className="font-mono text-xs uppercase text-[#737373]">{currentQ.type}</span>
            </div>

            <button
              type="button"
              onClick={() => toggleFlag(currentQ.id)}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border transition-colors ${
                isFlagged
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#E5E5E5] text-[#525252] hover:text-[#171717]'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{isFlagged ? 'Flagged' : 'Flag for review'}</span>
            </button>
          </div>

          {/* Stems */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#171717] leading-relaxed">
              {currentQ.en.stem}
            </h3>
            {currentQ.ar?.stem && (
              <p
                dir="rtl"
                className="text-base sm:text-lg text-[#525252] leading-relaxed font-serif"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {currentQ.ar.stem}
              </p>
            )}
          </div>

          {/* Diagram if Feistel Q */}
          {currentQ.id.includes('feistel') && (
            <div className="my-4 border border-[#E5E5E5] rounded p-4 bg-[#FAFAFA]">
              <FeistelNetworkDiagram />
            </div>
          )}

          {/* Options for MCQ / TF / Calculations */}
          {(() => {
            const normQ = normalizeQuestion(currentQ);
            if (normQ.type === 'true-false') {
              return (
                <TrueFalseOptions
                  selectedAnswer={answers[currentQ.id]}
                  onSelect={(val) => handleSelectOption(currentQ.id, val)}
                  isArabic={false}
                />
              );
            }
            if (normQ.type === 'multiple-choice') {
              return (
                <MCQOptions
                  optionsEn={normQ.optionsEn}
                  optionsAr={normQ.optionsAr}
                  selectedAnswer={answers[currentQ.id]}
                  onSelect={(val) => handleSelectOption(currentQ.id, val)}
                  isArabic={false}
                />
              );
            }
            return (
              <div className="space-y-2 pt-2">
                <label className="block text-xs text-[#737373]">
                  Enter final calculated result / model solution:
                </label>
                <textarea
                  rows={3}
                  value={String(answers[currentQ.id] || '')}
                  onChange={(e) => handleTextInput(currentQ.id, e.target.value)}
                  placeholder="Write your calculations, matrix output, or short answer..."
                  className="w-full p-3 border border-[#E5E5E5] rounded text-xs font-mono bg-[#FFFFFF] focus:outline-none focus:border-[#171717] text-[#171717]"
                />
              </div>
            );
          })()}

          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-[#F2F2F2] flex items-center justify-between">
            <button
              type="button"
              disabled={currentQIndex === 0}
              onClick={() => setCurrentQIndex((prev) => prev - 1)}
              className="px-4 py-2 border border-[#E5E5E5] rounded text-xs text-[#171717] hover:bg-[#FAFAFA] disabled:opacity-30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>

            {isLastQ ? (
              <button
                type="button"
                onClick={handleFinishExam}
                className="px-5 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors"
              >
                Submit Exam
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentQIndex((prev) => prev + 1)}
                className="px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] flex items-center gap-1.5"
              >
                Next
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
