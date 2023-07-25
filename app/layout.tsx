import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import SupabaseProvider from '@/plugins/supabase/SupabaseProvider';

import './globals.scss';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'sknil me',
  description: 'All your links in one place',
  authors: [
    {
      name: 'Alfredo Salzillo',
    },
  ],
  viewport: 'width=device-width, initial-scale=1.0',
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <SupabaseProvider>
        {children}
      </SupabaseProvider>
    </body>
  </html>
);

export default RootLayout;
