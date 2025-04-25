/**
 * @file layout.tsx
 * @description The base layout page for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies next/font/google, @/components/PageLayout, next, globals.css
 */

// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from 'next/font/google';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Requirements Management System',
  description: 'Requirements Management System for Software Projects',
};

/**
 * The base layout page for the application.
 * @param param0 - The props for the layout component.
 * @returns A layout element with the specified props.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
