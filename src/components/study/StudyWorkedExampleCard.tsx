import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import type { WorkedExample } from '../../types';
import MathDisplay from '../ui/MathDisplay';

interface StudyWorkedExampleCardProps {
  example: WorkedExample;
  isArabic: boolean;
}

export const StudyWorkedExampleCard: React.FC<StudyWorkedExampleCardProps> = ({
  example,
  isArabic,
}) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-5 space-y-4 shadow-2xs my-4">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3">
        <div className="flex items-center gap-2">
          <Calculator size={16} className="text-[#222222]" />
          <h4 className="text-sm sm:text-base font-bold text-[#222222]">
            {isArabic ? example.titleAr || example.title : example.title}
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
          Worked Problem
        </span>
      </div>

      {/* Problem statement */}
      <div className="body-content-text p-3.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-lg text-[#222222] font-medium">
        {isArabic ? example.problemAr || example.problem : example.problem}
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {(example.steps || []).map((step, idx) => (
          <div key={idx} className="p-3.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#222222]">
              <span>Step {step.stepNumber ?? idx + 1}: {isArabic ? step.labelAr || step.label : step.label}</span>
              {step.intermediateResult && (
                <span className="px-2 py-0.5 rounded bg-[#E8E8E5] text-[#222222]">
                  {step.intermediateResult}
                </span>
              )}
            </div>

            {(step.math || step.formula || step.calculation) && (
              <div className="p-2.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded flex justify-center overflow-x-auto text-xs sm:text-sm">
                <MathDisplay math={step.math || step.formula || step.calculation || ''} block />
              </div>
            )}

            <p className="body-content-text text-[#505050]">
              {isArabic ? step.explanationAr || step.explanation : step.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* Final Result */}
      {example.result && (
        <div className="p-3 rounded-lg bg-[#EBF7EE] border border-[#68B684] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#217346] shrink-0" />
            <span className="font-bold text-[#217346]">
              {isArabic ? 'النتيجة النهائية المؤكدة' : 'Final Result'}: {example.result}
            </span>
          </div>
          {example.verification && (
            <span className="font-mono text-[11px] text-[#505050] hidden sm:inline">
              Verified: {example.verification}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyWorkedExampleCard;

