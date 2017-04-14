import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { WebApp } from 'meteor/webapp'; // eslint-disable-line
import { Accounts } from 'meteor/accounts-base'; // eslint-disable-line
import { _ } from 'meteor/underscore'; // eslint-disable-line
import { createApolloServer } from 'meteor/apollo'; // eslint-disable-line

import { apolloUploadExpress } from '../imports/data/apollo-upload-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

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
    if(Meteor.isDevelopment) {
      console.error(error.stack);
    }
    return error;
  },
  debug: Meteor.isDevelopment,
}, {
  configServer: (expressServer) => {
    expressServer.use(
      bodyParser.json(),
      apolloUploadExpress(),
    );
  },
});
