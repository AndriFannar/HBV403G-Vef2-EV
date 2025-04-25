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
}

/**
 * Form component
 * @param param0 - The props for the form component.
 * @returns A form element with the specified props.
 */
export function Form({ children, className, onSubmit, ...props }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx('space-y-4', className)}
      {...props}
    >
      {children}
    </form>
  );
}
