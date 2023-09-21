import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';
import ThemeRegistry from '@/app/ThemeRegistry';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Link in bio tool: Everything you are, in one simple link | Sknil-me',
  description: 'Link to everything you create, share and sell online. All from the one bio link.',
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=yes',
};

// @ts-ignore
const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body
      className={roboto.className}
      style={{
        // @ts-ignore
        '--roboto-font-family': roboto.style.fontFamily,
      }}
    >
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
    </body>
  </html>
);
export default RootLayout;
