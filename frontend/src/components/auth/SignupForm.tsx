/**
 * @file LoginForm.tsx
 * @description Login form component for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies @/components/ui/checkboxField, @/components/auth/AuthToggle, @/components/ui/ErrorText, @/components/auth/AuthCard, @/components/ui/Spinner, @/components/ui/Button, @/components/common/Form, @/components/ui/Input, react, @/lib/strings
 */

import { CheckboxField } from '@/components/ui/CheckboxField';
import { AuthToggle } from '@/components/auth/AuthToggle';
import { ErrorText } from '@/components/ui/ErrorText';
import { AuthCard } from '@/components/auth/AuthCard';
import { Spinner } from '@/components/ui/Spinner';
import { Button } from '@/components/ui/Button';
import { Form } from '@/components/common/Form';
import { Input } from '@/components/ui/Input';
import { ChangeEventHandler } from 'react';
import { STRINGS } from '@/lib/strings';

export interface SignupFormProps {
  username: string;
  password: string;
  onUsernameChange: ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  usernameError?: string;
  passwordError?: string;
  error?: string;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  remember?: boolean;
  onRememberChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * SignupForm component
 * @param param0 - The props for the signup form component.
 * @returns A signup form element with the specified props.
 */
export function SignupForm({
  username,
  password,
  usernameError,
  passwordError,
  error,
  loading,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  remember,
  onRememberChange,
}: SignupFormProps) {
  return (
    <AuthCard title={STRINGS.auth.signup.title}>
      <Form onSubmit={onSubmit} loading={loading}>
        <Input
          type="text"
          id="username"
          label={STRINGS.auth.signup.username}
          placeholder={STRINGS.auth.signup.usernamePlaceholder}
          explainer={STRINGS.auth.signup.usernameExplainer}
          value={username}
          onChange={onUsernameChange}
          error={usernameError ?? undefined}
          required
        />
        <Input
          type="password"
          id="password"
          label={STRINGS.auth.signup.password}
          placeholder={STRINGS.auth.signup.passwordPlaceholder}
          explainer={STRINGS.auth.signup.passwordExplainer}
          value={password}
          onChange={onPasswordChange}
          error={passwordError ?? undefined}
          required
        />

        <ErrorText error={error} />

        <CheckboxField
          label={STRINGS.auth.signup.remember}
          className="text-sm"
          onChange={onRememberChange}
          checked={remember}
          disabled={loading}
        />

        <Button
          variant="primary"
          size="md"
          className="w-full"
          rel="noopener noreferrer"
          type="submit"
        >
          {loading ? (
            <Spinner className="mx-auto" />
          ) : (
            STRINGS.auth.signup.submit
          )}
        </Button>
      </Form>
      <AuthToggle
        question={STRINGS.auth.signup.haveAccount}
        actionLabel={STRINGS.auth.signup.login}
        href={'/login'}
      />
    </AuthCard>
  );
}
