
export default resolvers = {
  Query: {
    test(root, args, context) {
      return "Hello World";
    }
  },
  HelloWorld: {
    hello: () => "Herpderp!"
  }
};
