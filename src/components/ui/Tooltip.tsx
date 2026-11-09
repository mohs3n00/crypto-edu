import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';

// ============================================================
// Types
// ============================================================

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

// ============================================================
// Tooltip
// ============================================================

const placementClasses: Record<TooltipPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-1.5',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-1.5',
  left: 'right-full top-1/2 -translate-y-1/2 mr-1.5',
  right: 'left-full top-1/2 -translate-y-1/2 ml-1.5',
};

export default function Tooltip({
  content,
  placement = 'top',
  delay = 400,
  disabled = false,
  children,
  className = '',
}: TooltipProps): React.ReactElement {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [disabled, delay]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  // Hide on Escape
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') hide();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [visible, hide]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <span
      ref={wrapperRef}
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && !disabled && (
        <span
          role="tooltip"
          className={[
            'absolute z-50 px-2 py-1 rounded',
            'bg-near-black text-white text-xs font-medium whitespace-nowrap',
            'pointer-events-none select-none',
            'animate-in fade-in duration-150',
            placementClasses[placement],
          ].join(' ')}
        >
          {content}
          {/* Arrow */}
          <span
            aria-hidden="true"
            className={[
              'absolute w-0 h-0 border-4 border-transparent',
              placement === 'top'
                ? 'top-full left-1/2 -translate-x-1/2 border-t-near-black'
                : '',
              placement === 'bottom'
                ? 'bottom-full left-1/2 -translate-x-1/2 border-b-near-black'
                : '',
              placement === 'left'
                ? 'left-full top-1/2 -translate-y-1/2 border-l-near-black'
                : '',
              placement === 'right'
                ? 'right-full top-1/2 -translate-y-1/2 border-r-near-black'
                : '',
            ].join(' ')}
          />
        </span>
      )}
    </span>
  );
}
