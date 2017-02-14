import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class SignIn extends React.Component {
  static propTypes = {
    hasUser: React.PropTypes.bool,
  }
  onClickGoogle(evt) {
    evt.preventDefault();
    Meteor.loginWithGoogle(() => {
      window.location.href = '/';
    });
  }
  onClickFacebook(evt) {
    evt.preventDefault();
    Meteor.loginWithFacebook(() => {
      window.location.href = '/';
    });
  }
  signout(evt) {
    evt.preventDefault();
    Meteor.logout();
  }
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form>
          <div>
            { !this.props.hasUser
              ? <div>
                <button onClick={ e => this.onClickGoogle(e) }>Sign in with Google</button>
                <button onClick={ e => this.onClickFacebook(e) }>Sign in with Facebook</button>
              </div>
              : <div>
                <button onClick={ e => this.signout(e) }>Sign out</button>
              </div>
            }
          </div>
        </form>
      </div>
    );
  }
}
