import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import path from 'path';

import withUser from '../../ui/hocs/withUser';
import { client, store } from '../../startup/client/apollo';
import Header from '../components/Header';
import Loading from '../components/Loading';

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

const Home = Loadable({
  loader: () => import('../../ui/pages/home'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/home'),
});
const Upload = Loadable({
  loader: () => import('../../ui/pages/upload'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/upload'),
});
const SignIn = Loadable({
  loader: () => import('../../ui/pages/signin'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/signin'),
});
const Sketchbook = Loadable({
  loader: () => import('../../ui/pages/sketchbook'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/sketchbook'),
});
const Profile = Loadable({
  loader: () => import('../../ui/pages/profile'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/profile'),
});

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
