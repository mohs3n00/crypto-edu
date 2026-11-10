import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#222222] text-[#FFFFFF] border-[#222222] hover:bg-[#000000] hover:border-[#000000] disabled:bg-[#EFEFEC] disabled:text-[#777777] disabled:border-[#E2E2DF] disabled:opacity-100',
  secondary:
    'bg-[#FFFFFF] text-[#222222] border-[#D4D4D0] hover:bg-[#ECEDEB] hover:text-[#222222] hover:border-[#D4D4D0] disabled:bg-[#EFEFEC] disabled:text-[#777777] disabled:border-[#E2E2DF] disabled:opacity-100',
  ghost:
    'bg-transparent text-[#505050] border-transparent hover:bg-[#ECEDEB] hover:text-[#222222] disabled:text-[#777777] disabled:opacity-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5',
  md: 'text-sm px-4 py-2 gap-2',
  lg: 'text-base px-5 py-2.5 gap-2.5',
};

const iconSizes: Record<ButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  iconLeft,
  iconRight,
  disabled,
  children,
  className = '',
  ...rest
}: ButtonProps): React.ReactElement {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-busy={loading}
      className={[
        'inline-flex items-center justify-center font-medium rounded border-[1.5px]',
        'transition-all duration-150 cursor-pointer select-none',
        'focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2',
        'disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...rest}
    >
      {loading ? (
        <Loader2
          size={iconSizes[size]}
          className="animate-spin shrink-0"
          aria-hidden="true"
        />
      ) : (
        iconLeft && (
          <span className="shrink-0" aria-hidden="true">
            {iconLeft}
          </span>
        )
      )}
      {children && <span>{children}</span>}
      {!loading && iconRight && (
        <span className="shrink-0" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
}
