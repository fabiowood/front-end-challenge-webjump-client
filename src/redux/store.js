import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// The store needs the middlewares, which are actually functions that receive inputs and produce inputs, so we can capture each action and direct it to the root reducer. We will put the middlewares as an array, in order to make it easier for us to add new middlewares to the logger:

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// The persistor is using the redux-persist library, so we can make the configurations necessary to create a 'cache' of the Store, which will allow the application to persist the store, and therefore, to persist the currentState, even if there is a refresh, or if the user closes the tab/browser.

export const persistor = persistStore(store);

export default { store, persistor };