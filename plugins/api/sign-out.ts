'use client';

import client from '@/plugins/api/client';

const signOut = async () => {
  await client.auth.signOut();
};

export default signOut;
