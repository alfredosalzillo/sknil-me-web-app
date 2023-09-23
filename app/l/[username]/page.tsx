import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import getServerClient from '@/plugins/api/get-server-client';
import { notFound } from 'next/navigation';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from 'react';
import DynamicLinkIcon from '@/components/DynamicLinkIcon';
import RefreshListener from '@/components/RefreshListener';
import type { Metadata } from 'next';
import Link from '@mui/material/Link';

type LinkPageProps = {
  params: {
    username: string;
  },
  searchParams: {
    preview: string;
  }
};

export async function generateMetadata(
  { params }: LinkPageProps,
): Promise<Metadata> {
  // read route params
  const { username } = params;

  return {
    title: `${username} | sknil-me`,
  };
}

export const dynamic = 'force-dynamic';

const LinksPage = async (props: LinkPageProps) => {
  const { username } = props.params;
  const { preview } = props.searchParams;
  const client = getServerClient();
  const user = await client.from('user').select('id').eq('username', username).single();
  if (user.error) {
    notFound();
  }
  if (!user.data?.id) {
    notFound();
  }
  const links = await client.from('link')
    .select('*')
    .eq('user_id', user.data.id)
    .eq('active', true)
    .order('ordinal', {
      ascending: true,
    })
    .limit(25);
  if (links.error) {
    notFound();
  }
  if (!links.data) {
    notFound();
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        m: 'auto', pt: 4, pb: 2, minHeight: '100%'
      }}
    >
      <Grid container direction="column" sx={{ minHeight: '100%', overflow: 'auto' }} spacing={4}>
        <Grid item>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            @
            {username}
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container spacing={2}>
            {links.data.map((link) => (
              <Grid item xs={12} key={link.id}>
                <Button
                  href={`/redirect?link_id=${link.id}&url=${encodeURIComponent(link.url)}`}
                  rel="noopener noreferrer"
                  variant="outlined"
                  fullWidth
                  startIcon={<DynamicLinkIcon url={link.url} />}
                  component="a"
                >
                  {link.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            align="center"
          >
            <Link href="/">
              sknil.me
            </Link>
          </Typography>
        </Grid>
      </Grid>
      {preview && (<RefreshListener />)}
    </Container>
  );
};

export default LinksPage;
