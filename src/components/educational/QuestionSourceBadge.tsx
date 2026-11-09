import React from 'react';
import { BookOpen, Award, Sparkles, HelpCircle } from 'lucide-react';
import type { QuestionSource } from '../../types';

export interface QuestionSourceBadgeProps {
  source: QuestionSource | string;
  originalNumber?: string;
  sourceRef?: string;
  className?: string;
}

export default function QuestionSourceBadge({
  source,
  originalNumber,
  sourceRef,
  className = '',
}: QuestionSourceBadgeProps): React.ReactElement {
  let label = 'Original Test Bank';
  let sublabel = '';
  let icon = <BookOpen size={12} className="shrink-0" />;
  let isOriginal = true;

  if (source === 'original-mid22') {
    label = 'Original Midterm 2022';
    sublabel = originalNumber || 'Faculty Exam Model 1';
    icon = <Award size={12} className="shrink-0" />;
  } else if (source === 'original-mid20') {
    label = 'Original Midterm 2020';
    sublabel = originalNumber || 'Zagazig University IS410';
    icon = <Award size={12} className="shrink-0" />;
  } else if (source === 'original-tb01' || source === 'tb01') {
    label = 'Original Test Bank (Ch 1)';
    sublabel = originalNumber || 'Stallings 8th Ed.';
  } else if (source === 'original-tb03' || source === 'tb03') {
    label = 'Original Test Bank (Ch 3)';
    sublabel = originalNumber || 'Stallings 8th Ed.';
  } else if (source === 'original-tb04' || source === 'tb04') {
    label = 'Original Test Bank (Ch 4)';
    sublabel = originalNumber || 'Stallings 8th Ed.';
  } else if (source === 'exam-trap') {
    label = 'Exam Trap Question';
    sublabel = originalNumber || 'Misconception Check';
    icon = <Sparkles size={12} className="shrink-0" />;
    isOriginal = false;
  } else {
    label = 'Additional Practice';
    sublabel = 'Not an Original Source Question';
    icon = <HelpCircle size={12} className="shrink-0" />;
    isOriginal = false;
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-mono text-[11px] ${
        isOriginal
          ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
          : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252]'
      } ${className}`}
      title={sourceRef || label}
    >
      {icon}
      <span className="font-bold uppercase tracking-wider">{label}</span>
      {sublabel && (
        <>
          <span className="opacity-40">•</span>
          <span className={isOriginal ? 'text-[#E5E5E5]' : 'text-[#737373]'}>{sublabel}</span>
        </>
      )}
    </div>
  );
}

