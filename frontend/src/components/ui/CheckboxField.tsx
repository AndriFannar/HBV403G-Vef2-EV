/**
 * @file CheckboxField.tsx
 * @description A reusable checkbox field component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies react, clsx
 */

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface CheckboxFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * CheckboxField component
 * @param param0 - The properties of the CheckboxField component
 * @returns The CheckboxField component
 */
export function CheckboxField({
  label,
  className,
  ...props
}: CheckboxFieldProps) {
  return (
    <label className={clsx('inline-flex items-center space-x-2', className)}>
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-primary focus:ring-primary"
        {...props}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
