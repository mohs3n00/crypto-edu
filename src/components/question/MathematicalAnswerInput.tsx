import React from 'react';
import { Calculator } from 'lucide-react';

export interface MathematicalAnswerInputProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitted?: boolean;
  isArabic?: boolean;
  expectedFormatHint?: string;
  disabled?: boolean;
}

export default function MathematicalAnswerInput({
  value,
  onChange,
  isSubmitted = false,
  isArabic = false,
  expectedFormatHint,
  disabled = false,
}: MathematicalAnswerInputProps): React.ReactElement {
  return (
    <div className="space-y-2 pt-2">
      <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
        <div className="flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5 text-[#171717]" />
          <span className="uppercase tracking-wider font-bold text-[#171717]">
            {isArabic ? 'الحل الحسابي / التشفيري الناتج:' : 'Computed Output / Result:'}
          </span>
        </div>
        {expectedFormatHint && (
          <span className="text-[11px] text-[#737373]">
            {expectedFormatHint}
          </span>
        )}
      </div>

      <input
        type="text"
        dir="ltr"
        disabled={disabled || isSubmitted}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter exact calculated value (e.g., HDS, 2, or output bitstring)..."
        className={`w-full px-4 py-3 text-base sm:text-lg font-mono border rounded-md transition-colors ${
          isSubmitted
            ? 'border-[#E5E5E5] bg-[#FAFAFA] text-[#171717]'
            : 'border-[#171717] bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#000000] text-[#171717]'
        }`}
      />
    </div>
  );
}

