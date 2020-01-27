/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { selectCartHiddenDropdown } from '../../redux/cart/cart.selectors';
import { isOutsideShopPage } from '../../redux/shop/shop.actions';
import './header.styles.scss';

// Component Dependencies

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ collectionNames, fetchSingleCollection, hiddenDropdown, history, dispatch }) => {
  return (
    <section>
      <header className='header'>
        <nav className='nav-options'>
          <Link to='/' className='nav-option' onClick={() => dispatch(isOutsideShopPage(false))}>PÁGINA INICIAL</Link>
          { 
            collectionNames.map((collection) => {
              return (
                <div className='nav-option' key={collection.id} onClick={() => {
                  dispatch(isOutsideShopPage(false));
                  history.push('/');
                  fetchSingleCollection(collection.name);
                  }
                } 
              > { collection.name.toUpperCase() }</div>
              )
            })
          }
          <Link to='/' className='nav-option' onClick={() => dispatch(isOutsideShopPage(false))}>CONTATO</Link>
          <CartIcon />
        </nav>
          {
          hiddenDropdown ?
          null 
          :
          <CartDropdown/>
          }
      </header>
    </section>
  )
}

const mapStateToProps = createStructuredSelector ({
  hiddenDropdown: selectCartHiddenDropdown,
});

export default withRouter(connect(mapStateToProps)(Header));

