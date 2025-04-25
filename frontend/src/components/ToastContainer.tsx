/**
 * @file ToastContainer.tsx
 * @description A reusable toast container component for the application. Uses React Hot Toast
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react-hot-toast
 */

import { Toaster } from 'react-hot-toast';

/**
 * ToastContainer component
 * @returns A toast container element with the specified props.
 */
export default function ToastContainer() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'px-4 py-2 rounded shadow-lg',
        style: { background: '#333', color: '#fff' },
        success: {
          iconTheme: { primary: '#22c55e', secondary: '#fff' },
        },
        error: {
          iconTheme: { primary: '#ef4444', secondary: '#fff' },
        },
      }}
    />
  );
}
