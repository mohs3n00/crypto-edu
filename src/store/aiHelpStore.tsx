import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { AIProvider, AIHelpContext, AIToastState, GeminiModalState } from '../types/ai';
import { buildAIPrompt } from '../utils/aiPrompts';
import { copyToClipboard } from '../utils/clipboard';

interface AIHelpContextValue {
  toast: AIToastState | null;
  geminiModal: GeminiModalState | null;
  dismissToast: () => void;
  closeGeminiModal: () => void;
  requestAIHelp: (provider: AIProvider, context: AIHelpContext) => Promise<boolean>;
}

const AIHelpContext = createContext<AIHelpContextValue | null>(null);

export function AIHelpProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [toast, setToast] = useState<AIToastState | null>(null);
  const [geminiModal, setGeminiModal] = useState<GeminiModalState | null>(null);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const closeGeminiModal = useCallback(() => {
    setGeminiModal(null);
  }, []);

  const requestAIHelp = useCallback(
    async (provider: AIProvider, context: AIHelpContext): Promise<boolean> => {
      // 1. Build academic prompt
      const prompt = buildAIPrompt(context);

      // 2. Copy to clipboard
      const copied = await copyToClipboard(prompt);

      if (provider === 'chatgpt') {
        // 3a. Open ChatGPT in new window/tab
        try {
          window.open('https://chatgpt.com/', '_blank', 'noopener,noreferrer');
        } catch {
          // If popup blocker intervened, the prompt is still in clipboard
        }

        // Show confirmation toast
        setToast({
          show: true,
          provider: 'chatgpt',
          messageEn: copied
            ? 'Your contextual question is ready. Paste it into ChatGPT to get a detailed explanation.'
            : 'Contextual prompt prepared. Please manually copy from ChatGPT helper.',
          messageAr: copied
            ? 'تم تجهيز سؤالك ونسخه. الصقه في ChatGPT للحصول على شرح إضافي.'
            : 'تم تجهيز السؤال، تعذر النسخ التلقائي.',
        });

        // Auto dismiss toast after 6 seconds
        setTimeout(() => {
          setToast((curr) => (curr?.provider === 'chatgpt' ? null : curr));
        }, 6000);

        return copied;
      }

      if (provider === 'gemini') {
        // 3b. Open the Gemini guidance modal
        setGeminiModal({
          isOpen: true,
          prompt,
          contextTitle: context.lessonTitle || context.sectionTitle || context.subjectName,
          contextTitleAr: context.sectionTitle || context.lessonTitle,
        });

        return copied;
      }

      return false;
    },
    []
  );

  return (
    <AIHelpContext.Provider
      value={{
        toast,
        geminiModal,
        dismissToast,
        closeGeminiModal,
        requestAIHelp,
      }}
    >
      {children}
    </AIHelpContext.Provider>
  );
}

export function useAIHelp(): AIHelpContextValue {
  const ctx = useContext(AIHelpContext);
  if (!ctx) {
    throw new Error('useAIHelp must be used within an AIHelpProvider');
  }
  return ctx;
}

