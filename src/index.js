import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Component Dependencies

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
  
// PersistGate is the last step to implement the Local Storage persistence in our application. With the PersistGate, we can: (i) receive the Store; (ii) persist the Store, in order to "rehydrate" it with the Root Reducer current state. So, whenever there is a refresh, or the closing of a tab or the closing of the browser itself, the reducer state will initialize as empty, and then there will be the rehydration of the reducer, bringing what is in the cache, and also updating the reducer state to what it was in the current state.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

