import React from 'react';
import './shop-page.styles.scss';

// Component Dependencies

import SideBarFilter from '../../components/sidebar-filter/sidebar-filter.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ selectedCollection, searchBoxResults, displaySearchResults }) => {
  return (
    <section className="shop-page">
      <SideBarFilter selectedCollection={selectedCollection} searchBoxResults={searchBoxResults} displaySearchResults={displaySearchResults}/>
      <CollectionPage selectedCollection={selectedCollection} searchBoxResults={searchBoxResults} displaySearchResults={displaySearchResults}/>
    </section>
  )
}

export default ShopPage;