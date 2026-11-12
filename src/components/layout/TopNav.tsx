import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  ChevronDown,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Check,
  GraduationCap,
  Key,
  Calculator,
  Presentation,
  MonitorPlay,
} from 'lucide-react';
import { useUI } from '../../store/uiStore';
import { useProgress } from '../../store/progressStore';
import { getAllSubjects, getSubjectById } from '../../data/subjects';

interface BreadcrumbItem {
  label: string;
  labelAr?: string;
  to?: string;
}

interface TopNavProps {
  crumbs?: BreadcrumbItem[];
}

export default function TopNav({ crumbs = [] }: TopNavProps): React.ReactElement {
  const {
    toggleSidebar,
    sidebarOpen,
    language,
    setLanguage,
    activeSubjectId,
    setActiveSubjectId,
    t,
  } = useUI();
  const { progress } = useProgress();
  const navigate = useNavigate();
  const location = useLocation();

  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjects = getAllSubjects();
  const currentSubject = getSubjectById(activeSubjectId);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSubjectDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate subject completion
  const totalLessons = currentSubject.chapters.flatMap((c) => c.topics.flatMap((t) => t.lessons)).length;
  const completedLessons = Object.values(progress.completedLessons).filter(Boolean).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const isRTL = language === 'ar';

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 flex items-center justify-between bg-[#FFFFFF] border-b border-[#E2E2DF] px-3 sm:px-6 select-none"
      style={{ height: 56 }}
      role="banner"
    >
      {/* Left: Sidebar Toggle + EDU Brand Identity */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          className="flex items-center justify-center w-8 h-8 rounded border border-[#E2E2DF] text-[#222222] hover:bg-[#ECEDEB] hover:border-[#D4D4D0] transition-colors"
        >
          <Menu size={16} />
        </button>

        <Link
          to="/study"
          className="flex items-center gap-2.5 no-underline group"
          aria-label="EDU Home"
        >
          <div className="w-7 h-7 rounded border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center font-bold text-xs font-mono tracking-wider">
            E
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-bold text-[#222222] tracking-tight group-hover:underline">
              EDU
            </span>
            <span
              className="text-[11px] text-[#505050] font-medium"
              style={{ fontFamily: isRTL ? 'var(--font-arabic)' : 'var(--font-sans)' }}
            >
              {t('platformSubtitle')}
            </span>
          </div>
        </Link>
      </div>

      {/* Center: Subject Selector Dropdown + 3 Primary Destinations (Learn, Practice, Review) */}
      <div className="flex items-center gap-2 sm:gap-5">
        {/* Subject Selector Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setSubjectDropdownOpen((prev) => !prev)}
            aria-expanded={subjectDropdownOpen}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-[14px] sm:text-[15px] font-medium transition-colors ${
              subjectDropdownOpen
                ? 'border-[#D4D4D0] bg-[#E8E8E5] text-[#222222]'
                : 'border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:border-[#D4D4D0] hover:bg-[#ECEDEB]'
            }`}
          >
            <BookOpen size={15} className="shrink-0" />
            <span className="truncate max-w-[130px] sm:max-w-[220px]">
              {isRTL ? currentSubject.titleAr : currentSubject.title}
            </span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 shrink-0 ${
                subjectDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Subject Dropdown Panel */}
          {subjectDropdownOpen && (
            <div
              className={`absolute top-full mt-2 w-80 sm:w-96 bg-[#FFFFFF] border border-[#D4D4D0] rounded-lg shadow-xl z-50 p-4 space-y-3 ${
                isRTL ? 'left-0 sm:right-auto' : 'left-0'
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#505050]">
                  {t('selectSubject')}
                </span>
                <span className="text-[11px] font-mono border border-[#E2E2DF] px-2 py-0.5 rounded bg-[#F7F7F5] text-[#222222] font-semibold">
                  {subjects.length} {isRTL ? 'مقرر متاح' : 'Available'}
                </span>
              </div>

              {/* Subjects List */}
              <div className="space-y-2">
                {subjects.map((sub) => {
                  const isSelected = sub.id === activeSubjectId;
                  return (
                    <div
                      key={sub.id}
                      onClick={() => {
                        setActiveSubjectId(sub.id);
                        setSubjectDropdownOpen(false);
                        navigate('/study');
                      }}
                      className={`p-3.5 border rounded-md cursor-pointer transition-all space-y-2 ${
                        isSelected
                          ? 'border-[#D4D4D0] bg-[#E8E8E5]'
                          : 'border-[#E2E2DF] hover:border-[#D4D4D0] hover:bg-[#ECEDEB]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
                            <GraduationCap size={14} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[14px] text-[#222222]">
                                {isRTL ? sub.titleAr : sub.title}
                              </span>
                              <span className="text-[11px] font-mono px-1.5 py-0.5 border border-[#E2E2DF] rounded bg-[#FFFFFF] text-[#505050] font-semibold">
                                {sub.code}
                              </span>
                            </div>
                            <span className="text-[12px] text-[#686868] block">
                              {isRTL ? sub.levelAr : sub.level}
                            </span>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
                            <Check size={12} />
                          </div>
                        )}
                      </div>

                      <p className="text-[12px] text-[#505050] line-clamp-2 leading-relaxed">
                        {isRTL ? sub.descriptionAr : sub.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-[#E2E2DF] text-[11px] font-mono">
                        <span className="text-[#686868]">
                          {sub.chapters.length} {t('chaptersCount')} · {totalLessons} {t('lessonsCount')}
                        </span>
                        <span className="font-bold text-[#222222]">
                          {progressPercent}% {t('completed')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note for future extensible subjects */}
              <div className="pt-2 border-t border-[#E2E2DF] text-[11px] text-[#686868] text-center">
                {isRTL
                  ? 'يتم إدراج المقررات الجديدة تلقائياً عبر سجل المواد الأكاديمي.'
                  : 'New academic subjects appear automatically via the subject registry.'}
              </div>
            </div>
          )}
        </div>

        {/* The 3 Primary Destinations: Learn, Practice, Review */}
        <nav className="flex items-center gap-1 sm:gap-2 text-[15px] sm:text-[16px]">
          {/* 1. Study (Unified Complete Curriculum Guide) */}
          <NavLink
            to="/study"
            data-nav-item
            className={({ isActive }) => {
              const active =
                isActive ||
                location.pathname === '/' ||
                location.pathname.startsWith('/study') ||
                location.pathname.startsWith('/learn');
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 border font-medium ${
                active
                  ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
              }`;
            }}
          >
            <BookOpen size={16} className="shrink-0" />
            <span>{isRTL ? 'الدراسة' : 'Study'}</span>
          </NavLink>

          {/* 2. Questions (Centralized Question Bank & Exams) */}
          <NavLink
            to="/questions"
            data-nav-item
            className={({ isActive }) => {
              const active =
                isActive ||
                location.pathname.startsWith('/questions') ||
                location.pathname.startsWith('/practice');
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 border font-medium ${
                active
                  ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
              }`;
            }}
          >
            <HelpCircle size={16} className="shrink-0" />
            <span>{isRTL ? 'الأسئلة' : 'Questions'}</span>
          </NavLink>

          {/* 3. Review */}
          <NavLink
            to="/review"
            data-nav-item
            className={({ isActive }) => {
              const active =
                isActive ||
                location.pathname.startsWith('/review') ||
                location.pathname === '/formulas' ||
                location.pathname === '/glossary' ||
                location.pathname === '/revision' ||
                location.pathname === '/mistakes';
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 border font-medium ${
                active
                  ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
              }`;
            }}
          >
            <Sparkles size={16} className="shrink-0" />
            <span>{t('review')}</span>
          </NavLink>

          {/* 4. Basmaga (Keyword-Based Exam Solving) */}
          <NavLink
            to="/basmaga"
            data-nav-item
            className={({ isActive }) => {
              const active = isActive || location.pathname.startsWith('/basmaga');
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 border font-medium ${
                active
                  ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
              }`;
            }}
          >
            <Key size={15} className="shrink-0 text-[#505050]" />
            <span>{isRTL ? 'بصمجة' : 'Basmaga'}</span>
          </NavLink>

          {/* 5. Problem Solving (Step-by-Step Worked Problems - Cryptography only) */}
          {activeSubjectId !== 'bpm' && (
            <NavLink
              to="/problem-solving"
              data-nav-item
              className={({ isActive }) => {
                const active = isActive || location.pathname.startsWith('/problem-solving');
                return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 border font-medium ${
                  active
                    ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                    : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
                }`;
              }}
            >
              <Calculator size={15} className="shrink-0 text-[#505050]" />
              <span>{isRTL ? 'حل المسائل' : 'Problems'}</span>
            </NavLink>
          )}

          {/* 5.1 Artboard (Interactive Fullscreen Classroom) */}
          {activeSubjectId !== 'bpm' && (
            <NavLink
              to="/artboard"
              data-nav-item
              className={({ isActive }) => {
                const active = isActive || location.pathname.startsWith('/artboard');
                return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 border font-medium ${
                  active
                    ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] font-semibold shadow-xs'
                    : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
                }`;
              }}
            >
              <MonitorPlay size={15} className="shrink-0 text-current" />
              <span>{isRTL ? 'Artboard • الأستوديو' : 'Artboard'}</span>
            </NavLink>
          )}

          {/* 6. Interactive Learning (PowerPoint-Style Digital Classroom) */}
          <NavLink
            to="/interactive"
            data-nav-item
            className={({ isActive }) => {
              const active = isActive || location.pathname.startsWith('/interactive');
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 border font-medium ${
                active
                  ? 'bg-[#E8E8E5] text-[#222222] border-[#D4D4D0] font-semibold'
                  : 'border-transparent text-[#222222] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0]'
              }`;
            }}
          >
            <Presentation size={15} className="shrink-0 text-[#505050]" />
            <span>{isRTL ? 'تعلّم تفاعلي' : 'Lectures'}</span>
          </NavLink>
        </nav>
      </div>

      {/* Right: Clean Single Global Language Switcher (العربية | English) */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-center border border-[#E2E2DF] rounded-md p-0.5 bg-[#FFFFFF]">
          <button
            type="button"
            onClick={() => setLanguage('ar')}
            className={`px-2.5 py-1 text-xs font-serif font-bold rounded transition-colors ${
              language === 'ar'
                ? 'bg-[#E8E8E5] text-[#222222]'
                : 'text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            العربية
          </button>
          <span className="text-[#E2E2DF] px-1 select-none">|</span>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors ${
              language === 'en'
                ? 'bg-[#E8E8E5] text-[#222222]'
                : 'text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222]'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </header>
  );
}
