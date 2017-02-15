import ApolloClient from 'apollo-client';
import createNetworkInterface from 'apollo-upload-network-interface';
import { Accounts } from 'meteor/accounts-base';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'include',
  },
});

// distilled from https://github.com/apollographql/meteor-integration/blob/master/main-client.js#L47
networkInterface.use([{
  applyMiddleware(request, next) {
    if(!request.options.headers) {
      Object.assign(request.options, { headers: new Headers() });
    }
    Object.assign(request.options.headers, {
      Authorization: Accounts._storedLoginToken(),
    });
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
