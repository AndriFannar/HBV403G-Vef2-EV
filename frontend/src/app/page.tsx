/**
 * @file page.tsx
 * @description The home page for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies next/image, next/link
 */

import logo from '../../public/WhiteBanner.png';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Requirements Management System',
  description: 'Sign in to manage your software requirements',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-20 gap-16 font-sans">
      <Image
        src={logo}
        alt="RMS logo"
        width={700}
        height={200}
        priority
        className="dark:invert"
      />

      <Link href="/login" className="text-2xl underline text-center">
        Sign in to the RMS
      </Link>
    </div>
  );
}
