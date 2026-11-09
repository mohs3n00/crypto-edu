import React from 'react';
import { Check, X } from 'lucide-react';
import { useAIHelp } from '../../store/aiHelpStore';
import { useUI } from '../../store/uiStore';
import { ChatGPTIcon, GeminiIcon } from './AIIcons';

export default function AIToast(): React.ReactElement | null {
  const { toast, dismissToast } = useAIHelp();
  const { language } = useUI();
  const isArabic = language === 'ar';

  if (!toast || !toast.show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-lg bg-[#000000] text-[#FFFFFF] border border-[#333333] shadow-2xl flex items-start gap-3.5 transition-all animate-in fade-in slide-in-from-bottom-3"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="w-7 h-7 rounded border border-[#333333] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5">
        {toast.provider === 'chatgpt' ? (
          <ChatGPTIcon size={16} />
        ) : (
          <GeminiIcon size={16} />
        )}
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#A3A3A3] uppercase tracking-wider">
          <Check size={13} className="text-[#FFFFFF]" />
          <span>Prompt Copied & Ready</span>
        </div>
        <p
          className={`text-sm font-medium leading-relaxed ${
            isArabic ? 'font-serif text-[15px]' : 'font-sans'
          }`}
          style={isArabic ? { fontFamily: 'var(--font-arabic)' } : undefined}
        >
          {isArabic ? toast.messageAr : toast.messageEn}
        </p>
      </div>

      <button
        type="button"
        onClick={dismissToast}
        aria-label="Dismiss notification"
        className="p-1 rounded text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#171717] transition-colors shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  );
}

