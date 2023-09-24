import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import UsernameUpdateForm from '@/components/UsernameUpdateForm';
import getServerClient from '@/plugins/api/get-server-client';
import currentUserInfo from '@/plugins/api/current-user-info';
import getUserMetadata from '@/plugins/api/getUserMetadata';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

const DashboardSettingsPage = async () => {
  const client = getServerClient();
  const user = await currentUserInfo(client);
  const { username } = getUserMetadata(user);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/dashboard">
              Dashboard
            </Link>
            <Typography color="text.primary">Settings</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            Profile
          </Typography>
          <Stack spacing={2}>
            <Alert severity="warning">
              Changing your username will break all your links.
              <br />
              Be sure to update them after changing your username.
            </Alert>
            <UsernameUpdateForm
              username={username}
              fullWidth
            />
            <TextField
              name="email"
              label="Email"
              value={user.email}
              disabled
              fullWidth
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardSettingsPage;
