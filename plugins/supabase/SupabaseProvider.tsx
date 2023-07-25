'use client';

import React, { useMemo } from 'react';
import { createClientComponentClient as createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import SupabaseContext from './context';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type SupabaseProviderProps = React.PropsWithChildren<unknown>
const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const supabase = useMemo(() => createBrowserSupabaseClient({
    supabaseUrl,
    supabaseKey,
  }), []);
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export default SupabaseProvider;
