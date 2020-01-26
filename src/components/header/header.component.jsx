import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import { selectCollectionNames } from '../../redux/shop/shop.selectors';
import { selectCartHiddenDropdown } from '../../redux/cart/cart.selectors';
import './header.styles.scss';

// Component Dependencies

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ collectionNames, fetchSingleCollection, hiddenDropdown }) => {
  console.log(collectionNames);
  return (
    <section>
      <header className='header'>
        <nav className='nav-options'>
          <Link to='/' className='nav-option'>PÁGINA INICIAL</Link>
          {
            collectionNames.map((collection) => {
              console.log(collection.name);
              return(
                <div className='nav-option' key={collection.id} onClick={() => fetchSingleCollection(collection.name)}>
                { collection.name.toUpperCase() }
                </div>
              )
            })
          }
          <Link to='/' className='nav-option'>CONTATO</Link>
          <CartIcon />
        </nav>
          {
          hiddenDropdown ?
          null 
          :
          <CartDropdown />
          }
      </header>
    </section>
  )
}

const mapStateToProps = createStructuredSelector ({
  hiddenDropdown: selectCartHiddenDropdown,
  // collectionNames: selectCollectionNames
});

export default connect(mapStateToProps)(Header);

