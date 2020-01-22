import React from 'react';
import './shop-page.styles.scss';

// Component Dependencies

// import SideBarFilter from '../../components/sidebar-filter/sidebar-filter.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ selectedCollection, searchBoxResults, displaySearchResults, multiFilterResults, displayMultiFilterResults }) => {

  return (
    <section className="shop-page">
      <CollectionPage selectedCollection={ selectedCollection } searchBoxResults={ searchBoxResults } displaySearchResults={ displaySearchResults } multiFilterResults={ multiFilterResults } displayMultiFilterResults={ displayMultiFilterResults }/>
    </section>
  )
  
}

export default ShopPage;