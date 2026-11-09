import React, { useState } from 'react';
import type { AIHelpContext, AIProvider } from '../../types/ai';
import { useAIHelp } from '../../store/aiHelpStore';
import { useUI } from '../../store/uiStore';
import { ChatGPTIcon, GeminiIcon } from './AIIcons';

export interface AIProviderActionsProps {
  context: AIHelpContext;
  variant?: 'compact' | 'full' | 'pill';
  className?: string;
}

export default function AIProviderActions({
  context,
  variant = 'compact',
  className = '',
}: AIProviderActionsProps): React.ReactElement {
  const { requestAIHelp } = useAIHelp();
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [loadingProvider, setLoadingProvider] = useState<AIProvider | null>(null);

  const handleAction = async (provider: AIProvider, e: React.MouseEvent) => {
    e.stopPropagation();
    setLoadingProvider(provider);
    try {
      await requestAIHelp(provider, {
        ...context,
        language,
      });
    } finally {
      setLoadingProvider(null);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        {/* ChatGPT Action */}
        <button
          type="button"
          onClick={(e) => handleAction('chatgpt', e)}
          disabled={loadingProvider !== null}
          title={isArabic ? 'شرح بالذكاء الاصطناعي عبر ChatGPT' : 'Explain with ChatGPT'}
          aria-label={isArabic ? 'شرح بالذكاء الاصطناعي عبر ChatGPT' : 'Explain with ChatGPT'}
          className="p-1.5 rounded-md border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-all disabled:opacity-40"
        >
          <ChatGPTIcon size={14} />
        </button>

        {/* Gemini Action */}
        <button
          type="button"
          onClick={(e) => handleAction('gemini', e)}
          disabled={loadingProvider !== null}
          title={isArabic ? 'شرح بالذكاء الاصطناعي عبر Gemini' : 'Explain with Gemini'}
          aria-label={isArabic ? 'شرح بالذكاء الاصطناعي عبر Gemini' : 'Explain with Gemini'}
          className="p-1.5 rounded-md border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-all disabled:opacity-40"
        >
          <GeminiIcon size={14} />
        </button>
      </div>
    );
  }

  // Full / Pill variant with text labels
  return (
    <div className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      {/* ChatGPT Full Button */}
      <button
        type="button"
        onClick={(e) => handleAction('chatgpt', e)}
        disabled={loadingProvider !== null}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] text-xs font-semibold transition-all disabled:opacity-40"
      >
        <ChatGPTIcon size={14} />
        <span>{isArabic ? 'شرح عبر ChatGPT' : 'Explain with ChatGPT'}</span>
      </button>

      {/* Gemini Full Button */}
      <button
        type="button"
        onClick={(e) => handleAction('gemini', e)}
        disabled={loadingProvider !== null}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] text-xs font-semibold transition-all disabled:opacity-40"
      >
        <GeminiIcon size={14} />
        <span>{isArabic ? 'شرح عبر Gemini' : 'Explain with Gemini'}</span>
      </button>
    </div>
  );
}

