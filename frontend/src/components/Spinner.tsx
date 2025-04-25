/**
 * @file Spinner.tsx
 * @description A reusable spinner component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies
 */
'use client';

import clsx from 'clsx';

interface SpinnerProps {
  size?: string;
  className?: string;
}

/**
 * Spinner component
 * @param param0 - The props for the spinner component.
 * @returns A spinner element with the specified props.
 */
export function Spinner({ size = '4', className = '' }: SpinnerProps) {
  const szClasses = `h-${size} w-${size}`;

  return (
    <div
      role="status"
      className={clsx(
        szClasses,
        'border-2 border-gray-300 border-t-2 border-t-blue-500',
        'rounded-full animate-spin',
        className
      )}
    />
  );
}
