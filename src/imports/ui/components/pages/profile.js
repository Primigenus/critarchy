// @flow

import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Page from '../../hocs/Page';
import DefaultHelmet from '../../components/DefaultHelmet';

import type { User } from '../../../flowtypes/types';

class Profile extends React.Component {
  props: {
    hasUser: boolean,
    user: User,
    history: {
      push: string => void,
    },
  };
  logout = () => {
    Meteor.logout();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <DefaultHelmet>
          <title>Profile</title>
        </DefaultHelmet>
        <h1 className="title">Profile</h1>
        {this.renderSignedInFacebook()}
        {this.renderSignedInGoogle()}
        <p><button onClick={this.logout} className="button">Sign out</button></p>
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

export default withRouter(Page(Profile));
