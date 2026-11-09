import React, { useState } from 'react';
import DiagramZoomControls from './DiagramZoomControls';
import DiagramLegend, { type LegendItem } from './DiagramLegend';
import AIProviderActions from '../ai/AIProviderActions';

export interface DiagramToolbarProps {
  title: string;
  titleAr?: string;
  sourceStandard?: string;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  legendItems?: LegendItem[];
  promptContext?: {
    sectionTitle: string;
    content: string;
    promptType: 'diagram' | 'math' | 'concept';
  };
}

export default function DiagramToolbar({
  title,
  titleAr,
  sourceStandard,
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  isExpanded,
  onToggleExpand,
  legendItems,
  promptContext,
}: DiagramToolbarProps): React.ReactElement {
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div className="w-full space-y-2 border-b border-[#E5E5E5] pb-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Title & Metadata */}
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {sourceStandard && (
              <span className="font-mono text-[10px] text-[#525252] border border-[#E5E5E5] bg-[#FAFAFA] px-2 py-0.5 rounded shrink-0">
                {sourceStandard}
              </span>
            )}
            <h4 className="text-[16px] sm:text-[18px] font-bold text-[#171717] tracking-tight">
              {title}
            </h4>
          </div>

          {titleAr && (
            <h5
              dir="rtl"
              className="text-xs sm:text-[14px] font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </h5>
          )}
        </div>

        {/* Right side controls: Zoom, Expand, AI triggers */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
          <DiagramZoomControls
            zoom={zoom}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            onReset={onReset}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
          />

          {promptContext && (
            <AIProviderActions
              context={promptContext}
              variant="compact"
            />
          )}
        </div>
      </div>

      {legendItems && (
        <DiagramLegend
          items={legendItems}
          isOpen={showLegend}
          onToggle={() => setShowLegend((prev) => !prev)}
        />
      )}
    </div>
  );
}
