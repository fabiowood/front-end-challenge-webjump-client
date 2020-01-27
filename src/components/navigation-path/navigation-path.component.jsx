/* eslint-disable default-case */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isOutsideShopPage } from '../../redux/shop/shop.actions';
import './navigation-path.styles.scss';

const NavigationPath = ({ selectedCollectionName, isOutsideShopPage }) => {
  
  switch(selectedCollectionName) {
    case 'shirts':
      selectedCollectionName = 'Camisetas';
      break;
    case 'pants':
      selectedCollectionName = 'Calças';
      break;
    case 'shoes':
      selectedCollectionName = 'Calçados';
      break;
  }

  return(
      <section className='navigation-path'>
        <span>Página Inicial</span>
        <span className='path-arrow'>></span>
        <Link to='/' className='path-link' onClick={() => isOutsideShopPage(false)}>{selectedCollectionName}</Link>
      </section>
    )
}

const mapDispatchToProps = dispatch => ({
  isOutsideShopPage: () => dispatch(isOutsideShopPage(false))
})

export default connect(null, mapDispatchToProps)(NavigationPath);
