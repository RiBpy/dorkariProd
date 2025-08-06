'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (!existingItem) {
        state.items.push(newItem)
      }
    },
    removeItemFromWishlist(state, action) {
      const itemId = action.payload
      state.items = state.items.filter((item) => item.id !== itemId)
    },
  },
})

export const { addItemToWishlist, removeItemFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
