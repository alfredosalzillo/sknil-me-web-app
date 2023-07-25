import { cookies } from 'next/headers';
import {
  createServerComponentClient as createServerComponentSupabaseClient,
} from '@supabase/auth-helpers-nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createServerComponentClient = () => {
  if (typeof window === 'undefined') {
    return createServerComponentSupabaseClient({
      cookies,
    }, {
      supabaseUrl,
      supabaseKey,
    });
  }
  throw new Error('createServerComponentClient cannot be user in client component');
};
