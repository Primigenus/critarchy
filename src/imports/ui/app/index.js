import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import withUser from '../../ui/hocs/withUser';
import { client, store } from '../../startup/client/apollo';
import Header from '../components/Header';
import { Home, Upload, SignIn, Sketchbook, Profile } from '../../startup/client/routes';

import '../style/global.css';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/signin',
      state: { redirect: nextState.location },
    });
  }
}

const HeaderWithUser = withUser(Header);

class App extends React.Component {
  static propTypes = { children: PropTypes.element };
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <Router>
          <div>
            <HeaderWithUser {...this.props} {...this.state} />
            <main>
              <Route exact path="/" component={withUser(Home)} />
              <Route path="/upload" component={withUser(Upload)} />
              <Route path="/signin" component={withUser(SignIn)} />
              <Route path="/sketchbook" component={withUser(Sketchbook)} />
              <Route path="/profile" component={withUser(Profile)} />
            </main>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
