import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

class SignIn extends React.Component {
  props: {
    hasUser: boolean,
  };
  state = {
    redirect: false,
  };
  onClickGoogle(evt: Event) {
    evt.preventDefault();
    Meteor.loginWithGoogle(() => {
      this.setState({ redirect: true });
    });
  }
  onClickFacebook(evt: Event) {
    evt.preventDefault();
    Meteor.loginWithFacebook(() => {
      this.setState({ redirect: true });
    });
  }
  render(): Redirect | HTMLDivElement {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <h1>Sign in</h1>
        <div>
          {!this.props.hasUser &&
            <div>
              <button onClick={e => this.onClickGoogle(e)}>
                Sign in with Google
              </button>
              <button onClick={e => this.onClickFacebook(e)}>
                Sign in with Facebook
              </button>
            </div>}
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
