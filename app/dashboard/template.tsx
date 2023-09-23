'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import Notifications from '@/plugins/notifications/Notifications';

const DashboardTemplate: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack spacing={2}>
    <ResponsiveAppBar />
    <Container
      maxWidth={false}
      sx={{
        pt: 2,
        pb: 4,
      }}
    >
      {children}
    </Container>
    <Notifications />
  </Stack>
);

export default DashboardTemplate;
