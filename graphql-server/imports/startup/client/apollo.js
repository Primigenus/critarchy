import { meteorClientConfig } from 'meteor/apollo'; // eslint-disable-line
import ApolloClient from 'apollo-client';
// import { createStore, combineReducers, applyMiddleware } from 'redux';

export const client = new ApolloClient(meteorClientConfig());

// export const store = createStore(
//   combineReducers({
//     apollo: client.reducer(),
//   }),
//   applyMiddleware(client.middleware()),
// );
