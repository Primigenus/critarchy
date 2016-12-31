
export default [`
  scalar UploadedFile

  type HelloWorld {
    hello: String
    name: String
  }

  type Query {
    test: HelloWorld
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
