'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';

export type ThemeRegistryProps = {
  children: React.ReactNode;
};
const ThemeRegistry: React.FC<ThemeRegistryProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
export default ThemeRegistry;
