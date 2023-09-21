'use client';

import type { SignUpWithPasswordCredentials } from '@supabase/gotrue-js';

import client from './client';

const signUpWithPassword = async (credentials: SignUpWithPasswordCredentials) => {
  const { error } = await client.auth.signUp(credentials);
  if (error) {
    throw error;
  }
};

export default signUpWithPassword;
