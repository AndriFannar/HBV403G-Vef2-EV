/**
 * @file AuthContext.tsx
 * @description A context provider for managing user authentication state and API interactions.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 24, 2025
 * @dependencies react, @lib/api
 */
'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api, ApiError } from '@/lib/api';

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
  login: (
    // eslint-disable-next-line no-unused-vars
    username: string,
    // eslint-disable-next-line no-unused-vars
    password: string,
    // eslint-disable-next-line no-unused-vars
    remember: boolean
  ) => Promise<User>;
  signup: (
    // eslint-disable-next-line no-unused-vars
    username: string,
    // eslint-disable-next-line no-unused-vars
    password: string,
    // eslint-disable-next-line no-unused-vars
    remember: boolean
  ) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * AuthProvider component
 * @param param0 - The props for the AuthProvider component.
 * @returns An AuthProvider component that provides authentication context to its children.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Fetches a user from the API with a corresponding JWT token.
   * Sets and returns the user if token is valid and user is returned.
   * @returns User if it exists.
   */
  const fetchCurrentUser = useCallback(async (): Promise<User> => {
    const savedToken =
      localStorage.getItem('token') ?? sessionStorage.getItem('token');
    if (!savedToken) {
      throw new Error('No token');
    }

    setToken(savedToken);

    const userData = await api.get<User>('/users/me', {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    setUser(userData);
    return userData;
  }, []);

  /**
   * Tries to load user on mount.
   */
  useEffect(() => {
    fetchCurrentUser()
      .catch(() => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setToken(null);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchCurrentUser]);

  /**
   * Logs in the user by sending a request to the API.
   * Saves the token into local storage (remember) or session.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @param remember - Whether to remember the user.
   * @returns The authenticated user.
   */
  const login = useCallback(
    async (username: string, password: string, remember: boolean) => {
      const { token: newToken } = await api
        .post<{ token: string }>('/users/login', { username, password })
        .catch(err => {
          throw new ApiError(err);
        });

      if (remember) localStorage.setItem('token', newToken);
      else sessionStorage.setItem('token', newToken);

      setToken(newToken);

      const userData = await fetchCurrentUser();
      return userData;
    },
    [fetchCurrentUser]
  );

  /**
   * Signs up a new user by sending a request to the API.
   * Saves the token into local storage (remember) or session.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @param remember - Whether to remember the user.
   * @returns The authenticated user.
   */
  const signup = useCallback(
    async (username: string, password: string, remember: boolean) => {
      const { token: newToken } = await api
        .post<{ token: string }>('/users/signup', { username, password })
        .catch(err => {
          throw new ApiError(err);
        });

      if (remember) localStorage.setItem('token', newToken);
      else sessionStorage.setItem('token', newToken);

      setToken(newToken);

      const userData = await fetchCurrentUser();
      return userData;
    },
    [fetchCurrentUser]
  );

  /**
   * Logs out the user by removing the token from local storage and session storage.
   */
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        loading,
        login,
        signup,
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
