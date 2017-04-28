export default [
  `
  input File {
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  type Query {
    newestCrits(limit: Int): [Crit]
    leastCrittedArt: [Art]
    mostThankedCrits: [Crit]
    sketchbook(page: Int): [Art]
  }

  type User {
    id: String
    createdOn: Float
    name: String
    first_name: String
    surname: String
    bio: String
    picture: String
    artCreated: [Art]
    sketchbooksCreated: [Sketchbook]
    critiquesCreated: [Crit]
    artLiked: [Art]
    sketchbooksLiked: [Sketchbook]
    critiquesLiked: [Crit]
    followers: [User]
    following: [User]
  }

  type Sketchbook {
    id: String
    createdOn: Float
    createdBy: User
    title: String
    description: String
    art: [Art]
    likedBy: [User]
  }

  type Art {
    id: String
    createdOn: Float
    createdBy: User
    title: String
    description: String
    image: Image
    sketchbooks: [Sketchbook]
    critiques: [Crit]
    likedBy: [User]
    numCrits: Int
  }

  type Crit {
    id: String
    createdOn: Float
    createdBy: User
    title: String
    content: String
    art: Art
    thankedBy: [User]
  }

  type Image {
    id: Int
    publicUrl: String
    filename: String
    original: String
    thumb_large: String
    thumb_small: String
  }

  type Mutation {
    uploadImage(files: [File!]!): [[Image]]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`,
];
