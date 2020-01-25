import React from 'react';
import './shop-page.styles.scss';

// Component Dependencies

import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ selectedCollection, searchBoxResults, displaySearchResults, multiFilterResults, displayMultiFilterResults, collectionItemsDisplay }) => {

  return (
    <section className="shop-page">
      <CollectionPage selectedCollection={selectedCollection} searchBoxResults={searchBoxResults} displaySearchResults={displaySearchResults} multiFilterResults={multiFilterResults}  displayMultiFilterResults={displayMultiFilterResults} collectionItemsDisplay={collectionItemsDisplay}/>
    </section>
  )
  
}

export default ShopPage;