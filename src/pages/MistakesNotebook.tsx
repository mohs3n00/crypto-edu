import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { allQuestions, getQuestionById } from '../data/questions';
import { useProgress } from '../store/progressStore';
import QuestionCard from '../components/question/QuestionCard';

export default function MistakesNotebook(): React.ReactElement {
  const { progress, recordQuestionResult } = useProgress();

  const [filterChapter, setFilterChapter] = useState('all');

  // Identify questions with incorrect recorded results
  const incorrectEntryKeys = Object.entries(progress.questionAnswers)
    .filter(([, ans]) => !ans.correct)
    .map(([qId]) => qId);

  const incorrectQuestions = incorrectEntryKeys
    .map((id) => getQuestionById(id))
    .filter((q): q is typeof allQuestions[number] => q !== undefined)
    .filter((q) => (filterChapter === 'all' ? true : q.chapterId === filterChapter));

  // Local state for retries in notebook
  const [retryAnswers, setRetryAnswers] = useState<Record<string, any>>({});
  const [retryStatus, setRetryStatus] = useState<Record<string, boolean>>({});

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <RotateCcw className="w-4 h-4 text-[#171717]" />
          <span>Mistakes & Weak Points Notebook / كشكول الأخطاء والمراجعة المركزة</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
              Mistakes Notebook ({incorrectQuestions.length} Items)
            </h1>
            <p
              dir="rtl"
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              سجل الأسئلة التي تمت الإجابة عليها بشكل خاطئ لتمكينك من إعادة المحاولة وتثبيت الفهم الأكاديمي
            </p>
          </div>

          {/* Chapter Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#737373]" />
            <select
              value={filterChapter}
              onChange={(e) => setFilterChapter(e.target.value)}
              className="p-1.5 border border-[#E5E5E5] rounded text-xs bg-[#FFFFFF] text-[#171717]"
            >
              <option value="all">All Chapters</option>
              <option value="ch1">Chapter 1</option>
              <option value="ch2">Chapter 2</option>
              <option value="ch3">Chapter 3</option>
              <option value="ch4">Chapter 4</option>
              <option value="ch7">Chapter 7</option>
            </select>
          </div>
        </div>
      </div>

      {incorrectQuestions.length === 0 ? (
        <div className="border border-[#E5E5E5] rounded-lg p-12 bg-[#FAFAFA] text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#171717] mx-auto" />
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#171717]">No Active Mistakes!</h2>
            <p className="text-xs text-[#737373] max-w-md mx-auto">
              You currently have zero recorded mistakes in this filter. As you take quizzes and practice questions, any missed questions will appear here for targeted review.
            </p>
          </div>
          <Link
            to="/questions"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors"
          >
            Go to Question Bank
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {incorrectQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx + 1}
              userAnswer={
                retryAnswers[q.id] !== undefined
                  ? retryAnswers[q.id]
                  : progress.questionAnswers[q.id]?.selectedAnswer
              }
              isSubmitted={Boolean(retryStatus[q.id])}
              onSelectAnswer={(val) => setRetryAnswers((prev) => ({ ...prev, [q.id]: val }))}
              onSubmitAnswer={({ isCorrect, answer }) => {
                setRetryStatus((prev) => ({ ...prev, [q.id]: true }));
                if (isCorrect) {
                  recordQuestionResult(q.id, true, answer);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
