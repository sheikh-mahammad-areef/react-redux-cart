import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],  // Initialize an empty array for products
};

const productSlice = createSlice({
    name: 'product',
    initialState, // Set the initial state
    reducers: {
        addProduct: (state, action) => {
            // Add the new product from action.payload to the products array
            state.products.push(action.payload);
        },
        setProducts: (state, action) => {
            // Set products from the JSON file
            state.products = action.payload;
        },
    },
});

// Export the actions to use them in your components
export const { addProduct, setProducts } = productSlice.actions;

// Export the reducer to be used in the store
export default productSlice.reducer;