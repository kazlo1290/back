import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../api/auth/authSlice'
import postReducer from '../api/posts/postSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
})