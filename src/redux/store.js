// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';  // Import the counter reducer
import productReducer from './product/productSlice';   // Correct import path for productSlice
import cartReducer from './cart/cartSlice';

// Create and configure the Redux store
const store = configureStore({
    reducer: {
        counter: counterReducer,  // Register the counter reducer
        product: productReducer,   // Register the product reducer
        cart: cartReducer,   // Register the product reducer
    },
});

export default store;