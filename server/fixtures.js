import { Meteor } from 'meteor/meteor';
import { Pages } from '../imports/api/pages.js';
import { Crits } from '../imports/api/crits.js';



const pages = [
  {
    _id: "1",
    author: "dierat",
    createdOn: new Date(),
    updatedOn: new Date(),
    crits: ["2", "3", "4"],
    critsNum: 3,
    type: "art",
    image: "http://www.conceptart.org/forums/attachment.php?attachmentid=2166766&d=1448818773",
    text: "This was a painting I did for an album cover.",
    likes: [],
    likesNum: 0
  },
  {
    _id: "5",
    author: "dierat",
    createdOn: new Date(),
    updatedOn: new Date(),
    crits: [],
    critsNum: 0,
    type: "art",
    image: "http://www.conceptart.org/forums/attachment.php?attachmentid=2091005&stc=1&d=1422908295",
    text: "Tree study.",
    likes: [],
    likesNum: 0
  },
  {
    _id: "6",
    author: "dierat",
    createdOn: new Date(),
    updatedOn: new Date(),
    crits: [],
    critsNum: 2,
    type: "art",
    image: "http://www.conceptart.org/forums/attachment.php?attachmentid=2168443&d=1449460379",
    text: "Drawn from life at Dr. Sketchy's (the background is made up though).",
    likes: [],
    likesNum: 0
  },
  {
    _id: "7",
    author: "bouguereau",
    createdOn: new Date(),
    updatedOn: new Date(),
    crits: [],
    critsNum: 2,
    type: "art",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Bouguereau-Evening_Mood_1882.jpg",
    text: "Painted in 1882, now in the collection of the Havana's Museum of Fine Arts, in Cuba.",
    likes: [],
    likesNum: 0
  },
];

const crits = [
  {
    _id: "2",
    page: "1",
    author: "bouguereau",
    createdOn: new Date(),
    updatedOn: new Date(),
    likes: [],
    likesNum: 5,
    content: "Really nice rendering, but don't be afraid to push the saturation, unless that was intentional to give it a more vintage feeling."
  },
  {
    _id: "3",
    page: "1",
    author: "rahul",
    createdOn: new Date(),
    updatedOn: new Date(),
    likes: [],
    likesNum: 0,
    content: "The hands seem really thin and girly for a dude."
  },
  {
    _id: "4",
    page: "1",
    author: "rando",
    createdOn: new Date(),
    updatedOn: new Date(),
    likes: [],
    likesNum: 1,
    content: "Could be more painterly, but that's more of an opinion since it's style-related."
  },
];

Meteor.startup(()=>{
  Pages.remove({});
  Crits.remove({});

  pages.forEach((page)=>{
    Pages.insert(page);
  });
  crits.forEach((crit)=>{
    Crits.insert(crit);
  });
});
