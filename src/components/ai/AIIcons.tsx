import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

/**
 * Minimalist monochrome line icon for ChatGPT.
 * Uses clean geometric vortex lines with stroke="currentColor".
 */
export function ChatGPTIcon({ size = 16, className = '' }: IconProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a4 4 0 0 1 4 4v1.5a4 4 0 0 1 2.5 1.5 4 4 0 0 1 .5 3.5 4 4 0 0 1-1.5 2.5 4 4 0 0 1 .5 4 4 4 0 0 1-3.5 2.5 4 4 0 0 1-2 0 4 4 0 0 1-3.5-2.5 4 4 0 0 1 .5-4 4 4 0 0 1-1.5-2.5 4 4 0 0 1 .5-3.5A4 4 0 0 1 10 7.5V6a4 4 0 0 1 4-4Z" />
      <path d="M12 8.5v7" />
      <path d="m9 10 6 4" />
      <path d="m15 10-6 4" />
    </svg>
  );
}

/**
 * Minimalist monochrome line icon for Gemini.
 * Uses the clean four-pointed sparkle star geometry with fill="currentColor" or stroke.
 */
export function GeminiIcon({ size = 16, className = '' }: IconProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* 4-pointed Sparkle Star */}
      <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

