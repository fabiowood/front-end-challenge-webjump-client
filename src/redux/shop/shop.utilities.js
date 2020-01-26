import axios from 'axios';
// import { shopActionTypes } from './shop.action.types';

export const fetchCollectionNames = () => {
  let collectionNames = [];
  axios.get("/api/V1/categories/list")
    .then(responseFromAPI => {
        collectionNames.push(responseFromAPI.data.items)
    })
    .catch(err => {
      console.log(`Error 2: ${err.message}`)
    })
  let collectionFinalNames = collectionNames;
  return collectionFinalNames
};