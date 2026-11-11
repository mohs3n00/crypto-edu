import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calculator,
  BookOpen,
  Sparkles,
  RotateCcw,
  Search,
  Check,
  ArrowRight,
  CalendarClock,
  GitBranch,
  Brain,
} from 'lucide-react';
import { type FormulaItem } from '../data/formulas';
import { getSubjectFormulas } from '../data/subjects';
import { glossaryData, type GlossaryTerm } from '../data/glossary';
import { examTrapsData } from '../data/traps';
import { allQuestions, getQuestionById } from '../data/questions';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import AIProviderActions from '../components/ai/AIProviderActions';
import QuestionCard from '../components/educational/QuestionCard';
import FormulaBlock from '../components/educational/FormulaBlock';
import FormulaExplanation from '../components/educational/FormulaExplanation';
import WorkedCalculation from '../components/educational/WorkedCalculation';
import ExamTrapCard from '../components/educational/ExamTrapCard';
import FormulaCoverageIndicator from '../components/educational/FormulaCoverageIndicator';
import PersonalWeaknessReview from '../components/educational/PersonalWeaknessReview';
import ReviewDueTopics from '../components/educational/ReviewDueTopics';
import MindMapGallery from '../components/mindmaps/MindMapGallery';
import KeywordRecallDashboard from '../components/recall/KeywordRecallDashboard';
import { academicKeywords } from '../data/keywords/keywordDatabase';

export type ReviewTab = 'formulas' | 'glossary' | 'traps' | 'mindmaps' | 'recall' | 'mistakes' | 'due';

