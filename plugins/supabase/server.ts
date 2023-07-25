import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const createClient = () => {
  if (typeof window === 'undefined') {
    return createServerComponentClient({
      cookies,
    }, {
      supabaseUrl,
      supabaseKey,
    });
  }
  throw new Error('This should not be called on the client.');
};

export default createClient();
