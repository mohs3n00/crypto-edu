import React from 'react';
import { RotateCcw, Send, AlertCircle } from 'lucide-react';

export interface QuestionSubmitButtonProps {
  isSubmitted: boolean;
  canSubmit: boolean;
  onSubmit: () => void;
  onRetry?: () => void;
  isArabic?: boolean;
  submitLabel?: string;
  retryLabel?: string;
  disabledReason?: string;
}

export default function QuestionSubmitButton({
  isSubmitted,
  canSubmit,
  onSubmit,
  onRetry,
  isArabic = false,
  submitLabel,
  retryLabel,
  disabledReason,
}: QuestionSubmitButtonProps): React.ReactElement {
  const defaultSubmitText = isArabic ? 'إرسال الإجابة والتحقق' : 'Submit Answer';
  const defaultRetryText = isArabic ? 'إعادة المحاولة' : 'Try Again';
  const defaultReason = isArabic
    ? 'يرجى تحديد إجابتك لتفعيل زر الإرسال'
    : 'Select an answer to submit';

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold border border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF] rounded transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{retryLabel || defaultRetryText}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <button
        type="button"
        disabled={!canSubmit}
        onClick={onSubmit}
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold border rounded transition-all ${
          canSubmit
            ? 'border-[#171717] bg-[#171717] text-[#FFFFFF] hover:bg-[#333333] cursor-pointer shadow-xs'
            : 'border-[#E5E5E5] bg-[#F2F2F2] text-[#A3A3A3] cursor-not-allowed opacity-80'
        }`}
      >
        <Send className="w-3.5 h-3.5" />
        <span>{submitLabel || defaultSubmitText}</span>
      </button>

      {!canSubmit && (
        <div className="flex items-center gap-1.5 text-xs text-[#737373] font-mono">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{disabledReason || defaultReason}</span>
        </div>
      )}
    </div>
  );
}

