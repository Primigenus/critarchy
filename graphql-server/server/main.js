import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { WebApp } from 'meteor/webapp'; // eslint-disable-line
import { Accounts } from 'meteor/accounts-base'; // eslint-disable-line
import { _ } from 'meteor/underscore'; // eslint-disable-line
import { createApolloServer } from 'meteor/apollo'; // eslint-disable-line

import graphqlExpressUpload from 'graphql-server-express-upload';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import multer from 'multer';

import '../imports/startup/server/publications';
import '../imports/startup/server/accounts';

import typeDefs from '../imports/api/typedefs';
import resolvers from '../imports/api/resolvers';
import mocks from '../imports/api/mocks';

import uploadToGCS from '../imports/data/connectors/uploadToGCS';
import CritsConnector from '../imports/data/connectors/CritsConnector';
import ArtConnector from '../imports/data/connectors/ArtConnector';
import UsersConnector from '../imports/data/connectors/UsersConnector';
import SketchbooksConnector from '../imports/data/connectors/SketchbooksConnector';

import '../imports/data/seed_data';

WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));

const upload = multer({
  // TODO: storing 5MB images in memory... probably won't scale
  storage: multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const connectors = {
  uploadToGCS,
  crits: CritsConnector,
  art: ArtConnector,
  users: UsersConnector,
  sketchbooks: SketchbooksConnector,
};

// addMockFunctionsToSchema({
//   mocks,
//   schema,
//   // preserveResolvers: true,
// });

createApolloServer({
  schema,
  context: {
    settings: Meteor.settings.private,
    connectors,
  },
  formatError(error) {
    // surface errors to the terminal
    if(Meteor.isDevelopment) {
      console.error(error.stack);
    }
    return error;
  },
  debug: Meteor.isDevelopment,
}, {
  configServer: (expressServer) => {
    expressServer.use(
      upload.array('files'),
      bodyParser.json(),
      // XXX: for some reason, req.baseUrl is empty, so since the upload middleware
      // compares baseUrl with endpointURL, configure it as empty as well
      graphqlExpressUpload({ endpointURL: '' }), // after multer and before graphqlExpress
    );
  },
});
