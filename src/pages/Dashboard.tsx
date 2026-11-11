import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  FileCheck,
  GraduationCap,
  HelpCircle,
  PlayCircle,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { getAllChapters, getAllLessons } from '../data/chapters';
import { allQuestions } from '../data/questions';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import { getSubjectById } from '../data/subjects';
import { ProgressBar } from '../components/ui/ProgressBar';

export default function Dashboard(): React.ReactElement {
  const { progress } = useProgress();
  const { language, activeSubjectId } = useUI();
  const currentSubject = getSubjectById(activeSubjectId);
  const chapters = currentSubject.chapters;
  const allLessons = chapters.flatMap((c) => c.topics.flatMap((t) => t.lessons));

  const totalLessons = allLessons.length;
  const completedLessonsCount = Object.values(progress.completedLessons).filter(Boolean).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  // Question stats
  const answeredCount = Object.keys(progress.questionAnswers).length;
  const correctCount = Object.values(progress.questionAnswers).filter((a) => a.correct).length;
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Exam readiness score (weighted: 50% lesson progress, 30% question accuracy, 20% exam attempts)
  const examReadiness = Math.min(
    100,
    Math.round(
      progressPercent * 0.5 +
        (answeredCount > 0 ? accuracyPercent * 0.3 : 0) +
        (progress.examAttempts.length > 0 ? 20 : 0)
    )
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="border border-[#E5E5E5] bg-[#FFFFFF] p-6 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{currentSubject.code} • {language === 'ar' ? currentSubject.levelAr : currentSubject.level}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              {language === 'ar' ? currentSubject.titleAr : currentSubject.title}
            </h1>
            <p
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'inherit' }}
            >
              {language === 'ar' ? currentSubject.descriptionAr : currentSubject.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/exams"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] transition-colors"
            >
              <Zap className="w-4 h-4" />
              Take Midterm Exam
            </Link>
            <Link
              to="/lab"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] rounded text-xs font-medium hover:bg-[#FAFAFA] transition-colors"
            >
              <Cpu className="w-4 h-4" />
              Open Crypto Lab
            </Link>
          </div>
        </div>

        {/* Progress & Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E5E5]">
          <div className="p-3 border border-[#E5E5E5] rounded bg-[#FAFAFA] space-y-1">
            <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Course Progress</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-[#171717]">{progressPercent}%</span>
              <span className="text-xs text-[#737373]">({completedLessonsCount}/{totalLessons} lessons)</span>
            </div>
          </div>

          <div className="p-3 border border-[#E5E5E5] rounded bg-[#FAFAFA] space-y-1">
            <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Questions Answered</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-[#171717]">{answeredCount}</span>
              <span className="text-xs text-[#737373]">/ {allQuestions.length} bank</span>
            </div>
          </div>

          <div className="p-3 border border-[#E5E5E5] rounded bg-[#FAFAFA] space-y-1">
            <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Quiz Accuracy</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-[#171717]">{accuracyPercent}%</span>
              <span className="text-xs text-[#737373]">({correctCount} correct)</span>
            </div>
          </div>

          <div className="p-3 border border-[#E5E5E5] rounded bg-[#FAFAFA] space-y-1">
            <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Exam Readiness</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-[#171717]">{examReadiness}%</span>
              <span className="text-xs text-[#737373]">{examReadiness > 75 ? 'Ready' : 'In Progress'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Grid (Strict 5 Chapters) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
          <div className="space-y-0.5">
            <h2 className="text-lg font-bold tracking-tight text-[#171717]">
              Curriculum Units (5 Chapters)
            </h2>
            <p className="text-xs text-[#737373]">
              Authentic textbook and lecture sequence from William Stallings & Faculty Syllabus
            </p>
          </div>
          <Link
            to="/curriculum"
            className="text-xs text-[#171717] font-medium hover:underline flex items-center gap-1"
          >
            <span>View Syllabus Map</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch) => {
            const chLessons = ch.topics.flatMap((t) => t.lessons);
            const chCompleted = chLessons.filter((l) => progress.completedLessons[l.id]).length;
            const chPercent = chLessons.length > 0 ? Math.round((chCompleted / chLessons.length) * 100) : 0;
            const firstLesson = chLessons[0];

            return (
              <div
                key={ch.id}
                className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FFFFFF] flex flex-col justify-between hover:border-[#171717] transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                      Unit {ch.number}
                    </span>
                    <span className="text-xs text-[#737373] font-mono">
                      {ch.topics.length} Topics • {chLessons.length} Lessons
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#171717] group-hover:underline">
                      {ch.title}
                    </h3>
                    <h4
                      dir="rtl"
                      className="text-xs text-[#525252] font-serif"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {ch.titleAr}
                    </h4>
                  </div>

                  <p className="text-xs text-[#737373] line-clamp-2">
                    {ch.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 mt-4 border-t border-[#F2F2F2]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                    <span>Progress</span>
                    <span>{chCompleted}/{chLessons.length} ({chPercent}%)</span>
                  </div>
                  <ProgressBar value={chPercent} />

                  <div className="pt-2">
                    {firstLesson && (
                      <Link
                        to={`/learn/${ch.id}/${firstLesson.id}`}
                        className="w-full flex items-center justify-center gap-2 py-2 border border-[#E5E5E5] rounded text-xs font-medium text-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF] transition-colors"
                      >
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>{chCompleted > 0 ? 'Continue Unit' : 'Start Unit'}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Portals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Exam Card */}
        <div className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FAFAFA] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Zap className="w-4 h-4" />
            <span>Official Midterm Simulator</span>
          </div>
          <p className="text-xs text-[#525252]">
            Simulate actual Midterm Exams 2022 (IS401 Model 1) and 2020 (IS410 Model 1) under timed exam conditions with instant grading.
          </p>
          <div className="pt-2 space-y-2">
            <Link
              to="/exams"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] transition-colors"
            >
              Start Timed Midterm
            </Link>
          </div>
        </div>

        {/* Lab Card */}
        <div className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FAFAFA] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <Cpu className="w-4 h-4" />
            <span>Interactive Crypto Lab</span>
          </div>
          <p className="text-xs text-[#525252]">
            Test ciphers hands-on: Caesar, Playfair 5×5, Hill matrix mod 26, Euclidean / Extended gcd, DES S-Boxes, and Modes of Operation.
          </p>
          <div className="pt-2">
            <Link
              to="/lab"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] transition-colors"
            >
              Open Interactive Tools
            </Link>
          </div>
        </div>

        {/* Question Bank & Mistakes Card */}
        <div className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FAFAFA] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717]">
            <HelpCircle className="w-4 h-4" />
            <span>Question Bank & Mistakes</span>
          </div>
          <p className="text-xs text-[#525252]">
            Practice 156 verbatim questions from official test banks (Ch 1, 3, 4) and midterm exam papers with detailed explanations.
          </p>
          <div className="pt-2 flex gap-2">
            <Link
              to="/questions"
              className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-medium hover:bg-[#333333] transition-colors"
            >
              Browse 156 Qs
            </Link>
            <Link
              to="/mistakes"
              className="inline-flex items-center justify-center px-3 py-2 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] rounded text-xs font-medium hover:bg-[#F2F2F2] transition-colors"
            >
              Mistakes ({Object.values(progress.questionAnswers).filter((a) => !a.correct).length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
