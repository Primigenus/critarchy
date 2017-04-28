import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export default class Profile extends React.Component {
  static propTypes = {
    hasUser: PropTypes.bool,
    user: PropTypes.object,
  };
  logout() {
    Meteor.logout();
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.renderSignedInFacebook()}
        {this.renderSignedInGoogle()}
        <p><button onClick={this.logout}>Sign out</button></p>
      </div>
    );
  }
  renderSignedInFacebook() {
    const { hasUser, user } = this.props;
    if (hasUser && user.services && user.services.facebook) {
      return <p>You've connected your Facebook account.</p>;
    }
    return null;
  }
  renderSignedInGoogle() {
    const { hasUser, user } = this.props;
    if (hasUser && user.services && user.services.google) {
      return <p>You've connected your Google account.</p>;
    }
    return null;
  }
}
