import {headers, cookies} from 'next/headers'
import {
  createServerComponentSupabaseClient,
  createBrowserSupabaseClient,
} from '@supabase/auth-helpers-nextjs'

const supabaseUrl = 'https://updmtfdnpwwxzoofnpvw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZG10ZmRucHd3eHpvb2ZucHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MTI1NjAsImV4cCI6MTk5MDQ4ODU2MH0.8IZhnUF-3ULMCMUQkS8_BP3qj0-JWL9BfXjAHM3USB0'
export const createUniversalClient = () => {
  if (typeof window === 'undefined') {
    return createServerComponentSupabaseClient({
      supabaseUrl,
      supabaseKey,
      headers,
      cookies,
    });
  }
  return createBrowserSupabaseClient({
    supabaseUrl,
    supabaseKey,
  })
}