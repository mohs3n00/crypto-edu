import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

export interface RecallHintProps {
  hintsEn: [string, string, string];
  hintsAr: [string, string, string];
  isArabic?: boolean;
}

export default function RecallHint({
  hintsEn,
  hintsAr,
  isArabic = false,
}: RecallHintProps): React.ReactElement {
  const [revealedLevel, setRevealedLevel] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tierTitlesEn = [
    'Context & Security Area',
    'Memory Cue / Functional Trigger',
    'Critical Distinction & Key Differentiator',
  ];

  const tierTitlesAr = [
    'السياق والمجال الأكاديمي',
    'مفتاح التذكر والربط الوظيفي',
    'التمييز الحاسم والشرط الأساسي',
  ];

  const handleRevealNext = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (revealedLevel === 0) setRevealedLevel(1);
    } else if (revealedLevel < 3) {
      setRevealedLevel((prev) => prev + 1);
    }
  };

  const handleToggleOpen = () => {
    if (!isOpen && revealedLevel === 0) {
      setRevealedLevel(1);
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] overflow-hidden text-xs transition-all">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#F5F5F5] border-b border-[#E5E5E5]">
        <button
          type="button"
          onClick={handleToggleOpen}
          className="inline-flex items-center gap-1.5 font-medium text-[#171717] hover:text-[#000000] focus:outline-none"
        >
          <Lightbulb className="w-3.5 h-3.5 text-[#171717]" />
          <span>
            {isArabic ? 'تلميحات الحل التدريجية' : 'Progressive Hints'}
          </span>
          <span className="font-mono text-[10px] px-1.5 py-0.2 bg-[#E5E5E5] rounded text-[#525252]">
            {revealedLevel}/3
          </span>
        </button>

        <div className="flex items-center gap-2">
          {revealedLevel < 3 && (
            <button
              type="button"
              onClick={handleRevealNext}
              className="text-[11px] font-semibold text-[#171717] underline hover:text-[#000000] transition-colors"
            >
              {revealedLevel === 0
                ? (isArabic ? 'عرض التلميح 1' : 'Show Hint 1')
                : (isArabic ? `كشف تلميح إضافي (${revealedLevel + 1}/3)` : `Unlock Next Hint (${revealedLevel + 1}/3)`)}
            </button>
          )}
          <button
            type="button"
            onClick={handleToggleOpen}
            className="p-1 text-[#737373] hover:text-[#171717]"
            aria-label="Toggle hint drawer"
          >
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded body */}
      {isOpen && (
        <div className="p-3 space-y-2.5">
          {[0, 1, 2].map((idx) => {
            const isUnlocked = idx < revealedLevel;
            const title = isArabic ? tierTitlesAr[idx] : tierTitlesEn[idx];
            const content = isArabic ? hintsAr[idx] : hintsEn[idx];

            if (!isUnlocked) return null;

            return (
              <div
                key={idx}
                className="p-2.5 rounded bg-[#FFFFFF] border border-[#E5E5E5] space-y-1"
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] uppercase tracking-wider">
                  <span>
                    {isArabic ? `تلميح ${idx + 1}: ${title}` : `Tier ${idx + 1}: ${title}`}
                  </span>
                </div>
                <p className="text-xs text-[#171717] leading-relaxed font-sans">
                  {content}
                </p>
              </div>
            );
          })}

          {revealedLevel === 0 && (
            <p className="text-[11px] text-[#737373] italic text-center py-1">
              {isArabic
                ? 'اضغط على "عرض التلميح 1" لمساعدتك في استرجاع المفهوم دون إفساد الإجابة.'
                : 'Click "Show Hint 1" to recall the concept without giving away the answer.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

