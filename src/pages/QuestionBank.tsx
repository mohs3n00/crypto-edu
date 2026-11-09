import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  Filter,
} from 'lucide-react';
import { allQuestions } from '../data/questions';
import QuestionCard from '../components/question/QuestionCard';

export default function QuestionBank(): React.ReactElement {
  // Filters
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Local state for answers submitted in this view
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

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

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-[#171717]" />
          <span>University Question Repository / بنك الأسئلة الأكاديمي</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
              Official Question Bank (156 Questions)
            </h1>
            <p
              dir="rtl"
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              مستودع الأسئلة الأصلي من بنوك أسئلة ويليام ستالينجز وامتحانات الميدتيرم الفعلية مع الشرح والحلول النموذجية
            </p>
          </div>
          <div className="font-mono text-xs border border-[#171717] bg-[#171717] text-[#FFFFFF] px-3 py-1.5 rounded flex items-center gap-2 shrink-0">
            <span>Showing: {filteredQuestions.length} / {allQuestions.length}</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717]">
          <Filter className="w-3.5 h-3.5" />
          <span>Filters & Search</span>
        </div>

        {/* Search bar */}
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

        {/* Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block text-[11px] text-[#737373] mb-1">Chapter</label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
            >
              <option value="all">All Chapters</option>
              <option value="ch1">Ch 1 — Security Concepts</option>
              <option value="ch2">Ch 2 — Number Theory</option>
              <option value="ch3">Ch 3 — Classical Ciphers</option>
              <option value="ch4">Ch 4 — Block Ciphers & DES</option>
              <option value="ch7">Ch 7 — Cipher Operations</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-[#737373] mb-1">Source</label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
            >
              <option value="all">All Sources</option>
              <option value="tb01">Test Bank Ch 1</option>
              <option value="tb03">Test Bank Ch 3</option>
              <option value="tb04">Test Bank Ch 4</option>
              <option value="original-mid22">Midterm 2022 (IS401)</option>
              <option value="original-mid20">Midterm 2020 (IS410)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-[#737373] mb-1">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-xs focus:border-[#171717] text-[#171717]"
            >
              <option value="all">All Types</option>
              <option value="multiple-choice">Multiple Choice</option>
              <option value="true-false">True / False</option>
              <option value="short-answer">Short Answer</option>
              <option value="practical-problem">Practical Problem</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-[#737373] mb-1">Difficulty</label>
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

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] space-y-2">
            <HelpCircle className="w-8 h-8 text-[#A3A3A3] mx-auto" />
            <h3 className="text-sm font-semibold text-[#171717]">No questions match your filter criteria</h3>
            <p className="text-xs text-[#737373]">Try resetting your search query or selecting "All" in the filters.</p>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx + 1}
              userAnswer={userAnswers[q.id]}
              isSubmitted={revealed[q.id]}
              onSelectAnswer={(val) => setUserAnswers((prev) => ({ ...prev, [q.id]: val }))}
              onSubmitAnswer={() => setRevealed((prev) => ({ ...prev, [q.id]: true }))}
            />
          ))
        )}
      </div>
    </div>
  );
}
