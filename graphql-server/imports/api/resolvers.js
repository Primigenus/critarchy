import { Kind } from 'graphql';

import uploadToGCS from './gcs-connector';

function parseJSONLiteral(ast) {
  switch(ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;
    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);
    case Kind.OBJECT: {
      const value = Object.create(null);
      ast.fields.forEach((field) => {
        value[field.name.value] = parseJSONLiteral(field.value);
      });

      return value;
    }
    case Kind.LIST:
      return ast.values.map(parseJSONLiteral);
    default:
      return null;
  }
}

export default {
  Query: {
    test() {
      return 'testing testing';
    },
  },
  Mutation: {
    async uploadImage(root, { id, files }, { settings }) {
      const results = await uploadToGCS(id, files, settings);
      return results;
    },
  },
  HelloWorld: {
    hello: () => 'Herpderp!',
  },
  UploadedFile: {
    __parseLiteral: parseJSONLiteral,
    __serialize: value => value,
    __parseValue: value => value,
  },
};
