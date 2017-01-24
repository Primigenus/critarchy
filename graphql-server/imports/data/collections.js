import { Mongo } from 'meteor/mongo'; // eslint-disable-line

const Crits = new Mongo.Collection('crits');
const Art = new Mongo.Collection('art');
const Users = new Mongo.Collection('users');
const Sketchbooks = new Mongo.Collection('sketchbooks');

export { Crits, Art, Users, Sketchbooks };
