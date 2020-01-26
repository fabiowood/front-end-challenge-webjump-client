import React from "react";
import './cart-item.styles.scss';

const CartItem = ({item}) => {
  const { image, name, price, specialPrice, quantity} = item;
  return (
    <section className='cart-item'>
      <img src={image} alt='item added to the shop cart' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        {
          specialPrice ?
            <span>{quantity} x R${specialPrice.toFixed(2)}</span>  
          :
            <span>{quantity} x R${price.toFixed(2)}</span>  
        }
      </div>
    </section>
  )
}

export default CartItem;