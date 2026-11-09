import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';
import HighlightedText from '../keywords/HighlightedText';

export interface CalculationStepItem {
  stepNumber: number;
  label: string;
  labelAr?: string;
  math?: string;
  explanation: string;
  explanationAr?: string;
  intermediateResult?: string;
}

export interface WorkedCalculationProps {
  title: string;
  titleAr?: string;
  problem: string;
  problemAr?: string;
  steps: CalculationStepItem[];
  finalResult: string;
  verification?: string;
  verificationAr?: string;
  className?: string;
}

export default function WorkedCalculation({
  title,
  titleAr,
  problem,
  problemAr,
  steps,
  finalResult,
  verification,
  verificationAr,
  className = '',
}: WorkedCalculationProps): React.ReactElement {
  return (
    <div className={`border border-[#171717] bg-[#FFFFFF] rounded-lg p-5 sm:p-6 space-y-5 shadow-xs ${className}`}>
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#737373] block font-bold">
            Step-by-Step Worked Calculation / الحل والبرهان الحسابي
          </span>
          <h4 className="text-lg sm:text-[19px] font-bold text-[#171717]">{title}</h4>
        </div>
        {titleAr && (
          <span dir="rtl" className="text-base font-bold text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
            {titleAr}
          </span>
        )}
      </div>

      {/* Problem Statement */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-2 text-sm sm:text-[17px]">
        <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#737373] block">
          Problem / المسألة:
        </span>
        <div className={`grid ${problemAr ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1'}`}>
          <p className="text-[#171717] font-semibold leading-relaxed">{problem}</p>
          {problemAr && (
            <p dir="rtl" className="text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              {problemAr}
            </p>
          )}
        </div>
      </div>

      {/* Numbered Steps */}
      <div className="space-y-4">
        {steps.map((st) => (
          <div key={st.stepNumber} className="border border-[#E5E5E5] rounded-md p-4 bg-[#FFFFFF] space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#F2F2F2]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold">
                  Step {st.stepNumber}
                </span>
                <span className="font-bold text-[#171717] text-sm">{st.label}</span>
              </div>
              {st.labelAr && (
                <span dir="rtl" className="font-serif text-xs text-[#525252]" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {st.labelAr}
                </span>
              )}
            </div>

            {/* Step Math */}
            {st.math && (
              <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded text-center font-serif text-base sm:text-[18px]" dir="ltr">
                <MathDisplay latex={st.math} display />
              </div>
            )}

            {/* Step Explanation (Side-by-side on wide screens) */}
            <div className={`grid ${st.explanationAr ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1'}`}>
              <div className="text-sm sm:text-[17px] text-[#171717] leading-relaxed">
                <HighlightedText text={st.explanation} />
              </div>
              {st.explanationAr && (
                <div dir="rtl" className="text-sm sm:text-[17px] text-[#525252] font-serif leading-[2]" style={{ fontFamily: 'var(--font-arabic)' }}>
                  <HighlightedText text={st.explanationAr} />
                </div>
              )}
            </div>

            {/* Intermediate Result Pill */}
            {st.intermediateResult && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#E5E5E5] bg-[#FAFAFA] rounded font-mono text-xs text-[#171717] font-bold">
                <ArrowRight size={13} />
                <span>Yields: {st.intermediateResult}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Result & Verification */}
      <div className="p-4 border-2 border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#737373]">
            Final Result / النتيجة النهائية:
          </span>
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF]">
            Verified
          </span>
        </div>
        <p className="text-base sm:text-[18px] font-bold text-[#171717] font-mono">
          {finalResult}
        </p>
        {(verification || verificationAr) && (
          <div className="pt-2 border-t border-[#E5E5E5] text-xs sm:text-[15px] text-[#525252] flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#171717] shrink-0 mt-0.5" />
            <div className="space-y-0.5 flex-1">
              <span className="font-mono text-[11px] uppercase font-bold text-[#737373] block">
                Independent Mathematical Verification / التحقق الرياضي المستقل:
              </span>
              <div className={`grid ${verificationAr ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1'}`}>
                {verification && <p>{verification}</p>}
                {verificationAr && (
                  <p dir="rtl" className="font-serif text-sm pt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {verificationAr}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

