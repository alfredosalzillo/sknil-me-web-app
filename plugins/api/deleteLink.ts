'use server';

import getServerClient from './get-server-client';

const deleteLink = async (id: string) => {
  const client = getServerClient();
  const { error } = await client.from('link').delete().eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
};

export default deleteLink;
