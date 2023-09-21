import { SupabaseClient } from '@supabase/supabase-js';

const isAuthenticated = async (client: SupabaseClient) => {
  const { data: { session } } = await client.auth.getSession();
  return !!session;
};

export default isAuthenticated;
