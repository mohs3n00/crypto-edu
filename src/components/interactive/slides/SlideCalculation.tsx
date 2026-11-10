import React, { useState } from 'react';
import {
  Calculator,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  FileText,
  Sparkles,
  HelpCircle,
  Eye,
} from 'lucide-react';
import type { InteractiveSlide, CalculationStep } from '../../../types/interactive';
import MathDisplay from '../../ui/MathDisplay';

interface SlideCalculationProps {
  slide: InteractiveSlide;
  isArabic: boolean;
}

export const SlideCalculation: React.FC<SlideCalculationProps> = ({ slide, isArabic }) => {
  const example = slide.workedExample;
  const steps: CalculationStep[] = example?.steps || [];
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [showAllSteps, setShowAllSteps] = useState<boolean>(false);

  if (!example || steps.length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-8 text-[#505050] font-mono">
        No calculation steps available for this demonstration.
      </div>
    );
  }

  const activeStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setShowAllSteps(false);
  };

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 space-y-4">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#222222] text-[#FFFFFF] font-bold">
            {isArabic ? slide.badgeAr || 'حل المسائل' : slide.badge || 'Calculation Demo'}
          </span>
          <span className="text-xs text-[#505050] font-mono">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#505050] font-mono">
          <FileText size={13} />
          <span>{slide.sourceRef.file} • p./slide {slide.sourceRef.page || slide.sourceRef.slide}</span>
        </div>
      </div>

      {/* Problem Statement Card */}
      <div className="bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl p-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">
            <Calculator size={15} />
            <span>{isArabic ? 'المسألة الجامعية النموذجية' : 'University Exam Problem'}</span>
          </div>
          <span className="text-xs font-mono text-[#505050]">
            {slide.title}
          </span>
        </div>
        <p className="body-content-text font-medium text-[#222222]">
          {isArabic ? example.problemAr : example.problem}
        </p>
      </div>

      {/* Interactive Step Navigator Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#FFFFFF] border border-[#E2E2DF] rounded-lg p-2.5 shadow-2xs">
        {/* Step indicators */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {steps.map((st, idx) => {
            const isPassed = idx <= currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentStepIndex(idx)}
                className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#222222] text-[#FFFFFF] shadow-xs'
                    : isPassed
                    ? 'bg-[#E8E8E5] text-[#222222] hover:bg-[#D4D4D0]'
                    : 'bg-[#F7F7F5] text-[#737373] hover:bg-[#ECEDEB]'
                }`}
              >
                Step {st.stepNumber}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstStep}
            className="p-1.5 rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            title="Previous calculation step"
          >
            <ChevronLeft size={16} className={isArabic ? 'rotate-180' : ''} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isLastStep}
            className="p-1.5 rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            title="Next calculation step"
          >
            <ChevronRight size={16} className={isArabic ? 'rotate-180' : ''} />
          </button>

          <button
            type="button"
            onClick={() => setShowAllSteps((prev) => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] cursor-pointer transition-colors"
          >
            <Eye size={13} />
            <span>{showAllSteps ? (isArabic ? 'خطوة بخطوة' : 'Single Step') : (isArabic ? 'كشف الكل' : 'Reveal All')}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded border border-[#E2E2DF] bg-[#FFFFFF] text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] cursor-pointer transition-colors"
            title="Reset calculation"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Main Calculation Stage */}
      <div className="flex-1 bg-[#FFFFFF] border-2 border-[#E2E2DF] rounded-xl p-5 overflow-y-auto space-y-4 shadow-xs">
        {showAllSteps ? (
          // All steps view
          <div className="space-y-4">
            {steps.map((st, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#F7F7F5] border border-[#E2E2DF] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#222222]">
                  <span>Step {st.stepNumber}: {isArabic ? st.labelAr : st.label}</span>
                  {st.intermediateResult && (
                    <span className="px-2 py-0.5 rounded bg-[#E8E8E5] text-[#222222]">
                      {st.intermediateResult}
                    </span>
                  )}
                </div>
                {st.math && (
                  <div className="p-3 bg-[#FFFFFF] border border-[#E2E2DF] rounded flex justify-center overflow-x-auto">
                    <MathDisplay math={st.math} block />
                  </div>
                )}
                <p className="body-content-text text-[#505050]">
                  {isArabic ? st.explanationAr : st.explanation}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Single Active Step Focus
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-2">
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-[#505050] uppercase tracking-wider">
                  Step {activeStep.stepNumber} of {steps.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#222222]">
                  {isArabic ? activeStep.labelAr : activeStep.label}
                </h3>
              </div>
              {activeStep.intermediateResult && (
                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#505050] block">Result:</span>
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#E8E8E5] text-[#222222]">
                    {activeStep.intermediateResult}
                  </span>
                </div>
              )}
            </div>

            {/* Formula / Math Substitution */}
            {activeStep.math && (
              <div className="p-4 sm:p-6 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl flex items-center justify-center overflow-x-auto shadow-2xs">
                <MathDisplay math={activeStep.math} block />
              </div>
            )}

            {/* Step Explanation */}
            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E2E2DF] space-y-1">
              <span className="text-xs font-mono font-bold text-[#505050] uppercase">
                {isArabic ? 'التحويل الرياضي والخطوة' : 'Mathematical Operation'}:
              </span>
              <p className="body-content-text text-[#222222]">
                {isArabic ? activeStep.explanationAr : activeStep.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Final Answer & Verification Card (Shown on Last Step or Reveal All) */}
      {(isLastStep || showAllSteps) && (
        <div className="bg-[#EBF7EE] border border-[#68B684] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-[#217346] shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-[#217346] uppercase tracking-wider block">
                {isArabic ? 'النتيجة النهائية المؤكدة' : 'Final Verified Answer'}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#222222]">
                {isArabic ? example.resultAr || example.result : example.result}
              </span>
            </div>
          </div>

          {example.verification && (
            <div className="text-xs text-[#505050] font-mono border-t sm:border-t-0 sm:border-l border-[#68B684] pt-2 sm:pt-0 sm:pl-3">
              <span>Verification: {isArabic ? example.verificationAr || example.verification : example.verification}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SlideCalculation;

