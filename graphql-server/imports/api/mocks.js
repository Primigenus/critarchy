import casual from 'casual';
import { MockList } from 'graphql-tools';
import fakeData from './fakeData';

// Gets a random index between 0 (inclusive) and the maxIndex (exclusive).
const getRandomIndex = (maxIndex) => Math.floor(Math.random() * maxIndex);

const Mocks = {
  HelloWorld: () => ({
    name: casual.first_name,
  }),
  User: () => fakeData.users[getRandomIndex(5)],
  Sketchbook: () => fakeData.sketchbooks[getRandomIndex(5)],
  Art: () => fakeData.art[getRandomIndex(5)],
  Crit: () => fakeData.crits[getRandomIndex(5)],
};

export default Mocks;
