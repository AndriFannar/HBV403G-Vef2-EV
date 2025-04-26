/**
 * @file Input.tsx
 * @description A reusable input component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react, clsx
 */

import { InputHTMLAttributes } from 'react';
import { Link } from '@/components/ui/Link';
import clsx from 'clsx';

const inputIdGenSettings = {
  base: 36,
  slice: 2,
};

/**
 * InputProps interface.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  error?: string;
  className?: string;
  labelLink?: { href: string; label: string };
  explainer?: string;
}

/**
 * Input component
 * @param param0 - The props for the input component.
 * @returns An input element with the specified props.
 */
export function Input({
  id,
  label,
  error,
  className,
  labelLink,
  explainer,
  ...props
}: InputProps) {
  const inputId =
    id ??
    `input-${Math.random().toString(inputIdGenSettings.base).slice(inputIdGenSettings.slice)}`;
  const baseInputClasses = clsx(
    'w-full px-3 py-2 transition border focus:outline-none focus:ring-2',
    error
      ? 'border-red-600 focus:ring-red-600'
      : 'border-gray-300 focus:ring-primary',
    'rounded-md'
  );

  return (
    <div className="mb-4">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <label htmlFor={inputId} className="font-medium">
            {label}
          </label>
          {labelLink && (
            <Link href={labelLink.href} label={labelLink.label}></Link>
          )}
        </div>
      )}
      <div className="text-sm text-gray-500 mb-1">
        <input
          id={inputId}
          className={clsx(baseInputClasses, className)}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {explainer && <p className="mt-1 text-xs text-gray-500">{explainer}</p>}
      </div>
    </div>
  );
}
