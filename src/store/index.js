import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
