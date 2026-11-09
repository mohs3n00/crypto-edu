import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  ChevronDown,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Check,
  GraduationCap,
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
      className="fixed top-0 inset-x-0 z-30 flex items-center justify-between bg-[#FFFFFF] border-b border-[#E5E5E5] px-3 sm:px-6 select-none"
      style={{ height: 56 }}
      role="banner"
    >
      {/* Left: Sidebar Toggle + EDU Brand Identity */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          className="flex items-center justify-center w-8 h-8 rounded border border-[#E5E5E5] text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors"
        >
          <Menu size={16} />
        </button>

        <Link
          to="/learn"
          className="flex items-center gap-2.5 no-underline group"
          aria-label="EDU Home"
        >
          <div className="w-7 h-7 rounded border border-[#000000] bg-[#000000] text-[#FFFFFF] flex items-center justify-center font-bold text-xs font-mono tracking-wider">
            E
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-bold text-[#000000] tracking-tight group-hover:underline">
              EDU
            </span>
            <span
              className="text-[11px] text-[#525252] font-medium"
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
                ? 'border-[#000000] bg-[#000000] text-[#FFFFFF]'
                : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'
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
              className={`absolute top-full mt-2 w-80 sm:w-96 bg-[#FFFFFF] border-2 border-[#000000] rounded-lg shadow-xl z-50 p-4 space-y-3 ${
                isRTL ? 'left-0 sm:right-auto' : 'left-0'
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#525252]">
                  {t('selectSubject')}
                </span>
                <span className="text-[11px] font-mono border border-[#E5E5E5] px-2 py-0.5 rounded bg-[#FAFAFA] text-[#171717] font-semibold">
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
                        navigate('/learn');
                      }}
                      className={`p-3.5 border rounded-md cursor-pointer transition-all space-y-2 ${
                        isSelected
                          ? 'border-[#000000] bg-[#FAFAFA] ring-1 ring-[#000000]'
                          : 'border-[#E5E5E5] hover:border-[#000000] hover:bg-[#FAFAFA]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded border border-[#000000] bg-[#000000] text-[#FFFFFF] flex items-center justify-center shrink-0">
                            <GraduationCap size={14} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[14px] text-[#000000]">
                                {isRTL ? sub.titleAr : sub.title}
                              </span>
                              <span className="text-[11px] font-mono px-1.5 py-0.5 border border-[#E5E5E5] rounded bg-[#FFFFFF] text-[#525252] font-semibold">
                                {sub.code}
                              </span>
                            </div>
                            <span className="text-[12px] text-[#737373] block">
                              {isRTL ? sub.levelAr : sub.level}
                            </span>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full border border-[#000000] bg-[#000000] text-[#FFFFFF] flex items-center justify-center shrink-0">
                            <Check size={12} />
                          </div>
                        )}
                      </div>

                      <p className="text-[12px] text-[#525252] line-clamp-2 leading-relaxed">
                        {isRTL ? sub.descriptionAr : sub.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-[#E5E5E5] text-[11px] font-mono">
                        <span className="text-[#737373]">
                          {sub.chapters.length} {t('chaptersCount')} · {totalLessons} {t('lessonsCount')}
                        </span>
                        <span className="font-bold text-[#000000]">
                          {progressPercent}% {t('completed')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note for future extensible subjects */}
              <div className="pt-2 border-t border-[#E5E5E5] text-[11px] text-[#737373] text-center">
                {isRTL
                  ? 'يتم إدراج المقررات الجديدة تلقائياً عبر سجل المواد الأكاديمي.'
                  : 'New academic subjects appear automatically via the subject registry.'}
              </div>
            </div>
          )}
        </div>

        {/* The 3 Primary Destinations: Learn, Practice, Review */}
        <nav className="flex items-center gap-1 sm:gap-2 text-[15px] sm:text-[16px]">
          {/* 1. Learn */}
          <NavLink
            to="/learn"
            data-nav-item
            className={({ isActive }) => {
              const active = isActive || location.pathname === '/' || location.pathname.startsWith('/learn');
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 border font-medium ${
                active
                  ? 'bg-[#000000] text-[#FFFFFF] border-[#000000] font-semibold'
                  : 'border-transparent text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
              }`;
            }}
          >
            <BookOpen size={16} className="shrink-0" />
            <span>{t('learn')}</span>
          </NavLink>

          {/* 2. Practice */}
          <NavLink
            to="/practice"
            data-nav-item
            className={({ isActive }) => {
              const active =
                isActive ||
                location.pathname.startsWith('/practice') ||
                location.pathname === '/questions' ||
                location.pathname === '/exams' ||
                location.pathname === '/lab';
              return `px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 border font-medium ${
                active
                  ? 'bg-[#000000] text-[#FFFFFF] border-[#000000] font-semibold'
                  : 'border-transparent text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
              }`;
            }}
          >
            <CheckCircle2 size={16} className="shrink-0" />
            <span>{t('practice')}</span>
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
                  ? 'bg-[#000000] text-[#FFFFFF] border-[#000000] font-semibold'
                  : 'border-transparent text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
              }`;
            }}
          >
            <Sparkles size={16} className="shrink-0" />
            <span>{t('review')}</span>
          </NavLink>
        </nav>
      </div>

      {/* Right: Clean Single Global Language Switcher (العربية | English) */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-center border border-[#000000] rounded-md p-0.5 bg-[#FFFFFF]">
          <button
            type="button"
            onClick={() => setLanguage('ar')}
            className={`px-2.5 py-1 text-xs font-serif font-bold rounded transition-colors ${
              language === 'ar'
                ? 'bg-[#000000] text-[#FFFFFF]'
                : 'text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
            }`}
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            العربية
          </button>
          <span className="text-[#E5E5E5] px-1 select-none">|</span>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors ${
              language === 'en'
                ? 'bg-[#000000] text-[#FFFFFF]'
                : 'text-[#171717] hover:bg-[#000000] hover:text-[#FFFFFF]'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </header>
  );
}
