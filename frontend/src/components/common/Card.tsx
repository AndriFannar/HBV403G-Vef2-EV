/**
 * @file Card.tsx
 * @description A reusable card component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies react
 */

import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Card component
 * @param param0 - The props for the card component.
 * @returns A card element with the specified props.
 */
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={[
        'w-full max-w-sm sm:max-w-md lg:max-w-lg',
        'p-8 space-y-8 bg-gray-100 rounded-lg shadow-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
