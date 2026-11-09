import React, { useState } from 'react';
import { Lightbulb, ChevronRight, HelpCircle } from 'lucide-react';
import { useUI } from '../../store/uiStore';

export interface ContextualHintProps {
  hint?: string;
  hintAr?: string;
  hintLevel1?: string;
  hintLevel1Ar?: string;
  hintLevel2?: string;
  hintLevel2Ar?: string;
  className?: string;
}

export default function ContextualHint({
  hint,
  hintAr,
  hintLevel1,
  hintLevel1Ar,
  hintLevel2,
  hintLevel2Ar,
  className = '',
}: ContextualHintProps): React.ReactElement | null {
  const { language } = useUI();
  const isArabic = language === 'ar';
  const [level, setLevel] = useState<number>(0);

  // If no hints provided, do not render
  if (!hint && !hintLevel1 && !hintLevel2) {
    return null;
  }

  const primaryHint = isArabic && hintAr ? hintAr : hint || '';
  const firstLevel = isArabic && hintLevel1Ar ? hintLevel1Ar : hintLevel1 || primaryHint;
  const secondLevel = isArabic && hintLevel2Ar ? hintLevel2Ar : hintLevel2 || '';

  const maxLevel = secondLevel ? 2 : 1;

  const handleNextHint = () => {
    setLevel((prev) => Math.min(prev + 1, maxLevel));
  };

  return (
    <div className={`border border-[#E5E5E5] rounded-md p-3.5 bg-[#FAFAFA] text-xs space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#171717]">
          <Lightbulb size={14} className="text-[#171717]" />
          <span>{isArabic ? 'تلميح أكاديمي منهجي' : 'Academic Contextual Hint'}</span>
        </div>
        {level < maxLevel && (
          <button
            type="button"
            onClick={handleNextHint}
            className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#171717] hover:underline"
          >
            <span>{level === 0 ? (isArabic ? 'عرض التلميح' : 'Show Hint') : (isArabic ? 'تلميح أعمق' : 'Next Hint')}</span>
            <ChevronRight size={12} />
          </button>
        )}
      </div>

      {level === 0 && (
        <p className="text-[#737373] text-[12px] italic">
          {isArabic
            ? 'إذا واجهت صعوبة في تحديد الإجابة الصحيحة، اضغط "عرض التلميح" لمراجعة الشرط الرياضي.'
            : 'If you are unsure, click "Show Hint" to recall the governing mathematical condition.'}
        </p>
      )}

      {level >= 1 && (
        <div className="p-2.5 border border-[#171717] bg-[#FFFFFF] rounded text-[#171717] text-[13px] leading-relaxed">
          <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block mb-1">
            {isArabic ? 'التلميح الأساسي:' : 'Hint 1 — Core Principle:'}
          </span>
          <p style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}>
            {firstLevel}
          </p>
        </div>
      )}

      {level >= 2 && secondLevel && (
        <div className="p-2.5 border border-[#171717] bg-[#FFFFFF] rounded text-[#171717] text-[13px] leading-relaxed">
          <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block mb-1">
            {isArabic ? 'تلميح الشروط الحتمية:' : 'Hint 2 — Mathematical Condition:'}
          </span>
          <p style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}>
            {secondLevel}
          </p>
        </div>
      )}
    </div>
  );
}

