import React from 'react';
import MathDisplay from '../ui/MathDisplay';
import { Calculator } from 'lucide-react';

export interface FormulaConditionHighlightProps {
  conditionMath?: string;
  conditionText?: string;
  conditionTextAr?: string;
  rationaleEn?: string;
  rationaleAr?: string;
  isArabic?: boolean;
  className?: string;
}

export default function FormulaConditionHighlight({
  conditionMath,
  conditionText,
  conditionTextAr,
  rationaleEn,
  rationaleAr,
  isArabic = false,
  className = '',
}: FormulaConditionHighlightProps): React.ReactElement {
  return (
    <div
      className={`p-3 sm:p-4 rounded-xl border border-[#E2C65A] bg-[#FFFEEB] space-y-2 text-[#171717] ${className}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#8C6D1F] font-bold">
        <Calculator className="w-4 h-4 text-[#8C6D1F]" />
        <span>{isArabic ? 'الشرط الرياضي الجوهري الإلزامي' : 'Mandatory Mathematical Condition'}</span>
      </div>

      {conditionMath && (
        <div className="py-1 px-3 bg-[#FFFFFF] border border-[#E2C65A] rounded-md inline-block shadow-2xs font-mono text-sm sm:text-base font-bold text-[#171717]" dir="ltr">
          <MathDisplay math={conditionMath} inline />
        </div>
      )}

      {(conditionText || conditionTextAr) && (
        <p className="text-xs sm:text-sm font-semibold text-[#171717] leading-relaxed">
          {isArabic ? conditionTextAr || conditionText : conditionText || conditionTextAr}
        </p>
      )}

      {(rationaleEn || rationaleAr) && (
        <p className="text-xs text-[#5C450C] leading-relaxed pt-1 border-t border-[#F3E7A3]">
          <span className="font-bold">{isArabic ? 'أهمية الشرط: ' : 'Why Condition Matters: '}</span>
          {isArabic ? rationaleAr || rationaleEn : rationaleEn || rationaleAr}
        </p>
      )}
    </div>
  );
}

