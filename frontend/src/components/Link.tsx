/**
 * @file Link.tsx
 * @description A reusable link component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies clsx
 */

import clsx from 'clsx';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  className?: string;
}

/**
 * Link component
 * @param param0 - The props for the link component.
 * @returns A link element with the specified props.
 */
export function Link({ href, label, className, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        'text-blue-600 no-underline hover:underline text-sm',
        className
      )}
      {...props}
    >
      {label}
    </a>
  );
}
