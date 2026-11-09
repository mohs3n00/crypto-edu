import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  HelpCircle,
  Zap,
  Cpu,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { allQuestions } from '../data/questions';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import QuestionCard from '../components/educational/QuestionCard';
import ExamSimulator from './ExamSimulator';
import CryptoLab from './CryptoLab';

export type PracticeTab = 'questions' | 'exams' | 'lab';

export default function PracticeHub(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progress } = useProgress();
  const { language, t } = useUI();
  const isArabic = language === 'ar';

  // Read tab and chapter from URL
  const activeTab = (searchParams.get('tab') as PracticeTab) || 'questions';
  const selectedChapter = searchParams.get('chapter') || 'all';

  // Filters for Question Bank
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;

  // Sync tab change to URL
  const handleTabChange = (tab: PracticeTab) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('tab', tab);
    setSearchParams(nextParams);
  };

  // Sync chapter change to URL
  const handleChapterChange = (chapter: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (chapter === 'all') {
      nextParams.delete('chapter');
    } else {
      nextParams.set('chapter', chapter);
    }
    setSearchParams(nextParams);
    setCurrentPage(1);
  };

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (selectedChapter !== 'all' && q.chapterId !== selectedChapter) return false;

      if (selectedSource !== 'all') {
        if (selectedSource === 'tb01' && q.source !== 'tb01' && q.source !== 'original-tb01') return false;
        else if (selectedSource === 'tb03' && q.source !== 'tb03' && q.source !== 'original-tb03') return false;
        else if (selectedSource === 'tb04' && q.source !== 'tb04' && q.source !== 'original-tb04') return false;
        else if (selectedSource === 'generated' && q.source !== 'generated') return false;
        else if (selectedSource !== 'tb01' && selectedSource !== 'tb03' && selectedSource !== 'tb04' && selectedSource !== 'generated' && q.source !== selectedSource) {
          return false;
        }
      }

      if (selectedType !== 'all') {
        const targetType = selectedType.toLowerCase().replace(/[^a-z]/g, '');
        const qType = q.type.toLowerCase().replace(/[^a-z]/g, '');
        if (targetType === 'truefalse' && qType !== 'truefalse' && qType !== 'tf') return false;
        if (targetType === 'multiplechoice' && qType !== 'multiplechoice' && qType !== 'mcq') return false;
        if (targetType === 'shortanswer' && qType !== 'shortanswer') return false;
        if (targetType === 'practicalproblem' && qType !== 'practicalproblem' && qType !== 'mathematical' && qType !== 'calculation' && qType !== 'diagram') return false;
      }

      if (selectedDifficulty !== 'all') {
        const qDiff = String(q.difficulty);
        if (selectedDifficulty === 'easy' && qDiff !== '1' && qDiff !== 'easy') return false;
        if (selectedDifficulty === 'medium' && qDiff !== '2' && qDiff !== 'medium') return false;
        if (selectedDifficulty === 'hard' && qDiff !== '3' && qDiff !== 'hard') return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const stemEn = q.en.stem.toLowerCase();
        const stemAr = q.ar?.stem ? q.ar.stem.toLowerCase() : '';
        const explEn = q.explanation.toLowerCase();
        const explAr = q.explanationAr.toLowerCase();
        if (
          !stemEn.includes(query) &&
          !stemAr.includes(query) &&
          !explEn.includes(query) &&
          !explAr.includes(query)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [selectedChapter, selectedSource, selectedType, selectedDifficulty, searchQuery]);

  // Pagination slice
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage]);

  // Reset page when filters change (without cascading effect)
  const filterKey = `${selectedChapter}_${selectedSource}_${selectedType}_${selectedDifficulty}_${searchQuery}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (prevFilterKey !== filterKey) {
    setPrevFilterKey(filterKey);
    setCurrentPage(1);
  }

  // Chapter pills data
  const chapterPills = [
    { id: 'all', label: 'All Units', labelAr: 'جميع الوحدات' },
    { id: 'ch1', label: 'Unit 1: Security Concepts', labelAr: 'الوحدة 1: مفاهيم الأمن' },
    { id: 'ch2', label: 'Unit 2: Number Theory', labelAr: 'الوحدة 2: نظرية الأعداد' },
    { id: 'ch3', label: 'Unit 3: Classical Ciphers', labelAr: 'الوحدة 3: التشفير الكلاسيكي' },
    { id: 'ch4', label: 'Unit 4: Block Ciphers & DES', labelAr: 'الوحدة 4: شفرات الكتل و DES' },
    { id: 'ch7', label: 'Unit 7: Cipher Operations', labelAr: 'الوحدة 7: أنماط تشغيل الشفرات' },
  ];

  // Stats
  const answeredCount = Object.keys(progress.questionAnswers).length;
  const correctCount = Object.values(progress.questionAnswers).filter((a) => a.correct).length;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Header Banner */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-[#171717]" />
          <span>{isArabic ? 'مركز التدريب والتمارين' : 'Practice Hub'}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
          {isArabic ? 'مركز التدريب، الامتحانات والمختبر التفاعلي' : 'Practice, Exams & Interactive Workbench'}
        </h1>
        <p
          className="text-sm text-[#525252] leading-relaxed"
          style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {isArabic
            ? 'تدرب على أسئلة بنوك الاختبارات الأكاديمية (156 سؤالاً)، خض تجربة امتحانات الميدتيرم الفعلية الموقوتة، أو استخدم أدوات المحاكاة التفاعلية.'
            : 'Master 156 verified test-bank questions, simulate authentic 60-minute midterm examinations, or experiment hands-on with interactive cryptographic tools.'}
        </p>
      </div>

      {/* 2. Top Chapter Filter Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-[#737373]">
            {t('filterByChapter')}
          </span>
          {selectedChapter !== 'all' && (
            <button
              type="button"
              onClick={() => handleChapterChange('all')}
              className="text-xs font-mono text-[#525252] hover:text-[#171717] underline decoration-dotted"
            >
              Reset to All Units
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {chapterPills.map((p) => {
            const isSelected = selectedChapter === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleChapterChange(p.id)}
                data-nav-item
                className={`px-3.5 py-2 rounded-md text-[14px] font-medium transition-all group ${
                  isSelected
                    ? 'border border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs'
                    : 'border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'
                }`}
              >
                {isArabic ? p.labelAr : p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Primary Segmented Mode Tabs */}
      <div className="border-b border-[#E5E5E5] pb-3">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* Question Bank Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('questions')}
            data-nav-item
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'questions'
                ? 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs'
                : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'
            }`}
          >
            <HelpCircle size={16} className="shrink-0" />
            <span>{t('modeQuestions')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'questions'
                  ? 'bg-[#333333] text-[#FFFFFF]'
                  : 'bg-[#F2F2F2] text-[#525252] group-hover:bg-[#333333] group-hover:text-[#FFFFFF]'
              }`}
            >
              {filteredQuestions.length}
            </span>
          </button>

          {/* Timed Midterms Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('exams')}
            data-nav-item
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'exams'
                ? 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs'
                : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'
            }`}
          >
            <Zap size={16} className="shrink-0" />
            <span>{t('modeExams')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'exams'
                  ? 'bg-[#333333] text-[#FFFFFF]'
                  : 'bg-[#F2F2F2] text-[#525252] group-hover:bg-[#333333] group-hover:text-[#FFFFFF]'
              }`}
            >
              2020 & 2022
            </span>
          </button>

          {/* Interactive Lab Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('lab')}
            data-nav-item
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'lab'
                ? 'border-[#000000] bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs'
                : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'
            }`}
          >
            <Cpu size={16} className="shrink-0" />
            <span>{t('modeLab')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'lab'
                  ? 'bg-[#333333] text-[#FFFFFF]'
                  : 'bg-[#F2F2F2] text-[#525252] group-hover:bg-[#333333] group-hover:text-[#FFFFFF]'
              }`}
            >
              8 Tools
            </span>
          </button>
        </div>
      </div>

      {/* 4. Tab Content */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg text-xs font-mono">
            <div>
              <span className="text-[#737373] block text-[11px]">Matching Questions</span>
              <span className="text-base font-bold text-[#171717]">{filteredQuestions.length}</span>
            </div>
            <div>
              <span className="text-[#737373] block text-[11px]">Total Answered</span>
              <span className="text-base font-bold text-[#171717]">{answeredCount}</span>
            </div>
            <div>
              <span className="text-[#737373] block text-[11px]">Correct Answers</span>
              <span className="text-base font-bold text-[#171717]">{correctCount}</span>
            </div>
            <div>
              <span className="text-[#737373] block text-[11px]">Overall Accuracy</span>
              <span className="text-base font-bold text-[#171717]">{accuracy}%</span>
            </div>
          </div>

          {/* Question Filter Controls */}
          <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-lg space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions or keywords in English or Arabic (e.g. Feistel, SAC, Playfair, Euclidean)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E5E5E5] rounded focus:outline-none focus:border-[#171717] text-[#171717]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] text-[#737373] mb-1">Source Filter</label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
                >
                  <option value="all">All Sources ({allQuestions.length} Questions)</option>
                  <option value="tb01">Test Bank Unit 1 (45 Qs)</option>
                  <option value="tb03">Test Bank Unit 3 (30 Qs)</option>
                  <option value="tb04">Test Bank Unit 4 (45 Qs)</option>
                  <option value="original-mid22">Midterm 2022 IS401 (13 Qs)</option>
                  <option value="original-mid20">Midterm 2020 IS410 (13 Qs)</option>
                  <option value="generated">Supplementary Practice (24 Qs)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-[#737373] mb-1">Question Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
                >
                  <option value="all">All Types</option>
                  <option value="multiple-choice">Multiple Choice (MCQ)</option>
                  <option value="true-false">True / False</option>
                  <option value="short-answer">Short Answer</option>
                  <option value="practical-problem">Practical Problem</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-[#737373] mb-1">Difficulty Level</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
                >
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
          </div>

          {/* Question Cards List */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="p-12 text-center border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] space-y-2">
                <HelpCircle className="w-8 h-8 text-[#A3A3A3] mx-auto" />
                <h3 className="text-sm font-semibold text-[#171717]">No questions match your filter criteria</h3>
                <p className="text-xs text-[#737373]">Try resetting your search query or selecting "All" in the filters.</p>
              </div>
            ) : (
              paginatedQuestions.map((q, idx) => {
                const globalIndex = (currentPage - 1) * itemsPerPage + idx + 1;
                return (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={globalIndex}
                    userAnswer={progress.questionAnswers[q.id]?.selectedAnswer}
                    isSubmitted={Boolean(progress.questionAnswers[q.id])}
                  />
                );
              })
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-4 text-xs font-mono">
              <span className="text-[#737373]">
                Page {currentPage} of {totalPages} ({filteredQuestions.length} total questions)
              </span>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 border border-[#E5E5E5] rounded hover:border-[#171717] disabled:opacity-40 transition-colors inline-flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Previous
                </button>

                <div className="hidden sm:flex items-center gap-1 px-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum = i + 1;
                    if (totalPages > 5 && currentPage > 3) {
                      pageNum = currentPage - 2 + i;
                      if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                    }
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-7 h-7 rounded border text-xs flex items-center justify-center transition-colors ${
                          currentPage === pageNum
                            ? 'border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                            : 'border-[#E5E5E5] hover:border-[#171717] text-[#525252]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 border border-[#E5E5E5] rounded hover:border-[#171717] disabled:opacity-40 transition-colors inline-flex items-center gap-1"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Timed Midterm Exams Simulator Tab */}
      {activeTab === 'exams' && (
        <div className="border border-[#E5E5E5] rounded-xl bg-[#FFFFFF] p-2 sm:p-6">
          <ExamSimulator />
        </div>
      )}

      {/* Interactive Crypto Lab Tab */}
      {activeTab === 'lab' && (
        <div className="border border-[#E5E5E5] rounded-xl bg-[#FFFFFF] p-2 sm:p-6">
          <CryptoLab />
        </div>
      )}
    </div>
  );
}
