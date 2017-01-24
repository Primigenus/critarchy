import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

const isServer = typeof window === 'undefined';

export default (client, initialState) => {
  if(isServer) {
    return createStore(
      combineReducers({
        apollo: client.reducer(),
      }),
      initialState,
      compose(
        applyMiddleware(client.middleware()),
      ),
    );
  } else { // eslint-disable-line no-else-return
    if(!window.store) {
      window.store = createStore(
        combineReducers({
          apollo: client.reducer(),
        }),
        initialState,
        compose(
          applyMiddleware(client.middleware()),
          // If you are using the devToolsExtension, you can add it here also
          window.devToolsExtension ? window.devToolsExtension() : f => f,
        ),
      );
    }
    return window.store;
  }
};
