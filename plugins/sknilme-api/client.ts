import {
  ApolloClient, createHttpLink, from, InMemoryCache,
} from '@apollo/client';

import schema from '@/@types/sknilme';
import createApolloAuthorizationLink from '@/plugins/supabase/create-apollo-authorization-link';

const noCachePolicy = { fetchPolicy: 'no-cache' } as const;
const networkOnlyPolicy = { fetchPolicy: 'network-only' } as const;

const httpLink = createHttpLink({
  uri: 'https://updmtfdnpwwxzoofnpvw.supabase.co/graphql/v1',
});

const authLink = createApolloAuthorizationLink(typeof window === 'undefined');

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache({
    possibleTypes: schema.possibleTypes,
  }),
  link: from([authLink, httpLink]),
  defaultOptions: {
    query: noCachePolicy,
    mutate: noCachePolicy,
    // useQuery hook uses watchQuery policy
    // if you use a paginated query with fetchMore passing an updateQuery method
    // you will end having no previousQueryResult using a no-cache policy.
    // It needs some sort of cache, although you won't use it.
    // See the differences between cache policies: https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980
    watchQuery: networkOnlyPolicy,
  },
});

export default client;
