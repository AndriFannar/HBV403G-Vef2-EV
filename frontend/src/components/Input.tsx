/**
 * @file Input.tsx
 * @description A reusable input component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react, clsx
 */

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

/**
 * InputProps interface.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id?: string;
}

/**
 * Input component
 * @param param0 - The props for the input component.
 * @returns An input element with the specified props.
 */
export function Input({ id, label, error, className, ...props }: InputProps) {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2)}`;
  const baseInputClasses = clsx(
    "w-full px-3 py-2 transition border focus:outline-none focus:ring-2",
    error
      ? "border-red-600 focus:ring-red-600"
      : "border-gray-300 focus:ring-primary",
    "rounded-md"
  );

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(baseInputClasses, className)}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
