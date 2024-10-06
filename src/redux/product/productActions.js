// src/redux/product/productActions.js
import { addProduct, setProducts } from "./productSlice"; // Corrected the import path

// Bundle all actions in one object and export it
export const productActions = {
    addProduct,
    setProducts,
};