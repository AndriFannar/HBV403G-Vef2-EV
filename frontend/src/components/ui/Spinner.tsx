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

const DEFAULT_SIZE = 4;
const THICKNESS_THRESHOLD = 6;

interface SpinnerProps {
  size?: number;
  className?: string;
}

const sizeMap: Record<number, string> = {
  2: 'h-2 w-2',
  4: 'h-4 w-4',
  6: 'h-6 w-6',
  8: 'h-8 w-8',
  10: 'h-10 w-10',
};

/**
 * Spinner component
 * @param param0 - The props for the spinner component.
 * @returns A spinner element with the specified props.
 */
export function Spinner({ size = DEFAULT_SIZE, className = '' }: SpinnerProps) {
  const szClasses = sizeMap[size] ?? sizeMap['4'];

  return (
    <div
      role="status"
      className={clsx(
        szClasses,
        size < THICKNESS_THRESHOLD ? 'border' : 'border-4',
        'border-2 border-gray-300 border-t-2 border-t-blue-500',
        'rounded-full animate-spin',
        className
      )}
    />
  );
}
