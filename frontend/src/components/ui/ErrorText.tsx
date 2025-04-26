/**
 * @file ErrorText.tsx
 * @description A reusable error text component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies
 */

/**
 * ErrorText component
 * @param param0 - The properties of the ErrorText component
 * @returns The ErrorText component
 */
export function ErrorText({
  error,
}: {
  error: string | undefined;
  className?: string;
}) {
  return <p className="text-red-600">{error}</p>;
}
