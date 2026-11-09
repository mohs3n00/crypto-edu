import React from 'react';
import type { AIHelpContext } from '../../types/ai';
import AIProviderActions from './AIProviderActions';
import { useUI } from '../../store/uiStore';

export interface ContextualAIHelpProps {
  context: AIHelpContext;
  label?: string;
  className?: string;
  inline?: boolean;
}

export default function ContextualAIHelp({
  context,
  label,
  className = '',
  inline = false,
}: ContextualAIHelpProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  if (inline) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {label && (
          <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
            {label}
          </span>
        )}
        <AIProviderActions context={context} variant="compact" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 pt-2 border-t border-[#E5E5E5] text-xs ${className}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
        {label || (isArabic ? 'طلب شرح أكاديمي بالذكاء الاصطناعي:' : 'Request Academic AI Explanation:')}
      </span>
      <AIProviderActions context={context} variant="full" />
    </div>
  );
}

