import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import * as Collections from './collections';

if(Meteor.isDevelopment) {
  Meteor.startup(() => {
    Collections.Crits.remove({});
    Collections.Art.remove({});

    const userId = Collections.Users.findOne()._id;

    const artId = Collections.Art.insert({
      createdBy: userId,
      createdOn: +new Date(),
      title: 'Fires of Titan',
      image: {
        original: 'https://storage.googleapis.com/critarchy_images/1483178894522_firesoftitan_orig.png',
        thumb_large: 'https://storage.googleapis.com/critarchy_images/1483178894531_firesoftitan_600.jpg',
        thumb_small: 'https://storage.googleapis.com/critarchy_images/1483178894536_firesoftitan_320.jpg',
      },
    });

    Collections.Crits.insert({
      art_id: artId,
      createdBy: userId,
      thankedBy: [userId, userId],
      createdOn: +new Date(),
      title: 'Test crit title',
      content: 'Test crit content',
    });
  });
}
