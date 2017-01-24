import ApolloClient, { createNetworkInterface } from 'apollo-client';

const isServer = typeof window === 'undefined';

const getNetworkInterface = (req) => {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
    opts: {
      credentials: 'include',
      headers: req && isServer ? req.headers : null,
    },
  });
  if(!isServer) {
    networkInterface.use([{
      applyMiddleware(req, next) {
        if(!req.options.headers) {
          req.options.headers = {};
        }
        req.options.headers.Authorization = window.localStorage.token;
        next();
      },
    }]);
  }
  return networkInterface;
};

export default (initialState, req) => {
  const client = new ApolloClient({
    ssrMode: isServer,
    initialState,
    dataIdFromObject: (result) => {
      if(result.id) {
        return result.id;
      }
      return null;
    },
    networkInterface: getNetworkInterface(req),
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
