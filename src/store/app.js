import { configureStore } from "@reduxjs/toolkit";
import quantityReducer  from "./slices/QuantitySlice";
export const store= configureStore({
    reducer:{
        productQuantity: quantityReducer,
    }
})