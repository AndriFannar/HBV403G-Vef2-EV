/**
 * @file AuthContext.tsx
 * @description A context provider for managing user authentication state and API interactions.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react
 */
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

/**
 * ApiError class for communicating API errors.
 */
export class ApiError extends Error {
  message: string;
  errors?: Record<string, { _errors: string }>;
  constructor(data: { message: string; errors?: never }) {
    super(data.message);
    this.name = 'ApiError';
    this.message = data.message;
    this.errors = data.errors;
  }
}

/**
 * User interface.
 */
interface User {
  id: string;
  username: string;
  role: string;
}

/**
 * AuthContextValue interface.
 */
interface AuthContextValue {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  authenticateUser: (
    // eslint-disable-next-line no-unused-vars
    username: string,
    // eslint-disable-next-line no-unused-vars
    password: string,
    // eslint-disable-next-line no-unused-vars
    remember: boolean,
    // eslint-disable-next-line no-unused-vars
    login?: boolean
  ) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

/**
 * AuthProvider component
 * @param param0 - The props for the AuthProvider component.
 * @returns An AuthProvider component that provides authentication context to its children.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{
    id: string;
    username: string;
    role: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved =
      localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? null;
    if (saved) {
      setToken(saved);
      fetch(`${API_BASE}/users/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${saved}`,
        },
      })
        .then(async res => {
          if (!res.ok) throw new Error('Failed to fetch user data');
          const data = await res.json();
          setUser(data);
        })
        .catch(() => {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          setToken(null);
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  /**
   * Authenticates the user by sending a request to the API.
   * @param username - The username of the user
   * @param password - The password of the user
   * @param remember - Whether to remember the user
   * @param login - Whether to log in or sign up
   * @returns The authenticated user
   */
  async function authenticateUser(
    username: string,
    password: string,
    remember: boolean,
    login = true
  ): Promise<User> {
    const res = await fetch(
      login
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      throw new ApiError(data);
    }

    const newToken = data.token;
    if (remember) localStorage.setItem('token', newToken);
    else sessionStorage.setItem('token', newToken);

    setToken(newToken);

    const userRes = await fetch(`${API_BASE}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    });
    const userData = await userRes.json();
    if (!userRes.ok) {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      setToken(null);
      setUser(null);
      throw new Error('Failed to fetch user data');
    }

    setUser(userData);
    return userData;
  }

  /**
   * Logs out the user by removing the token from local storage and session storage.
   */
  function logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        loading,
        authenticateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to use the AuthContext.
 * @returns The authentication context value.
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
