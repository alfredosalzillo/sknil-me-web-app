import Container from '@mui/material/Container';
import React from 'react';
import getServerClient from '@/plugins/api/get-server-client';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import currentUserInfo from '@/plugins/api/current-user-info';
import getUserMetadata from '@/plugins/api/getUserMetadata';
import UsernameUpdateForm from '@/components/UsernameUpdateForm';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import LinksEngine from '@/components/LinksEngine';
import { headers } from 'next/headers';
import LinksPreview from '@/components/LinksPreview';

const currentDomain = () => {
  const hostname = headers().get('host');
  if (!hostname) return '';
  if (hostname.startsWith('localhost')) return `https://${hostname}`;
  return `https://${hostname}`;
};

export const dynamic = 'force-dynamic';

const DashboardHomePage = async () => {
  const client = getServerClient();
  const user = await currentUserInfo(client);
  const userMetadata = getUserMetadata(user);
  const links = await client
    .from('link')
    .select('*')
    .eq('user_id', user.id)
    .limit(100)
    .order('ordinal', {
      ascending: true,
    });

  const linksUrl = `${currentDomain()}/l/${userMetadata.username}`;

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        {
          !userMetadata.username && (
            <Grid item xs={12} sm={6} md={4}>
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
              <Typography variant="body1" component="div" gutterBottom>
                You don&apos;t have an username yet. Choose one now.
              </Typography>
              <UsernameUpdateForm fullWidth />
            </Grid>
          )
        }
        {userMetadata.username && (
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12}>
              <Alert severity="info">
                Your sknil-me is live.
                {' '}
                <Link href={linksUrl} target="_blank" rel="noreferrer">
                  {linksUrl}
                </Link>
              </Alert>
            </Grid>
            <Grid item xs={12}>
              {links.error && (
                <Alert severity="error">
                  {links.error.message}
                </Alert>
              )}
              {links.data && <LinksEngine links={links.data} />}
            </Grid>
          </Grid>
        )}
        {userMetadata.username && (
          <Grid item xs={6}>
            <LinksPreview
              username={userMetadata.username}
              deps={[JSON.stringify(links.data)]}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default DashboardHomePage;
