import 'server-only';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const makeClient = cache(() => createServerComponentClient<Database>({
  cookies,
}, {
  supabaseUrl,
  supabaseKey,
}));
const getServerClient = () => {
  if (typeof window === 'undefined') {
    return makeClient();
  }
  throw new Error('This should not be called on the client.');
};

export default getServerClient;
