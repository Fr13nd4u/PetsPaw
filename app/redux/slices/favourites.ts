'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import FavouritesService from "../../services/FavouritesService";

interface IState {
  favourites: any;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  favourites: null,
  loading: false,
  error: null,
};

export const fetchFavourites = createAsyncThunk(
  "favourites/fetch",
  async (sub_id: any ) => {
    const res = await FavouritesService.getAll(sub_id);
    return res.data;
  }
);

export const createFavourite = createAsyncThunk(
  "favourites/create",
  async (data: {
    image_id: string,
    sub_id?: string
  }) => {
    const res = await FavouritesService.create(data);
    return res.data;
  }
);

export const removeFavourite = createAsyncThunk(
  "favourites/remove",
  async (id: string) => {
    const res = await FavouritesService.remove(id);
    return res.data;
  }
);

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get
    builder.addCase(fetchFavourites.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchFavourites.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.favourites = action.payload;
      state.error = '';
    })
    builder.addCase(fetchFavourites.rejected, (state) => {
      state.loading = false;
      state.favourites = null;
      state.error = 'Failed to get data.';
    })

    // post
    builder.addCase(createFavourite.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createFavourite.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = '';
    })
    builder.addCase(createFavourite.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to get data.';
    })

    // delete
    builder.addCase(removeFavourite.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(removeFavourite.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = '';
    })
    builder.addCase(removeFavourite.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = favouriteSlice;
export default reducer;