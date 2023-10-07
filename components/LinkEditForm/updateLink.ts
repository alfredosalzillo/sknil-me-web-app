'use server';

import getServerClient from '../../plugins/api/get-server-client';

type UpdateLinkValues = Partial<{
  url: string,
  name: string,
  active: boolean | null,
}>;
const updateLink = async (id: string, values: UpdateLinkValues) => {
  const client = getServerClient();
  const { error } = await client.from('link').update({
    id,
    ...values,
  }).eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
};

export default updateLink;
