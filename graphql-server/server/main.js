import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import graphqlExpressUpload from 'graphql-server-express-upload';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import multer from 'multer';
import express from 'express';
import os from 'os';
import cors from 'cors';

import typeDefs from '../imports/api/typedefs';
import resolvers from '../imports/api/resolvers';
import mocks from '../imports/api/mocks';

const ENDPOINT_URL = '/graphql';
const graphQLServer = express();

const upload = multer({
  storage: multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

const context = {
  settings: Meteor.settings.private,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchema({
  mocks,
  schema,
  preserveResolvers: true,
});

const whitelist = [
  'http://localhost:3000',
];
const corsOptions = {
  origin(origin, cb) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    cb(null, originIsWhitelisted);
  },
};
graphQLServer.use('*', cors(corsOptions));

graphQLServer.use(ENDPOINT_URL,
  upload.array('files'),
  bodyParser.json(),
  graphqlExpressUpload({ endpointURL: ENDPOINT_URL }), // after multer and before graphqlExpress
  graphqlExpress(() => ({
    schema,
    formatError(error) {
      console.error(error.stack);
      return error;
    },
    context,
  })),
);

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: ENDPOINT_URL,
}));


// This binds the specified paths to the Express server running Apollo + GraphiQL
WebApp.connectHandlers.use(Meteor.bindEnvironment(graphQLServer));
