'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface UserHomeWrapperProps {
  params: {
    username: string;
  };
}

export default function UserHomeWrapper({ params }: UserHomeWrapperProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user?.username !== params.username) {
      router.replace('/login');
    }
  }, [loading, user, params.username, router]);

  if (loading || user?.username !== params.username) {
    return <p>Loading…</p>;
  }
  const { username } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {username}!</h1>
    </div>
  );
}
