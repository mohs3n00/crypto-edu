import React from 'react';

interface ProgressBarProps {
  value: number;          // 0–100
  max?: number;           // defaults to 100
  label?: string;
  showPercent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const heightMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = true,
  size = 'md',
  className = '',
  animated = true,
}: ProgressBarProps): React.ReactElement {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const pctRounded = Math.round(pct);

  return (
    <div className={`w-full ${className}`}>
      {/* Optional label row */}
      {(label || showPercent) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-xs font-medium text-dark-gray">{label}</span>
          )}
          {showPercent && (
            <span
              className="text-xs font-mono text-dark-gray"
              aria-hidden="true"
            >
              {pctRounded}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        role="progressbar"
        aria-valuenow={pctRounded}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `Progress: ${pctRounded}%`}
        className={`w-full bg-neutral-gray rounded-full overflow-hidden ${heightMap[size]}`}
      >
        {/* Fill */}
        <div
          className={[
            'h-full bg-near-black rounded-full',
            animated ? 'transition-[width] duration-500 ease-out' : '',
          ].join(' ')}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export { ProgressBar };

