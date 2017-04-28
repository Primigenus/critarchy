import { Meteor } from 'meteor/meteor';
import * as Collections from './collections';

if (Meteor.isDevelopment) {
  Meteor.startup(() => {
    Collections.Crits.remove({});
    Collections.Art.remove({});

    const user = Collections.Users.findOne();
    if (!user) return;
    const userId = user._id;

    const artId = Collections.Art.insert({
      createdBy: userId,
      createdOn: +new Date(),
      title: 'Fires of Titan',
      image: {
        original: 'https://storage.googleapis.com/critarchy_images/1487201869762_firesoftitan_orig.png',
        thumb_large: 'https://storage.googleapis.com/critarchy_images/1487201869769_firesoftitan_600.jpg',
        thumb_small: 'https://storage.googleapis.com/critarchy_images/1487201869774_firesoftitan_320.jpg',
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
