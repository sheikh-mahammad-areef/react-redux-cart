// src/redux/cart/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // Add new product (handled by addToCart logic)
      state.products.push({ ...action.payload, quantity: 1 });
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    updateProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product.id === id);

      if (product) {
        state.totalQuantity += quantity - product.quantity;
        state.totalPrice += (quantity - product.quantity) * product.price;
        product.quantity = quantity;
      }
    },

    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex >= 0) {
        const product = state.products[productIndex];
        state.totalQuantity -= product.quantity;
        state.totalPrice -= product.price * product.quantity;
        state.products.splice(productIndex, 1); // Remove product
      }
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.products;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
