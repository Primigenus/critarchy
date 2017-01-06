import ApolloClient from 'apollo-client';
import createNetworkInterface from 'apollo-upload-network-interface';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
});
