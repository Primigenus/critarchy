
export default typeDefs = [`
  type HelloWorld {
    hello: String
  }

  type Query {
    test: HelloWorld
  }

  schema {
    query: Query
  }
`];
