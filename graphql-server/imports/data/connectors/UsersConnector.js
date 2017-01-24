import jwtDecode from 'jwt-decode';
import { Users } from '../collections';

export default class UsersConnector {
  static getUserFromToken(token) {
    return jwtDecode(token);
  }
  static async getById(id) {
    return await Users.findOne(id);
  }
  static async storeUser(user) {
    return await Users.upsert({ user_id: user.user_id }, user);
  }
}
