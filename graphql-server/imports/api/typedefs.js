
export default [`
  scalar UploadedFile

  type HelloWorld {
    hello: String
    name: String
  }

  type Query {
    test: HelloWorld
    newestCrits: [Crit]
    leastCrittedArt: [Art]
    mostThankedCrits: [Crit]
  }

  type User {
    id: String
    createdOn: Float
    name: String
    bio: String
    avatar: String
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
    image: String
    sketchbooks: [Sketchbook]
    critiques: [Crit]
    likedBy: [User]
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
  }

  type Mutation {
    uploadImage(files: [UploadedFile!]!): [[Image]]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];
