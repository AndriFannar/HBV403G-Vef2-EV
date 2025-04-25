/**
 * @file PageLayout.tsx
 * @description A reusable layout component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies @/context/AuthContext, next/navigation, ToastContainer, Footer, Nav
 */
'use client';

import { AuthProvider } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import ToastContainer from './ToastContainer';
import Footer from './Footer';
import Nav from './Nav';

interface PageLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component
 * @param param0 - The props for the layout component.
 * @returns A layout element with the specified props.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  const path = usePathname();
  const hideNav = path === '/login' || path === '/signup';
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <header>{!hideNav && <Nav />}</header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />

        <ToastContainer />
      </div>
    </AuthProvider>
  );
}
