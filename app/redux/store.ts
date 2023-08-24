'use client'
import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './slices/breeds';

const reducer = {
  breeds: breedsReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;