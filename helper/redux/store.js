import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.js";
import wishlistReducer from "./wishlist/wishlistSlice.js";
import productReducer from "./product/productSlice.js";
import userReducer from "./user/userSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    users: userReducer,
  },
});

export default store;
