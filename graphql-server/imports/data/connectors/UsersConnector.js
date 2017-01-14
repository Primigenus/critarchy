import jwtDecode from 'jwt-decode';
import { Users } from '../collections';

export default class UsersConnector {
  static async getById(id) {
    return await Users.findOne(id);
  }
  // duplicated from app/utils/auth/auth.js
  static getUserFromCookie(cookie) {
    if(!cookie) {
      return null;
    }
    const jwtCookie = cookie.split(';').find(c => c.trim().startsWith('jwt='));
    if(!jwtCookie) {
      return null;
    }
    const jwt = jwtCookie.split('=')[1];
    return jwtDecode(jwt);
  }
  static async storeUser(user) {
    return await Users.upsert({ user_id: user.user_id }, user);
  }
}
