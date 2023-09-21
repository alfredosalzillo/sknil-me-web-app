import React from 'react';
import getServerClient from '@/plugins/api/get-server-client';
import isAuthenticated from '@/plugins/api/is-authenticated';
import { redirect } from 'next/navigation';

type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = async ({ children }) => {
  const client = getServerClient();
  if (!await isAuthenticated(client)) {
    redirect('/sign-in');
  }
  return (
    <>
      {children}
    </>
  );
};

export default DashboardLayout;
