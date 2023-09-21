'use client';

import type { SignInWithPasswordCredentials } from '@supabase/gotrue-js';

import client from './client';

const signInWithPassword = async (credentials: SignInWithPasswordCredentials) => {
  const { error } = await client.auth.signInWithPassword(credentials);
  if (error) {
    throw error;
  }
};

export default signInWithPassword;
