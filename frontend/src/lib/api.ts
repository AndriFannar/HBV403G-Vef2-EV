/**
 * @file api.tsx
 * @description Handles API calls for the application.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date April 30, 2025
 * @dependencies
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

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
 * Calls the API at the given endpoint with provided options.
 * @param path - Path to the endpoint to call.
 * @param options - Options to include in the call.
 * @returns - API response.
 */
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(data ?? { message: res.statusText });
  }
  return data;
}

/**
 * Make GET, POST, PATCH or DELETE requests to the API.
 */
export const api = {
  /**
   * Performs a GET request to the specified endpoint.
   * @param path - Path to the endpoint.
   * @param options - Optional options to include with the request.
   * @returns - Returns T.
   */
  get: <T>(path: string, options?: RequestInit) =>
    request<T>(path, { method: 'GET', ...options }),
  /**
   * Performs a POST request to the specified endpoint.
   * @param path - Path to the endpoint.
   * @param body - Body to include with the request.
   * @param options - Optional options to include with the request.
   * @returns - Returns T.
   */
  post: <T, B = unknown>(path: string, body: B, options?: RequestInit) =>
    request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    }),
  /**
   * Performs a PATCH request to the specified endpoint.
   * @param path - Path to the endpoint.
   * @param body - Body to include with the request.
   * @param options - Optional options to include with the request.
   * @returns - Returns T.
   */
  patch: <T, B = unknown>(path: string, body: B, options?: RequestInit) =>
    request<T>(path, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...options,
    }),
  /**
   * Performs a DELETE request to the specified endpoint.
   * @param path - Path to the endpoint.
   * @param options - Optional options to include with the request.
   * @returns - Returns T.
   */
  delete: <T>(path: string, options?: RequestInit) =>
    request<T>(path, { method: 'DELETE', ...options }),
};
