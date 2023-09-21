'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';

const DashboardTemplate: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack spacing={2}>
    <ResponsiveAppBar />
    <Container maxWidth={false}>
      {children}
    </Container>
  </Stack>
);

export default DashboardTemplate;
