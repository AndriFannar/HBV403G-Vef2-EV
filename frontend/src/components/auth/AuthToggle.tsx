/**
 * @file AuthToggle.tsx
 * @description A reusable auth toggle component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies @/components/ui/Link
 */

import { Link } from '@/components/ui/Link';

export interface AuthToggleProps {
  question: string;
  actionLabel: string;
  href: string;
}

/**
 * AuthToggle component
 * @param param0 - The properties of the AuthToggle component
 * @returns The AuthToggle component
 */
export function AuthToggle({ question, actionLabel, href }: AuthToggleProps) {
  return (
    <p className="text-center text-sm">
      {question} <Link href={href} label={actionLabel} />
    </p>
  );
}
