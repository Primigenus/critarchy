import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
// import { initStore } from 'apollo-client';
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';
import client from '../data/apollo';

export default ({ secure }) => Component => class ApolloHOC extends React.Component {
  static async getInitialProps({ req, query }) {
    const isServer = !!req;
    const currentUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(req);
    // const jwt = process.browser ? null : getJwtFromCookie(ctx.req)

    if(secure && !currentUser) {
      return null; // skip graphql queries completely if auth will fail
    }

    if(isServer) {
      // const store = initStore(client);

      const app = React.createElement(ApolloProvider, { client },
        React.createElement(Component, { url: { query } }));

      await getDataFromTree(app);

      const initialState = {
        [client.reduxRootKey]: {
          data: client.store.getState()[client.reduxRootKey].data,
        },
      };

      return { initialState, currentUser };
    }

    return { currentUser };
  }

  constructor(props) {
    super(props);
    this.client = client;
    // this.store = initStore(this.client, this.props.initialState);
  }

  render() {
    return (
      <ApolloProvider client={ this.client }>
        <Component { ...this.props } />
      </ApolloProvider>
    );
  }
};
