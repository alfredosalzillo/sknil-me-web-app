import { setContext } from '@apollo/client/link/context';

import { SupabaseClient } from '@supabase/supabase-js';
import config from './config';

const createApolloAuthorizationLink = (
  client: SupabaseClient,
) => setContext(async (_, previous) => {
  const { data: { session } } = await client.auth.getSession();
  if (!session) {
    return {
      headers: {
        ...previous.headers,
        apikey: config.apikey,
      },
    };
  }
  return {
    headers: {
      ...previous.headers,
      apikey: config.apikey,
      Authorization: `${session.token_type} ${session.access_token}`,
    },
  };
});

export default createApolloAuthorizationLink;
