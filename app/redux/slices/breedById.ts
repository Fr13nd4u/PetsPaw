'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import BreedService from "../../services/BreedService";

interface IState {
  breed: any;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  breed: null,
  loading: false,
  error: null,
};

export const fetchBreedById = createAsyncThunk(
  "breed",
  async (id: string) => {
    const res = await BreedService.get(id);
    return res.data;
  }
);

const breedByIdSlice = createSlice({
  name: "breed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBreedById.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchBreedById.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.breed = action.payload;
      state.error = '';
    })
    builder.addCase(fetchBreedById.rejected, (state) => {
      state.loading = false;
      state.breed = null;
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = breedByIdSlice;
export default reducer;