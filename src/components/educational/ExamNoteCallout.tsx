import React from 'react';
import { AlertTriangle } from 'lucide-react';
import HighlightedText from '../keywords/HighlightedText';

interface ExamNoteCalloutProps {
  title?: string;
  titleAr?: string;
  trapStatement?: string;
  truthExplanation: string;
  truthExplanationAr?: string;
  examSourceRef?: string;
  commonMistakes?: string[];
  className?: string;
}

export default function ExamNoteCallout({
  title = 'Official Examination Note & Common Trap',
  titleAr = 'تنبيه امتحاني هام ومصيدة متكررة',
  trapStatement,
  truthExplanation,
  truthExplanationAr,
  examSourceRef,
  commonMistakes,
  className = '',
}: ExamNoteCalloutProps): React.ReactElement {
  return (
    <div
      className={`border border-[#D4D4D0] rounded-2xl p-6 sm:p-7 bg-[#FFFFFF] space-y-5 hover:border-[#222222] transition-all shadow-xs w-full ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-[#222222] bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <AlertTriangle size={16} />
          </div>
          <div>
            <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222] tracking-tight">{title}</h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {examSourceRef && (
            <span className="font-mono text-xs border border-[#222222] px-2.5 py-1 rounded bg-[#F7F7F5] text-[#222222] font-bold">
              {examSourceRef}
            </span>
          )}
          {titleAr && (
            <span
              dir="rtl"
              className="text-base sm:text-lg font-bold text-[#505050] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      </div>

      {/* The Deceptive Exam Trap */}
      {trapStatement && (
        <div className="p-4 border border-[#E2E2DF] bg-[#F7F7F5] rounded-xl text-sm space-y-1.5">
          <span className="font-mono text-xs sm:text-[13px] text-[#686868] uppercase font-bold block">
            Common Deceptive Trap (False / Wrong Notion):
          </span>
          <p className="text-[#686868] line-through italic font-mono text-[14px] sm:text-[15px] leading-relaxed">
            "{trapStatement}"
          </p>
        </div>
      )}

      {/* The Verified Academic Fact — Single-Column Full-Width */}
      <div className="space-y-3 w-full">
        <span className="font-mono text-xs sm:text-[13px] text-[#222222] uppercase font-bold block">
          Exam Recognition Clue & Key Distinction / دلالة التمييز والحل في الامتحان:
        </span>
        <div className="space-y-3 w-full">
          {truthExplanation && (
            <div className="text-[17px] sm:text-[18px] font-semibold text-[#222222] leading-[1.65]">
              <HighlightedText text={truthExplanation} />
            </div>
          )}
          {truthExplanationAr && (
            <div
              dir="rtl"
              className="text-[18px] sm:text-[19px] font-medium text-[#505050] leading-[1.8] font-serif pt-2 border-t border-[#E2E2DF]"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <HighlightedText text={truthExplanationAr} />
            </div>
          )}
        </div>
      </div>

      {/* Common Mistakes Bullet List */}
      {commonMistakes && commonMistakes.length > 0 && (
        <div className="pt-3 border-t border-[#E2E2DF] space-y-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase font-bold text-[#686868] block">
            Frequent Student Pitfalls / أخطاء شائعة يجب الحذر منها:
          </span>
          <ul className="text-[15px] sm:text-[16px] text-[#505050] space-y-1.5 list-disc list-inside leading-relaxed">
            {commonMistakes.map((mis, idx) => (
              <li key={idx} className="leading-relaxed">
                {mis}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

