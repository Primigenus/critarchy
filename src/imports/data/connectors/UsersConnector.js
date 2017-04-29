import { Users } from '../collections';

export default class UsersConnector {
  static async getById(id) {
    return await Users.findOne(id);
  }
}
