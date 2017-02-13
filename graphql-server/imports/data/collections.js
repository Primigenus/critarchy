import { Mongo } from 'meteor/mongo'; // eslint-disable-line
import { Meteor } from 'meteor/meteor';

const Crits = new Mongo.Collection('crits');
const Art = new Mongo.Collection('art');
const Users = Meteor.users;
const Sketchbooks = new Mongo.Collection('sketchbooks');

export { Crits, Art, Users, Sketchbooks };