export default function ReviewHub(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progress, getDueTopics } = useProgress();
  const { language, activeSubjectId, t } = useUI();
  const isArabic = language === 'ar';
  const isBpm = activeSubjectId === 'bpm';
  const isBigData = activeSubjectId === 'big-data';
  const activeFormulas = useMemo(() => getSubjectFormulas(activeSubjectId), [activeSubjectId]);

  const dueTopicsList = useMemo(() => {
    return getDueTopics ? getDueTopics() : [];
  }, [getDueTopics]);

  // Read tab from URL; default to glossary for BPM (since BPM has zero formulas)
  const defaultTab: ReviewTab = isBpm ? 'glossary' : 'formulas';
  const rawTab = searchParams.get('tab') as ReviewTab;
  const activeTab: ReviewTab = rawTab && (rawTab !== 'formulas' || !isBpm) ? rawTab : defaultTab;

  const handleTabChange = (tab: ReviewTab) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('tab', tab);
    setSearchParams(nextParams);
  };

  // State for Formulas Tab
  const [formulaQuery, setFormulaQuery] = useState('');
  const [formulaChapter, setFormulaChapter] = useState('all');

  // State for Glossary Tab
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [glossaryCategory, setGlossaryCategory] = useState('all');

  // State for Traps Tab
  const [trapQuery, setTrapQuery] = useState('');
  const [trapCategory, setTrapCategory] = useState('all');
  const [trapDifficulty, setTrapDifficulty] = useState('all');

  // State for Mistakes Tab
  const [mistakesChapter, setMistakesChapter] = useState('all');

  // Formula Chapter Counts
  const formulaChapterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const f of activeFormulas) {
      counts[f.chapterId] = (counts[f.chapterId] || 0) + 1;
    }
    return counts;
  }, [activeFormulas]);

  // Filtered Formulas
  const filteredFormulas = useMemo(() => {
    return activeFormulas.filter((f: FormulaItem) => {
      if (formulaChapter !== 'all' && f.chapterId !== formulaChapter) return false;
      if (formulaQuery.trim()) {
        const q = formulaQuery.toLowerCase();
        const matchName = f.name.toLowerCase().includes(q) || f.nameAr.includes(q);
        const matchExpl = f.description.toLowerCase().includes(q) || f.descriptionAr.includes(q);
        const matchLatex = f.latex.toLowerCase().includes(q);
        if (!matchName && !matchExpl && !matchLatex) return false;
      }
      return true;
    });
  }, [activeFormulas, formulaChapter, formulaQuery]);

  // Filtered Glossary
  const filteredGlossary = useMemo(() => {
    return glossaryData.filter((item: GlossaryTerm) => {
      if (glossaryCategory !== 'all' && item.category !== glossaryCategory) return false;
      if (glossaryQuery.trim()) {
        const q = glossaryQuery.toLowerCase();
        const matchTerm =
          item.termEn.toLowerCase().includes(q) || item.termAr.includes(q);
        const matchDef =
          item.definitionEn.toLowerCase().includes(q) ||
          item.definitionAr.includes(q);
        if (!matchTerm && !matchDef) return false;
      }
      return true;
    });
  }, [glossaryCategory, glossaryQuery]);

  // Filtered Traps
  const filteredTraps = useMemo(() => {
    return examTrapsData.filter((trap) => {
      if (trapCategory !== 'all' && trap.category !== trapCategory) return false;
      if (trapDifficulty !== 'all' && trap.difficulty !== trapDifficulty) return false;
      if (trapQuery.trim()) {
        const q = trapQuery.toLowerCase();
        const matchTitle = trap.title.toLowerCase().includes(q) || (trap.titleAr && trap.titleAr.includes(q));
        const matchMisconception = trap.misconception.toLowerCase().includes(q) || (trap.misconceptionAr && trap.misconceptionAr.includes(q));
        const matchTruth = trap.truth.toLowerCase().includes(q) || (trap.truthAr && trap.truthAr.includes(q));
        if (!matchTitle && !matchMisconception && !matchTruth) return false;
      }
      return true;
    });
  }, [trapCategory, trapDifficulty, trapQuery]);

  // Mistakes Questions List
  const incorrectEntryKeys = useMemo(() => {
    return Object.entries(progress.questionAnswers)
      .filter(([, ans]) => !ans.correct)
      .map(([qId]) => qId);
  }, [progress.questionAnswers]);

  const mistakeQuestions = useMemo(() => {
    return incorrectEntryKeys
      .map((id) => getQuestionById(id))
      .filter((q): q is typeof allQuestions[number] => q !== undefined)
      .filter((q) => (mistakesChapter === 'all' ? true : q.chapterId === mistakesChapter));
  }, [incorrectEntryKeys, mistakesChapter]);

  const getRelatedProblemHash = (formId: string): string => {
    if (formId.includes('euclidean-ext') || formId.includes('inverse')) return '#prob-ch2-02';
    if (formId.includes('euclidean') || formId.includes('gcd')) return '#prob-ch2-01';
    if (formId.includes('totient') || formId.includes('phi')) return '#prob-ch2-04';
    if (formId.includes('fermat')) return '#prob-ch2-05';
    if (formId.includes('euler-theorem')) return '#prob-ch2-06';
    if (formId.includes('chinese-remainder') || formId.includes('crt')) return '#prob-ch2-09';
    if (formId.includes('primitive-root') || formId.includes('discrete-log')) return '#prob-ch2-10';
    if (formId.includes('miller-rabin')) return '#prob-ch2-08';
    if (formId.includes('caesar')) return '#prob-ch3-01';
    if (formId.includes('playfair')) return '#prob-ch3-03';
    if (formId.includes('hill')) return '#prob-ch3-05';
    if (formId.includes('vigenere')) return '#prob-ch3-08';
    if (formId.includes('vernam') || formId.includes('otp')) return '#prob-ch3-09';
    if (formId.includes('rail-fence') || formId.includes('transposition')) return '#prob-ch3-10';
    if (formId.includes('feistel')) return '#prob-ch4-01';
    if (formId.includes('des') || formId.includes('sbox')) return '#prob-ch4-02';
    if (formId.includes('avalanche') || formId.includes('sac')) return '#prob-ch4-05';
    if (formId.includes('3des') || formId.includes('triple-des')) return '#prob-ch7-02';
    if (formId.includes('cbc')) return '#prob-ch7-04';
    if (formId.includes('ecb')) return '#prob-ch7-03';
    if (formId.includes('ctr') || formId.includes('counter')) return '#prob-ch7-06';
    return '';
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Page Header */}
      <div className="border-b border-[#E2E2DF] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#686868] uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-[#222222]" />
          <span>{isArabic ? 'مركز المراجعة والملخصات الأكاديمية' : 'Academic Revision & Examination Hub'}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#222222]">
          {isBpm
            ? (isArabic ? 'المصطلحات الأكاديمية، فخاخ الكويزات، وتتبع نقاط الضعف' : 'BPM Terminology, Quiz Traps & Weakness Review')
            : (isArabic ? 'القوانين الرياضية، المصطلحات، وفخاخ الامتحانات' : 'Formulas, Terminology, Pitfalls & Weakness Notebook')}
        </h1>
        <p
          className="text-sm text-[#505050] leading-relaxed"
          style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {isBpm
            ? (isArabic
                ? 'المرجع الجامعي الشامل لمساق إدارة عمليات الأعمال: معجم المصطلحات الأكاديمية المعتمدة، الفروق الجوهرية (Lean vs Six Sigma، Process vs Project)، وفخاخ الكويزات الرسمية.'
                : 'Comprehensive university reference for Business Process Management: core academic terminology, high-yield distinctions (Lean vs Six Sigma, Process vs Project), and personal weakness review.')
            : (isArabic
                ? 'المرجع الجامعي الشامل: كافة الصيغ الرياضية KaTeX مع شروط الاستخدام والأمثلة المحلولة، معجم المصطلحات المعتمد، فخاخ الامتحانات المصنفة، والتشخيص الذكي لنقاط الضعف.'
                : 'Comprehensive university reference: 100% syllabus KaTeX formulas with usage conditions and worked proofs, NIST bilingual terminology dictionary, 24 classified exam traps with interactive mini-quizzes, and personal weakness diagnosis.')}
        </p>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-[#E2E2DF] pb-3">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* Formulas Tab - Only for Mathematical Subjects (Cryptography) */}
          {!isBpm && (
            <button
              type="button"
              onClick={() => handleTabChange('formulas')}
              className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
                activeTab === 'formulas'
                  ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                  : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
              }`}
            >
              <Calculator size={16} className="shrink-0" />
              <span>{t('tabFormulas')}</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                  activeTab === 'formulas'
                    ? 'bg-[#222222] text-[#FFFFFF]'
                    : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
                }`}
              >
                {activeFormulas.length}
              </span>
            </button>
          )}

          {/* Glossary Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('glossary')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'glossary'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <BookOpen size={16} className="shrink-0" />
            <span>{t('tabGlossary')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'glossary'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              {glossaryData.length}
            </span>
          </button>

          {/* Exam Traps Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('traps')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'traps'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <Sparkles size={16} className="shrink-0" />
            <span>{t('tabTraps')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'traps'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              {examTrapsData.length} Verified
            </span>
          </button>

          {/* Mind Maps Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('mindmaps')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'mindmaps'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <GitBranch size={16} className="shrink-0" />
            <span>{t('tabMindMaps')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'mindmaps'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              20 Maps
            </span>
          </button>

          {/* Keyword Recall Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('recall')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'recall'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <Brain size={16} className="shrink-0" />
            <span>{t('tabRecall')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'recall'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              {academicKeywords.length}
            </span>
          </button>

          {/* Mistakes Notebook Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('mistakes')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'mistakes'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <RotateCcw size={16} className="shrink-0" />
            <span>{t('tabMistakes')}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'mistakes'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              {incorrectEntryKeys.length}
            </span>
          </button>

          {/* Spaced Retention / Due Topics Tab */}
          <button
            type="button"
            onClick={() => handleTabChange('due')}
            className={`px-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-medium transition-all inline-flex items-center gap-2.5 border group ${
              activeTab === 'due'
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222] font-semibold shadow-xs'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            <CalendarClock size={16} className="shrink-0" />
            <span>{isArabic ? 'الموضوعات المستحقة' : 'Topics to Review'}</span>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                activeTab === 'due'
                  ? 'bg-[#222222] text-[#FFFFFF]'
                  : 'bg-[#ECEDEB] text-[#505050] group-hover:bg-[#E8E8E5] group-hover:text-[#222222]'
              }`}
            >
              {dueTopicsList.length} Due
            </span>
          </button>
        </div>
      </div>

      {/* 3. Formulas & Equations Tab */}
      {activeTab === 'formulas' && (
        <div className="space-y-6">
          {/* Formula Coverage Indicator */}
          <FormulaCoverageIndicator
            totalFormulas={activeFormulas.length}
            chapterCounts={formulaChapterCounts}
          />

          {/* Search and Chapter Filter */}
          <div className="p-4 border border-[#E2E2DF] bg-[#FFFFFF] rounded-lg flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#686868] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  isBigData
                    ? 'Search formulas (e.g. Min-Max, Z-Score, Decimal, IQR, Centroid, DBSCAN, WSS)...'
                    : 'Search formulas by name, concept, or variable (e.g. Bézout, Totient, Feistel, Hill, CRT)...'
                }
                value={formulaQuery}
                onChange={(e) => setFormulaQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded focus:outline-none focus:border-[#222222] text-[#222222]"
              />
            </div>

            <select
              value={formulaChapter}
              onChange={(e) => setFormulaChapter(e.target.value)}
              className="p-2 border border-[#E2E2DF] rounded text-xs bg-[#FFFFFF] text-[#222222] focus:border-[#222222]"
            >
              <option value="all">All Units ({activeFormulas.length})</option>
              {isBigData ? (
                <>
                  <option value="bd-ch3">Unit 3: Data Preprocessing ({formulaChapterCounts['bd-ch3'] || 0})</option>
                  <option value="bd-ch5">Unit 5: Unsupervised Clustering ({formulaChapterCounts['bd-ch5'] || 0})</option>
                </>
              ) : (
                <>
                  <option value="ch2">Unit 2: Number Theory ({formulaChapterCounts.ch2 || 0})</option>
                  <option value="ch3">Unit 3: Classical Ciphers ({formulaChapterCounts.ch3 || 0})</option>
                  <option value="ch4">Unit 4: Block Ciphers & DES ({formulaChapterCounts.ch4 || 0})</option>
                  <option value="ch7">Unit 7: Cipher Operations ({formulaChapterCounts.ch7 || 0})</option>
                </>
              )}
            </select>
          </div>

          {/* Formulas List */}
          <div className="space-y-8">
            {filteredFormulas.map((form: FormulaItem) => (
              <div
                key={form.id}
                className="space-y-4"
              >
                {/* Main Formula Block */}
                <FormulaBlock
                  id={form.id}
                  name={form.name}
                  nameAr={form.nameAr}
                  latex={form.latex}
                  chapterTitle={form.chapterTitle}
                  conditions={form.conditions}
                  conditionsAr={form.conditionsAr}
                  sourceStandard={form.sourceStandard}
                />

                {/* Explanation and Variables Card */}
                <div className="border border-[#E2E2DF] rounded-lg p-5 bg-[#F7F7F5] space-y-5">
                  <FormulaExplanation
                    description={form.description}
                    descriptionAr={form.descriptionAr}
                    variables={form.variables}
                    proofSketch={form.examTrapNote}
                    proofSketchAr={form.examTrapNoteAr}
                  />

                  {/* Worked Calculation Step if available */}
                  {form.exampleLatex && (
                    <WorkedCalculation
                      title={`Worked Numerical Example: ${form.name}`}
                      titleAr={`تطبيق حسابي محلول بالخطوات: ${form.nameAr}`}
                      problem={form.exampleExplanation || `Demonstrate step-by-step evaluation of ${form.name}.`}
                      problemAr={form.descriptionAr}
                      steps={[
                        {
                          stepNumber: 1,
                          label: 'Substitution & Computation',
                          labelAr: 'التعويض الحسابي وتطبيق القانون',
                          math: form.exampleLatex,
                          explanation: form.exampleExplanation || 'Substitute numerical values directly into the law.',
                          intermediateResult: form.exampleResult,
                        },
                      ]}
                      finalResult={form.exampleResult || 'Verified calculation.'}
                      verification={form.verification}
                    />
                  )}
                  {/* Practical-First 7-Step Solving Link */}
                  <div className="pt-3 border-t border-[#E2E2DF] flex items-center justify-between flex-wrap gap-2.5">
                    <Link
                      to={`/problem-solving${getRelatedProblemHash(form.id)}`}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#222222] text-[#FFFFFF] text-xs font-mono font-bold hover:bg-[#333333] transition-colors shadow-xs"
                    >
                      <Calculator size={13} />
                      <span>7-Step Practical Solving Board • تطبيق المسألة بالخطوات السبع</span>
                    </Link>
                    <span className="text-[11px] text-[#686868] font-sans" dir="rtl">
                      تعلم تطبيق القانون بحل مسألة امتحانية عملية واستخراج المعطيات خطوة بخطوة
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Bilingual Glossary Tab */}
      {activeTab === 'glossary' && (
        <div className="space-y-6">
          <div className="p-4 border border-[#E2E2DF] bg-[#FFFFFF] rounded-lg flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#686868] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search glossary terms in English or Arabic (e.g. Non-repudiation, Confusion, Diffusion)..."
                value={glossaryQuery}
                onChange={(e) => setGlossaryQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded focus:outline-none focus:border-[#222222] text-[#222222]"
              />
            </div>

            <select
              value={glossaryCategory}
              onChange={(e) => setGlossaryCategory(e.target.value)}
              className="p-2 border border-[#E2E2DF] rounded text-xs bg-[#FFFFFF] text-[#222222] focus:border-[#222222]"
            >
              <option value="all">All Categories ({glossaryData.length})</option>
              <option value="Security Concepts">Security Concepts</option>
              <option value="Number Theory">Number Theory</option>
              <option value="Classical Ciphers">Classical Ciphers</option>
              <option value="Block Ciphers">Block Ciphers</option>
              <option value="Cipher Modes">Cipher Modes</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGlossary.map((term: GlossaryTerm) => (
              <div
                key={term.id}
                className="border border-[#E2E2DF] rounded-lg p-5 bg-[#FFFFFF] space-y-3 hover:border-[#D4D4D0] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase border border-[#E2E2DF] bg-[#ECEDEB] text-[#505050] px-2 py-0.5 rounded">
                      {term.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#686868] hidden sm:inline">NIST Standards</span>
                      <AIProviderActions
                        context={{
                          sectionTitle: `Glossary Term: ${term.termEn} (${term.termAr})`,
                          content: `Term: ${term.termEn} / ${term.termAr}\nCategory: ${term.category}\nDefinition (EN): ${term.definitionEn}\nDefinition (AR): ${term.definitionAr}`,
                          promptType: 'concept',
                        }}
                        variant="compact"
                      />
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-[#222222]">{term.termEn}</h3>
                    <h4
                      dir="rtl"
                      className="text-xs font-medium text-[#505050] font-serif"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {term.termAr}
                    </h4>
                  </div>

                  <p className="text-xs text-[#505050] leading-relaxed">
                    {term.definitionEn}
                  </p>

                  <p
                    dir="rtl"
                    className="text-xs text-[#505050] font-serif leading-relaxed pt-2 border-t border-[#ECEDEB]"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {term.definitionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Exam Pitfalls & Traps Tab */}
      {activeTab === 'traps' && (
        <div className="space-y-6">
          <div className="p-5 border-2 border-[#222222] bg-[#FFFFFF] rounded-xl space-y-2">
            <h3 className="text-base font-bold text-[#222222] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#222222]" />
              {isArabic
                ? 'فخاخ امتحانات الميدتيرم والفاينل المصنفة (24 فخاً أكاديمياً)'
                : 'Classified Examination Traps & Pitfalls (24 Verified Traps)'}
            </h3>
            <p className="text-xs sm:text-sm text-[#505050] leading-relaxed">
              {isArabic
                ? 'مستخرجة من امتحانات الميدتيرم لجامعة الزقازيق 2020 و 2022 وبنوك الأسئلة الرسمية لفصول المنهج، مصنفة في 6 فئات (تعريفات، شروط رياضية، حسابات، خوارزميات، بنية الشفرات، وأنماط التشغيل). كل فخ مزود باختبار تفاعلي مصغر.'
                : 'Extracted from actual Zagazig University midterms (2020 & 2022) and official test banks, classified across Categories A to F and Levels 1 to 3. Each trap contains explicit conditions, refutations, and interactive mini-quizzes.'}
            </p>
          </div>

          {/* Filter Bar for Traps */}
          <div className="p-4 border border-[#E2E2DF] bg-[#FFFFFF] rounded-lg flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#686868] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search traps by concept, misconception, or keyword..."
                value={trapQuery}
                onChange={(e) => setTrapQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded focus:outline-none focus:border-[#222222] text-[#222222]"
              />
            </div>

            <select
              value={trapCategory}
              onChange={(e) => setTrapCategory(e.target.value)}
              className="p-2 border border-[#E2E2DF] rounded text-xs bg-[#FFFFFF] text-[#222222] focus:border-[#222222]"
            >
              <option value="all">All Categories ({examTrapsData.length})</option>
              <option value="A. Definition">Cat A: Definitions</option>
              <option value="B. Mathematical Condition">Cat B: Mathematical Conditions</option>
              <option value="C. Calculation">Cat C: Calculations</option>
              <option value="D. Algorithm">Cat D: Algorithms</option>
              <option value="E. Cryptographic Structure">Cat E: Cryptographic Structures</option>
              <option value="F. Block Cipher Mode">Cat F: Block Cipher Modes</option>
            </select>

            <select
              value={trapDifficulty}
              onChange={(e) => setTrapDifficulty(e.target.value)}
              className="p-2 border border-[#E2E2DF] rounded text-xs bg-[#FFFFFF] text-[#222222] focus:border-[#222222]"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="Level 1: Common Misunderstanding">Level 1: Common Misunderstanding</option>
              <option value="Level 2: University Exam Trap">Level 2: University Exam Trap</option>
              <option value="Level 3: Advanced Challenge">Level 3: Advanced Challenge</option>
            </select>
          </div>

          {/* Traps List */}
          <div className="space-y-6">
            {filteredTraps.map((trap) => (
              <ExamTrapCard key={trap.id} trap={trap} />
            ))}
          </div>
        </div>
      )}

      {/* 5. Mind Maps Tab */}
      {activeTab === 'mindmaps' && (
        <MindMapGallery />
      )}

      {/* 6. Keyword Recall Tab */}
      {activeTab === 'recall' && (
        <KeywordRecallDashboard
          initialChapter={searchParams.get('chapter') || 'all'}
          isArabic={isArabic}
        />
      )}

      {/* 7. Mistakes Notebook Tab */}
      {activeTab === 'mistakes' && (
        <div className="space-y-8">
          {/* Intelligent Weakness Review Engine */}
          <PersonalWeaknessReview />

          {/* Filter and Re-Practice Section */}
          <div className="p-4 border border-[#E2E2DF] bg-[#FFFFFF] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-[#222222] flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Personal Mistakes Record ({incorrectEntryKeys.length} Questions Missed)
              </h3>
              <p className="text-xs text-[#505050]">
                Every question you miss during quizzes, question bank practice, or midterm exams appears here for targeted re-practice.
              </p>
            </div>

            <select
              value={mistakesChapter}
              onChange={(e) => setMistakesChapter(e.target.value)}
              className="p-2 border border-[#E2E2DF] rounded text-xs bg-[#FFFFFF] text-[#222222] focus:border-[#222222] shrink-0"
            >
              <option value="all">All Units ({incorrectEntryKeys.length})</option>
              <option value="ch1">Unit 1: Security Concepts</option>
              <option value="ch2">Unit 2: Number Theory</option>
              <option value="ch3">Unit 3: Classical Ciphers</option>
              <option value="ch4">Unit 4: Block Ciphers & DES</option>
              <option value="ch7">Unit 7: Cipher Operations</option>
            </select>
          </div>

          {mistakeQuestions.length === 0 ? (
            <div className="p-12 text-center border border-[#E2E2DF] bg-[#FFFFFF] rounded-xl space-y-4">
              <Check className="w-12 h-12 text-[#222222] mx-auto p-2 border border-[#222222] rounded-full" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#222222]">
                  {incorrectEntryKeys.length === 0
                    ? 'No Incorrect Answers Recorded Yet'
                    : 'No Mistakes Found in Selected Unit'}
                </h4>
                <p className="text-xs text-[#505050] max-w-md mx-auto leading-relaxed">
                  {incorrectEntryKeys.length === 0
                    ? 'Start testing your knowledge in the Question Bank or take a timed midterm simulation. Any incorrect answers will automatically be saved here.'
                    : 'Try selecting "All Units" to view mistakes from other chapters.'}
                </p>
              </div>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded-md text-xs font-semibold hover:bg-[#000000] transition-colors"
              >
                <span>Practice Questions Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {mistakeQuestions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  index={idx + 1}
                  userAnswer={progress.questionAnswers[q.id]?.selectedAnswer}
                  isSubmitted={Boolean(progress.questionAnswers[q.id]?.correct)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 7. Spaced Repetition Due Topics Tab */}
      {activeTab === 'due' && (
        <ReviewDueTopics />
      )}
    </div>
  );
}
