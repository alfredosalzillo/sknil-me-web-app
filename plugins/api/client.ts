import 'client-only';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/plugins/api/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const client = createClientComponentClient<Database>({
  supabaseUrl,
  supabaseKey,
});

export default client;
