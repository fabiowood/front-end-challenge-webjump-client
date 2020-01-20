import React, {Fragment} from 'react';
import './collection-page.styles.scss';

// Component Dependencies

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ selectedCollection, searchBoxResults, displaySearchResults }) => {

  let collectionName = '';
  let collectionItems = [];

  if (!displaySearchResults) {
   const findCollectionName = () => {
      for (let key in selectedCollection) {
        if (key === "name") {
          collectionName = selectedCollection[key];
          break;
        }
      } 
        return collectionName;
    };

  const findCollectionItems = () => {
    for (let key in selectedCollection) {
      if (key === "items") {
        collectionItems = selectedCollection[key];
        break;
      } 
    }
      return collectionItems;
  };

  findCollectionName();
  findCollectionItems();

 } 

  return (
    <section className='collection-page'>
      {
        displaySearchResults ?

        searchBoxResults !== null ?
        
          <Fragment>
            <h2 className='title'>Resultados da sua Busca:</h2>
            <div className='collection-items'>
                  {
                    searchBoxResults.map((item) => <CollectionItem key={item.id} item={item}/>)
                  }
            </div>
          </Fragment>
          :
          <Fragment>
            <h2 className='title'>Resultados da sua Busca:</h2>
            <div className='no-items-found-message'>
                  Não foram encontrados resultados para a sua busca. Por favor, tente novamente!
            </div>
          </Fragment>

        :
        
          <Fragment>
            <h2 className='title'>{ collectionName }</h2>
            <div className='collection-items'>
                {
                  collectionItems.map((item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
          </Fragment>
      }
     
    </section>
  )
}

export default CollectionPage;
