import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathDisplayProps {
  latex?: string;
  math?: string;
  display?: boolean;
  block?: boolean;
  inline?: boolean;
  className?: string;
}

export default function MathDisplay({
  latex,
  math,
  display = false,
  block = false,
  inline = false,
  className = '',
}: MathDisplayProps): React.ReactElement {
  const actualLatex = latex ?? math ?? '';
  const isDisplay = (display || block) && !inline;
  const containerRef = useRef<HTMLSpanElement>(null);
  const errorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.textContent = '';
    if (errorRef.current) {
      errorRef.current.textContent = '';
    }

    try {
      katex.render(actualLatex, containerRef.current, {
        displayMode: isDisplay,
        throwOnError: true,
        strict: false,
        trust: false,
      });
    } catch (err) {
      // Graceful degradation: show raw LaTeX in monospace
      containerRef.current.textContent = '';
      if (errorRef.current) {
        errorRef.current.textContent = actualLatex;
      }
    }
  }, [actualLatex, isDisplay]);

  if (isDisplay) {
    return (
      <div
        className={`math-container overflow-x-auto py-2 ${className}`}
        dir="ltr"
        aria-label={`Math formula: ${actualLatex}`}
      >
        <span ref={containerRef} />
        <span
          ref={errorRef}
          className="font-mono text-sm text-dark-gray"
          aria-live="polite"
        />
      </div>
    );
  }

  return (
    <span
      className={`math-container inline-block align-middle ${className}`}
      dir="ltr"
      aria-label={`Math: ${latex}`}
    >
      <span ref={containerRef} />
      <span ref={errorRef} className="font-mono text-sm text-dark-gray" />
    </span>
  );
}

export { MathDisplay };

