import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  Search,
  Filter,
  Layers,
  BookOpen,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Sparkles,
  Award,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  workedProblems,
  filterWorkedProblems,
  type ProblemCategory,
  type ProblemSourceType,
} from '../data/problemSolving';
import ProblemSolvingCard from '../components/problemSolving/ProblemSolvingCard';
import { useProgress } from '../store/progressStore';

export const ProblemSolvingHub: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isBookmarked, toggleBookmark } = useProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<ProblemCategory | 'all'>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<ProblemSourceType | 'all'>('all');
  const [midtermOnly, setMidtermOnly] = useState(false);
  const [bookmarksOnly, setBookmarksOnly] = useState(false);

  // If hash is present in URL (e.g. #prob-ch3-01), scroll to it
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [location.hash]);

  const chapters = [
    { id: 'all', label: 'All Chapters • كل الفصول' },
    { id: 'ch1', label: 'Ch 1: Architecture & Distribution' },
    { id: 'ch2', label: 'Ch 2: Number Theory (10 Problems)' },
    { id: 'ch3', label: 'Ch 3: Classical Ciphers & Midterms' },
    { id: 'ch4', label: 'Ch 4: Block Ciphers & DES' },
    { id: 'ch7', label: 'Ch 7: 3DES & Block Modes' },
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'security-architecture', label: 'Security Architecture' },
    { id: 'number-theory', label: 'Number Theory' },
    { id: 'classical-cipher', label: 'Classical Ciphers' },
    { id: 'block-cipher', label: 'Block Ciphers' },
    { id: 'modes-operation', label: 'Modes of Operation' },
  ];

  // Filter problems
  const filteredProblems = useMemo(() => {
    let list = filterWorkedProblems({
      chapterId: selectedChapter,
      category: selectedCategory,
      sourceType: midtermOnly ? 'original-midterm' : selectedSourceType,
      searchQuery: searchQuery,
    });

    if (bookmarksOnly) {
      list = list.filter((p) => isBookmarked(p.id));
    }

    return list;
  }, [
    selectedChapter,
    selectedCategory,
    selectedSourceType,
    midtermOnly,
    searchQuery,
    bookmarksOnly,
    isBookmarked,
  ]);

  // Statistics
  const stats = useMemo(() => {
    const total = workedProblems.length;
    const midtermCount = workedProblems.filter((p) => p.sourceType === 'original-midterm').length;
    const lectureCount = workedProblems.filter((p) => p.sourceType === 'original-lecture').length;
    return { total, midtermCount, lectureCount };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* ======================================================== */}
      {/* 1. Hero Header Banner                                    */}
      {/* ======================================================== */}
      <section className="bg-[#222222] text-[#FFFFFF] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm border border-[#333333]">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c2c2c] border border-[#404040] text-xs font-mono text-[#FFF1A6]">
            <Calculator size={14} className="text-[#FFF1A6]" />
            <span>SECTION B — PROBLEM SOLVING • بنك حل المسائل الشامل بالسبورة التفاعلية</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Complete Worked Problems with Step-by-Step Interactive Board
          </h1>

          <p className="text-sm md:text-base text-[#D4D4D0] leading-relaxed">
            مجموعة شاملة ومنظمة لجميع المسائل الرياضية والعملية في المنهج بالكامل (الفصول 1، 2، 3، 4، 7)
            محلولة بالتفصيل خطوة بخطوة عبر سبورة الحل التفاعلية، مع توضيح استخراج المعطيات، والقوانين المطبقة،
            وتعويض الأرقام، والتحقق الرياضي النهائي، وتجنب الأخطاء الشائعة في الامتحانات.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFFFFF]">
                {stats.total}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Complete Problems • مسألة شاملة</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFF1A6]">
                {stats.midtermCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Official Midterm Exams • مسائل الميدتيرم</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFFFFF]">
                {stats.lectureCount}
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Textbook & Lectures • مسائل المحاضرات</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2c2c2c] border border-[#404040]">
              <div className="text-xl md:text-2xl font-bold font-mono text-[#FFFFFF]">
                5 Chapters
              </div>
              <div className="text-[11px] text-[#A3A3A0]">Ch 1, 2, 3, 4, 7 • تغطية المنهج كاملاً</div>
            </div>
          </div>
        </div>

        {/* Ambient subtle decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
          <Calculator size={300} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. Filters & Search Toolbar                              */}
      {/* ======================================================== */}
      <div className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-2xl p-5 shadow-xs space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#686868]" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems by name, formula, or method (e.g. 'Euclidean', 'Playfair', 'DES S-Box', 'CBC', '3DES', 'Meet-in-the-Middle')..."
            className="w-full pl-10 pr-24 py-3 rounded-xl border border-[#E2E2DF] bg-[#FFFFFF] text-sm text-[#222222] placeholder-[#686868] focus:border-[#222222] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#505050] hover:text-[#222222] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E2E2DF] hover:bg-[#ECEDEB]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="space-y-3 pt-1">
          {/* Chapter Selector */}
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

          {/* Category Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-mono font-bold text-[#686868] shrink-0 mr-1">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                    : 'bg-[#FFFFFF] text-[#505050] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:text-[#222222]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E2E2DF]">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Midterm Only Button */}
              <button
                onClick={() => setMidtermOnly(!midtermOnly)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  midtermOnly
                    ? 'border-[#222222] bg-[#E8E8E5] text-[#222222]'
                    : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
                }`}
              >
                <Award size={14} className={midtermOnly ? 'text-[#222222]' : 'text-[#686868]'} />
                <span>Midterm Exam Problems Only • مسائل الميدتيرم فقط (2020 & 2022)</span>
              </button>

              {/* Bookmarks Toggle */}
              <button
                onClick={() => setBookmarksOnly(!bookmarksOnly)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                  bookmarksOnly
                    ? 'border-[#222222] bg-[#E8E8E5] text-[#222222] font-bold'
                    : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
                }`}
              >
                <Bookmark size={13} />
                <span>Saved Problems • المسائل المحفوظة</span>
              </button>
            </div>

            <div className="text-xs text-[#686868]">
              Showing <strong className="text-[#222222]">{filteredProblems.length}</strong> worked problems
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. Problems Stream                                       */}
      {/* ======================================================== */}
      {filteredProblems.length === 0 ? (
        <div className="p-12 text-center bg-[#FFFFFF] border-2 border-dashed border-[#E5E5E5] rounded-2xl space-y-3">
          <HelpCircle className="mx-auto text-[#A3A3A3]" size={36} />
          <h3 className="text-base font-bold text-[#171717]">No worked problems match your filter criteria</h3>
          <p className="text-sm text-[#737373]">
            Try adjusting your search terms or clearing the chapter and category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedChapter('all');
              setSelectedCategory('all');
              setSelectedSourceType('all');
              setMidtermOnly(false);
              setBookmarksOnly(false);
            }}
            className="px-4 py-2 rounded-lg bg-[#171717] text-[#FFFFFF] text-xs font-semibold"
          >
            Reset All Filters • إعادة تعيين الفلاتر
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredProblems.map((prob) => (
            <ProblemSolvingCard
              key={prob.id}
              problem={prob}
              isBookmarked={isBookmarked(prob.id)}
              onToggleBookmark={toggleBookmark}
              onOpenBasmaga={(basmagaId) => navigate(`/basmaga#${basmagaId}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProblemSolvingHub;

