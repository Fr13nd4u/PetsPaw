'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import BreedService from "../../services/BreedService";

interface IState {
  breeds: any;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  breeds: [],
  loading: false,
  error: null,
};

export const fetchBreeds = createAsyncThunk(
  "breeds/fetch",
  async (limit: number | string) => {
    const res = await BreedService.getAll(limit);
    return res.data;
  }
);

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all
    builder.addCase(fetchBreeds.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchBreeds.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.breeds = action.payload;
      state.error = '';
    })
    builder.addCase(fetchBreeds.rejected, (state) => {
      state.loading = false;
      state.breeds = [];
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = breedsSlice;
export default reducer;