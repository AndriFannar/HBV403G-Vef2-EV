/**
 * @file Button.tsx
 * @description A reusable button component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react, clsx
 */

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

/**
 * ButtonProps interface.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

/**
 * Button component
 * @param param0 - The props for the button component.
 * @returns A button element with the specified props.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const base =
    "rounded-full transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12";
  const variants = {
    primary:
      "border border-transparent bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 sm:px-5 sm:w-auto",
    secondary:
      "border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent w-full sm:w-auto md:w-[158px] px-4 sm:px-5",
  };
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  return (
    <button
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
