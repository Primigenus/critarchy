import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';

export default class withUser extends Tracker.Component {
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
}
