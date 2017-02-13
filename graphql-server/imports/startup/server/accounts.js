import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function accountsServerStartup() {
  Accounts.onCreateUser((user) => {
    if(user.services) {
      if(user.services.facebook) {
        Object.assign(user, { name: user.services.facebook.name });
      } else if(user.services.google) {
        Object.assign(user, { name: user.services.google.name });
      }
    }
    return user;
  });
});
