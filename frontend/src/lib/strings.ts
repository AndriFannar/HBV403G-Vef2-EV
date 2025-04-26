/**
 * @file strings.tsx
 * @description File containing all the strings used in the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 25, 2025
 * @dependencies
 */

/**
 * @description Strings used in the application.
 */
export const STRINGS = {
  auth: {
    login: {
      title: 'Sign in to the RMS',
      username: 'Username',
      usernamePlaceholder: 'Enter your username',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      forgotPassword: 'Forgot password?',
      remember: 'Remember me',
      submit: 'Sign in',
      noAccount: "Don't have an account?",
      onSuccess: 'Signed in successfully!',
      onError: 'Failed to sign in. Please try again.',
      signup: 'Sign up',
    },
    signup: {
      title: 'Sign up to the RMS',
      username: 'Username',
      usernamePlaceholder: 'Enter a username',
      usernameExplainer:
        'Username must be unique and be at least 2 characters long',
      password: 'Password',
      passwordPlaceholder: 'Enter a password',
      passwordExplainer: 'Password must be at least 6 characters long',
      remember: 'Remember me',
      submit: 'Sign up',
      onSuccess: 'Signed up successfully!',
      onError: 'Failed to sign up. Please try again.',
      haveAccount: 'Already have an account?',
      login: 'Sign in',
    },
  },
};
