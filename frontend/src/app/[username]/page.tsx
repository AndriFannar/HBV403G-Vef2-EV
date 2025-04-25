/**
 * @file [username]/page.tsx
 * @description A dynamic user home page component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies next
 */

import { Metadata } from 'next';

interface Props {
  params: Promise<{ username: string }>;
}

/**
 * Generates metadata for the user home page.
 * @param param0 - The props for the metadata function.
 * @returns A metadata object with the specified title.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `Welcome, ${username}!`,
  };
}

/**
 * User home page component
 * @param param0 - The props for the user home page component.
 * @returns A user home page element with the specified props.
 */
export default async function UserHomePage({ params }: Props) {
  const { username } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome back, {username}!
        </h1>
      </div>
    </div>
  );
}
