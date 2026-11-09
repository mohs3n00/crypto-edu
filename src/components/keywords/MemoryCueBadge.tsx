import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { type MemoryCue } from '../../data/keywords/types';
import { useUI } from '../../store/uiStore';

export interface MemoryCueBadgeProps {
  cue: MemoryCue;
  compact?: boolean;
  className?: string;
}

export default function MemoryCueBadge({
  cue,
  compact = false,
  className = '',
}: MemoryCueBadgeProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  const trigger = isArabic ? cue.triggerAr : cue.triggerEn;
  const target = isArabic ? cue.targetAr : cue.targetEn;

  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#E2C65A] bg-[#FFFBEA] text-[#171717] font-mono text-[11px] font-bold select-none ${className}`}
        title={`Exam Memory Cue: ${cue.triggerEn} → ${cue.targetEn}`}
      >
        <Target size={11} className="text-[#B8860B] shrink-0" />
        <span className="truncate max-w-[140px]">{trigger}</span>
        <ArrowRight size={10} className="shrink-0 text-[#737373]" />
        <span className="font-extrabold text-[#171717]">{target}</span>
      </span>
    );
  }

  return (
    <div
      className={`p-2.5 rounded-lg border border-[#E2C65A] bg-[#FFFBEA] text-[#171717] space-y-1 ${className}`}
      role="note"
      aria-label="Exam Memory Cue"
    >
      <div className="flex items-center justify-between gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#856404]">
        <div className="flex items-center gap-1">
          <Target size={12} className="text-[#B8860B]" />
          <span>Exam Memory Cue / مفتاح الاستذكار للامتحان</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-mono font-bold pt-0.5">
        <span className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E2C65A] text-[#171717]">
          {cue.triggerEn}
        </span>
        <ArrowRight size={13} className="text-[#856404] shrink-0" />
        <span className="px-2 py-0.5 rounded bg-[#171717] text-[#FFFFFF]">
          {cue.targetEn}
        </span>
      </div>

      {cue.triggerAr && cue.targetAr && (
        <div
          dir="rtl"
          className="flex items-center gap-2 text-xs font-serif text-[#525252] pt-1"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          <span className="font-semibold">{cue.triggerAr}</span>
          <span>←</span>
          <span className="font-bold text-[#171717]">{cue.targetAr}</span>
        </div>
      )}
    </div>
  );
}

