import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as RemoveButton } from '../../assets/delete-24px.svg';
import './checkout-item.styles.scss';

// Component Dependencies

import { addItem } from '../../redux/cart/cart.actions';
import { removeItem } from '../../redux/cart/cart.actions';
import { removeQuantityFromItem } from '../../redux/cart/cart.actions';

const CheckOutItem = ({cartItem, addItem, removeItem, removeQuantityFromItem}) => {
  const {image, name, quantity, price} = cartItem;
  return (
    <article className='checkout-item'>
      <picture className='image-container'>
        <img src={image} alt='item em seu carrinho pronto para as compras!'/>
      </picture>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='arrow' onClick={() => removeQuantityFromItem(cartItem)}>&#10094;</div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>
      <div className='price'>R$ {price.toFixed(2)}</div>
      <RemoveButton className='remove-button' onClick={() => removeItem(cartItem)}></RemoveButton>
    </article>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  removeQuantityFromItem: (item) => dispatch(removeQuantityFromItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
