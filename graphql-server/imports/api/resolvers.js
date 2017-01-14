import parseJSONLiteral from './parseJsonLiteral';

export default {
  Query: {
    test() {
      return 'testing testing';
    },
    newestCrits(root, args, context) {
      return context.connectors.crits.newest(args.limit);
    },
  },
  Mutation: {
    async uploadImage(root, { files }, { settings, user, connectors }) {
      // console.log('uploadImage resolver', user);
      if(!files) {
        throw new Error('No files to upload');
      }
      return await connectors.uploadToGCS(files, settings);
    },
  },
  Crit: {
    id(crit) {
      return crit._id;
    },
    art(crit, args, context) {
      return context.connectors.art.getById(crit.art_id);
    },
    createdBy(crit, args, context) {
      return context.connectors.users.getById(crit.createdBy);
    },
    thankedBy(crit, args, context) {
      return crit.thankedBy.map(id => context.connectors.users.getById(id));
    },
  },
  Art: {
    createdBy(art, args, context) {
      return context.connectors.users.getById(art.createdBy);
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
