import { shopActionTypes } from './shop.action.types';
import { fetchCollectionNames } from './shop.utilities';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  collectionNames: [],
  collections: [],
  isOutsideShopPage: false
}

const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.FETCH_COLLECTION_NAMES:
      return {
        ...currentState,
        collectionNames: fetchCollectionNames()
      }
    case shopActionTypes.CHECK_SHOP_PAGE:
      return {
        ...currentState,
        isOutsideShopPage: action.payload
      }
    default:
      return currentState;
  }
}

export default shopReducer;