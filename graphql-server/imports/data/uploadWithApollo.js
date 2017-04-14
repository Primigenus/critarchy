import ApolloClient from 'apollo-client';
import { createNetworkInterface } from 'apollo-upload-client';
import { Accounts } from 'meteor/accounts-base';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  headers: {
    'Authorization': Accounts._storedLoginToken(),
  }
});

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
