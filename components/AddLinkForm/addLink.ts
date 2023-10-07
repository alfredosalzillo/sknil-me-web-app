'use server';

import urlMetadata from 'url-metadata';
import currentUserInfo from '@/plugins/api/current-user-info';
import getServerClient from '@/plugins/api/get-server-client';

const urlTitleMetadata = async (url: string) => {
  const defaultTitle = new URL(url).hostname;
  try {
    const { title } = await urlMetadata(url);
    if (typeof title !== 'string') {
      return defaultTitle;
    }
    return title;
  } catch (e) {
    console.error(`impossible to fetch metadata for ${url}`, e);
  }
  return defaultTitle;
};

const addLink = async (url: string) => {
  const client = getServerClient();
  const user = await currentUserInfo(client);
  const name = await urlTitleMetadata(url);
  const { error } = await client.from('link').insert({
    url,
    name,
    active: true,
    user_id: user.id,
  });
  if (error) {
    throw new Error(error.message);
  }
};

export default addLink;
