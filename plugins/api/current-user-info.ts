import { SupabaseClient } from '@supabase/supabase-js';

const currentUserInfo = async (client: SupabaseClient) => {
  const {
    data: { user },
    error,
  } = await client.auth.getUser();
  if (error || !user) {
    throw new Error(error?.message || 'User not found.');
  }
  return user;
};

export default currentUserInfo;
