import React, {Fragment} from 'react';
import './collection-page.styles.scss';

// Component Dependencies

import CollectionItem from '../../components/collection-item/collection-item.component';
import SearchErrorMessage from '../../components/search-error-message/search-error-message.component';

const CollectionPage = ({ selectedCollection, searchBoxResults, displaySearchResults, multiFilterResults, displayMultiFilterResults, collectionItemsDisplay }) => {

  let collectionName = '';
  let collectionItems = [];
  let multiFilterItems = [];

  const findSelectedCollectionItems = () => {
    if (!displaySearchResults && !displayMultiFilterResults) {
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
  }

  const findMultiFilterCollectionItems = () => {
    if (displayMultiFilterResults) {
      for (let key in multiFilterResults) {
        if (key === "items") {
          multiFilterItems = multiFilterResults[key];
          break;
        } 
      }
        return multiFilterItems;
    } 
  }

  findSelectedCollectionItems();
  findMultiFilterCollectionItems();

  return (
   <section className='collection-page'>
     <div className='collection-display'>
      {
        displaySearchResults ?

          searchBoxResults !== null ?
        
          <Fragment>
            <h2 className='title'>Resultados da sua Busca:</h2>
            <div className={`collection-items ${collectionItemsDisplay === 'list' ? 'list' : 'grid'}`}>
                  {
                    searchBoxResults.map((item) => <CollectionItem key={item.id} item={item} collectionItemsDisplay={collectionItemsDisplay}/>)
                  }
            </div>
          </Fragment>
          :
          <SearchErrorMessage />

        :

        displayMultiFilterResults ?

          multiFilterResults ?

          <Fragment>
            <h2 className='title'>Resultados da sua Busca:</h2>
            <div className={`collection-items ${collectionItemsDisplay === 'list' ? 'list' : 'grid'}`}>
                {
                  multiFilterItems.map((item) => <CollectionItem key={item.id} item={item} collectionItemsDisplay={collectionItemsDisplay}/>)
                }
            </div>
          </Fragment>
          :
          <SearchErrorMessage />

        :

        collectionItems ?
        
          <Fragment>
            <h2 className='title'>{ collectionName }</h2>
            <div className={`collection-items ${collectionItemsDisplay === 'list' ? 'list' : 'grid'}`}>
                {
                  collectionItems.map((item) => <CollectionItem key={item.id} item={item} collectionItemsDisplay={collectionItemsDisplay}/>)
                }
            </div>
          </Fragment>
        :
          <SearchErrorMessage />
      }   
     </div>
  </section>
  )
}

export default CollectionPage;
