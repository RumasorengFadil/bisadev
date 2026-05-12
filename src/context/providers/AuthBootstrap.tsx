// src/app/AuthProvider.tsx
'use client';

import { me } from '@/features/auth/api';
import { ErrorResponse } from '@/features/auth/types/error-response.type';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'nextjs-toploader/app';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/use-auth.store';

export function AuthBootstrap() {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();
  const { error, data, isError } = useQuery<any, AxiosError<ErrorResponse>>({
    queryKey: ['me'],
    queryFn: me,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }

    if (isError) {
      if (error.response?.data?.error?.code === 'ACCOUNT_BLOCKED') {
        router.push('/blocked');
      }
      setUser(null);
    }
  }, [data, isError, setUser]);

  return null;
}