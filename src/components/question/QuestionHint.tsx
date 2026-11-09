import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export interface QuestionHintProps {
  hintEn?: string;
  hintAr?: string;
  hintLevel1En?: string;
  hintLevel2En?: string;
  hintLevel1Ar?: string;
  hintLevel2Ar?: string;
  isArabic?: boolean;
}

export default function QuestionHint({
  hintEn,
  hintAr,
  hintLevel1En,
  hintLevel2En,
  hintLevel1Ar,
  hintLevel2Ar,
  isArabic = false,
}: QuestionHintProps): React.ReactElement | null {
  const [revealedLevel, setRevealedLevel] = useState<0 | 1 | 2>(0);

  const l1En = hintLevel1En || hintEn;
  const l1Ar = hintLevel1Ar || hintAr;
  const l2En = hintLevel2En;
  const l2Ar = hintLevel2Ar;

  if (!l1En && !l1Ar) return null;

  return (
    <div className="border border-[#E5E5E5] bg-[#FFFFFF] rounded-md p-3 space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setRevealedLevel(revealedLevel === 0 ? 1 : 0)}
          className="inline-flex items-center gap-1.5 font-mono font-bold text-[#171717] hover:underline cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#171717]" />
          <span>
            {isArabic ? 'تلميح تعليمي للمساعدة' : 'Contextual Academic Hint'}
          </span>
          {revealedLevel === 0 ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5" />
          )}
        </button>

        {revealedLevel > 0 && l2En && (
          <button
            type="button"
            onClick={() => setRevealedLevel(revealedLevel === 1 ? 2 : 1)}
            className="text-[11px] font-mono text-[#525252] hover:text-[#171717] underline"
          >
            {revealedLevel === 1
              ? isArabic
                ? 'عرض تلميح متقدم (المستوى 2)'
                : 'Need more help? (Level 2)'
              : isArabic
                ? 'إخفاء المستوى 2'
                : 'Hide Level 2'}
          </button>
        )}
      </div>

      {revealedLevel >= 1 && (
        <div className="p-2.5 bg-[#FAFAFA] rounded border border-[#E5E5E5] space-y-2">
          {/* Level 1 Hint */}
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block">
              Level 1: Core Principle / المبدأ الأساسي
            </span>
            <p
              dir={isArabic ? 'rtl' : 'ltr'}
              className={`text-[#171717] leading-relaxed ${isArabic ? 'font-serif' : 'font-sans'}`}
              style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
            >
              {isArabic && l1Ar ? l1Ar : l1En}
            </p>
          </div>

          {/* Level 2 Hint */}
          {revealedLevel >= 2 && l2En && (
            <div className="pt-2 border-t border-[#E5E5E5] space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block">
                Level 2: Examination Condition / القاعدة الامتحانية
              </span>
              <p
                dir={isArabic ? 'rtl' : 'ltr'}
                className={`text-[#171717] leading-relaxed ${isArabic ? 'font-serif' : 'font-sans'}`}
                style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {isArabic && l2Ar ? l2Ar : l2En}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

