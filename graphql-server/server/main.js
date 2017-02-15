import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { WebApp } from 'meteor/webapp'; // eslint-disable-line
import { Accounts } from 'meteor/accounts-base'; // eslint-disable-line
import { _ } from 'meteor/underscore'; // eslint-disable-line

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import graphqlExpressUpload from 'graphql-server-express-upload';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import multer from 'multer';
import express from 'express';
// import cors from 'cors';

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

const ENDPOINT_URL = '/graphql';
const graphQLServer = express();

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

const context = {
  settings: Meteor.settings.private,
  connectors,
};

// addMockFunctionsToSchema({
//   mocks,
//   schema,
//   // preserveResolvers: true,
// });

const addUser = async (authToken) => {
  if(!authToken) return {};
  const hashedToken = Accounts._hashLoginToken(authToken);
  const user = await Meteor.users.findOne(
    { 'services.resume.loginTokens.hashedToken': hashedToken },
  );
  if(user) {
    const loginToken = _.findWhere(user.services.resume.loginTokens, { hashedToken });
    const expiresAt = Accounts._tokenExpiration(loginToken.when);
    const isExpired = expiresAt < new Date();
    if(!isExpired) {
      console.log('logged in. set user on context');
      return { user, userId: user._id };
    }
  }
  return {};
};

graphQLServer.use(ENDPOINT_URL,
  upload.array('files'),
  bodyParser.json(),
  graphqlExpressUpload({ endpointURL: ENDPOINT_URL }), // after multer and before graphqlExpress
  graphqlExpress(async req => ({
    schema,
    context: {
      ...context,
      ...(await addUser(req.headers.authorization)),
    },
    formatError(error) {
      // surface errors to the terminal
      if(Meteor.isDevelopment) {
        console.error(error.stack);
      }
      return error;
    },
  })),
);

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: ENDPOINT_URL,
}));


// This binds the specified paths to the Express server running Apollo + GraphiQL
WebApp.connectHandlers.use(Meteor.bindEnvironment(graphQLServer));
WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));
