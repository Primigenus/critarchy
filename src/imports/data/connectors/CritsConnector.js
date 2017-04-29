import { Crits } from '../collections';

export default class CritsConnector {
  static async newest(limit) {
    return await Crits.find({}, { limit }).fetch();
  }
}
