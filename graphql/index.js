import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

// All the graphql requests will be made at yourdomaine.com/graphql
const httpLink = new HttpLink({
  uri: `https://casual-monkey-97.hasura.app/v1/graphql`,
  headers: {
    'x-hasura-admin-secret':
      'eORDqKdPuzoqZ7Mu5skd1umOjJ9xO1N9e5q0ZjjGLQ2eznhrSWob4v0OUyUmAnxR'
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
