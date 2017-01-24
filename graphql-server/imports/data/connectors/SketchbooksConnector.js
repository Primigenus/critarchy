import { Sketchbooks } from '../collections';

export default class SketchbooksConnector {
  static async getByUserId(userId) {
    return await Sketchbooks.findOne({ createdBy: userId });
  }
  static async addArtToSketchbook({ user_id, name }, artIds) {
    return Promise.all(artIds.map(async artId => await Sketchbooks.upsert({
      createdBy: user_id,
    }, {
      $set: {
        lastUpdatedOn: +new Date(),
        title: `${name}'s sketchbook`,
      },
      $addToSet: {
        art: artId,
      },
      $setOnInsert: {
        createdOn: +new Date(),
      },
    })));
  }
}
