'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
    { id: 2, name: 'Editor User', email: 'editor@example.com', role: 'editor' },
  ],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },
    deleteUser(state, action) {
      const userId = action.payload
      state.users = state.users.filter((user) => user.id !== userId)
    },
  },
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer
