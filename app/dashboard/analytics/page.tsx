import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const DashboardAnalyticsPage = () => (
  <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/dashboard">
        Dashboard
      </Link>
      <Typography color="text.primary">Analytics</Typography>
    </Breadcrumbs>
    <Alert severity="info" action={<Button component={NextLink} href="/dashboard">BACK</Button>}>
      This feature is not yet implemented.
      <br />
      Coming soon.
    </Alert>
  </Container>
);

export default DashboardAnalyticsPage;
