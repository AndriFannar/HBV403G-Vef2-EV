/**
 * @file AuthCard.tsx
 * @description A reusable auth card component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies react, ./Card
 */

import { Card, CardProps } from '@/components/common/Card';
import { ReactNode } from 'react';

interface AuthCardProps extends Omit<CardProps, 'children'> {
  title: string;
  children: ReactNode;
}

/**
 * AuthCard component
 * @param param0 - The properties of the AuthCard component
 * @returns The AuthCard component
 */
export function AuthCard({
  title,
  children,
  className,
  ...props
}: AuthCardProps) {
  return (
    <Card className={className} {...props}>
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      {children}
    </Card>
  );
}
