import React, { useState, useRef, useEffect } from 'react';
import { X, BookOpen } from 'lucide-react';
import type { SemanticRole } from '../../data/keywords/semanticTypes';
import { academicKeywords } from '../../data/keywords/keywordDatabase';
import MemoryCueBadge from './MemoryCueBadge';
import KeywordRecallLink from './KeywordRecallLink';

export interface SemanticHighlightProps {
  children: React.ReactNode;
  role?: SemanticRole;
  keywordId?: string;
  phraseLabelEn?: string;
  phraseLabelAr?: string;
  explanationEn?: string;
  explanationAr?: string;
  relatedConceptEn?: string;
  relatedConceptAr?: string;
  chapterId?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
  isArabic?: boolean;
  className?: string;
}

export default function SemanticHighlight({
  children,
  role = 'concept',
  keywordId,
  phraseLabelEn,
  phraseLabelAr,
  explanationEn,
  explanationAr,
  relatedConceptEn,
  relatedConceptAr,
  chapterId = 'ch1',
  isArabic = false,
  className = '',
}: SemanticHighlightProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Resolve linked academic keyword if keywordId is present
  const resolvedKeyword = keywordId
    ? academicKeywords.find((k) => k.id === keywordId)
    : undefined;

  const roleLabels: Record<SemanticRole, { en: string; ar: string }> = {
    concept: { en: 'Core Concept', ar: 'مفهوم جوهري معتمد' },
    action: { en: 'Defining Action', ar: 'إجراء تشغيلي محدد' },
    target: { en: 'Affected Target / Object', ar: 'المورد أو الكيان المستهدف' },
    condition: { en: 'Mandatory Condition', ar: 'شرط جبري لازم' },
    distinction: { en: 'Exam Distinction', ar: 'تمييز امتحاني دقيق' },
    exception: { en: 'Limitation / Exception', ar: 'استثناء أو قيد مانع' },
  };

  const currentRole = roleLabels[role] || roleLabels.concept;

  // Close on click outside
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

  const effectiveExplanationEn =
    explanationEn || resolvedKeyword?.explanationEn || 'Authoritative academic concept in cryptography.';
  const effectiveExplanationAr =
    explanationAr || resolvedKeyword?.explanationAr;

  return (
    <span className="relative inline">
      {/* Textbook Marker Yellow Highlight Span */}
      <span
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            ? `${resolvedKeyword.termEn} (${currentRole.en}) — Click for concept details & memory cue`
            : `${currentRole.en} — Click to view explanation`
        }
        className={`cursor-pointer inline bg-[#FFF1A6] text-[#171717] border-b-2 border-[#E2C65A] px-1 py-0.5 rounded-[3px] font-semibold transition-all hover:bg-[#FFE873] hover:border-[#171717] focus:outline-hidden focus:ring-2 focus:ring-[#171717] ${className}`}
      >
        {children}
      </span>

      {/* Lightweight Hover Tooltip (Only when popover is not open) */}
      {isHovered && !isOpen && (
        <span
          role="tooltip"
          dir={isArabic ? 'rtl' : 'ltr'}
          className="absolute z-40 bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-60 sm:w-72 p-2 rounded-lg border border-[#171717] bg-[#171717] text-[#FFFFFF] shadow-md text-left pointer-events-none transition-opacity"
        >
          <span className="flex items-center justify-between text-[10px] font-mono uppercase text-[#A3A3A3] pb-1 border-b border-[#333333] mb-1">
            <span>{isArabic ? currentRole.ar : currentRole.en}</span>
            {(relatedConceptEn || resolvedKeyword) && (
              <span className="text-[#FFF1A6] font-bold">
                {isArabic
                  ? relatedConceptAr || resolvedKeyword?.termAr
                  : relatedConceptEn || resolvedKeyword?.termEn}
              </span>
            )}
          </span>
          <span className="text-xs text-[#FAFAFA] leading-snug block font-sans">
            {isArabic ? effectiveExplanationAr || effectiveExplanationEn : effectiveExplanationEn}
          </span>
        </span>
      )}

      {/* Interactive Academic Concept Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Academic Concept Information"
          dir={isArabic ? 'rtl' : 'ltr'}
          className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 sm:w-96 p-4 rounded-xl border-2 border-[#171717] bg-[#FFFFFF] shadow-xl text-[#171717] space-y-3"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-2 gap-2">
            <div className="space-y-0.5 min-w-0">
              <span className="font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#171717] text-[#FFFFFF] inline-block">
                {currentRole.en} • {currentRole.ar}
              </span>
              <h4 className="text-[14px] sm:text-[15px] font-bold text-[#171717] truncate">
                {phraseLabelEn || resolvedKeyword?.termEn || (typeof children === 'string' ? children : 'Key Academic Phrase')}
              </h4>
              {(phraseLabelAr || resolvedKeyword?.termAr) && (
                <h5
                  dir="rtl"
                  className="text-xs font-serif text-[#525252] font-bold"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {phraseLabelAr || resolvedKeyword?.termAr}
                </h5>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-[#F2F2F2] text-[#525252] transition-colors"
              aria-label="Close details"
            >
              <X size={14} />
            </button>
          </div>

          {/* Academic Explanation */}
          <div className="text-xs sm:text-[13px] leading-relaxed text-[#171717] space-y-1.5 font-sans">
            <p>{effectiveExplanationEn}</p>
            {effectiveExplanationAr && (
              <p
                dir="rtl"
                className="font-serif text-[#525252] pt-1 border-t border-[#F2F2F2]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {effectiveExplanationAr}
              </p>
            )}
          </div>

          {/* Memory Cue (if available) */}
          {resolvedKeyword?.memoryCue && (
            <MemoryCueBadge cue={resolvedKeyword.memoryCue} />
          )}

          {/* Action Row: Lesson Link + Keyword Recall Link */}
          <div className="pt-2 border-t border-[#F2F2F2] flex items-center justify-between gap-2 flex-wrap">
            <KeywordRecallLink
              keywordId={resolvedKeyword?.id || keywordId}
              chapterId={chapterId}
              isArabic={isArabic}
            />

            {resolvedKeyword?.relatedLessonId && (
              <a
                href={`/learn/${chapterId}/${resolvedKeyword.relatedLessonId}`}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] text-[11px] font-bold hover:bg-[#F5F5F5] transition-colors"
              >
                <BookOpen size={12} />
                <span>{isArabic ? 'فتح الدرس' : 'Lesson'}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </span>
  );
}
