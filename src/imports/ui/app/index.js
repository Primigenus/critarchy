import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import withUser from '../../ui/hocs/withUser';
import { client, store } from '../../startup/client/apollo';
import Header from '../components/Header';
import { Home, Upload, SignIn, Sketchbook, Profile } from '../../startup/client/routes';

import '../style/global.css';

const PrivateRoute = ({ component: Component, ...rest }): Route => (
  <Route
    {...rest}
    render={props =>
      Meteor.userId()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />}
  />
);

const HeaderWithUser = withUser(Header);

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <Router>
          <div>
            <HeaderWithUser {...this.props} {...this.state} />
            <main>
              <Route exact path="/" component={withUser(Home)} />
              <Route path="/signin" component={withUser(SignIn)} />
              <PrivateRoute path="/upload" component={withUser(Upload)} />
              <PrivateRoute path="/sketchbook" component={withUser(Sketchbook)} />
              <PrivateRoute path="/profile" component={withUser(Profile)} />
            </main>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
