import uploadToGCS from './gcs-connector';
import parseJSONLiteral from './parseJsonLiteral';

export default {
  Query: {
    test() {
      return 'testing testing';
    },
  },
  Mutation: {
    async uploadImage(root, { id, files }, { settings }) {
      if(!files) {
        throw new Error('No files to upload');
      }
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
