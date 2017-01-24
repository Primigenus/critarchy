import { ApolloProvider, getDataFromTree } from 'react-apollo';
import React from 'react';
import 'isomorphic-fetch';
import initClient from './initClient';
import initStore from './initStore';
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

export default Component => (
  class withData extends React.Component {
    static propTypes = {
      url: React.PropTypes.shape({
        pathname: React.PropTypes.string.isRequired,
      }).isRequired,
      initialState: React.PropTypes.object,
    }
    static async getInitialProps({ req, query, pathname }) {
      const client = initClient(null, req);
      const store = initStore(client, client.initialState, isServer);
      const currentUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(req);

      if(isServer) {
        const app = (
          <ApolloProvider client={ client } store={ store }>
            <Component { ...this.props } url={ { query, pathname } } />
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const data = client.store ? client.store.getState()[client.reduxRootKey].data : null;
      const initialState = {
        [client.reduxRootKey]: {
          data,
        },
      };

      return {
        initialState,
        currentUser,
      };
    }

    constructor(props) {
      super(props);
      this.client = initClient(this.props.initialState);
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={ this.client } store={ this.store }>
          <Component { ...this.props } url={ this.props.url } />
        </ApolloProvider>
      );
    }
  }
);
