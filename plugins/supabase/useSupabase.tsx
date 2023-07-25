import { useContext } from 'react';

import SupabaseContext from './context';

const useSupabase = () => {
  const client = useContext(SupabaseContext);
  if (!client) {
    throw new Error('useSupabase client cannot be null');
  }
  return client;
};

export default useSupabase;
