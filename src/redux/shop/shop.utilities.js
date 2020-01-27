import axios from 'axios';


export const fetchCollectionNames = () => {
  let collectionNames ={};
  axios.get("/api/V1/categories/list")
    .then(responseFromAPI => {
        collectionNames.items = JSON.parse(JSON.stringify(responseFromAPI.data.items))
    })
    .catch(err => {
      console.log(`Error 2: ${err.message}`)
    })
  console.log(collectionNames);
  return collectionNames
};
