import { shopActionTypes } from './shop.action.types';
import { fetchCollectionNames } from './shop.utilities';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  collectionNames: [],
  collections: [],
}

const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.FETCH_COLLECTION_NAMES:
      return {
        ...currentState,
        collectionNames: fetchCollectionNames()
      }
    default:
      return currentState;
  }
}

export default shopReducer;