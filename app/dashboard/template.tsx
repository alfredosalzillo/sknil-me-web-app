'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import DashboardAppBar from '@/components/DashboardAppBar';
import Notifications from '@/plugins/notifications/Notifications';

const DashboardTemplate: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Stack spacing={2}>
    <DashboardAppBar />
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
