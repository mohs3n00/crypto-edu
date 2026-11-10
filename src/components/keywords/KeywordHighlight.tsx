import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, ArrowRight } from 'lucide-react';
import { type AcademicKeyword, type KeywordCategory } from '../../data/keywords/types';
import { academicKeywords } from '../../data/keywords/keywordDatabase';
import MemoryCueBadge from './MemoryCueBadge';

export interface KeywordHighlightProps {
  keywordId?: string;
  keyword?: AcademicKeyword;
  children: React.ReactNode;
  category?: KeywordCategory;
  customExplanation?: string;
  customExplanationAr?: string;
  className?: string;
}

export default function KeywordHighlight({
  keywordId,
  keyword,
  children,
  category,
  customExplanation,
  customExplanationAr,
  className = '',
}: KeywordHighlightProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Resolve keyword from database if keywordId is provided
  const resolvedKeyword: AcademicKeyword | undefined =
    keyword || (keywordId ? academicKeywords.find((k) => k.id === keywordId) : undefined);

  const effectiveCategory = category || resolvedKeyword?.category || 'definition';

  const categoryLabels: Record<KeywordCategory, { en: string; ar: string }> = {
    definition: { en: 'Core Definition', ar: 'مفهوم جوهري معتمد' },
    condition: { en: 'Mathematical Condition', ar: 'شرط رياضي لازم' },
    action: { en: 'Cryptographic Action', ar: 'إجراء تشفيري تنفيذي' },
    distinction: { en: 'Exam Distinction', ar: 'تمييز امتحاني دقيق' },
    exception: { en: 'Limitation / Exception', ar: 'استثناء أو قيد' },
    trigger: { en: 'Recall Trigger', ar: 'مفتاح تذكر سريع' },
  };

  const currentCategory = categoryLabels[effectiveCategory];

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <span className="relative inline">
      {/* Textbook Marker Yellow Highlight Span */}
      <span
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        tabIndex={0}
        role="mark"
        aria-expanded={isOpen}
        title={
          resolvedKeyword
            ? `${resolvedKeyword.termEn} (${currentCategory.en}) — Click for concept details & memory cue`
            : 'Key Academic Concept'
        }
        className={`cursor-pointer inline bg-[#FFF1A6] text-[#222222] border-b-2 border-[#E2C65A] px-1 py-0.5 rounded-[3px] font-semibold transition-all hover:bg-[#FFE873] hover:border-[#222222] focus:outline-hidden focus:ring-2 focus:ring-[#222222] ${className}`}
      >
        {children}
      </span>

      {/* Interactive Academic Concept Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Academic Concept Information"
          className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 sm:w-96 p-4 rounded-xl border border-[#D4D4D0] bg-[#FFFFFF] shadow-xl text-[#222222] space-y-3"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E2E2DF] pb-2 gap-2">
            <div className="space-y-0.5 min-w-0">
              <span className="font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#222222] text-[#FFFFFF] inline-block">
                {currentCategory.en} • {currentCategory.ar}
              </span>
              <h4 className="text-[14px] sm:text-[15px] font-bold text-[#222222] truncate">
                {resolvedKeyword?.termEn || (typeof children === 'string' ? children : 'Key Concept')}
              </h4>
              {resolvedKeyword?.termAr && (
                <h5
                  dir="rtl"
                  className="text-xs font-serif text-[#505050] font-bold"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {resolvedKeyword.termAr}
                </h5>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-[#ECEDEB] text-[#505050] hover:text-[#222222] transition-colors"
              aria-label="Close details"
            >
              <X size={14} />
            </button>
          </div>

          {/* Academic Explanation */}
          <div className="text-xs sm:text-[13px] leading-relaxed text-[#171717] space-y-1.5">
            <p>{customExplanation || resolvedKeyword?.explanationEn}</p>
            {(customExplanationAr || resolvedKeyword?.explanationAr) && (
              <p
                dir="rtl"
                className="font-serif text-[#525252] pt-1 border-t border-[#F2F2F2]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {customExplanationAr || resolvedKeyword?.explanationAr}
              </p>
            )}
          </div>

          {/* Memory Cue (if available) */}
          {resolvedKeyword?.memoryCue && (
            <MemoryCueBadge cue={resolvedKeyword.memoryCue} />
          )}

          {/* Direct Lesson Link */}
          {resolvedKeyword?.relatedLessonId && (
            <div className="pt-1 flex justify-end">
              <Link
                to={`/lesson/${resolvedKeyword.relatedLessonId}`}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#171717] bg-[#171717] text-[#FFFFFF] text-[11px] font-bold hover:bg-[#333333] transition-colors"
              >
                <BookOpen size={12} />
                <span>Go to Lesson / فتح الدرس</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>
      )}
    </span>
  );
}
