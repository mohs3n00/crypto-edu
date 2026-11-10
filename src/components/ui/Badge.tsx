import React, { type ReactNode, type HTMLAttributes } from 'react';

export type BadgeVariant =
  | 'default'
  | 'outline'
  | 'solid'
  | 'difficulty-1'
  | 'difficulty-2'
  | 'difficulty-3'
  | 'source-original'
  | 'source-generated'
  | 'source-exam';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-[#ECEDEB] text-[#505050] border border-[#E2E2DF]',
  outline:
    'bg-transparent text-[#505050] border border-[#E2E2DF]',
  solid:
    'bg-[#222222] text-[#FFFFFF] border border-[#222222]',
  'difficulty-1':
    'bg-[#FFFFFF] text-[#505050] border border-[#E2E2DF]',
  'difficulty-2':
    'bg-[#ECEDEB] text-[#222222] border border-[#D4D4D0]',
  'difficulty-3':
    'bg-[#222222] text-[#FFFFFF] border border-[#222222]',
  'source-original':
    'bg-[#FFFFFF] text-[#222222] border border-[#222222] font-semibold',
  'source-generated':
    'bg-[#ECEDEB] text-[#505050] border border-[#E2E2DF]',
  'source-exam':
    'bg-[#222222] text-[#FFFFFF] border border-[#222222]',
};

export default function Badge({
  variant = 'default',
  children,
  className = '',
  ...rest
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={[
        'inline-flex items-center px-2 py-0.5 rounded-sm text-[0.65rem] font-medium',
        'leading-none tracking-wider uppercase whitespace-nowrap',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}

// ============================================================
// Helpers for common badge types
// ============================================================

import type { DifficultyLevel, QuestionSource } from '../../types';

export function DifficultyBadge({
  level,
}: {
  level: DifficultyLevel;
}): React.ReactElement {
  const labels: Record<string, string> = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  };
  const variants: Record<string, BadgeVariant> = {
    1: 'difficulty-1',
    2: 'difficulty-2',
    3: 'difficulty-3',
    easy: 'difficulty-1',
    medium: 'difficulty-2',
    hard: 'difficulty-3',
  };
  return <Badge variant={variants[level] || 'default'}>{labels[level] || 'Level'}</Badge>;
}

const SOURCE_LABELS: Record<string, string> = {
  'original-tb01': 'Test Bank 1',
  'original-tb03': 'Test Bank 3',
  'original-tb04': 'Test Bank 4',
  tb01: 'Test Bank 1',
  tb03: 'Test Bank 3',
  tb04: 'Test Bank 4',
  'original-mid22': 'Midterm 2022',
  'original-mid20': 'Midterm 2020',
  generated: 'Practice',
};

export function SourceBadge({
  source,
}: {
  source: QuestionSource;
}): React.ReactElement {
  const isOriginal = source !== 'generated';
  return (
    <Badge variant={isOriginal ? 'source-original' : 'source-generated'}>
      {isOriginal ? '★ ' : ''}
      {SOURCE_LABELS[source]}
    </Badge>
  );
}
