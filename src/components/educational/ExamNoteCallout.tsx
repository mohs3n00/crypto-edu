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
      className={`border-2 border-[#171717] rounded-lg p-5 bg-[#FFFFFF] space-y-4 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <AlertTriangle size={13} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#171717] uppercase tracking-wide">{title}</h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {examSourceRef && (
            <span className="font-mono text-[11px] border border-[#171717] px-2 py-0.5 rounded bg-[#FAFAFA] font-bold">
              {examSourceRef}
            </span>
          )}
          {titleAr && (
            <span
              dir="rtl"
              className="text-xs font-semibold text-[#525252] font-serif hidden sm:inline"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      </div>

      {/* The Deceptive Exam Trap */}
      {trapStatement && (
        <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1">
          <span className="font-mono text-[10px] text-[#737373] uppercase font-bold block">
            Common Deceptive Trap (False / Wrong Notion):
          </span>
          <p className="text-[#525252] line-through italic font-mono text-[13px]">
            "{trapStatement}"
          </p>
        </div>
      )}

      {/* The Verified Academic Fact */}
      <div className="space-y-2">
        <span className="font-mono text-[10px] text-[#171717] uppercase font-bold block">
          Accurate Academic Doctrine / الحقيقة العلمية المعتمدة بالامتحان:
        </span>
        {truthExplanation && truthExplanationAr ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="text-[15px] font-semibold text-[#171717] leading-relaxed">
              <HighlightedText text={truthExplanation} />
            </div>
            <div
              dir="rtl"
              className="text-[15px] font-medium text-[#525252] leading-[1.9] font-serif md:border-s md:border-[#E5E5E5] md:ps-4 pt-2 md:pt-0 border-t md:border-t-0 border-[#F2F2F2]"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <HighlightedText text={truthExplanationAr} />
            </div>
          </div>
        ) : (
          <div>
            {truthExplanation && (
              <div className="text-[15px] font-semibold text-[#171717] leading-relaxed">
                <HighlightedText text={truthExplanation} />
              </div>
            )}
            {truthExplanationAr && (
              <div
                dir="rtl"
                className="text-[15px] font-medium text-[#525252] leading-relaxed font-serif pt-1"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={truthExplanationAr} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Common Mistakes Bullet List */}
      {commonMistakes && commonMistakes.length > 0 && (
        <div className="pt-3 border-t border-[#E5E5E5] space-y-1">
          <span className="text-[11px] font-mono uppercase font-bold text-[#737373] block">
            Frequent Student Pitfalls:
          </span>
          <ul className="text-xs text-[#525252] space-y-1 list-disc list-inside">
            {commonMistakes.map((mis, idx) => (
              <li key={idx} className="leading-snug">
                {mis}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

