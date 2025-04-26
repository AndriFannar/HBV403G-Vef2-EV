/**
 * @file Footer.tsx
 * @description A reusable footer component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies
 */

/**
 * Footer component
 * @returns A footer element with the current year and copyright information.
 */
export default function Footer() {
  return (
    <footer className="bg-white text-black py-4 ">
      <div className="container mx-auto text-center">
        <p className="font-[family-name:var(--font-geist-mono)] text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Andri Fannar Kristjánsson. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
