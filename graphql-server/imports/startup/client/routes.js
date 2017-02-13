import { Meteor } from 'meteor/meteor';
import { meteorClientConfig } from 'meteor/apollo';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

import App from '../../ui/app';
import Home from '../../ui/pages/index';
import Upload from '../../ui/pages/upload';
import Sketchbook from '../../ui/pages/sketchbook';

const client = new ApolloClient(meteorClientConfig());

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
  }),
  applyMiddleware(client.middleware()),
);

function requireAuth(nextState, replace) {
  if(!Meteor.userId()) {
    replace({
      pathname: '/signin',
      state: { redirect: nextState.location },
    });
  }
}

export default () => (
  <ApolloProvider client={ client } store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route
          path="/upload"
          component={ Upload }
          onEnter={ requireAuth }
        />
        <Route
          path="/sketchbook"
          component={ Sketchbook }
          onEnter={ requireAuth }
        />
      </Route>
    </Router>
  </ApolloProvider>
);
