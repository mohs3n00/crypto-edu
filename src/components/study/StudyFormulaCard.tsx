import React from 'react';
import { Sigma } from 'lucide-react';
import type { Formula } from '../../types';
import MathDisplay from '../ui/MathDisplay';

interface StudyFormulaCardProps {
  formula: Formula;
  isArabic: boolean;
}

export const StudyFormulaCard: React.FC<StudyFormulaCardProps> = ({ formula, isArabic }) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-5 space-y-3.5 shadow-2xs my-4">
      <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-2.5">
        <div className="flex items-center gap-2">
          <Sigma size={16} className="text-[#222222]" />
          <h4 className="text-sm sm:text-base font-bold text-[#222222]">
            {isArabic ? formula.nameAr || formula.labelAr || formula.name : formula.name || formula.label}
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
          Formula
        </span>
      </div>

      <div className="p-4 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl flex items-center justify-center overflow-x-auto text-base sm:text-lg">
        <MathDisplay math={formula.latex} block />
      </div>

      <p className="body-content-text text-[#505050]">
        {isArabic ? formula.explanationAr || formula.explanation : formula.explanation}
      </p>

      {/* Variables / Parameters table */}
      {formula.variables && typeof formula.variables === 'object' && (
        <div className="pt-2 border-t border-[#F0F0EE] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {Object.entries(formula.variables).map(([sym, def]: [string, any]) => (
            <div key={sym} className="flex items-center gap-2 py-0.5">
              <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-[#E8E8E5] text-[#222222]">
                {sym}
              </span>
              <span className="text-[#505050]">
                {typeof def === 'string' ? def : isArabic ? def.meaningAr || def.meaning : def.meaning}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyFormulaCard;

