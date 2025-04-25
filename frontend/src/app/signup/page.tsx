/**
 * @file signup/page.tsx
 * @description Sign up page for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies @/context/AuthContext, @/components/Button, next/navigation, @/components/Input, @/components/Form, @/components/Link, react-hot-toast, react
 */
'use client';

import { ApiError, useAuth } from '@/context/AuthContext';
import { Spinner } from '@/components/Spinner';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/Input';
import { Form } from '@/components/Form';
import { Link } from '@/components/Link';
import toast from 'react-hot-toast';

/**
 * Signup page
 * @returns Signup page
 */
export default function SignupPage() {
  const { authenticateUser, isAuthenticated, loading, user } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated && user?.username) {
      router.replace(`/${user.username}`);
    }
  }, [loading, isAuthenticated, user, router]);

  if (loading || isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="6" />
      </div>
    );
  }

  /**
   * Handles the sign up form submission and authenticates the user.
   * @param e - The event object
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsernameError(null);
    setPasswordError(null);
    setError(null);
    setSubmitting(true);

    try {
      const user = await authenticateUser(username, password, remember, false);
      toast.success('Account created successfully!');
      router.push(`/${user.username}`);
    } catch (err: unknown) {
      toast.error('Account creation failed');
      if (err instanceof ApiError) {
        if (err.errors) {
          if (err.errors.username)
            setUsernameError(err.errors.username._errors);
          if (err.errors.password)
            setPasswordError(err.errors.password._errors);
        } else {
          setError(err.message ?? 'Sign up failed');
        }
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign up to the RMS</h2>
        <Form onSubmit={handleSubmit}>
          <fieldset
            disabled={submitting}
            className="w-full max-w-md p-8 space-y-6 rounded-lg bg-gray-100 shadow-md"
          >
            <div className="mb-4">
              <Input
                type="text"
                id="username"
                label="Username"
                placeholder="Enter a username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                error={usernameError ?? undefined}
                explainer="Username must be unique and be at least 2 characters long"
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                id="password"
                label="Password"
                placeholder="Enter a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={passwordError ?? undefined}
                explainer="Password must be at least 6 characters long"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="form-checkbox h-4 w-4"
                disabled={submitting}
              />
              <span className="text-sm">Remember me</span>
            </label>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              rel="noopener noreferrer"
              type="submit"
            >
              {submitting ? <Spinner className="mx-auto" /> : 'Sign up'}
            </Button>
          </fieldset>
        </Form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account? <Link href="/login" label="Sign in"></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
