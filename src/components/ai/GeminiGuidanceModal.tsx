import React, { useState } from 'react';
import { Check, Copy, ExternalLink, X, Info } from 'lucide-react';
import { useAIHelp } from '../../store/aiHelpStore';
import { useUI } from '../../store/uiStore';
import { GeminiIcon } from './AIIcons';
import { copyToClipboard } from '../../utils/clipboard';

export default function GeminiGuidanceModal(): React.ReactElement | null {
  const { geminiModal, closeGeminiModal } = useAIHelp();
  const { language } = useUI();
  const [copiedAgain, setCopiedAgain] = useState(false);

  if (!geminiModal || !geminiModal.isOpen) return null;

  const isArabic = language === 'ar';

  const handleCopyAgain = async () => {
    const success = await copyToClipboard(geminiModal.prompt);
    if (success) {
      setCopiedAgain(true);
      setTimeout(() => setCopiedAgain(false), 2500);
    }
  };

  const handleOpenFallback = () => {
    window.open('https://gemini.google.com/app', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gemini-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
    >
      <div
        className="w-full max-w-xl bg-[#FFFFFF] border-2 border-[#000000] rounded-xl shadow-2xl p-6 sm:p-7 space-y-6 overflow-hidden text-[#171717]"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E5E5E5] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#000000] bg-[#000000] text-[#FFFFFF] flex items-center justify-center shrink-0">
              <GeminiIcon size={18} />
            </div>
            <div>
              <h3 id="gemini-modal-title" className="text-lg font-bold tracking-tight text-[#000000]">
                {isArabic ? 'المساعد الأكاديمي Gemini' : 'Explain with Gemini'}
              </h3>
              <span className="text-xs text-[#525252] font-mono block">
                {isArabic ? 'سؤال سياقي جاهز للاستخدام' : 'Contextual question prepared'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeGeminiModal}
            aria-label="Close dialog"
            className="p-1.5 rounded border border-[#E5E5E5] hover:border-[#000000] hover:bg-[#F2F2F2] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Status Callout */}
        <div className="p-4 border border-[#000000] bg-[#FAFAFA] rounded-lg space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">
            <Check size={14} className="text-[#000000]" />
            <span>{isArabic ? 'تم نسخ السؤال الأكاديمي للحافظة' : 'Question Copied to Clipboard'}</span>
          </div>
          <p
            className="text-xs sm:text-sm leading-relaxed text-[#171717]"
            style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
          >
            {isArabic
              ? 'تم تجهيز سؤال أكاديمي منظم يشمل سياق الدرس الحالي والمادة، ونُسخ تلقائياً إلى حافظتك.'
              : 'A structured university-level prompt containing your lesson context and selected content has been copied.'}
          </p>
        </div>

        {/* Chrome Side Panel Instruction */}
        <div className="p-4 border border-[#E5E5E5] rounded-lg bg-[#FFFFFF] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#525252] uppercase">
            <Info size={14} />
            <span>{isArabic ? 'كيفية الاستخدام مع متصفح Google Chrome' : 'Using with Chrome Side Panel'}</span>
          </div>
          <p
            className="text-xs sm:text-sm leading-relaxed text-[#525252]"
            style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
          >
            {isArabic
              ? 'إذا كنت تستخدم متصفح Google Chrome، انقر على زر لوحة Ask Gemini الجانبية في شريط أدوات المتصفح، ثم الصق (Paste) السؤال للحصول على الشرح الفوري.'
              : 'If you are using Google Chrome, click the "Ask Gemini" side panel button in your Chrome toolbar and paste your question directly.'}
          </p>
        </div>

        {/* Prompt Preview Snippet */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>{isArabic ? 'معاينة نص السؤال المنسوخ:' : 'Prompt Preview:'}</span>
            <button
              type="button"
              onClick={handleCopyAgain}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#171717] hover:underline"
            >
              {copiedAgain ? (
                <>
                  <Check size={12} /> {isArabic ? 'تم النسخ مجدداً!' : 'Copied Again!'}
                </>
              ) : (
                <>
                  <Copy size={12} /> {isArabic ? 'إعادة النسخ' : 'Copy Again'}
                </>
              )}
            </button>
          </div>
          <div
            className="max-h-28 overflow-y-auto p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md text-[11px] font-mono text-[#525252] whitespace-pre-wrap select-all"
            dir="ltr"
          >
            {geminiModal.prompt}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[#E5E5E5]">
          <button
            type="button"
            onClick={closeGeminiModal}
            className="px-4 py-2.5 border border-[#E5E5E5] rounded-md text-xs sm:text-sm font-semibold hover:border-[#000000] hover:bg-[#FAFAFA] transition-colors"
          >
            {isArabic ? 'إغلاق' : 'Close'}
          </button>

          <button
            type="button"
            onClick={handleOpenFallback}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#000000] bg-[#000000] text-[#FFFFFF] rounded-md text-xs sm:text-sm font-semibold hover:bg-[#222222] transition-colors"
          >
            <span>{isArabic ? 'فتح Gemini في علامة تبويب جديدة' : 'Open Gemini in a new tab'}</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

