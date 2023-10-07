'use server';

import getServerClient from '@/plugins/api/get-server-client';

type UpdateLinksOrderLink = {
  id: string
  ordinal: number
};
const updateLinksOrder = async (links: UpdateLinksOrderLink[]) => {
  await getServerClient()
    .rpc('update_links_order', {
      payload: links,
    });
};

export default updateLinksOrder;
