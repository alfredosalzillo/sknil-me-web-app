import Container from '@mui/material/Container';
import getServerClient from '@/plugins/api/get-server-client';
import { notFound } from 'next/navigation';
import React from 'react';
import RefreshListener from '@/components/RefreshListener';
import type { Metadata } from 'next';
import LinksView from '@/components/LinksView';

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
        m: 'auto',
        pt: 4,
        pb: 2,
        minHeight: '100%',
        display: 'flex',
      }}
    >
      <LinksView username={username} links={links.data} />
      {preview && (<RefreshListener />)}
    </Container>
  );
};

export default LinksPage;
