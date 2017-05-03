import { Meteor } from 'meteor/meteor';
import React from 'react';
import Tracker from 'tracker-component';

export default WrappedComponent =>
  class withUser extends Tracker.Component {
    state = {
      user: null,
      hasUser: false,
    };
    constructor(props) {
      super(props);
      this.autorun(() => {
        this.setState({
          user: Meteor.user(),
          hasUser: !!Meteor.user(),
        });
      });
    }
    render(): WrappedComponent {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
