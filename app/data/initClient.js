import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default (initialState) => {
  const isServer = typeof window === 'undefined';
  const client = new ApolloClient({
    ssrMode: isServer,
    initialState,
    dataIdFromObject: (result) => {
      if(result.id) {
        return result.id;
      }
      return null;
    },
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:4000/graphql',
      opts: {
        credentials: 'same-origin',
      },
    }),
  });
  if(isServer) {
    return client;
  } else { // eslint-disable-line no-else-return
    if(!window.__APOLLO_CLIENT__) { // eslint-disable-line no-underscore-dangle
      window.__APOLLO_CLIENT__ = client; // eslint-disable-line no-underscore-dangle
    }
    return window.__APOLLO_CLIENT__; // eslint-disable-line no-underscore-dangle
  }
};
