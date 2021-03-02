import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

// All the graphql requests will be made at yourdomaine.com/graphql
const httpLink = new HttpLink({
  uri: 'http://localhost:4000//graphql'
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
