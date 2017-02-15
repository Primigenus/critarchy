import { Meteor } from 'meteor/meteor';

Meteor.publish('userDetails', function publishUserDetails() {
  return Meteor.users.find(this.userId, { fields: {
    createdAt: 1,
    name: 1,
    picture: 1,

    'services.facebook.name': 1,
    'services.facebook.email': 1,
    'services.facebook.first_name': 1,

    'services.google.name': 1,
    'services.google.given_name': 1,
    'services.google.email': 1,
  } });
});
