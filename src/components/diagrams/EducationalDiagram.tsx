import React, { useState, useRef } from 'react';
import DiagramToolbar from './DiagramToolbar';
import { type LegendItem } from './DiagramLegend';

export type DiagramCategory =
  | 'architecture'
  | 'process-flowchart'
  | 'classification'
  | 'mathematical'
  | 'comparison'
  | 'transformation'
  | 'mindmap';

export interface EducationalDiagramProps {
  id?: string;
  title: string;
  titleAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  category?: DiagramCategory;
  sourceStandard?: string;
  widthMode?: 'standard' | 'wide' | 'full';
  legendItems?: LegendItem[];
  accessibleSummary?: string;
  children: React.ReactNode;
  className?: string;
}

export default function EducationalDiagram({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  category = 'architecture',
  sourceStandard,
  widthMode = 'wide',
  legendItems,
  accessibleSummary,
  children,
  className = '',
}: EducationalDiagramProps): React.ReactElement {
  const [zoom, setZoom] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.5, Math.round((prev + 0.2) * 10) / 10));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.6, Math.round((prev - 0.2) * 10) / 10));
  };

  const handleReset = () => {
    setZoom(1);
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Determine category badge label
  const categoryLabels: Record<DiagramCategory, { en: string; ar: string }> = {
    architecture: { en: 'Technical Architecture', ar: 'مخطط معماري تقني' },
    'process-flowchart': { en: 'Process Flowchart', ar: 'مخطط تدفق إجرائي' },
    classification: { en: 'Classification Taxonomy', ar: 'مخطط تصنيفي هيكلي' },
    mathematical: { en: 'Mathematical Visualization', ar: 'تمثيل رياضي بصري' },
    comparison: { en: 'Comparative Model', ar: 'نموذج مقارنة تقنية' },
    transformation: { en: 'Step Transformation', ar: 'مراحل التحويل التشفيري' },
    mindmap: { en: 'Academic Mind Map', ar: 'خريطة ذهنية أكاديمية' },
  };

  const currentCategory = categoryLabels[category] || categoryLabels.architecture;

  // Determine container width class
  const widthClass = isExpanded
    ? 'w-full'
    : widthMode === 'full'
    ? 'w-full'
    : widthMode === 'wide'
    ? 'w-full max-w-[1400px] mx-auto'
    : 'w-full max-w-4xl mx-auto';

  return (
    <div
      className={`my-8 border-2 border-[#171717] rounded-xl p-4 sm:p-7 bg-[#FFFFFF] space-y-4 shadow-xs transition-all ${widthClass} ${className}`}
      role="region"
      aria-label={`${title} - ${currentCategory.en}`}
    >
      {/* Category Badge & Top Indicator */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2.5 py-0.5 rounded font-bold inline-flex items-center gap-1.5">
          <span>{currentCategory.en}</span>
          <span>•</span>
          <span dir="rtl" className="font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
            {currentCategory.ar}
          </span>
        </span>
      </div>

      {/* Toolbar with Zoom, Title, Reset, Expand */}
      <DiagramToolbar
        title={title}
        titleAr={titleAr}
        sourceStandard={sourceStandard}
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        isExpanded={isExpanded}
        onToggleExpand={handleToggleExpand}
        legendItems={legendItems}
        promptContext={{
          sectionTitle: `${currentCategory.en}: ${title}${titleAr ? ` / ${titleAr}` : ''}`,
          content: `${title}. ${subtitle || ''} ${accessibleSummary || ''}`,
          promptType: 'diagram',
        }}
      />

      {/* Subtitles / Descriptions */}
      {(subtitle || subtitleAr) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-[#525252] leading-relaxed">
          {subtitle && <p>{subtitle}</p>}
          {subtitleAr && (
            <p
              dir="rtl"
              className="font-serif md:border-s md:border-[#E5E5E5] md:ps-4"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {subtitleAr}
            </p>
          )}
        </div>
      )}

      {/* Accessible Hidden Summary for Assistive Tech */}
      {accessibleSummary && (
        <div className="sr-only">
          <p>{accessibleSummary}</p>
        </div>
      )}

      {/* Scalable Diagram Viewport */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto overflow-y-hidden py-3 flex justify-center items-center border border-[#F2F2F2] rounded-lg bg-[#FAFAFA] min-h-[220px]"
      >
        <div
          className="w-full transition-transform duration-200 origin-center flex justify-center items-center"
          style={{ transform: `scale(${zoom})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

