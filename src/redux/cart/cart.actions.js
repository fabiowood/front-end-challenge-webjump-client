import { cartActionTypes } from './cart.action.types';

export const setCartDropdownDisplay = () => {
  return ({
    type: cartActionTypes.TOOGLE_CART_DISPLAY,
  })
};

export const addItem = (item) => {
  return ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
  })
};

export const removeItem = (item) => {
  return ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
  })
};

export const removeQuantityFromItem = (item) => {
  return ({
    type: cartActionTypes.REMOVE_QUANTITY_FROM_ITEM,
    payload: item
  })
}

export const clearCart = () => {
  return ({
    type: cartActionTypes.CLEAR_CART
  })
}