
// This type of file is useful to maintain clean codes, by separating the function from the code in which we actually want to call that function.

export const addItemToCart = (cartItems, itemToAdd) => {
  const checkExistingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (checkExistingCartItem) {
    return (
      cartItems.map(cartItem => {
        return (
          cartItem.id === itemToAdd.id ?
          {
            ...cartItem,
            quantity: cartItem.quantity + 1
          } :
          {...cartItem}
        )
      })
    );
  } else {
    return (
      cartItems = [...cartItems, {
        ...itemToAdd,
        quantity: 1
      }]
    )
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return (
    cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  )
}

export const removeQuantityFromCart = (cartItems, itemToReduce) => {
  const checkExistingCartItem = cartItems.find(cartItem => cartItem.id === itemToReduce.id);
  if (checkExistingCartItem.quantity === 1) {
    return (
      removeItemFromCart(cartItems, itemToReduce)
    )
  } else {
    return (
      cartItems.map((cartItem) => {
        return (
          cartItem.id === itemToReduce.id ?
          {
            ...cartItem,
            quantity: cartItem.quantity - 1
          } :
          {...cartItem}
        )
      })
    )
  }
}