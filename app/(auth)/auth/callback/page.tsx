'use client';

import type React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import client from '@/plugins/api/client';
import pushNotification from '@/plugins/notifications/pushNotification';

type AuthCallbackPageProps = {
  searchParams: {
    next: string
  }
};
const AuthCallbackPage: React.FC<AuthCallbackPageProps> = ({
  searchParams: {
    next
  }
}) => {
  const router = useRouter();
  useEffect(() => {
    client.auth.getUser().then(({ error }) => {
      if (error) {
        pushNotification({
          message: error.message,
          severity: 'error',
        });
        return;
      }
      router.replace(next);
    });
  }, [next, router]);
};

export default AuthCallbackPage;
