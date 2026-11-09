import React, { type ReactNode, type HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'outline' | 'flat';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-neutral-gray rounded',
  outline: 'bg-transparent border border-near-black rounded',
  flat: 'bg-light-gray rounded',
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
      className={`px-5 py-4 border-b border-neutral-gray ${className}`}
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
      className={`px-5 py-3 border-t border-neutral-gray ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
