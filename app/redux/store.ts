'use client'
import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './slices/breeds';
import breedByIdReducer from './slices/breedById'

const reducer = {
  breeds: breedsReducer,
  breed: breedByIdReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;