import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  props: {
    hasUser: boolean,
    user: object,
  };
  logout = () => {
    Meteor.logout();
    this.props.history.push('/');
  };
  render(): HTMLDivElement {
    return (
      <div>
        <h1>Profile</h1>
        {this.renderSignedInFacebook()}
        {this.renderSignedInGoogle()}
        <p><button onClick={this.logout}>Sign out</button></p>
      </div>
    );
  }
  renderSignedInFacebook(): ?HTMLParagraphElement {
    const { hasUser, user } = this.props;
    if (hasUser && user.services && user.services.facebook) {
      return <p>You've connected your Facebook account.</p>;
    }
    return null;
  }
  renderSignedInGoogle(): ?HTMLParagraphElement {
    const { hasUser, user } = this.props;
    if (hasUser && user.services && user.services.google) {
      return <p>You've connected your Google account.</p>;
    }
    return null;
  }
}

export default withRouter(Profile);
