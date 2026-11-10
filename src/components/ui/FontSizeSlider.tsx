import React from 'react';
import { RotateCcw, Type } from 'lucide-react';
import { useUI, DEFAULT_BODY_FONT_SIZE, MIN_BODY_FONT_SIZE, MAX_BODY_FONT_SIZE } from '../../store/uiStore';

interface FontSizeSliderProps {
  variant?: 'inline' | 'compact';
  className?: string;
  showLabel?: boolean;
}

export const FontSizeSlider: React.FC<FontSizeSliderProps> = ({
  variant = 'inline',
  className = '',
  showLabel = true,
}) => {
  const { bodyFontSize, setBodyFontSize, resetBodyFontSize, language } = useUI();
  const isArabic = language === 'ar';

  const isDefault = bodyFontSize === DEFAULT_BODY_FONT_SIZE;

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] shadow-2xs select-none ${className}`}
      role="group"
      aria-label={isArabic ? 'حجم خط الشرح' : 'Explanation Text Size'}
    >
      {/* Optional Descriptive Label */}
      {showLabel && (
        <div className="flex items-center gap-1.5 shrink-0">
          <Type size={14} className="text-[#505050]" />
          <span className="text-[11px] font-mono font-bold text-[#505050] uppercase tracking-wider hidden sm:inline">
            {isArabic ? 'حجم خط الشرح:' : 'Explanation Size:'}
          </span>
        </div>
      )}

      {/* Smaller icon indicator at Min side (17px) */}
      <span
        className="text-[11px] font-bold font-mono text-[#737373] select-none shrink-0"
        title={isArabic ? 'الحد الأدنى (17px)' : 'Minimum size (17px)'}
        aria-hidden="true"
      >
        A
      </span>

      {/* Horizontal Range Slider */}
      <input
        type="range"
        min={MIN_BODY_FONT_SIZE}
        max={MAX_BODY_FONT_SIZE}
        step={1}
        value={bodyFontSize}
        onChange={(e) => setBodyFontSize(Number(e.target.value))}
        aria-label={isArabic ? 'حجم خط الشرح' : 'Explanation Text Size'}
        aria-valuemin={MIN_BODY_FONT_SIZE}
        aria-valuemax={MAX_BODY_FONT_SIZE}
        aria-valuenow={bodyFontSize}
        aria-valuetext={`${bodyFontSize}px`}
        className="font-size-slider w-18 sm:w-24 shrink-0"
      />

      {/* Larger icon indicator at Max side (24px) */}
      <span
        className="text-[15px] font-bold font-mono text-[#222222] select-none shrink-0"
        title={isArabic ? 'الحد الأقصى (24px)' : 'Maximum size (24px)'}
        aria-hidden="true"
      >
        A
      </span>

      {/* Current Value Display */}
      <span
        className="font-mono text-[11px] font-bold text-[#222222] px-1.5 py-0.5 rounded bg-[#E8E8E5] border border-[#D4D4D0] shrink-0"
        title={isArabic ? `الحجم الحالي: ${bodyFontSize}px` : `Current size: ${bodyFontSize}px`}
      >
        {bodyFontSize}px
      </span>

      {/* Reset to Default Button (19px) */}
      <button
        type="button"
        onClick={resetBodyFontSize}
        disabled={isDefault}
        className={`p-1 rounded border transition-colors shrink-0 cursor-pointer ${
          isDefault
            ? 'border-transparent text-[#A3A3A0] opacity-40 cursor-not-allowed'
            : 'border-[#E2E2DF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB]'
        }`}
        title={
          isArabic
            ? `استعادة الحجم الافتراضي (${DEFAULT_BODY_FONT_SIZE}px)`
            : `Reset to default (${DEFAULT_BODY_FONT_SIZE}px)`
        }
        aria-label={isArabic ? 'استعادة الحجم الافتراضي' : 'Reset font size to default'}
      >
        <RotateCcw size={12} />
      </button>
    </div>
  );
};

export default FontSizeSlider;

