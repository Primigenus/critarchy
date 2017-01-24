import parseJSONLiteral from './parseJsonLiteral';

export default {
  Query: {
    newestCrits(root, args, context) {
      return context.connectors.crits.newest(args.limit);
    },
    sketchbook(root, args, context) {
      return context.connectors.art.getByPageNum(args.page);
    },
  },
  Mutation: {
    async uploadImage(root, { files }, { settings, user, connectors }) {
      if(!user) {
        throw new Error('Not authorized.');
      }
      if(!files) {
        throw new Error('No files to upload');
      }
      const uploadedFiles = await connectors.uploadToGCS(files, settings);
      const artIds = await connectors.art.addUploadedFiles(user.user_id, uploadedFiles);
      await connectors.sketchbooks.addArtToSketchbook(user, artIds);
      return uploadedFiles;
    },
  },
  Crit: {
    id(crit) {
      return crit._id; // eslint-disable-line no-underscore-dangle
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
    id(art) {
      return art._id; // eslint-disable-line no-underscore-dangle
    },
    createdBy(art, args, context) {
      return context.connectors.users.getById(art.createdBy);
    },
    numCrits(art) {
       // eslint-disable-next-line no-underscore-dangle
      return art.critiques ? art.critiques.length : 0;
    },
  },
  UploadedFile: {
    __parseLiteral: parseJSONLiteral,
    __serialize: value => value,
    __parseValue: value => value,
  },
};
