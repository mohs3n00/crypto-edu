import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

export interface DiagramZoomControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  className?: string;
}

export default function DiagramZoomControls({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  isExpanded = false,
  onToggleExpand,
  className = '',
}: DiagramZoomControlsProps): React.ReactElement {
  return (
    <div
      className={`inline-flex items-center gap-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg p-1 shadow-2xs text-[#171717] ${className}`}
      role="toolbar"
      aria-label="Diagram zoom and view controls"
    >
      <button
        type="button"
        onClick={onZoomOut}
        disabled={zoom <= 0.6}
        className="p-1.5 rounded hover:bg-[#F2F2F2] disabled:opacity-40 transition-colors"
        title="Zoom Out (تصغير)"
        aria-label="Zoom Out"
      >
        <ZoomOut size={14} />
      </button>

      <span className="font-mono text-[11px] font-bold px-1.5 min-w-[42px] text-center select-none text-[#525252]">
        {Math.round(zoom * 100)}%
      </span>

      <button
        type="button"
        onClick={onZoomIn}
        disabled={zoom >= 2.5}
        className="p-1.5 rounded hover:bg-[#F2F2F2] disabled:opacity-40 transition-colors"
        title="Zoom In (تكبير)"
        aria-label="Zoom In"
      >
        <ZoomIn size={14} />
      </button>

      <div className="w-px h-4 bg-[#E5E5E5] mx-0.5" />

      <button
        type="button"
        onClick={onReset}
        disabled={zoom === 1}
        className="p-1.5 rounded hover:bg-[#F2F2F2] disabled:opacity-40 transition-colors"
        title="Reset Zoom & Pan (إعادة ضبط الحجم)"
        aria-label="Reset Zoom and Pan"
      >
        <RotateCcw size={14} />
      </button>

      {onToggleExpand && (
        <>
          <div className="w-px h-4 bg-[#E5E5E5] mx-0.5" />
          <button
            type="button"
            onClick={onToggleExpand}
            className="p-1.5 rounded hover:bg-[#F2F2F2] transition-colors"
            title={isExpanded ? 'Collapse View (تقليص الحجم)' : 'Expand Full Width (عرض كامل العرض)'}
            aria-label={isExpanded ? 'Collapse View' : 'Expand Full Width'}
          >
            {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </>
      )}
    </div>
  );
}

