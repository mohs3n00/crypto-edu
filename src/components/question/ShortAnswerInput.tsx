import React from 'react';

export interface ShortAnswerInputProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitted?: boolean;
  isArabic?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export default function ShortAnswerInput({
  value,
  onChange,
  isSubmitted = false,
  isArabic = false,
  placeholder,
  disabled = false,
}: ShortAnswerInputProps): React.ReactElement {
  const defaultPlaceholder = isArabic
    ? 'اكتب إجابتك هنا (كلمة، مصطلح تقني، أو قيمة)...'
    : 'Type your answer here (keyword, technical term, or value)...';

  return (
    <div className="space-y-2 pt-2" dir={isArabic ? 'rtl' : 'ltr'}>
      <label className="block text-xs font-mono text-[#737373] uppercase tracking-wider">
        {isArabic ? 'إجابتك الأكاديمية:' : 'Your Academic Response:'}
      </label>
      <input
        type="text"
        disabled={disabled || isSubmitted}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || defaultPlaceholder}
        className={`w-full px-4 py-3 text-sm sm:text-base border rounded-md transition-colors ${
          isSubmitted
            ? 'border-[#E5E5E5] bg-[#FAFAFA] text-[#171717]'
            : 'border-[#171717] bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#000000] text-[#171717]'
        } ${isArabic ? 'font-serif' : 'font-sans'}`}
        style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
      />
    </div>
  );
}

