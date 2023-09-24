'use client';

import signOut from '@/plugins/api/sign-out';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignOutPage = () => {
  const router = useRouter();
  useEffect(() => {
    signOut().then(() => router.replace('/'));
  }, [router]);
  return null;
};

export default SignOutPage;
