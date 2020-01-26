import { cartActionTypes } from './cart.action.types';
import { addItemToCart } from './cart.utilities';
import { removeItemFromCart } from './cart.utilities';
import { removeQuantityFromCart } from './cart.utilities';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  hiddenDropdown: true,
  cartItems: [],
}

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOOGLE_CART_DISPLAY:
      return {
        ...currentState,
        hiddenDropdown: !currentState.hiddenDropdown
      }
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_QUANTITY_FROM_ITEM:
      return {
        ...currentState,
        cartItems: removeQuantityFromCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...currentState,
        cartItems: []
      }
    default:
      return currentState;
  }
}

export default cartReducer;