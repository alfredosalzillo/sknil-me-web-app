import React from 'react';
import './global.css';
import getServerClient from '@/plugins/api/get-server-client';
import isAuthenticated from '@/plugins/api/is-authenticated';
import { redirect } from 'next/navigation';

const AuthLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const client = getServerClient();
  if (await isAuthenticated(client)) {
    redirect('/dashboard');
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default AuthLayout;
