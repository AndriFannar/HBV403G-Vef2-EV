/**
 * @file Nav.tsx
 * @description A reusable nav component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies next/navigation, next/link, clsx
 */

import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from './Button';

const LINKS = [{ href: '/', label: 'Home' }];

/**
 * Nav component
 * @returns A navigation element with links to different pages.
 */
export default function Nav() {
  const { logout } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>
        <ul className="flex space-x-4">
          {LINKS.map(link => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'px-3 py-1 rounded hover:bg-gray-100',
                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li key="logout">
            <Button onClick={logout} variant="secondary">
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
