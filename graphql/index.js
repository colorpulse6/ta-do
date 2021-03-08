import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const token = localStorage.getItem('apollo-token');

const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
  fetch,
  headers: {
    'x-hasura-admin-secret':
      'eORDqKdPuzoqZ7Mu5skd1umOjJ9xO1N9e5q0ZjjGLQ2eznhrSWob4v0OUyUmAnxR',
    authorization: token ? `Bearer ${token}` : null
  }
});

// Cache implementation
const cache = new InMemoryCache();

// We give this to the graphql client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

// And we reference this client needed by vue-apollo
export default apolloClient;
