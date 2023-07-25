import { createContext } from 'react';
import type { SupabaseClient } from '@supabase/supabase-js';

const SupabaseContext = createContext<SupabaseClient| null>(null);

export default SupabaseContext;
