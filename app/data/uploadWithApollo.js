import ApolloClient from 'apollo-client';
import createNetworkInterface from 'apollo-upload-network-interface';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
  opts: {
    credentials: 'include',
  },
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if(!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers.Authorization = window.localStorage.token;
    next();
  },
}]);

networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    if(response.status === 500) {
      // TODO: show error
    }
    if(response.status === 401) {
      // TODO: log out and redirect
    }
    next();
  },
}]);

export default new ApolloClient({
  networkInterface,
});
