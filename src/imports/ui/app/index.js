import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import withUser from '../../ui/hocs/withUser';
import { client, store } from '../../startup/client/apollo';
import Header from '../components/Header';
import { Home, Upload, SignIn, Sketchbook, Profile } from '../../ui/components/pages';

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
            <style jsx global>{`
              .title {
                background-color: black;
                color: #fff;
                line-height: 1rem;
                text-transform: uppercase;
                margin: 0 -2rem 1rem -2rem;
                padding: .5rem 1rem 0 2rem;
                display: inline-block;
              }
              .button {
                display: inline-block;
                background-color: var(--linkColor);
                color: var(--invertedTextColor) !important;
                padding: .5rem 1rem;
                text-decoration: none;
                border: none;
              }
              .button:disabled {
                color: var(--greyDark);
                background-color: var(--linkDisabledColor);
              }
            `}</style>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
