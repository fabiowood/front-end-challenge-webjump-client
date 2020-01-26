import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((quantitySum, cartItem) => {
    return (
      quantitySum += cartItem.quantity
    )
  }, 0)
);

export const selectCartHiddenDropdown = createSelector(
  [selectCart],
  cart => cart.hiddenDropdown
);

export const selectCartItemsTotalValue = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((quantitySum, cartItem) => {
    return (
      quantitySum += (cartItem.quantity * cartItem.price)
    )
  }, 0)
);


