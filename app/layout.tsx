import type { Metadata, Viewport } from 'next';
import React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry';
import { Roboto } from 'next/font/google';

import './global.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Link in bio tool: Simply You, all in one link | Sknil-me',
  description: 'Link to everything you create, share and sell online. All from the one bio link.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  userScalable: true,
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto-font-family',
  preload: true,
});

// @ts-ignore
const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>
    <body className={roboto.className}>
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
    </body>
  </html>
);
export default RootLayout;
