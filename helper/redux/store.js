import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.js";
import wishlistReducer from "./wishlist/wishlistSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
