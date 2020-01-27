import React from 'react';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({setCartDropdownDisplay}) => {
  return (
    <section className='cart-icon' onClick={setCartDropdownDisplay}>
      <MaterialIcon icon='shopping_cart' color='white'></MaterialIcon>
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