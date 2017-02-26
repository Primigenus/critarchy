import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';

import withUser from '../../ui/hocs/withUser';
import { client, store } from './apollo';

function requireAuth(nextState, replace) {
  if(!Meteor.userId()) {
    replace({
      pathname: '/signin',
      state: { redirect: nextState.location },
    });
  }
}

const errorLoading = err => console.error('Dynamic page loading failed', err);

export default () => (
  <ApolloProvider client={ client } store={ store }>
    <Router history={ browserHistory }>
      <Route
        path="/"
        getComponent={ (location, cb) => {
          import('../../ui/app')
            .then(module => cb(null, withUser(module.default)))
            .catch(errorLoading);
        } }
      >
        <IndexRoute
          getComponent={ (location, cb) => {
            import('../../ui/pages/home')
              .then(module => cb(null, withUser(module.default)))
              .catch(errorLoading);
          } }
        />
        <Route
          path="/upload"
          getComponent={ (location, cb) => {
            import('../../ui/pages/upload')
              .then(module => cb(null, withUser(module.default)))
              .catch(errorLoading);
          } }
          onEnter={ requireAuth }
        />
        <Route
          path="/sketchbook"
          getComponent={ (location, cb) => {
            import('../../ui/pages/sketchbook')
              .then(module => cb(null, withUser(module.default)))
              .catch(errorLoading);
          } }
          onEnter={ requireAuth }
        />
        <Route
          path="/signin"
          getComponent={ (location, cb) => {
            import('../../ui/pages/signin')
              .then(module => cb(null, withUser(module.default)))
              .catch(errorLoading);
          } }
        />
        <Route
          path="/profile"
          getComponent={ (location, cb) => {
            import('../../ui/pages/profile')
              .then(module => cb(null, withUser(module.default)))
              .catch(errorLoading);
          } }
          onEnter={ requireAuth }
        />
      </Route>
    </Router>
  </ApolloProvider>
);
