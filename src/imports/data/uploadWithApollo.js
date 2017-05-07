// @flow

import ApolloClient from 'apollo-client';
import { createNetworkInterface } from 'apollo-upload-client';
import { Accounts } from 'meteor/accounts-base';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: { headers: { 'meteor-login-token': Accounts._storedLoginToken() } },
});

// networkInterface.useAfter([
//   {
//     applyAfterware({ response }, next) {
//       if (response.status === 500) {
//       }
//       if (response.status === 401) {
//       }
//       next();
//     },
//   },
// ]);

export default new ApolloClient({ networkInterface });
