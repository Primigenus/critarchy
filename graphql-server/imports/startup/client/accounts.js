import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';

Meteor.startup(function accountsClientStartup() {
  Accounts.ui.config({
    profilePath: '/sketchbook',
    requestPermissions: {
      facebook: ['email', 'public_profile'],
      google: ['email', 'profile'],
    },
  });
  Meteor.subscribe('userDetails');
});
