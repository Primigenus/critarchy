import { Meteor } from 'meteor/meteor';
import React from 'react';
import Tracker from 'tracker-component';

export default WrappedComponent => class withUser extends Tracker.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      hasUser: false,
    };
    this.autorun(() => {
      this.setState({
        user: Meteor.user(),
        hasUser: !!Meteor.user(),
      });
    });
  }
  render() {
    return <WrappedComponent {...this.props} {...this.state} />;
  }
};
