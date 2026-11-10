import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import DiagramRenderer from '../../data/interactive/diagramRegistry';

interface StudyDiagramCardProps {
  diagramId: string;
  props?: Record<string, any>;
  title: string;
  titleAr: string;
  sourceRef?: string;
  isArabic: boolean;
}

export const StudyDiagramCard: React.FC<StudyDiagramCardProps> = ({
  diagramId,
  props,
  title,
  titleAr,
  sourceRef,
  isArabic,
}) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-4 sm:p-6 space-y-4 shadow-2xs my-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0F0EE] pb-3">
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-[#222222]" />
          <h4 className="text-sm sm:text-base font-bold text-[#222222]">
            {isArabic ? titleAr : title}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          {sourceRef && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
              {sourceRef}
            </span>
          )}
          <span className="text-[10px] font-mono text-[#505050] flex items-center gap-1">
            <Sparkles size={11} className="text-[#222222]" />
            <span>Interactive</span>
          </span>
        </div>
      </div>

      {/* Render Diagram */}
      <div className="w-full overflow-x-auto">
        <DiagramRenderer diagramId={diagramId} diagramProps={props} />
      </div>
    </div>
  );
};

export default StudyDiagramCard;

