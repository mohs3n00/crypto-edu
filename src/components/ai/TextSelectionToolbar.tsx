import React, { useState, useEffect, useRef } from 'react';
import { useAIHelp } from '../../store/aiHelpStore';
import { useUI } from '../../store/uiStore';
import { ChatGPTIcon, GeminiIcon } from './AIIcons';
import type { AIProvider } from '../../types/ai';

export default function TextSelectionToolbar(): React.ReactElement | null {
  const { requestAIHelp } = useAIHelp();
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');

  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setVisible(false);
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 3) {
        setVisible(false);
        return;
      }

      // Check if selection is within educational article or main content
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const element = container.nodeType === Node.ELEMENT_NODE ? (container as Element) : container.parentElement;

      // Ensure selection is inside the reading content, not topnav or sidebar
      const isInsideContent = element?.closest('article, .lesson-body, .selectable-educational-content, main');
      const isInsideExcluded = element?.closest('header, aside, nav, button, input');

      if (!isInsideContent || isInsideExcluded) {
        setVisible(false);
        return;
      }

      // Find closest section heading or title
      const parentHeading = element?.closest('section, div')?.querySelector('h1, h2, h3, h4');
      const foundSectionTitle = parentHeading?.textContent || '';

      const rect = range.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        setVisible(false);
        return;
      }

      // Compute position above selection, clamped to window bounds
      const x = Math.max(10, Math.min(window.innerWidth - 180, rect.left + rect.width / 2 - 80));
      const y = rect.top - 46 > 60 ? rect.top - 46 : rect.bottom + 8;

      setSelectedText(text);
      setSectionTitle(foundSectionTitle);
      setPosition({ x, y });
      setVisible(true);
    };

    const handleMouseUp = () => {
      // Small timeout to allow selection to settle
      setTimeout(handleSelectionChange, 10);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        const selection = window.getSelection();
        if (selection && selection.isCollapsed) {
          setVisible(false);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAction = async (provider: AIProvider, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Determine if selected text looks mathematical (equations, symbols, numbers)
    const isMath = /[\+\-\*\/=><\^\\_\{\}\(\)\[\]\$\sum\equiv\pmod\gcd]/.test(selectedText);

    await requestAIHelp(provider, {
      promptType: isMath ? 'math' : 'concept',
      selectedText,
      sectionTitle: sectionTitle || 'Selected Explanation',
      language,
    });

    setVisible(false);
    window.getSelection()?.removeAllRanges();
  };

  if (!visible) return null;

  return (
    <div
      ref={toolbarRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="z-50 flex items-center gap-1.5 p-1 rounded-lg bg-[#000000] text-[#FFFFFF] border border-[#333333] shadow-2xl animate-in fade-in zoom-in-95 duration-150 select-none"
    >
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A3A3A3] px-1.5">
        AI:
      </span>

      {/* Explain with ChatGPT */}
      <button
        type="button"
        onMouseDown={(e) => handleAction('chatgpt', e)}
        title={isArabic ? 'شرح النص المحدد عبر ChatGPT' : 'Explain selected text with ChatGPT'}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171717] hover:bg-[#333333] text-[#FFFFFF] text-xs font-semibold transition-colors"
      >
        <ChatGPTIcon size={14} />
        <span>ChatGPT</span>
      </button>

      {/* Explain with Gemini */}
      <button
        type="button"
        onMouseDown={(e) => handleAction('gemini', e)}
        title={isArabic ? 'شرح النص المحدد عبر Gemini' : 'Explain selected text with Gemini'}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171717] hover:bg-[#333333] text-[#FFFFFF] text-xs font-semibold transition-colors"
      >
        <GeminiIcon size={14} />
        <span>Gemini</span>
      </button>
    </div>
  );
}

