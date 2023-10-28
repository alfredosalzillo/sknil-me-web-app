import type { Metadata, Viewport } from 'next';
import React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry';
import './global.css';

export const metadata: Metadata = {
  title: 'Link in bio tool: Simply You, all in one link | Sknil-me',
  description: 'Link to everything you create, share and sell online. All from the one bio link.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  userScalable: true,
};

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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
      />
    </head>
    <body>
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
    </body>
  </html>
);
export default RootLayout;
