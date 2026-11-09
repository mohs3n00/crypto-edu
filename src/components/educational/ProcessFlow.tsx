import React from 'react';
import { ArrowDown, Check } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

export interface ProcessStep {
  step: number;
  title: string;
  titleAr?: string;
  mathFormula?: string;
  description: string;
  descriptionAr?: string;
  branchNote?: string;
}

interface ProcessFlowProps {
  title?: string;
  titleAr?: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessFlow({
  title,
  titleAr,
  description,
  steps,
  className = '',
}: ProcessFlowProps): React.ReactElement {
  return (
    <div className={`space-y-4 my-6 ${className}`}>
      {(title || titleAr) && (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5E5E5] pb-2 gap-2">
          <div>
            {title && <h3 className="text-xl font-bold text-[#171717] tracking-tight">{title}</h3>}
            {description && <p className="text-xs text-[#737373] mt-0.5">{description}</p>}
          </div>
          {titleAr && (
            <span
              dir="rtl"
              className="text-base font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      )}

      {/* Stepper Flow */}
      <div className="space-y-3">
        {steps.map((st, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <div key={st.step} className="flex flex-col items-center">
              <div className="w-full border border-[#171717] bg-[#FFFFFF] rounded-lg p-5 flex flex-col md:flex-row md:items-start gap-4 hover:border-[#000000] shadow-xs">
                {/* Step Indicator */}
                <div className="w-8 h-8 rounded-full border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  {st.step}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-[16px] font-bold text-[#171717]">{st.title}</h4>
                    {st.titleAr && (
                      <span
                        dir="rtl"
                        className="text-xs font-semibold text-[#737373] font-serif"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {st.titleAr}
                      </span>
                    )}
                  </div>

                  <p className="text-[15px] leading-relaxed text-[#171717]">{st.description}</p>
                  {st.descriptionAr && (
                    <p
                      dir="rtl"
                      className="text-[14px] leading-relaxed text-[#525252] font-serif pt-1"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {st.descriptionAr}
                    </p>
                  )}

                  {st.mathFormula && (
                    <div className="my-2 p-2.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded font-serif text-center">
                      <MathDisplay latex={st.mathFormula} display />
                    </div>
                  )}

                  {st.branchNote && (
                    <div className="p-2 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs font-mono text-[#525252]">
                      {st.branchNote}
                    </div>
                  )}
                </div>
              </div>

              {!isLast && (
                <div className="my-1.5 flex flex-col items-center text-[#171717]">
                  <ArrowDown size={18} strokeWidth={2} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

