import casual from 'casual';
import { users, sketchbooks, art, crits } from './fakeData';

// Gets a random index between 0 (inclusive) and the maxIndex (exclusive).
const getRandomIndex = maxIndex => Math.floor(Math.random() * maxIndex);

const Mocks = {
  HelloWorld: () => ({
    name: casual.first_name,
  }),
  User: () => users[getRandomIndex(5)],
  Sketchbook: () => sketchbooks[getRandomIndex(5)],
  Art: () => art[getRandomIndex(5)],
  Crit: () => crits[getRandomIndex(5)],
};

export default Mocks;
