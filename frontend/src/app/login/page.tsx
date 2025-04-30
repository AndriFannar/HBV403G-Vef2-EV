/**
 * @file login/page.tsx
 * @description Login page for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies @/context/AuthContext, @/components/auth/LoginForm, @/components/ui/Spinner, react, next/navigation, @/lib/strings, react-hot-toast
 */
'use client';

import { LoginForm } from '@/components/auth/LoginForm';
import { Spinner } from '@/components/ui/Spinner';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { STRINGS } from '@/lib/strings';
import { ApiError } from '@/lib/api';
import toast from 'react-hot-toast';

/**
 * Login page
 * @returns Login page
 */
export default function LoginPage() {
  const { login, isAuthenticated, loading, user } = useAuth();
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
   * Handles the log in form submission and authenticates the user.
   * @param e - The event object
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsernameError(null);
    setPasswordError(null);
    setError(null);
    setSubmitting(true);

    try {
      const user = await login(username, password, remember);
      toast.success(STRINGS.auth.login.onSuccess);
      router.push(`/${user.username}`);
    } catch (err: unknown) {
      toast.error(STRINGS.auth.login.onError);
      if (err instanceof ApiError) {
        if (err.errors) {
          if (err.errors.username)
            setUsernameError(err.errors.username._errors);
          if (err.errors.password)
            setPasswordError(err.errors.password._errors);
        } else {
          setError(err.message ?? STRINGS.auth.login.onError);
        }
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <LoginForm
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
    ></LoginForm>
  );
}
