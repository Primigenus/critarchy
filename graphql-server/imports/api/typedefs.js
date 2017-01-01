
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
    created_on: Float
    name: String
    bio: String
    avatar: String
    artCreated: [Art]
    sketchbooksCreated: [Sketchbook]
    critiquesAuthored: [Crit]
    artLiked: [Art]
    sketchbooksLiked: [Sketchbook]
    critiquesLiked: [Crit]
    followers: [User]
  }

  type Sketchbook {
    id: String
    created_on: Float
    created_by: User
    title: String
    description: String
    art: [Art]
    watchedBy: [User]
  }

  type Art {
    id: String
    created_on: Float
    created_by: User
    title: String
    description: String
    image: String
    sketchbooks: [Sketchbook]
    critiques: [Crit]
    collectedBy: [User]
  }

  type Crit {
    id: String
    created_on: Float
    created_by: User
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
    uploadImage(id: Int!, files: [UploadedFile!]!): [[Image]]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];
