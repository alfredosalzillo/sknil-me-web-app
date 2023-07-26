import { setContext } from '@apollo/client/link/context';

const getAuth = async (ssr?: boolean) => {
  if (ssr) {
    const client = await import('./client');
    return client.default.auth;
  }
  const client = await import('./client');
  return client.default.auth;
};
const createApolloAuthorizationLink = (ssr?: boolean) => setContext(async (_, previous) => {
  const auth = await getAuth(ssr);
  const { data: { session } } = await auth.getSession();
  if (!session) return previous;
  return {
    headers: {
      ...previous.headers,
      Authorization: `Bearer ${session.access_token}`,
    },
  };
});

export default createApolloAuthorizationLink;
