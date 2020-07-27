import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const composeEnhancers = composeWithDevTools(
    applyMiddleware(thunk)
  );
  const store = createStore(rootReducer, initialState, composeEnhancers);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default)
    });
  }

  return store;
}

export default configureStore;
