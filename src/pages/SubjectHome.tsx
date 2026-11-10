import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Shield,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Calculator,
  CalendarClock,
  Key,
  Sparkles,
} from 'lucide-react';
import { getSubjectById, getDefaultSubject } from '../data/subjects';
import { getAllChapters } from '../data/chapters';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import { ProgressBar } from '../components/ui/ProgressBar';

export default function SubjectHome(): React.ReactElement {
  const { activeSubjectId, language, t } = useUI();
  const { progress, isLessonCompleted, getDueTopics } = useProgress();

  const dueTopicsList = useMemo(() => {
    return getDueTopics ? getDueTopics() : [];
  }, [getDueTopics]);

  const subject = getSubjectById(activeSubjectId) || getDefaultSubject();
  const chapters = getAllChapters();

  // All lessons flat list
  const allLessons = useMemo(() => {
    return chapters.flatMap((ch) =>
      ch.topics.flatMap((topic) =>
        topic.lessons.map((lesson) => ({
          ...lesson,
          chapterId: ch.id,
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          chapterTitleAr: ch.titleAr,
          topicTitle: topic.title,
          topicTitleAr: topic.titleAr,
        }))
      )
    );
  }, [chapters]);

  const totalLessons = allLessons.length;
  const completedLessonsCount = Object.values(progress.completedLessons).filter(Boolean).length;
  const overallPercent = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  // Determine Continue Learning lesson
  const continueLesson = useMemo(() => {
    // 1. If lastVisited exists and valid
    if (progress.lastVisited) {
      const found = allLessons.find((l) => l.id === progress.lastVisited);
      if (found) return found;
    }
    // 2. Find first uncompleted lesson
    const firstUncompleted = allLessons.find((l) => !progress.completedLessons[l.id]);
    if (firstUncompleted) return firstUncompleted;

    // 3. Fallback to first lesson
    return allLessons[0];
  }, [allLessons, progress.lastVisited, progress.completedLessons]);

  // Expand/collapse state for chapters
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    // By default expand the chapter containing continueLesson, or all
    const init: Record<string, boolean> = {};
    chapters.forEach((ch, idx) => {
      // Expand first chapter or the one containing continueLesson
      init[ch.id] = continueLesson ? ch.id === continueLesson.chapterId : idx === 0;
    });
    return init;
  });

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const isArabic = language === 'ar';

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* 1. Minimal Subject Header */}
      <section className="border border-[#E2E2DF] bg-[#FFFFFF] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded text-xs font-mono font-bold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{subject.code}</span>
              </span>
              <span className="px-3 py-1 border border-[#E2E2DF] bg-[#F7F7F5] text-[#505050] rounded text-xs font-mono">
                {isArabic ? subject.levelAr : subject.level}
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222222]">
                {isArabic ? subject.titleAr : subject.title}
              </h1>
              <p
                className={`text-base text-[#505050] font-medium ${
                  isArabic ? 'font-sans' : 'font-serif'
                }`}
                dir={isArabic ? 'ltr' : 'rtl'}
                style={!isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {isArabic ? subject.title : subject.titleAr}
              </p>
            </div>

            <p className="text-sm text-[#505050] leading-relaxed max-w-2xl">
              {isArabic ? subject.descriptionAr : subject.description}
            </p>
          </div>

          {/* Line Illustration / Icon Badge */}
          <div className="hidden sm:flex flex-col items-center justify-center p-6 border border-[#E2E2DF] rounded-lg bg-[#F7F7F5] shrink-0 w-36 h-36">
            <Shield className="w-12 h-12 text-[#222222] stroke-[1.5]" />
            <span className="text-[11px] font-mono text-[#686868] mt-2 font-medium">IS401 Syllabus</span>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="pt-4 border-t border-[#E2E2DF] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#505050] font-semibold">{t('overallProgress')}</span>
            <span className="text-[#222222] font-bold">
              {overallPercent}% ({completedLessonsCount} / {totalLessons} {t('lessonsCount')})
            </span>
          </div>
          <ProgressBar value={overallPercent} />
        </div>
      </section>

      {/* 2. "Continue Learning" Prominent Card */}
      {continueLesson && (
        <section className="border border-[#D4D4D0] bg-[#FFFFFF] rounded-xl p-6 sm:p-7 space-y-4 shadow-xs">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#222222]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#505050] font-bold">
                {t('resumeLesson')}
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 border border-[#E2E2DF] bg-[#F7F7F5] rounded text-[#686868]">
              Unit {continueLesson.chapterNumber} • ~{continueLesson.estimatedMinutes} {t('minutes')}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[#686868] font-medium block">
              {isArabic ? continueLesson.topicTitleAr : continueLesson.topicTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight">
              {isArabic ? continueLesson.titleAr : continueLesson.title}
            </h2>
            <p
              dir={isArabic ? 'ltr' : 'rtl'}
              className="text-xs text-[#686868]"
              style={!isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
            >
              {isArabic ? continueLesson.title : continueLesson.titleAr}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#E2E2DF]">
            <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
              <span>Status:</span>
              <span className="font-bold text-[#222222]">
                {progress.completedLessons[continueLesson.id]
                  ? t('completed')
                  : completedLessonsCount > 0
                  ? t('inProgress')
                  : t('notStarted')}
              </span>
            </div>

            <Link
              to={`/learn/${continueLesson.chapterId}/${continueLesson.id}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded-md text-[14px] sm:text-[15px] font-semibold hover:bg-[#000000] transition-colors"
            >
              <span>{completedLessonsCount > 0 ? t('continueLearning') : 'Start Course'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* 2.5 Spaced Repetition Review Due Banner */}
      {dueTopicsList.length > 0 && (
        <section className="border border-[#D4D4D0] bg-[#FFFFFF] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
              <CalendarClock size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase text-[#222222]">
                  {isArabic ? 'جلسة مراجعة مجدولة مستحقة اليوم' : 'Spaced Repetition Review Due'}
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-[#222222] bg-[#F7F7F5] font-bold">
                  {dueTopicsList.length} {isArabic ? 'مواضيع' : 'topics'}
                </span>
              </div>
              <p className="text-xs text-[#505050] mt-0.5">
                {isArabic
                  ? 'حان موعد مراجعة بعض المفاهيم والقوانين لترسيخها في الذاكرة طويلة المدى قبل الامتحان النهائي.'
                  : 'Scheduled retention interval reached: review topics due today to solidify university examination mastery.'}
              </p>
            </div>
          </div>
          <Link
            to="/review?tab=due"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded text-xs font-bold hover:bg-[#000000] transition-colors shrink-0"
          >
            <span>{isArabic ? 'ابدأ المراجعة الآن' : 'Start Review Queue'}</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      )}

      {/* 2.7 High-Yield University Exam Modules: Basmaga & Problem Solving — Single Column */}
      <section className="flex flex-col space-y-5 w-full">
        {/* Section A: Basmaga Hub */}
        <div className="p-6 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] shadow-xs hover:border-[#222222] transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#222222] text-[#FFFFFF] border border-[#222222] flex items-center gap-1.5">
                <Key size={13} />
                <span>SECTION A — BASMAGA</span>
              </span>
              <span className="text-xs font-mono text-[#686868]">29 Solved Questions</span>
            </div>

            <h3 className="text-lg font-extrabold text-[#222222] leading-snug">
              {isArabic ? 'بصمجة الامتحانات بالكلمات المفتاحية' : 'Keyword-Based Exam Solving (Basmaga)'}
            </h3>

            <p className="text-xs text-[#505050] leading-relaxed">
              {isArabic
                ? 'تعلم كيف تستنتج الإجابة الصحيحة بسرعة في امتحانات التشفير الرسمية عبر الكلمات المفتاحية، مع شرح المعاني العربية، وتحليل المشتتات الخاطئة، وتجنب أفخاخ الأسئلة.'
                : 'Fast answer recognition shortcut for university testbanks. Connect exam clues to concepts with Arabic meanings and distractor analysis.'}
            </p>
          </div>

          <div className="pt-2 border-t border-[#E2E2DF] flex items-center justify-between">
            <span className="text-xs font-mono text-[#222222] font-semibold">
              40+ Clue Rules
            </span>
            <Link
              to="/basmaga"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#222222] text-[#FFFFFF] text-xs font-bold hover:bg-[#000000] transition-colors"
            >
              <span>{isArabic ? 'دخول قسم البصمجة' : 'Open Basmaga Hub'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Section B: Problem Solving Hub */}
        <div className="p-6 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] shadow-xs hover:border-[#222222] transition-colors flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ECEDEB] text-[#222222] border border-[#D4D4D0] flex items-center gap-1.5">
                <Calculator size={13} />
                <span>SECTION B — PROBLEM SOLVING</span>
              </span>
              <span className="text-xs font-mono text-[#686868]">35 Complete Problems</span>
            </div>

            <h3 className="text-lg font-extrabold text-[#222222] leading-snug">
              {isArabic ? 'حل المسائل الرياضية بالسبورة التفاعلية' : 'Complete Worked Problems with Board'}
            </h3>

            <p className="text-xs text-[#505050] leading-relaxed">
              {isArabic
                ? 'بنك مسائل شامل يغطي المنهج بالكامل (الفصول 1، 2، 3، 4، 7 وامتحانات الميدتيرم 2020 و 2022) مع سبورة حل تفاعلية خطوة بخطوة وتعويض رياضي دقيق.'
                : 'Complete collection of mathematical problems across all chapters and official midterms with step-by-step KaTeX board walkthroughs.'}
            </p>
          </div>

          <div className="pt-2 border-t border-[#E2E2DF] flex items-center justify-between">
            <span className="text-xs font-mono text-[#222222] font-semibold">
              Ch 1, 2, 3, 4, 7 & Midterms
            </span>
            <Link
              to="/problem-solving"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#222222] text-[#FFFFFF] text-xs font-bold hover:bg-[#000000] transition-colors"
            >
              <span>{isArabic ? 'دخول بنك المسائل' : 'Open Problem Solving'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Course Content Outline (Expandable Chapters) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
          <div className="space-y-0.5">
            <h2 className="text-xl font-bold tracking-tight text-[#222222]">
              {t('courseOutline')}
            </h2>
            <p className="text-xs text-[#686868]">
              {chapters.length} {t('chaptersCount')} • {totalLessons} {t('lessonsCount')} • William Stallings Syllabus
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const allOpen = Object.values(expandedChapters).every(Boolean);
              const nextState: Record<string, boolean> = {};
              chapters.forEach((ch) => {
                nextState[ch.id] = !allOpen;
              });
              setExpandedChapters(nextState);
            }}
            className="text-xs font-mono text-[#505050] hover:text-[#222222] underline decoration-dotted"
          >
            {Object.values(expandedChapters).every(Boolean) ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        <div className="space-y-3">
          {chapters.map((ch) => {
            const chLessons = ch.topics.flatMap((t) => t.lessons);
            const chCompleted = chLessons.filter((l) => isLessonCompleted(l.id)).length;
            const chPercent = chLessons.length > 0 ? Math.round((chCompleted / chLessons.length) * 100) : 0;
            const isOpen = Boolean(expandedChapters[ch.id]);

            return (
              <div
                key={ch.id}
                className="border border-[#E2E2DF] bg-[#FFFFFF] rounded-lg overflow-hidden transition-all hover:border-[#D4D4D0]"
              >
                {/* Chapter Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full p-5 text-left flex items-start sm:items-center justify-between gap-4 bg-[#FFFFFF] hover:bg-[#ECEDEB] transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs px-2 py-0.5 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded font-bold">
                        Unit {ch.number}
                      </span>
                      <span className="text-xs text-[#686868] font-mono">
                        {ch.topics.length} Topics • {chLessons.length} Lessons
                      </span>
                      {chPercent === 100 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded">
                          <CheckCircle2 className="w-3 h-3" /> Mastered
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#222222]">
                        {isArabic ? ch.titleAr : ch.title}
                      </h3>
                      <p
                        dir={isArabic ? 'ltr' : 'rtl'}
                        className="text-xs text-[#686868]"
                        style={!isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
                      >
                        {isArabic ? ch.title : ch.titleAr}
                      </p>
                    </div>

                    <p className="text-xs text-[#505050] leading-relaxed line-clamp-2">
                      {isArabic ? ch.descriptionAr : ch.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#222222]">
                        {chCompleted}/{chLessons.length}
                      </span>
                      <span className="text-[11px] text-[#686868] block font-mono">
                        ({chPercent}%)
                      </span>
                    </div>

                    <div className="p-1 rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Progress bar line */}
                <div className="w-full bg-[#ECEDEB] h-1">
                  <div
                    className="bg-[#222222] h-1 transition-all duration-300"
                    style={{ width: `${chPercent}%` }}
                  />
                </div>

                {/* Chapter Lessons List */}
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-[#F7F7F5] border-t border-[#E2E2DF] space-y-4">
                    {ch.topics.map((topic, tIdx) => (
                      <div key={topic.id} className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#686868] pb-1 border-b border-[#E2E2DF]">
                          <span className="font-bold">Topic {tIdx + 1}:</span>
                          <span>{isArabic ? topic.titleAr : topic.title}</span>
                        </div>

                        <div className="flex flex-col space-y-2.5 w-full">
                          {topic.lessons.map((lesson) => {
                            const completed = isLessonCompleted(lesson.id);
                            const isCurrent = continueLesson?.id === lesson.id;

                            return (
                              <Link
                                key={lesson.id}
                                to={`/learn/${ch.id}/${lesson.id}`}
                                className={`p-3.5 rounded-md border text-left flex items-start justify-between gap-3 transition-all group ${
                                  isCurrent
                                    ? 'border-[#222222] bg-[#E8E8E5] text-[#222222] shadow-xs'
                                    : 'border-[#E2E2DF] bg-[#FFFFFF] hover:border-[#D4D4D0] hover:bg-[#ECEDEB] text-[#222222]'
                                }`}
                              >
                                <div className="space-y-1.5 flex-1">
                                  <div className="flex items-center gap-2.5">
                                    {completed ? (
                                      <CheckCircle2
                                        size={16}
                                        className="text-[#222222] shrink-0"
                                      />
                                    ) : isCurrent ? (
                                      <span className="w-2.5 h-2.5 rounded-full bg-[#222222] shrink-0" />
                                    ) : (
                                      <Circle
                                        size={16}
                                        className="text-[#686868] group-hover:text-[#222222] shrink-0 stroke-[1.75]"
                                      />
                                    )}
                                    <span className="text-[14px] sm:text-[15px] font-semibold leading-snug line-clamp-1">
                                      {isArabic ? lesson.titleAr : lesson.title}
                                    </span>
                                  </div>

                                  <div
                                    className={`flex items-center gap-3 text-[12px] font-mono pl-6 ${
                                      isCurrent ? 'text-[#505050]' : 'text-[#686868] group-hover:text-[#505050]'
                                    }`}
                                  >
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" /> {lesson.estimatedMinutes} min
                                    </span>
                                    {completed && <span className="font-bold">Done</span>}
                                  </div>
                                </div>

                                <ArrowRight
                                  size={16}
                                  className={`shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 ${
                                    isCurrent ? 'text-[#222222]' : 'text-[#686868] group-hover:text-[#222222]'
                                  }`}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Direct Practice & Revision Shortcuts — Single Column */}
      <section className="flex flex-col space-y-5 pt-4 w-full">
        {/* Practice Hub Card */}
        <div className="border border-[#D4D4D0] bg-[#FFFFFF] rounded-xl p-6 space-y-4 hover:border-[#222222] transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
              <HelpCircle className="w-4 h-4" />
              <span>{t('practice')}</span>
            </div>
            <h3 className="text-xl font-bold text-[#222222]">
              {isArabic ? 'بنك الأسئلة والامتحانات التفاعلية' : 'Question Bank & Timed Midterms'}
            </h3>
            <p className="text-xs text-[#505050] leading-relaxed">
              {isArabic
                ? 'تدرب على 156 سؤالاً حقيقياً من بنوك الأسئلة وامتحانات الميدتيرم الفعلية لعامي 2022 و 2020 مع المختبر التفاعلي.'
                : '156 verbatim test-bank questions, 2022/2020 timed midterms (IS401 & IS410), and 8 interactive cipher workbench tools.'}
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/practice"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded-md text-[14px] font-semibold hover:bg-[#000000] transition-colors"
            >
              <span>{isArabic ? 'فتح مركز التدريب والتمارين' : 'Go to Practice Hub'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Review Hub Card */}
        <div className="border border-[#D4D4D0] bg-[#FFFFFF] rounded-xl p-6 space-y-4 hover:border-[#222222] transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#222222]">
              <Calculator className="w-4 h-4" />
              <span>{t('review')}</span>
            </div>
            <h3 className="text-xl font-bold text-[#222222]">
              {isArabic ? 'مرجع القوانين وفخاخ الامتحانات' : 'Formulas, Traps & Glossary'}
            </h3>
            <p className="text-xs text-[#505050] leading-relaxed">
              {isArabic
                ? 'مرجع المعادلات الرياضية بصيغة KaTeX، قاموس المصطلحات الأكاديمية، أهم 10 فخاخ امتحانات مكررة، ودفتر تصحيح الأخطاء.'
                : 'Searchable KaTeX equations with copy LaTeX, NIST bilingual glossary, 10 official exam traps debunked, and mistakes notebook.'}
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/review"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded-md text-[14px] font-semibold hover:bg-[#000000] transition-colors"
            >
              <span>{isArabic ? 'فتح مركز المراجعة والملخصات' : 'Go to Review Hub'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
