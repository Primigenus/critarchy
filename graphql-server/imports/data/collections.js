import { Mongo } from 'meteor/mongo'; // eslint-disable-line

const Crits = new Mongo.Collection('crits');
const Art = new Mongo.Collection('art');
const Users = new Mongo.Collection('users');

export { Crits, Art, Users };
