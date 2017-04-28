import { meteorClientConfig } from 'meteor/apollo';
import ApolloClient from 'apollo-client';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
export const client = new ApolloClient(meteorClientConfig());
// export const store = createStore(
//   combineReducers({
//     apollo: client.reducer(),
//   }),
//   applyMiddleware(client.middleware()),
// );
