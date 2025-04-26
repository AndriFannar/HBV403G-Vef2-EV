/**
 * @file Nav.tsx
 * @description A reusable nav component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies next/navigation, @/context/AuthContext, @/components/ui/Button, /public/Logo.png, next/link, next/image, clsx
 */

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import logo from '/public/Logo.png';
import NextLink from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

const LINKS = [{ href: '/', label: 'Home' }];

/**
 * Nav component
 * @returns A navigation element with links to different pages.
 */
export default function Nav() {
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/');
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NextLink href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={logo}
              alt="RMS Logo"
              width={150}
              height={40}
              priority
              className="dark:invert"
            />
          </NextLink>

          <ul className="flex items-center space-x-6">
            {LINKS.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className={clsx(
                      'px-3 py-1 rounded hover:bg-gray-100',
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    )}
                  >
                    {link.label}
                  </NextLink>
                </li>
              );
            })}
            <li>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
