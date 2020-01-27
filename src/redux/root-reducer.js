import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Storage is the actual Local Storage:
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';

// We need to config what we want to cache as local storage, and from which reducer to begin this cache. In our case, we want to begin from the root reducer, so the 'key' property has to be equal to 'root'.

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer
});

// Translating the code: we are creating a new rootReducer, with the configurations we want to make the reducers to persist their states. The reducers that must persist are the ones listed inside the 'whitelist' property.

export default persistReducer(persistConfig, rootReducer);