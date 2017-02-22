import { Meteor } from 'meteor/meteor';
import { meteorClientConfig } from 'meteor/apollo';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

import withUser from '../../ui/hocs/withUser';

import App from '../../ui/app';
import Home from '../../ui/pages/home';
import Upload from '../../ui/pages/upload';
import Sketchbook from '../../ui/pages/sketchbook';
import SignIn from '../../ui/pages/signin';
import Profile from '../../ui/pages/profile';

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
      <Route path="/" component={ withUser(App) }>
        <IndexRoute component={ Home } />
        <Route
          path="/upload"
          component={ withUser(Upload) }
          onEnter={ requireAuth }
        />
        <Route
          path="/sketchbook"
          component={ withUser(Sketchbook) }
          onEnter={ requireAuth }
        />
        <Route
          path="/signin"
          component={ withUser(SignIn) }
        />
        <Route
          path="/profile"
          component={ withUser(Profile) }
          onEnter={ requireAuth }
        />
      </Route>
    </Router>
  </ApolloProvider>
);
