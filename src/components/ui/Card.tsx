import React, { type ReactNode, type HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'outline' | 'flat';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-[#FFFFFF] border border-[#E2E2DF] rounded-lg',
  outline: 'bg-transparent border border-[#D4D4D0] rounded-lg',
  flat: 'bg-[#ECEDEB] rounded-lg',
};

export default function Card({
  variant = 'default',
  children,
  className = '',
  ...rest
}: CardProps): React.ReactElement {
  return (
    <div
      className={[variantClasses[variant], className].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}

// ============================================================
// Convenience sub-components
// ============================================================

interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({
  children,
  className = '',
  ...rest
}: CardSectionProps): React.ReactElement {
  return (
    <div
      className={`px-5 py-4 border-b border-[#E2E2DF] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = '',
  ...rest
}: CardSectionProps): React.ReactElement {
  return (
    <div className={`px-5 py-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = '',
  ...rest
}: CardSectionProps): React.ReactElement {
  return (
    <div
      className={`px-5 py-3 border-t border-[#E2E2DF] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
