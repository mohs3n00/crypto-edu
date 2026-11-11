import React, { useState, useMemo } from 'react';
import {
  Key,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Layers,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  XCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  filterBasmagaQuestions,
  type BasmagaSourceType,
} from '../data/basmaga';
import { getSubjectById, getSubjectBasmagaQuestions, getSubjectQuickReference } from '../data/subjects';
import { filterBpmBasmagaQuestions } from '../data/bpm/basmaga';
import { filterBigDataBasmagaQuestions } from '../data/bigdata/basmaga';
import BasmagaCard from '../components/basmaga/BasmagaCard';
import BasmagaQuickReference from '../components/basmaga/BasmagaQuickReference';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';

export const BasmagaHub: React.FC = () => {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useProgress();
  const { activeSubjectId, language } = useUI();
  const isArabic = language === 'ar';

  const currentSubject = getSubjectById(activeSubjectId);
  const subjectBasmagaQuestions = getSubjectBasmagaQuestions(activeSubjectId);
  const subjectQuickReference = getSubjectQuickReference(activeSubjectId);

  const [activeTab, setActiveTab] = useState<'questions' | 'quick-ref' | 'traps'>('questions');
  const [viewMode, setViewMode] = useState<'feed' | 'runner'>('feed');
  const [runnerIndex, setRunnerIndex] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, boolean>>({});

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedSourceType, setSelectedSourceType] = useState<BasmagaSourceType | 'all'>('all');
  const [selectedFormat, setSelectedFormat] = useState<'all' | 'mcq' | 'true-false'>('all');
  const [frequentlyConfusedOnly, setFrequentlyConfusedOnly] = useState(false);
  const [bookmarksOnly, setBookmarksOnly] = useState(false);

  const chapters = useMemo(() => {
    return [
      { id: 'all', label: isArabic ? 'كافة الفصول والوحدات' : 'All Chapters • كل الفصول' },
      ...currentSubject.chapters.map((ch) => ({
        id: ch.id,
        label: `${ch.number}: ${isArabic ? ch.titleAr : ch.title}`,
      })),
    ];
  }, [currentSubject, isArabic]);

  const sourceTypes = [
    { id: 'all', label: 'All Sources • كل المصادر' },
    { id: 'original-exam', label: 'Original Exam • امتحانات سابقة' },
    { id: 'original-testbank', label: 'Original Test Bank • بنك الأسئلة' },
    { id: 'lecture', label: 'Lecture Question • أمثلة المحاضرة' },
    { id: 'generated-practice', label: 'Additional Generated Practice • تدريب إضافي' },
  ];

  // Filter questions
  const filteredQuestions = useMemo(() => {
    let result =
      activeSubjectId === 'bpm'
        ? filterBpmBasmagaQuestions({
            chapterId: selectedChapter,
            sourceType: selectedSourceType,
            type: selectedFormat,
            searchQuery: searchQuery,
            frequentlyConfusedOnly: frequentlyConfusedOnly,
          })
        : activeSubjectId === 'big-data'
        ? filterBigDataBasmagaQuestions({
            chapterId: selectedChapter,
            sourceType: selectedSourceType,
            type: selectedFormat,
            searchQuery: searchQuery,
            frequentlyConfusedOnly: frequentlyConfusedOnly,
          })
        : filterBasmagaQuestions({
            chapterId: selectedChapter,
            sourceType: selectedSourceType,
            type: selectedFormat,
            searchQuery: searchQuery,
            frequentlyConfusedOnly: frequentlyConfusedOnly,
          });

    if (bookmarksOnly) {
      result = result.filter((q) => isBookmarked(q.id));
    }

    return result;
  }, [
    activeSubjectId,
    selectedChapter,
    selectedSourceType,
    selectedFormat,
    searchQuery,
    frequentlyConfusedOnly,
    bookmarksOnly,
    isBookmarked,
  ]);

  // Statistics
  const stats = useMemo(() => {
    const totalPoints = activeSubjectId === 'bpm' ? 18 : activeSubjectId === 'big-data' ? 18 : 103;
    const totalCovered = subjectBasmagaQuestions.length;
    const answeredCount = Object.keys(sessionAnswers).length;
    const correctCount = Object.values(sessionAnswers).filter(Boolean).length;
    const incorrectCount = answeredCount - correctCount;
    const remainingCount = Math.max(0, totalCovered - answeredCount);
    const originalCount = subjectBasmagaQuestions.filter(
      (q) =>
        q.sourceType === 'original-exam' ||
        q.sourceType === 'original-testbank' ||
        q.sourceType === 'original'
    ).length;
    const confusedCount = subjectBasmagaQuestions.filter((q) => q.isFrequentlyConfused).length;
    const quickRefTotal = subjectQuickReference.length;
    return {
      totalPoints,
      totalCovered,
      answeredCount,
      correctCount,
      incorrectCount,
      remainingCount,
      originalCount,
      confusedCount,
      quickRefTotal,
    };
  }, [activeSubjectId, subjectBasmagaQuestions, subjectQuickReference, sessionAnswers]);

  const handleSelectQuestionFromRef = (questionId: string) => {
    setActiveTab('questions');
    setViewMode('feed');
    setSearchQuery(questionId);
    setTimeout(() => {
      const el = document.getElementById(questionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleAnswerQuestion = (id: string, isCorrect: boolean) => {
    setSessionAnswers((prev) => ({ ...prev, [id]: isCorrect }));
  };

  const handleNextRunnerQuestion = () => {
    if (runnerIndex < filteredQuestions.length - 1) {
      setRunnerIndex((prev) => prev + 1);
    }
  };

  const handlePrevRunnerQuestion = () => {
    if (runnerIndex > 0) {
      setRunnerIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* ======================================================== */}
      {/* 1. Hero Header Banner                                    */}
      {/* ======================================================== */}
      <section className="bg-[#222222] text-[#FFFFFF] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm border border-[#333333]">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c2c2c] border border-[#404040] text-xs font-mono text-[#FFF1A6]">
            <Key size={14} className="text-[#FFF1A6]" />
            <span>SECTION A — BASMAGA • بصمجة الامتحانات بالكلمات المفتاحية</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Solve by Keywords & Fast Answer Recognition
          </h1>

          <p className="text-sm md:text-base text-[#D4D4D0] leading-relaxed">
            تعلم كيف تلتقط الكلمة المفتاحية في السؤال وتربطها بالمفهوم الصحيح في ثوانٍ معدودة.
            طريقة دراسية موجهة لطلاب السنة الرابعة تركز على أنماط أسئلة بنوك الامتحانات الرسمية
            <span className="font-mono text-[#FFF1A6]"> (ch01/03/04 testbanks & Midterms 2020-2022) </span>
            دون حفظ أعمى، مع فهم تعليل الإجابة وتجنب أفخاخ المشتتات.
          </p>

          {/* Student Progress & Coverage Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFFFFF]">
                {stats.totalPoints}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Examinable Points • نقطة امتحانية</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFF1A6]">
                {stats.totalCovered}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Covered Questions • سؤال شامل</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFFFFF]">
                {stats.answeredCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Answered • تمت إجابتها</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#4ade80]">
                {stats.correctCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Correct • إجابات صحيحة</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#f87171]">
                {stats.incorrectCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Incorrect • إجابات خاطئة</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#cbd5e1]">
                {stats.remainingCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Remaining • متبقي للتدريب</div>
            </div>
          </div>
        </div>

        {/* Ambient subtle decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
          <Key size={300} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. Navigation Tabs                                       */}
      {/* ======================================================== */}
      <div className="flex items-center gap-2 border-b border-[#E2E2DF] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap border ${
            activeTab === 'questions'
              ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] shadow-xs'
              : 'border-transparent text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
          }`}
        >
          <BookOpen size={16} />
          <span>Solved Questions Database • بنك الأسئلة بالبصمجة ({filteredQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quick-ref')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap border ${
            activeTab === 'quick-ref'
              ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] shadow-xs'
              : 'border-transparent text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
          }`}
        >
          <Sparkles size={16} className="text-[#222222]" />
          <span>When You See This → Think of This • جدول البصمجة السريع</span>
        </button>

        <button
          onClick={() => setActiveTab('traps')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap border ${
            activeTab === 'traps'
              ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] shadow-xs'
              : 'border-transparent text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
          }`}
        >
          <AlertTriangle size={16} className="text-[#222222]" />
          <span>Confused Concepts & Traps • أفخاخ ومفاهيم ملتبسة</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: SOLVED QUESTIONS DATABASE                         */}
      {/* ======================================================== */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-2xl p-5 shadow-xs space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#686868]" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword, concept, or rule (e.g., 'unauthorized alteration', 'passive', 'S-Box', 'inverse')..."
                className="w-full pl-10 pr-24 py-3 rounded-xl border border-[#E2E2DF] bg-[#FFFFFF] text-sm text-[#222222] placeholder-[#686868] focus:border-[#222222] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#505050] hover:text-[#222222] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E2E2DF] hover:bg-[#ECEDEB]"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="space-y-3 pt-1">
              {/* Chapters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-xs font-mono font-bold text-[#686868] shrink-0 mr-1">Chapter:</span>
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapter(ch.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                      selectedChapter === ch.id
                        ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                        : 'bg-[#FFFFFF] text-[#505050] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:text-[#222222]'
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>

              {/* Source Types */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-xs font-mono font-bold text-[#686868] shrink-0 mr-1">Source:</span>
                {sourceTypes.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedSourceType(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                      selectedSourceType === st.id
                        ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                        : 'bg-[#FFFFFF] text-[#505050] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:text-[#222222]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Secondary Toggles */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E2E2DF]">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Format Selector */}
                  <div className="flex items-center rounded-lg border border-[#E2E2DF] p-0.5 bg-[#FFFFFF] text-xs">
                    <button
                      onClick={() => setSelectedFormat('all')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                        selectedFormat === 'all'
                          ? 'bg-[#E8E8E5] text-[#222222] font-semibold'
                          : 'text-[#505050] hover:bg-[#ECEDEB]'
                      }`}
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => setSelectedFormat('mcq')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                        selectedFormat === 'mcq'
                          ? 'bg-[#E8E8E5] text-[#222222] font-semibold'
                          : 'text-[#505050] hover:bg-[#ECEDEB]'
                      }`}
                    >
                      MCQs Only
                    </button>
                    <button
                      onClick={() => setSelectedFormat('true-false')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                        selectedFormat === 'true-false'
                          ? 'bg-[#E8E8E5] text-[#222222] font-semibold'
                          : 'text-[#505050] hover:bg-[#ECEDEB]'
                      }`}
                    >
                      True / False
                    </button>
                  </div>

                  {/* Frequently Confused Toggle */}
                  <button
                    onClick={() => setFrequentlyConfusedOnly(!frequentlyConfusedOnly)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                      frequentlyConfusedOnly
                        ? 'border-[#222222] bg-[#E8E8E5] text-[#222222] font-bold'
                        : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:bg-[#ECEDEB]'
                    }`}
                  >
                    <AlertTriangle size={13} />
                    <span>Frequently Confused Only • الملتبسة فقط</span>
                  </button>

                  {/* Bookmarks Toggle */}
                  <button
                    onClick={() => setBookmarksOnly(!bookmarksOnly)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                      bookmarksOnly
                        ? 'border-[#222222] bg-[#E8E8E5] text-[#222222] font-bold'
                        : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:bg-[#ECEDEB]'
                    }`}
                  >
                    <Bookmark size={13} />
                    <span>Saved Questions • المحفوظة</span>
                  </button>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 rounded-lg border border-[#E2E2DF] p-0.5 bg-[#F7F7F5] text-xs">
                  <button
                    onClick={() => setViewMode('feed')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                      viewMode === 'feed'
                        ? 'bg-[#222222] text-[#FFFFFF] font-bold shadow-xs'
                        : 'text-[#505050] hover:text-[#222222]'
                    }`}
                  >
                    <Layers size={13} />
                    <span>Continuous Feed • القائمة الكاملة</span>
                  </button>
                  <button
                    onClick={() => {
                      setViewMode('runner');
                      setRunnerIndex(0);
                    }}
                    className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                      viewMode === 'runner'
                        ? 'bg-[#222222] text-[#FFFFFF] font-bold shadow-xs'
                        : 'text-[#505050] hover:text-[#222222]'
                    }`}
                  >
                    <PlayCircle size={13} />
                    <span>Single Question Runner • مدرب الأسئلة السريع</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Stream */}
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center bg-[#FFFFFF] border-2 border-dashed border-[#E5E5E5] rounded-2xl space-y-3">
              <HelpCircle className="mx-auto text-[#A3A3A3]" size={36} />
              <h3 className="text-base font-bold text-[#171717]">No questions match your filter criteria</h3>
              <p className="text-sm text-[#737373]">
                Try adjusting your search terms or resetting the chapter and source filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedChapter('all');
                  setSelectedSourceType('all');
                  setSelectedFormat('all');
                  setFrequentlyConfusedOnly(false);
                  setBookmarksOnly(false);
                }}
                className="px-4 py-2 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#000000] text-xs font-semibold transition-colors"
              >
                Reset All Filters • إعادة تعيين الفلاتر
              </button>
            </div>
          ) : viewMode === 'runner' ? (
            /* Single Question Runner Mode */
            (() => {
              const safeIndex = Math.min(runnerIndex, filteredQuestions.length - 1);
              const currentQ = filteredQuestions[safeIndex];
              const progressPct = Math.round(((safeIndex + 1) / filteredQuestions.length) * 100);

              return (
                <div className="space-y-4">
                  {/* Runner Control Navigation Header */}
                  <div className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">
                          Runner Mode • تدريب سريع
                        </span>
                        <span className="text-xs font-mono text-[#505050]">
                          Question <strong className="text-[#222222] font-bold">{safeIndex + 1}</strong> of{' '}
                          <strong className="text-[#222222] font-bold">{filteredQuestions.length}</strong>
                        </span>
                      </div>
                      <div className="w-48 sm:w-64 h-1.5 bg-[#E8E8E5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#222222] transition-all duration-300"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevRunnerQuestion}
                        disabled={safeIndex === 0}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1 transition-colors ${
                          safeIndex === 0
                            ? 'border-[#E2E2DF] text-[#A3A3A0] cursor-not-allowed bg-[#F7F7F5]'
                            : 'border-[#D4D4D0] text-[#222222] bg-[#FFFFFF] hover:bg-[#ECEDEB]'
                        }`}
                      >
                        <ChevronLeft size={14} />
                        <span>Previous</span>
                      </button>

                      <button
                        onClick={handleNextRunnerQuestion}
                        disabled={safeIndex >= filteredQuestions.length - 1}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1 transition-colors ${
                          safeIndex >= filteredQuestions.length - 1
                            ? 'border-[#E2E2DF] text-[#A3A3A0] cursor-not-allowed bg-[#F7F7F5]'
                            : 'border-[#222222] text-[#FFFFFF] bg-[#222222] hover:bg-[#333333]'
                        }`}
                      >
                        <span>Next</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Active Question Card */}
                  <BasmagaCard
                    key={currentQ.id}
                    question={currentQ}
                    isBookmarked={isBookmarked(currentQ.id)}
                    onToggleBookmark={toggleBookmark}
                    onOpenProblem={(probId) => navigate(`/problem-solving#${probId}`)}
                    onNextQuestion={handleNextRunnerQuestion}
                    onAnswer={handleAnswerQuestion}
                  />
                </div>
              );
            })()
          ) : (
            /* Continuous Feed Mode */
            <div className="space-y-6">
              {filteredQuestions.map((q, idx) => (
                <BasmagaCard
                  key={q.id}
                  question={q}
                  isBookmarked={isBookmarked(q.id)}
                  onToggleBookmark={toggleBookmark}
                  onOpenProblem={(probId) => navigate(`/problem-solving#${probId}`)}
                  onAnswer={handleAnswerQuestion}
                  onNextQuestion={() => {
                    const nextQ = filteredQuestions[idx + 1];
                    if (nextQ) {
                      const el = document.getElementById(nextQ.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: QUICK REFERENCE TABLE                             */}
      {/* ======================================================== */}
      {activeTab === 'quick-ref' && (
        <BasmagaQuickReference
          onSelectQuestion={handleSelectQuestionFromRef}
          entries={subjectQuickReference}
          chapters={chapters}
        />
      )}

      {/* ======================================================== */}
      {/* TAB 3: CONFUSED CONCEPTS & EXAM TRAPS                    */}
      {/* ======================================================== */}
      {activeTab === 'traps' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-[#FFFBEB] border-2 border-[#F59E0B] space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-[#D97706]" size={20} />
              <h2 className="text-base font-bold text-[#78350F]">
                High-Yield Exam Distinctions & Traps • الفروق الجوهرية وأفخاخ الامتحانات
              </h2>
            </div>
            <p className="text-xs text-[#92400E] leading-relaxed">
              تعتمد امتحانات التشفير الجامعية على وضع خيارات متقاربة في الصياغة (مثل السرية مقابل السلامة، والمصادقة مقابل عدم الإنكار، و SAC مقابل BIC). راجع هذه الفروق الدقيقة لتضمن الإجابة الصحيحة.
            </p>
          </div>

          <div className="flex flex-col space-y-5 w-full">
            {/* Trap 1 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 1 • فخ رقم 1</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 1</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                Authenticity vs Integrity (المصادقة مقابل السلامة)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">Authenticity:</strong> Verifies WHO sent the message (identity origin).<br />
                <strong className="text-[#222222]">Integrity:</strong> Verifies WHAT arrived (that content was not altered in transit).
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                المصادقة تثبت هوية المرسل؛ أما السلامة فتثبت أن المحتوى لم يُحرف أو يُعدل أثناء النقل.
              </div>
            </div>

            {/* Trap 2 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 2 • فخ رقم 2</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 1</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                Threat vs Vulnerability (التهديد مقابل الثغرة)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">Vulnerability:</strong> An internal flaw or weakness in design or implementation.<br />
                <strong className="text-[#222222]">Threat:</strong> An external potential danger that might exploit the flaw.
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                الثغرة عيب داخلي في نظامك؛ والتهديد هو الخطر الخارجي المحتمل استغلاله لتلك الثغرة.
              </div>
            </div>

            {/* Trap 3 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 3 • فخ رقم 3</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 2</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                Fermat vs Euler (مبرهنة فيرما مقابل أويلر)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">Fermat's Theorem:</strong> Holds STRICTLY when modulus p is a PRIME number.<br />
                <strong className="text-[#222222]">Euler's Theorem:</strong> Applies to ANY modulus n (prime or composite) using phi(n).
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                مبرهنة فيرما تشترط مقياساً أولياً حصراً (p-1)؛ بينما مبرهنة أويلر صالحة للمركب عبر phi(n).
              </div>
            </div>

            {/* Trap 4 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 4 • فخ رقم 4</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 4</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                Confusion vs Diffusion (التشويش مقابل الانتشار)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">Confusion:</strong> Obscures relationship between KEY and ciphertext (achieved by S-Boxes).<br />
                <strong className="text-[#222222]">Diffusion:</strong> Dissipates PLAINTEXT statistics across ciphertext (achieved by P-Boxes).
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                التشويش يخص تعقيد علاقة المفتاح (صناديق S)؛ والانتشار يخص تبديد إحصاءات النص الصريح (جداول P).
              </div>
            </div>

            {/* Trap 5 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 5 • فخ رقم 5</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 7</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                Double-DES vs 3DES (التشفير المضاعف مقابل الثلاثي)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">Double-DES:</strong> Vulnerable to Meet-in-the-Middle attack reducing effort from 2^112 to 2^57.<br />
                <strong className="text-[#222222]">3DES (EDE):</strong> Forces attacker to perform 2^112 work (two-key 3DES) or 2^168 (three-key).
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                Double-DES يسقط أمام هجوم الالتقاء في المنتصف بتكلفة 2^57؛ لذا اعتُمد 3DES لتأمين 2^112 بت أمان.
              </div>
            </div>

            {/* Trap 6 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-4 shadow-xs hover:border-[#222222] transition-colors w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <span className="text-xs font-mono font-bold text-[#222222] uppercase px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D4D4D0]">Trap 6 • فخ رقم 6</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#222222] text-[#FFFFFF] font-bold">CH 7</span>
              </div>
              <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                CBC vs OFB Error Propagation (انتشار أخطاء البتات)
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                <strong className="text-[#222222]">CBC:</strong> 1-bit error scrambles ENTIRE current block, and flips 1 bit in next block.<br />
                <strong className="text-[#222222]">OFB:</strong> 1-bit error flips EXACTLY 1 bit in current block; ZERO propagation to others.
              </p>
              <div className="text-[18px] sm:text-[19px] text-[#505050] font-serif text-right pt-2.5 border-t border-[#E8E8E5] leading-[1.8]" dir="rtl">
                في CBC يتشوه البلوك الحالي بالكامل وينقلب بت في التالي؛ بينما في OFB ينقلب بت واحد ولا ينتشر الخطأ إطلاقاً.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasmagaHub;

