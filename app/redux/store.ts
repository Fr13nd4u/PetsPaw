'use client'
import { configureStore } from '@reduxjs/toolkit'

import breedsReducer from './slices/breeds';
import breedByIdReducer from './slices/breedById'
import galleryReducer from './slices/gallery'
import votingReducer from './slices/voting'
import favouritesReducer from './slices/favourites'

const reducer = {
  breeds: breedsReducer,
  breed: breedByIdReducer,
  gallery: galleryReducer,
  voting: votingReducer,
  favourites: favouritesReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;