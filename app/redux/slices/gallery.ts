'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import GalleryService from "../../services/GalleryService";

interface IState {
  gallery: any;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  gallery: null,
  loading: false,
  error: null,
};

export const fetchGallery = createAsyncThunk(
  "gallery",
  async (
      {id, limit, order, mime_types} : {id: string, limit: number, order: string, mime_types: string}
    ) => {
    const res = await GalleryService.get(id, limit, order, mime_types);
    
    return res.data;
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGallery.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchGallery.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.gallery = action.payload;
      state.error = '';
    })
    builder.addCase(fetchGallery.rejected, (state) => {
      state.loading = false;
      state.gallery = null;
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = gallerySlice;
export default reducer;