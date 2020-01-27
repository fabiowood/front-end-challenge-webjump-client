import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';
import { isOutsideShopPage } from '../../redux/shop/shop.actions';
import './cart-dropdown.styles.scss';

// Component Dependencies

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart.item.component';

const CartDropdown = ({currentUser, cartItems, history, dispatch}) => {
  return (
    <section className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length 
          ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className='empty-message'>Seu carrinho está vazio!</span>
        }
      </div>
      {
        currentUser ?
          <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(setCartDropdownDisplay());
            dispatch(isOutsideShopPage(true));
            }
          }
          >
          Checkout</CustomButton>
        :
        <CustomButton onClick={() => {
            history.push('/sign-in');
            dispatch(setCartDropdownDisplay());
            dispatch(isOutsideShopPage(true));
            }
          }
          >
          Checkout</CustomButton>
      }
    </section>
  )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));