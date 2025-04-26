/**
 * @file signup/page.tsx
 * @description Sign up page for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies @/context/AuthContext, @/components/auth/SignupForm, @/components/ui/Spinner, react, next/navigation, @/lib/strings, react-hot-toast
 */
'use client';

import { ApiError, useAuth } from '@/context/AuthContext';
import { SignupForm } from '@/components/auth/SignupForm';
import { Spinner } from '@/components/ui/Spinner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { STRINGS } from '@/lib/strings';
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
    return <Spinner size={6}></Spinner>;
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
      toast.success(STRINGS.auth.signup.onSuccess);
      router.push(`/${user.username}`);
    } catch (err: unknown) {
      toast.error(STRINGS.auth.signup.onError);
      if (err instanceof ApiError) {
        if (err.errors) {
          if (err.errors.username)
            setUsernameError(err.errors.username._errors);
          if (err.errors.password)
            setPasswordError(err.errors.password._errors);
        } else {
          setError(err.message ?? STRINGS.auth.signup.onError);
        }
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SignupForm
      username={username}
      password={password}
      usernameError={usernameError ?? undefined}
      passwordError={passwordError ?? undefined}
      error={error ?? undefined}
      loading={submitting}
      onUsernameChange={e => setUsername(e.target.value)}
      onPasswordChange={e => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      remember={remember}
      onRememberChange={e => setRemember(e.target.checked)}
    ></SignupForm>
  );
}
