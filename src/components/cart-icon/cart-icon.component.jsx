import React from 'react';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping_cart-24px.svg';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({setCartDropdownDisplay /* , iconCount */}) => {
  return (
    <section className='cart-icon' onClick={setCartDropdownDisplay}>
      <ShoppingBagIcon className='shopping-icon' />
      {/* <span className='item-count'>{iconCount}</span> */}
    </section>
  )
}

const mapStateToProps = createStructuredSelector ({
  iconCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  setCartDropdownDisplay: () => dispatch(setCartDropdownDisplay())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);