'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    updateProduct(state, action) {
      const { id, updatedProduct } = action.payload
      const index = state.products.findIndex((product) => product.id === id)
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct }
      }
    },
    deleteProduct(state, action) {
      const productId = action.payload
      state.products = state.products.filter((product) => product.id !== productId)
    },
  },
})

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
