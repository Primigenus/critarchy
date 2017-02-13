import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { WebApp } from 'meteor/webapp'; // eslint-disable-line

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

// const currentUser = (req, res, next) => {
//   if(req.headers.authorization) {
//     const userFromToken = connectors.users.getUserFromToken(req.headers.authorization);
//     connectors.users.storeUser(userFromToken);
//     req.user = userFromToken; // eslint-disable-line no-param-reassign
//   }
//   return next();
// };

// addMockFunctionsToSchema({
//   mocks,
//   schema,
//   // preserveResolvers: true,
// });

// const whitelist = [
//   'http://localhost:3000',
// ];
// const corsOptions = {
//   origin(origin, cb) {
//     const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     cb(null, originIsWhitelisted);
//   },
//   credentials: true,
// };
// graphQLServer.use('*', cors(corsOptions));

graphQLServer.use(ENDPOINT_URL,
  upload.array('files'),
  bodyParser.json(),
  // currentUser,
  graphqlExpressUpload({ endpointURL: ENDPOINT_URL }), // after multer and before graphqlExpress
  graphqlExpress(() => ({
    schema,
    context,
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
