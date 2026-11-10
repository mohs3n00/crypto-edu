import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  HelpCircle,
  Zap,
  Cpu,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { allQuestions, filterQuestions } from '../data/questions';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import QuestionCard from '../components/educational/QuestionCard';
import ExamSimulator from './ExamSimulator';
import CryptoLab from './CryptoLab';

export type QuestionsTabMode = 'questions' | 'exams' | 'lab';

export default function QuestionsHub(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progress } = useProgress();
  const { language, t } = useUI();
  const isArabic = language === 'ar';

  // Read mode and filters from URL
  const activeTab = (searchParams.get('tab') as QuestionsTabMode) || 'questions';
  const selectedChapter = searchParams.get('chapter') || 'all';

  // Filters for Question Bank
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAttemptState, setSelectedAttemptState] = useState<'all' | 'attempted' | 'unattempted'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Filter questions based on selected criteria
  const filteredQuestions = useMemo(() => {
    let result = filterQuestions({
      chapterId: selectedChapter !== 'all' ? selectedChapter : undefined,
      source: selectedSource !== 'all' ? (selectedSource as any) : undefined,
      type: selectedType !== 'all' ? (selectedType as any) : undefined,
      difficulty: selectedDifficulty !== 'all' ? (selectedDifficulty as any) : undefined,
      searchQuery: searchQuery.trim() || undefined,
    });

    if (selectedAttemptState === 'attempted') {
      result = result.filter((q) => progress.questionAnswers[q.id] !== undefined);
    } else if (selectedAttemptState === 'unattempted') {
      result = result.filter((q) => progress.questionAnswers[q.id] === undefined);
    }

    return result;
  }, [
    selectedChapter,
    selectedSource,
    selectedType,
    selectedDifficulty,
    selectedAttemptState,
    searchQuery,
    progress.questionAnswers,
  ]);

  // Statistics
  const totalQuestionsCount = allQuestions.length;
  const attemptedCount = Object.keys(progress.questionAnswers).length;
  const correctCount = Object.values(progress.questionAnswers).filter((a) => a?.correct).length;

  // Pagination calculation
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage) || 1;
  const currentQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage]);

  const handleTabChange = (tab: QuestionsTabMode) => {
    setSearchParams({ tab });
  };

  const handleChapterFilter = (ch: string) => {
    setCurrentPage(1);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (ch === 'all') {
        next.delete('chapter');
      } else {
        next.set('chapter', ch);
      }
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 select-none">
      {/* Top Banner */}
      <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E5] text-[#222222] font-mono text-xs font-bold">
            <HelpCircle size={15} />
            <span>{isArabic ? 'بنك الأسئلة والتدريب الامتحاني' : 'Question Bank & Exam Center'}</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#505050]">
            <span>{totalQuestionsCount} Questions</span>
            <span>•</span>
            <span>{attemptedCount} Solved</span>
            <span>•</span>
            <span className="font-bold text-[#217346]">
              {attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0}% Accuracy
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
            {isArabic ? 'الأسئلة — بنك الأسئلة المركزي والامتحانات' : 'Questions — Centralized Question Bank & Exams'}
          </h1>
          <p className="text-xs sm:text-sm text-[#505050] max-w-2xl leading-relaxed">
            {isArabic
              ? 'تدرب على كافة أسئلة المساق المعتمدة من بنوك الأسئلة وامتحانات الميدتيرم، مع بحث فوري، وتصفية حسب الوحدات والأنواع، وتحليل التعليلات الأكاديمية.'
              : 'Practice all 185 university exam and test bank questions across the entire curriculum with live search, topic filtering, and detailed academic rationales.'}
          </p>
        </div>

        {/* Primary Sub-Tabs: Question Bank vs Exams vs Lab */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#F0F0EE]">
          <button
            type="button"
            onClick={() => handleTabChange('questions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'questions'
                ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] shadow-xs'
                : 'bg-[#F7F7F5] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB]'
            }`}
          >
            <HelpCircle size={15} />
            <span>{isArabic ? 'بنك الأسئلة الشامل' : 'Question Bank'}</span>
            <span className="font-mono text-xs opacity-80">({filteredQuestions.length})</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('exams')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'exams'
                ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] shadow-xs'
                : 'bg-[#F7F7F5] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB]'
            }`}
          >
            <Zap size={15} />
            <span>{isArabic ? 'محاكي الامتحانات (ميدتيرم)' : 'Exam Simulator'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('lab')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'lab'
                ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] shadow-xs'
                : 'bg-[#F7F7F5] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB]'
            }`}
          >
            <Cpu size={15} />
            <span>{isArabic ? 'مختبر التشفير الرقمي' : 'Crypto Lab'}</span>
          </button>
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-4 sm:p-5 space-y-4 shadow-2xs">
            {/* Unit Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-mono font-bold text-[#505050] uppercase shrink-0">
                Unit:
              </span>
              {[
                { id: 'all', label: isArabic ? 'كافة الوحدات' : 'All Units' },
                { id: 'ch1', label: 'Unit 1 (Concepts)' },
                { id: 'ch2', label: 'Unit 2 (Number Theory)' },
                { id: 'ch3', label: 'Unit 3 (Classical)' },
                { id: 'ch4', label: 'Unit 4 (Block/DES)' },
                { id: 'ch7', label: 'Unit 5 (Modes)' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleChapterFilter(item.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer border ${
                    selectedChapter === item.id
                      ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                      : 'bg-[#F7F7F5] text-[#222222] border-[#E2E2DF] hover:bg-[#ECEDEB]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Detailed Filters & Search */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F0F0EE]">
              {/* Search input */}
              <div className="relative md:col-span-2">
                <Search className={`w-4 h-4 text-[#737373] absolute top-1/2 -translate-y-1/2 ${isArabic ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setCurrentPage(1);
                    setSearchQuery(e.target.value);
                  }}
                  placeholder={isArabic ? 'بحث في نصوص الأسئلة والخيارات...' : 'Search question stem or terms...'}
                  className={`w-full py-2 text-xs bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg focus:outline-none focus:border-[#222222] placeholder-[#737373] text-[#222222] ${
                    isArabic ? 'pr-9 pl-3' : 'pl-9 pr-3'
                  }`}
                />
              </div>

              {/* Source Filter */}
              <select
                value={selectedSource}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSelectedSource(e.target.value);
                }}
                className="py-2 px-3 text-xs bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg text-[#222222] focus:outline-none focus:border-[#222222]"
              >
                <option value="all">Source: All</option>
                <option value="original-tb01">TB01 (Ch 1 Test Bank)</option>
                <option value="original-tb03">TB03 (Ch 3 Test Bank)</option>
                <option value="original-tb04">TB04 (Ch 4 Test Bank)</option>
                <option value="original-mid22">Midterm 2022</option>
                <option value="original-mid20">Midterm 2020</option>
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSelectedType(e.target.value);
                }}
                className="py-2 px-3 text-xs bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg text-[#222222] focus:outline-none focus:border-[#222222]"
              >
                <option value="all">Type: All</option>
                <option value="mcq">Multiple Choice</option>
                <option value="truefalse">True / False</option>
                <option value="calculation">Calculations</option>
              </select>

              {/* Attempt State */}
              <select
                value={selectedAttemptState}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSelectedAttemptState(e.target.value as any);
                }}
                className="py-2 px-3 text-xs bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg text-[#222222] focus:outline-none focus:border-[#222222]"
              >
                <option value="all">Status: All</option>
                <option value="attempted">Attempted</option>
                <option value="unattempted">Unanswered</option>
              </select>
            </div>
          </div>

          {/* Questions Feed */}
          <div className="space-y-4">
            {currentQuestions.map((q, idx) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={(currentPage - 1) * itemsPerPage + idx}
              />
            ))}

            {filteredQuestions.length === 0 && (
              <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-12 text-center space-y-2">
                <p className="text-sm font-bold text-[#222222]">
                  {isArabic ? 'لا توجد أسئلة تطابق معايير التصفية الحالية' : 'No questions match your current filters'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSource('all');
                    setSelectedType('all');
                    setSelectedDifficulty('all');
                    setSelectedAttemptState('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#222222] text-[#FFFFFF] text-xs font-semibold cursor-pointer"
                >
                  {isArabic ? 'إعادة ضبط الفلاتر' : 'Reset all filters'}
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-3 shadow-2xs">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E2DF] text-xs font-semibold text-[#222222] hover:bg-[#ECEDEB] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={14} className={isArabic ? 'rotate-180' : ''} />
                <span>{isArabic ? 'السابق' : 'Previous'}</span>
              </button>

              <span className="text-xs font-mono font-bold text-[#505050]">
                Page {currentPage} of {totalPages} ({filteredQuestions.length} total)
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E2DF] text-xs font-semibold text-[#222222] hover:bg-[#ECEDEB] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{isArabic ? 'التالي' : 'Next'}</span>
                <ChevronRight size={14} className={isArabic ? 'rotate-180' : ''} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Exam Simulator Tab */}
      {activeTab === 'exams' && <ExamSimulator />}

      {/* Crypto Lab Tab */}
      {activeTab === 'lab' && <CryptoLab />}
    </div>
  );
}
