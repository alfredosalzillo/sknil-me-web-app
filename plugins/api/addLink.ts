'use server';

import urlMetadata from 'url-metadata';
import currentUserInfo from '@/plugins/api/current-user-info';
import getServerClient from './get-server-client';

const addLink = async (url: string) => {
  const client = getServerClient();
  const user = await currentUserInfo(client);
  const metadata = await urlMetadata(url);
  const { error } = await client.from('link').insert({
    url,
    name: metadata.title as string ?? '',
    active: true,
    user_id: user.id,
  });
  if (error) {
    throw new Error(error.message);
  }
};

export default addLink;
