import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Clock,
  CheckCircle,
  AlertTriangle,
  Play,
  Shuffle,
  Calculator,
  Target,
  Search,
  Sparkles,
  ArrowRight,
  Layers,
  BookOpen,
} from 'lucide-react';
import { academicKeywords } from '../../data/keywords/keywordDatabase';
import {
  createRecallSession,
  FAMOUS_CONFUSED_PAIRS,
  getKeywordChapterId,
  type ConfusedPairDefinition,
} from '../../data/keywords/recallExercises';
import type { AcademicKeyword, RecallExercise } from '../../data/keywords/types';
import { useProgress } from '../../store/progressStore';
import KeywordRecallSession from './KeywordRecallSession';

export interface KeywordRecallDashboardProps {
  initialChapter?: string;
  isArabic?: boolean;
}

export default function KeywordRecallDashboard({
  initialChapter = 'all',
  isArabic = false,
}: KeywordRecallDashboardProps): React.ReactElement {
  const { getDueKeywords, getKeywordRecallStats, getKeywordReview } = useProgress();

  // Active Session State
  const [activeSessionExercises, setActiveSessionExercises] = useState<RecallExercise[] | null>(null);

  // Filters
  const [selectedChapter, setSelectedChapter] = useState<string>(initialChapter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Spaced stats
  const recallStats = useMemo(() => {
    return getKeywordRecallStats();
  }, [getKeywordRecallStats]);

  const dueKeywordsList = useMemo(() => {
    return getDueKeywords();
  }, [getDueKeywords]);

  const dueIds = useMemo(() => {
    return dueKeywordsList.map((k) => k.keywordId);
  }, [dueKeywordsList]);

  // Filtered keywords list
  const filteredKeywords = useMemo(() => {
    return academicKeywords.filter((kw) => {
      const ch = getKeywordChapterId(kw);
      if (selectedChapter !== 'all' && ch !== selectedChapter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchEn = kw.termEn.toLowerCase().includes(q) || kw.explanationEn.toLowerCase().includes(q);
        const matchAr = kw.termAr.includes(q) || kw.explanationAr.includes(q);
        const matchCue =
          kw.memoryCue &&
          (kw.memoryCue.triggerEn.toLowerCase().includes(q) ||
            kw.memoryCue.targetEn.toLowerCase().includes(q) ||
            kw.memoryCue.triggerAr.includes(q) ||
            kw.memoryCue.targetAr.includes(q));
        if (!matchEn && !matchAr && !matchCue) return false;
      }
      return true;
    });
  }, [selectedChapter, searchQuery]);

  // Session Starters
  const handleStartComprehensiveSession = () => {
    const session = createRecallSession({
      chapterId: selectedChapter,
      mode: 'all',
      dueKeywordIds: dueIds,
    }, 10);
    setActiveSessionExercises(session);
  };

  const handleStartDueSession = () => {
    const session = createRecallSession({
      chapterId: selectedChapter,
      mode: 'due',
      dueKeywordIds: dueIds,
    }, Math.max(5, Math.min(15, dueIds.length)));
    setActiveSessionExercises(session);
  };

  const handleStartMatchingSession = () => {
    const session = createRecallSession({
      chapterId: selectedChapter,
      mode: 'matching',
    }, 4);
    setActiveSessionExercises(session);
  };

  const handleStartMathSession = () => {
    const session = createRecallSession({
      chapterId: selectedChapter,
      mode: 'math',
    }, 8);
    setActiveSessionExercises(session);
  };

  const handleStartExamSession = () => {
    const session = createRecallSession({
      chapterId: selectedChapter,
      mode: 'exam',
    }, 8);
    setActiveSessionExercises(session);
  };

  const handleStartConfusedPairSession = (pair: ConfusedPairDefinition) => {
    const session = createRecallSession({
      targetPair: [pair.id1, pair.id2],
    }, 5);
    setActiveSessionExercises(session);
  };

  const handlePracticeSingleKeyword = (kw: AcademicKeyword) => {
    const session = createRecallSession({
      targetPair: [kw.id, kw.confusedWith?.[0] || 'active-attack'],
    }, 4);
    setActiveSessionExercises(session);
  };

  // If a session is currently active, render the runner
  if (activeSessionExercises) {
    return (
      <KeywordRecallSession
        exercises={activeSessionExercises}
        onExit={() => setActiveSessionExercises(null)}
        isArabic={isArabic}
      />
    );
  }

  return (
    <div className="space-y-8" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* 1. Header Overview Banner */}
      <div className="border border-[#E5E5E5] rounded-2xl bg-[#FAFAFA] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#737373]">
              <Brain className="w-4 h-4 text-[#171717]" />
              <span>{isArabic ? 'نظام استرجاع الكلمات المفتاحية النشط' : 'Active Keyword Recall System'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
              {isArabic ? 'استرجاع الكلمات المفتاحية والروابط الذهنية' : 'Intelligent Academic Concept Recognition'}
            </h2>
            <p className="text-xs sm:text-sm text-[#525252] max-w-3xl leading-relaxed">
              {isArabic
                ? 'تطوير سرعة ودقة التعرف على المفاهيم الأكاديمية والشروط الرياضية ومؤشرات أسئلة الامتحان عبر التكرار المتباعد واكتشاف المفاهيم المتشابهة.'
                : 'Train rapid, accurate academic concept recognition for university examination questions using active recall, spaced repetition, and targeted confusion resolution.'}
            </p>
          </div>

          {/* Primary Quick Start Button */}
          <button
            type="button"
            onClick={handleStartComprehensiveSession}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#171717] text-[#FFFFFF] text-xs sm:text-sm font-bold hover:bg-[#000000] transition-all shadow-sm shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isArabic ? 'بدء جلسة استرجاع شاملة (10 أسئلة)' : 'Start 10-Question Recall'}</span>
          </button>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
          {/* Due Topics */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-1">
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <span>{isArabic ? 'المستحقة للمراجعة' : 'Due for Review'}</span>
              <Clock className="w-3.5 h-3.5 text-[#171717]" />
            </div>
            <div className="text-2xl font-extrabold text-[#171717]">
              {dueKeywordsList.length}
            </div>
            <span className="text-[10px] text-[#737373] block">
              {isArabic ? 'تكرار متباعد مجدول' : 'Spaced queue'}
            </span>
          </div>

          {/* Mastered */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-1">
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <span>{isArabic ? 'المفاهيم المتقنة' : 'Mastered Terms'}</span>
              <CheckCircle className="w-3.5 h-3.5 text-[#171717]" />
            </div>
            <div className="text-2xl font-extrabold text-[#171717]">
              {recallStats.mastered}
            </div>
            <span className="text-[10px] text-[#737373] block">
              {isArabic ? '3 إجابات صحيحة متتالية' : '3+ consecutive correct'}
            </span>
          </div>

          {/* Total Terms */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-1">
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <span>{isArabic ? 'إجمالي الكلمات' : 'Curated Terms'}</span>
              <Layers className="w-3.5 h-3.5 text-[#171717]" />
            </div>
            <div className="text-2xl font-extrabold text-[#171717]">
              {academicKeywords.length}
            </div>
            <span className="text-[10px] text-[#737373] block">
              {isArabic ? 'من 5 فصول دراسية' : 'Across 5 chapters'}
            </span>
          </div>

          {/* Confusions Tracked */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] space-y-1">
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <span>{isArabic ? 'أزواج التشابه' : 'Targeted Confusions'}</span>
              <AlertTriangle className="w-3.5 h-3.5 text-[#171717]" />
            </div>
            <div className="text-2xl font-extrabold text-[#171717]">
              {FAMOUS_CONFUSED_PAIRS.length} Pairs
            </div>
            <span className="text-[10px] text-[#737373] block">
              {isArabic ? 'مقارنات امتحانية خاصة' : 'Exam distinction drills'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Specialized Recall Drills Launchpad */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#171717] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#171717]" />
            <span>{isArabic ? 'مسارات التدريب التخصصية' : 'Specialized Recall Modes'}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Due Review Mode */}
          <button
            type="button"
            onClick={handleStartDueSession}
            className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] hover:shadow-xs transition-all text-left flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Clock className="w-4 h-4 text-[#171717]" />
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F5F5F5] font-semibold text-[#171717]">
                  {dueKeywordsList.length} Due
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:underline">
                {isArabic ? 'مراجعة الكلمات المستحقة' : 'Spaced Retention Queue'}
              </h4>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                {isArabic
                  ? 'مراجعة فورية للمفاهيم التي حان موعد تكرارها حسب جدول التكرار المتباعد.'
                  : 'Practice items due for memory reinforcement based on intervals.'}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#171717]">
              <span>{isArabic ? 'بدء المراجعة' : 'Start Queue'}</span>
              <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {/* Speed Matching Drill */}
          <button
            type="button"
            onClick={handleStartMatchingSession}
            className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] hover:shadow-xs transition-all text-left flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Shuffle className="w-4 h-4 text-[#171717]" />
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F5F5F5] font-semibold text-[#171717]">
                  Type D
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:underline">
                {isArabic ? 'تحدي المطابقة السريعة' : 'Speed Matching Drill'}
              </h4>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                {isArabic
                  ? 'توصيل 4 كلمات مفتاحية مع تعريفاتها الأكاديمية لاختبار سرعة الاستحضار.'
                  : 'Interactive 4-pair matching sets to test fast associative recognition.'}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#171717]">
              <span>{isArabic ? 'بدء المطابقة' : 'Start Drill'}</span>
              <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {/* Mathematical Conditions Drill */}
          <button
            type="button"
            onClick={handleStartMathSession}
            className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] hover:shadow-xs transition-all text-left flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Calculator className="w-4 h-4 text-[#171717]" />
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F5F5F5] font-semibold text-[#171717]">
                  Type E
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:underline">
                {isArabic ? 'شروط وقيود القوانين الرياضية' : 'Mathematical Conditions'}
              </h4>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                {isArabic
                  ? 'التركيز على شروط الأولية النسبية، المعكوس الضربي، ومبرهنات فيرما وأويلر.'
                  : 'Focus on coprimality, modular inverses, Fermat, Euler, and CRT conditions.'}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#171717]">
              <span>{isArabic ? 'بدء تدريب الشروط' : 'Start Math Drills'}</span>
              <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {/* Exam Trigger Recognition Drill */}
          <button
            type="button"
            onClick={handleStartExamSession}
            className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] hover:shadow-xs transition-all text-left flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Target className="w-4 h-4 text-[#171717]" />
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F5F5F5] font-semibold text-[#171717]">
                  Type F
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#171717] group-hover:underline">
                {isArabic ? 'مفاتيح ومؤشرات الامتحان' : 'Exam Trigger Clues'}
              </h4>
              <p className="text-[11px] text-[#737373] leading-relaxed">
                {isArabic
                  ? 'سيناريوهات واقعية من امتحانات الميدتيرم والفاينل للتعرف الفوري على المطلوب.'
                  : 'Authentic exam stems and test-bank questions to trigger rapid concept recall.'}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#171717]">
              <span>{isArabic ? 'بدء تدريب الامتحانات' : 'Start Exam Clues'}</span>
              <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* 3. Targeted Confusion Resolution Cards */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-[#171717] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#171717]" />
            <span>{isArabic ? 'أزواج المفاهيم الأكثر التباساً في الامتحانات' : 'Frequently Confused Examination Concepts'}</span>
          </h3>
          <p className="text-xs text-[#525252]">
            {isArabic
              ? 'مقارنات مركزة بين المفاهيم التي يخطئ فيها الطلاب عادة في الامتحانات الجامعية مع تدريب مقارن مباشر.'
              : 'Targeted comparison drills designed to eliminate confusion between closely related security principles.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAMOUS_CONFUSED_PAIRS.map((pair, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
                  <span>{isArabic ? `مقارنة ${idx + 1}` : `Pair ${idx + 1}`}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#F5F5F5] font-semibold text-[#171717]">
                    High Exam Yield
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#171717]">
                  {isArabic ? pair.titleAr : pair.titleEn}
                </h4>
                <p className="text-[11px] text-[#525252] leading-relaxed">
                  {isArabic ? pair.explanationAr : pair.explanationEn}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleStartConfusedPairSession(pair)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[#171717] bg-[#FFFFFF] text-[#171717] text-xs font-bold hover:bg-[#171717] hover:text-[#FFFFFF] transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isArabic ? 'بدء اختبار المقارنة' : 'Compare & Test'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Complete Academic Keyword Directory */}
      <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h3 className="text-base font-bold text-[#171717] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#171717]" />
              <span>{isArabic ? 'دليل الكلمات المفتاحية الأكاديمية' : 'Curated Academic Keyword Directory'}</span>
            </h3>
            <p className="text-xs text-[#737373]">
              {isArabic
                ? `عرض ${filteredKeywords.length} من أصل ${academicKeywords.length} مصطلحاً مع مفاتيح التذكر وحالة الإتقان.`
                : `Showing ${filteredKeywords.length} of ${academicKeywords.length} verified terms with memory cues and spaced mastery.`}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#737373]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isArabic ? 'بحث في الكلمات أو التعريفات...' : 'Search keywords or cues...'}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#D4D4D4] bg-[#FFFFFF] text-xs text-[#171717] placeholder-[#A3A3A3] focus:outline-none focus:border-[#171717]"
            />
          </div>
        </div>

        {/* Chapter Filter Pills */}
        <div className="flex flex-wrap gap-1.5 text-xs">
          {[
            { id: 'all', labelEn: 'All Chapters', labelAr: 'كافة الفصول' },
            { id: 'ch1', labelEn: 'Ch 1: Attacks & Services', labelAr: 'فصل 1: الهجمات والخدمات' },
            { id: 'ch2', labelEn: 'Ch 2: Number Theory', labelAr: 'فصل 2: نظرية الأعداد' },
            { id: 'ch3', labelEn: 'Ch 3: Classical Ciphers', labelAr: 'فصل 3: التشفير الكلاسيكي' },
            { id: 'ch4', labelEn: 'Ch 4: Block & DES', labelAr: 'فصل 4: تشفير الكتل و DES' },
            { id: 'ch7', labelEn: 'Ch 7: Cipher Operations', labelAr: 'فصل 7: أنماط التشغيل' },
          ].map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setSelectedChapter(ch.id)}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                selectedChapter === ch.id
                  ? 'bg-[#171717] text-[#FFFFFF] font-bold shadow-xs'
                  : 'bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]'
              }`}
            >
              {isArabic ? ch.labelAr : ch.labelEn}
            </button>
          ))}
        </div>

        {/* Keywords Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredKeywords.map((kw) => {
            const chapterId = getKeywordChapterId(kw);
            const reviewRecord = getKeywordReview(kw.id);
            const mastery = reviewRecord?.masteryState || 'not-started';

            return (
              <div
                key={kw.id}
                className="p-4 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717] transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-sm text-[#171717] px-2 py-0.5 bg-[#FFF1A6] rounded border border-[#E2C65A]">
                      {isArabic ? kw.termAr : kw.termEn}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase shrink-0 ${
                        mastery === 'mastered'
                          ? 'bg-[#171717] text-[#FFFFFF]'
                          : mastery === 'improving'
                          ? 'bg-[#333333] text-[#FFFFFF]'
                          : mastery === 'needs-review'
                          ? 'bg-[#F5F5F5] text-[#171717] border border-[#171717]'
                          : 'bg-[#F5F5F5] text-[#737373]'
                      }`}
                    >
                      {mastery}
                    </span>
                  </div>

                  <p className="text-xs text-[#525252] leading-relaxed">
                    {isArabic ? kw.explanationAr : kw.explanationEn}
                  </p>

                  {/* Memory Cue Pill */}
                  {kw.memoryCue && (
                    <div className="text-[11px] p-2 bg-[#FAFAFA] rounded-md border border-[#E5E5E5] flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-[#737373]">
                        {isArabic ? 'مفتاح الربط:' : 'Cue:'}
                      </span>
                      <span className="font-medium text-[#171717]">
                        {isArabic ? kw.memoryCue.triggerAr : kw.memoryCue.triggerEn}
                      </span>
                      <span className="text-[#A3A3A3]">➔</span>
                      <span className="font-bold text-[#171717]">
                        {isArabic ? kw.memoryCue.targetAr : kw.memoryCue.targetEn}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#F5F5F5]">
                  {kw.relatedLessonId ? (
                    <Link
                      to={`/learn/${chapterId}/${kw.relatedLessonId}`}
                      className="text-[#737373] hover:text-[#171717] hover:underline"
                    >
                      {isArabic ? 'عرض الدرس' : 'View Lesson'}
                    </Link>
                  ) : (
                    <span className="text-[#A3A3A3] text-[11px]">{chapterId.toUpperCase()}</span>
                  )}

                  <button
                    type="button"
                    onClick={() => handlePracticeSingleKeyword(kw)}
                    className="inline-flex items-center gap-1 font-bold text-[#171717] hover:underline"
                  >
                    <span>{isArabic ? 'تدريب' : 'Test'}</span>
                    <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
