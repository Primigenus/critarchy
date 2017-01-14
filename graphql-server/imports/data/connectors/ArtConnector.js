import { Art } from '../collections';

export default class ArtConnector {
  static async getById(id) {
    return await Art.findOne(id);
  }
}
