import Container from '@mui/material/Container';
import React from 'react';
import getServerClient from '@/plugins/api/get-server-client';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import currentUserInfo from '@/plugins/api/current-user-info';
import getUserMetadata from '@/plugins/api/getUserMetadata';
import UsernameUpdateForm from '@/components/UsernameUpdateForm';

export const dynamic = 'force-dynamic';

const DashboardHomePage = async () => {
  const client = getServerClient();
  const user = await currentUserInfo(client);
  const userMetadata = getUserMetadata(user);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="div" gutterBottom>
            Welcome
            {' '}
            <strong>{user.email}</strong>
            {' '}
            to your
            {' '}
            <strong>sknil-me</strong>
            {' '}
            dashboard.
          </Typography>
        </Grid>
        {
          !userMetadata.username && (
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" component="div" gutterBottom>
                You don&apos;t have an username yet. Choose one now.
              </Typography>
              <UsernameUpdateForm fullWidth />
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
};

export default DashboardHomePage;
