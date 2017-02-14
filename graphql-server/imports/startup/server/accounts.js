import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser((opts, user) => {
    if(user.services) {
      if(user.services.facebook) {
        Object.assign(user, {
          name: user.services.facebook.first_name,
          picture: `https://graph.facebook.com/${user.services.facebook.id}/picture`,
        });
      } else if(user.services.google) {
        Object.assign(user, {
          name: user.services.google.given_name,
          picture: user.services.google.picture,
        });
      }
    }
    return user;
  });
});
