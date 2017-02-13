import { createStore, applyMiddleware, combineReducers } from 'redux';

export default (client, initialState) => {
  if(!process.browser || !window.REDUX_STORE) {
    const reducer = combineReducers({
      apollo: client.reducer(),
    });
    const middleware = applyMiddleware(client.middleware());
    const store = createStore(
      reducer,
      initialState,
      middleware,
    );
    if(!process.browser) {
      return store;
    }
    window.REDUX_STORE = store;
  }
  return window.REDUX_STORE;
};
