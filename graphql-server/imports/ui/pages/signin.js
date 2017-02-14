import { Meteor } from 'meteor/meteor';
import React from 'react';
import { locationShape, browserHistory } from 'react-router';

export default class SignIn extends React.Component {
  static propTypes = {
    hasUser: React.PropTypes.bool,
    location: locationShape,
  }
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location.state && props.location.state.redirect.pathname,
    };
  }
  onClickGoogle(evt) {
    evt.preventDefault();
    Meteor.loginWithGoogle(() => {
      browserHistory.push(this.state.redirect || '/');
    });
  }
  onClickFacebook(evt) {
    evt.preventDefault();
    Meteor.loginWithFacebook(() => {
      browserHistory.push(this.state.redirect || '/');
    });
  }
  render() {
    const { redirect } = this.state;
    return (
      <div>
        <h1>Sign in</h1>
        { redirect && <p>Please sign in to continue.</p> }
        <div>
          { !this.props.hasUser && <div>
            <button onClick={ e => this.onClickGoogle(e) }>Sign in with Google</button>
            <button onClick={ e => this.onClickFacebook(e) }>Sign in with Facebook</button>
          </div> }
        </div>
      </div>
    );
  }
}
