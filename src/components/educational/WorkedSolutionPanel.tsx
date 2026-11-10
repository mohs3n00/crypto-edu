import React from 'react';
import InteractiveSolvingBoard, { type BoardStep } from './InteractiveSolvingBoard';

export interface SolutionStep {
  stepNumber: number;
  title: string;
  titleAr?: string;
  math?: string;
  formula?: string;
  substitution?: string;
  whyThisStep?: string;
  whyThisStepAr?: string;
  explanation: string;
  explanationAr?: string;
  intermediateResult?: string;
}

interface WorkedSolutionPanelProps {
  title: string;
  titleAr?: string;
  sourceRef?: string;
  problem: string;
  problemAr?: string;
  initialParameters?: { label: string; value: string; labelAr?: string }[];
  steps: SolutionStep[];
  finalResult: string;
  verification?: string;
  verificationAr?: string;
  examTrapNote?: string;
  examTrapNoteAr?: string;
  className?: string;
}

export default function WorkedSolutionPanel({
  title,
  titleAr,
  sourceRef,
  problem,
  problemAr,
  initialParameters,
  steps,
  finalResult,
  verification,
  verificationAr,
  examTrapNote,
  examTrapNoteAr,
  className = '',
}: WorkedSolutionPanelProps): React.ReactElement {
  const boardSteps: BoardStep[] = steps.map((s) => ({
    stepNumber: s.stepNumber,
    title: s.title,
    titleAr: s.titleAr,
    whyThisStep: s.whyThisStep,
    whyThisStepAr: s.whyThisStepAr,
    formula: s.formula || s.math,
    substitution: s.substitution,
    math: s.math,
    explanation: s.explanation,
    explanationAr: s.explanationAr,
    intermediateResult: s.intermediateResult,
  }));

  return (
    <InteractiveSolvingBoard
      title={title}
      titleAr={titleAr}
      sourceRef={sourceRef}
      problem={problem}
      problemAr={problemAr}
      givenParameters={initialParameters}
      steps={boardSteps}
      finalResult={finalResult}
      verification={verification}
      verificationAr={verificationAr}
      examTrapNote={examTrapNote}
      examTrapNoteAr={examTrapNoteAr}
      className={className}
    />
  );
}
