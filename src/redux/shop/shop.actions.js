// import axios from 'axios';
import { shopActionTypes } from './shop.action.types';

export const fetchCollectionNames = () => {
  return ({
    type: shopActionTypes.FETCH_COLLECTION_NAMES,
    // payload: collectionNames
  })
};