/**
 * @file Form.tsx
 * @description A reusable form component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react, clsx
 */

import { FormHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * FormProps interface.
 */
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

/**
 * Form component
 * @param param0 - The props for the form component.
 * @returns A form element with the specified props.
 */
export function Form({
  children,
  className,
  onSubmit,
  loading = false,
  ...props
}: FormProps) {
  return (
    <form onSubmit={onSubmit} {...props}>
      <fieldset disabled={loading} className={clsx('space-y-4', className)}>
        {children}
      </fieldset>
    </form>
  );
}
