import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, hoverAddToCart, ...otherProps}) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${hoverAddToCart ? 'inverted' : ''} custom-button`} {...otherProps}>{ children }</button>
  )
}

export default CustomButton;