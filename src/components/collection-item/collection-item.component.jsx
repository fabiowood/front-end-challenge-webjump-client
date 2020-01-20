import React from "react";
// import { addItem } from '../../redux/cart/cart.actions';
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  
  const { name, image, price, specialPrice } = item;

  return (
    <article className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="collection-footer">
          <p className='name'>{name.toUpperCase()}</p>
          {
            specialPrice ?
            <div className='collection-discount-price'>
              <p className='no-discount-price'>R${price.toFixed(2)}</p>
              <p className='price'>R${specialPrice.toFixed(2)}</p>
            </div>
            :
            <p className='price'>R${price.toFixed(2)}</p> 
          }
        </div>
        <button className='custom-button' /* hoverAddToCart onClick={() => addItem(item)} */>COMPRAR</button>
    </article>
  );
};

export default CollectionItem;

