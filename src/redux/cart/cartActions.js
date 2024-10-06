// src/redux/cart/cartActions.js

import { addProduct, removeProduct, updateProduct } from './cartSlice';

// Action to add a product to the cart
export const addToCart = (product) => (dispatch, getState) => {
    
  const { cart } = getState();
  const existingProduct = cart.products.find((p) => p.id === product.id);

  if (existingProduct) {
    // If product already exists in cart, update its quantity
    dispatch(updateProduct({ id: product.id, quantity: existingProduct.quantity + 1 }));
  } else {
    // Otherwise, add the product to the cart
    dispatch(addProduct(product));
  }
};

// Action to update the quantity of a product in the cart
export const updateCartProductQuantity = (id, quantity) => (dispatch) => {
  if (quantity > 0) {
    dispatch(updateProduct({ id, quantity }));
  }
};

// Action to remove a product from the cart
export const removeFromCart = (id) => (dispatch) => {
  dispatch(removeProduct(id));
};
