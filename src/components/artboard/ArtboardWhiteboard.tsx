import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Search,
  X,
} from 'lucide-react';
import type { WorkedProblem } from '../../data/problemSolving/types';
import FormattedMathText from '../ui/FormattedMathText';
import { getMinimalistExplanation } from '../../data/artboard/egyptianTeachingCommentary';

interface ArtboardWhiteboardProps {
  problem: WorkedProblem;
  allProblems: WorkedProblem[];
  onSelectProblem: (problemId: string) => void;
  onExit?: () => void;
}

export const ArtboardWhiteboard: React.FC<ArtboardWhiteboardProps> = ({
  problem,
  allProblems,
  onSelectProblem,
  onExit,
}) => {
  // Canvas State: Pan & Zoom
  const containerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');

  const exp = useMemo(() => getMinimalistExplanation(problem), [problem]);

  // =========================================================================
  // Fit To Screen Calculation
  // Automatically fits the entire paper into the visible viewport
  // =========================================================================
  const fitToScreen = useCallback(() => {
    if (!containerRef.current || !sheetRef.current) return;
    const container = containerRef.current.getBoundingClientRect();

    const sheetNaturalWidth = sheetRef.current.offsetWidth || 1200;
    const sheetNaturalHeight = sheetRef.current.offsetHeight || 900;

    const paddingX = 40;
    const paddingY = 40;

    const availableWidth = Math.max(container.width - paddingX, 320);
    const availableHeight = Math.max(container.height - paddingY, 320);

    const scaleX = availableWidth / sheetNaturalWidth;
    const scaleY = availableHeight / sheetNaturalHeight;

    const fitScale = Math.min(scaleX, scaleY, 1.0);
    const finalScale = Math.max(0.3, Math.min(fitScale, 1.15));

    const finalX = (container.width - sheetNaturalWidth * finalScale) / 2;
    const finalY = Math.max(16, (container.height - sheetNaturalHeight * finalScale) / 2);

    setScale(finalScale);
    setPosition({ x: finalX, y: finalY });
  }, []);

  // Auto-fit on initial render or when problem changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fitToScreen();
    }, 100);

    const handleResize = () => fitToScreen();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [problem.id, fitToScreen]);

  // =========================================================================
  // Pan & Drag Handlers
  // =========================================================================
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) return;

    setIsPanning(true);
    setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setPosition({
      x: e.clientX - startPan.x,
      y: e.clientY - startPan.y,
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Touch Support
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      };
      setIsPanning(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isPanning || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - touchStartRef.current.x,
      y: touch.clientY - touchStartRef.current.y,
    });
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    const newScale = Math.max(0.3, Math.min(2.5, scale * zoomFactor));

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const newX = mouseX - (mouseX - position.x) * (newScale / scale);
    const newY = mouseY - (mouseY - position.y) * (newScale / scale);

    setScale(newScale);
    setPosition({ x: newX, y: newY });
  };

  const handleZoomIn = () => setScale((prev) => Math.min(2.5, prev * 1.15));
  const handleZoomOut = () => setScale((prev) => Math.max(0.3, prev / 1.15));
  const handleReset = () => {
    setScale(1);
    if (!containerRef.current || !sheetRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const sheetW = sheetRef.current.offsetWidth || 1200;
    setPosition({
      x: Math.max(20, (container.width - sheetW) / 2),
      y: 24,
    });
  };

  // =========================================================================
  // Problem Filtering for Sidebar
  // =========================================================================
  const filteredProblems = useMemo(() => {
    return allProblems.filter((p) => {
      const matchChapter = selectedChapter === 'all' || p.chapterId === selectedChapter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.titleAr.toLowerCase().includes(q) ||
        p.sourceRef.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q);
      return matchChapter && matchQuery;
    });
  }, [allProblems, selectedChapter, searchQuery]);

  const chaptersList = useMemo(() => {
    const set = new Set<string>();
    allProblems.forEach((p) => {
      if (p.chapterId) set.add(p.chapterId);
    });
    return Array.from(set).sort();
  }, [allProblems]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[calc(100vh-56px)] overflow-hidden select-none bg-[#F5F5F3] text-[#222222]"
      style={{
        cursor: isPanning ? 'grabbing' : 'grab',
      }}
      dir="rtl"
    >
      {/* =====================================================================
          TOP MINIMAL TOOLBAR (HUD)
          ===================================================================== */}
      <header className="absolute top-3 left-4 right-4 z-40 pointer-events-none flex items-center justify-between gap-3">
        {/* Left: Exit and Title */}
        <div className="pointer-events-auto flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-neutral-300 shadow-sm text-xs">
          {onExit && (
            <button
              onClick={onExit}
              className="p-1 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
              title="خروج"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
          )}
          <span className="font-bold text-neutral-900">Artboard • سبورة الحل المباشر</span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-600 truncate max-w-[240px] hidden md:inline">
            {problem.titleAr}
          </span>
        </div>

        {/* Right: Zoom & Navigation Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-neutral-300 shadow-sm text-xs">
          <button
            onClick={fitToScreen}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors"
            title="احتواء الشاشة تلقائياً (Fit to Screen)"
          >
            <Maximize2 size={14} />
            <span>احتواء الشاشة</span>
          </button>

          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            title="تكبير"
          >
            <ZoomIn size={15} />
          </button>

          <span className="px-1.5 font-mono text-[11px] font-bold text-neutral-600 min-w-[38px] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            title="تصغير"
          >
            <ZoomOut size={15} />
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            title="إعادة ضبط 100%"
          >
            <RotateCcw size={14} />
          </button>

          <span className="text-neutral-300 mx-1">|</span>

          {/* Problem Selector Trigger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold transition-colors"
          >
            <BookOpen size={14} />
            <span>فهرس المسائل ({allProblems.length})</span>
          </button>
        </div>
      </header>

      {/* =====================================================================
          MAIN WHITEBOARD PAPER (Clean, Minimal, Text + Math Only)
          ===================================================================== */}
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          transition: isPanning ? 'none' : 'transform 0.12s ease-out',
        }}
        className="absolute top-0 left-0"
      >
        <div
          ref={sheetRef}
          className="w-[1220px] bg-white rounded-2xl border border-neutral-300 shadow-xl p-8 sm:p-10 text-neutral-900"
          style={{ boxSizing: 'border-box' }}
        >
          {/* Header Note: Title & Source */}
          <div className="pb-4 mb-6 border-b border-neutral-300 flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wide">
                المصدر: {exp.sourceRef}
              </span>
              <h1 className="text-xl sm:text-2xl font-bold font-arabic text-neutral-900 mt-1">{problem.titleAr}</h1>
              <p className="text-xs font-sans text-neutral-500 mt-0.5" dir="ltr">
                {problem.title}
              </p>
            </div>
            <div className="text-left font-mono text-xs text-neutral-400 shrink-0">
              {problem.chapterId.toUpperCase()}
            </div>
          </div>

          {/* 1. أولًا: السؤال الأصلي (Original Question) */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-arabic text-neutral-500 uppercase tracking-wider mb-2">
              أولًا: السؤال الأصلي (Original Question)
            </h2>
            <div
              className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-900 font-sans text-sm sm:text-base leading-relaxed tracking-normal"
              dir="ltr"
            >
              <FormattedMathText text={exp.originalQuestionEn} />
            </div>
          </section>

          {/* 2. ثانيًا: نفهم السؤال */}
          <section className="mb-6 pb-5 border-b border-neutral-200">
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
              ثانيًا: نفهم السؤال
            </h2>
            <p className="text-sm font-medium text-neutral-800 leading-relaxed">
              {exp.understandQuestionAr}
            </p>
          </section>

          {/* 3. ثالثًا & رابعًا: المعطيات والمطلوب + هنحل إزاي؟ */}
          <div className="grid grid-cols-12 gap-6 mb-6 pb-6 border-b border-neutral-200">
            {/* ثالثًا: المعطيات والمطلوب (7 cols) */}
            <section className="col-span-12 md:col-span-7">
              <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                ثالثًا: المعطيات والمطلوب
              </h2>

              <div className="space-y-1.5 text-xs">
                <div className="font-bold text-neutral-700">المعطيات (Given):</div>
                <ul className="list-disc list-inside space-y-1 pr-2 text-neutral-800">
                  {exp.givens.map((g, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{g.label} = </span>
                      <span className="font-mono font-bold text-neutral-900">{g.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="font-bold text-neutral-700 pt-2">المطلوب (Required):</div>
                <p className="pr-2 text-neutral-800 font-medium">{exp.required}</p>
              </div>
            </section>

            {/* رابعًا: هنحل إزاي؟ (5 cols) */}
            <section className="col-span-12 md:col-span-5">
              <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                رابعًا: هنحل إزاي؟
              </h2>
              <div className="text-xs space-y-1.5">
                <div>
                  <span className="font-bold text-neutral-700">الطريقة: </span>
                  <span className="font-bold text-neutral-900">{exp.howWeSolve.method}</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-700">السبب: </span>
                  <span className="text-neutral-800 leading-relaxed">
                    {exp.howWeSolve.whyThisMethod}
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* 5. خامسًا: الحل خطوة بخطوة (المساحة الرئيسية) */}
          <section className="mb-6 pb-6 border-b border-neutral-200">
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
              خامسًا: الحل خطوة بخطوة
            </h2>

            {/* 2-column clean flow so steps fit on wide screen without vertical scrolling */}
            <div
              className={`grid gap-5 ${
                exp.steps.length <= 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
              }`}
            >
              {exp.steps.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs"
                >
                  {/* Step Title */}
                  <div className="font-bold text-sm text-neutral-900 pb-1.5 border-b border-neutral-200">
                    {st.stepTitle}
                  </div>

                  {/* هنحسب إيه؟ */}
                  <div>
                    <span className="font-bold text-neutral-700">هنحسب إيه؟ </span>
                    <span className="text-neutral-800">{st.whatToCalculate}</span>
                  </div>

                  {/* ليه؟ */}
                  <div>
                    <span className="font-bold text-neutral-700">ليه؟ </span>
                    <span className="text-neutral-800">{st.why}</span>
                  </div>

                  {/* العملية الحسابية */}
                  <div className="pt-1">
                    <span className="font-bold text-neutral-700 block mb-1">العملية الحسابية:</span>
                    <div className="p-2.5 bg-white rounded-lg border border-neutral-200 space-y-1 font-sans text-neutral-900">
                      {st.calculationLines.map((line, lIdx) => (
                        <div key={lIdx} dir="ltr" className="text-left font-medium">
                          <FormattedMathText text={line} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* الناتج */}
                  <div className="pt-1 font-bold text-neutral-900">
                    {st.result}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. سادسًا: النتيجة النهائية & 7. سابعًا: نعرف المسألة في الامتحان إزاي؟ */}
          <div className="grid grid-cols-12 gap-6">
            {/* سادسًا: النتيجة النهائية (7 cols) */}
            <section className="col-span-12 md:col-span-7">
              <h2 className="text-xs font-bold font-arabic text-neutral-500 uppercase tracking-wider mb-1.5">
                سادسًا: النتيجة النهائية
              </h2>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-sm font-sans font-bold text-neutral-900 mb-2" dir="ltr">
                <FormattedMathText text={exp.finalAnswer} displayMode />
              </div>
              <p className="text-xs text-neutral-700">
                <span className="font-bold">التحقق: </span>
                {exp.verification}
              </p>
            </section>

            {/* سابعًا: نعرف المسألة دي في الامتحان إزاي؟ (5 cols) */}
            <section className="col-span-12 md:col-span-5">
              <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                سابعًا: نعرف المسألة دي في الامتحان إزاي؟
              </h2>
              <p className="text-xs text-neutral-800 leading-relaxed font-medium p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                {exp.examClue}
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SIDEBAR DRAWER: COURSE PROBLEMS INDEX
          ===================================================================== */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex justify-start"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="w-full max-w-sm h-full bg-white shadow-2xl p-5 overflow-y-auto flex flex-col border-l border-neutral-200"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div>
                <h3 className="font-bold text-neutral-900 text-sm">مسائل المقرر</h3>
                <span className="text-[11px] text-neutral-500">
                  {allProblems.length} مسألة معتمدة من ملفات المادة
                </span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search */}
            <div className="relative my-3">
              <Search className="absolute right-2.5 top-2.5 text-neutral-400" size={15} />
              <input
                type="text"
                placeholder="ابحث باسم المسألة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-8 pl-3 py-1.5 rounded-lg bg-neutral-100 text-xs text-neutral-900 border-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>

            {/* Chapter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-2">
              <button
                onClick={() => setSelectedChapter('all')}
                className={`px-2.5 py-0.5 rounded text-xs font-bold shrink-0 ${
                  selectedChapter === 'all'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                الكل
              </button>
              {chaptersList.map((ch) => (
                <button
                  key={ch}
                  onClick={() => setSelectedChapter(ch)}
                  className={`px-2.5 py-0.5 rounded text-xs font-bold shrink-0 ${
                    selectedChapter === ch
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {ch.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Problems List */}
            <div className="space-y-1.5 flex-1 overflow-y-auto">
              {filteredProblems.map((p) => {
                const isActive = p.id === problem.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProblem(p.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-right p-3 rounded-xl border text-xs transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-mono text-[10px] opacity-70">
                        {p.chapterId.toUpperCase()}
                      </span>
                      <span className="text-[10px] opacity-70">
                        {p.sourceType === 'original-midterm'
                          ? 'امتحان رسمي'
                          : p.sourceType === 'original-lecture'
                          ? 'محاضرة'
                          : 'تدريب'}
                      </span>
                    </div>
                    <div className="font-bold leading-snug">{p.titleAr}</div>
                    <div className="font-mono text-[10px] opacity-60 truncate mt-0.5">
                      {p.sourceRef}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtboardWhiteboard;
