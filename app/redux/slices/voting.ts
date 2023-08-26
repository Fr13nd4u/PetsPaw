'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import VotingService from "../../services/VotingService";

interface IState {
  voting: any;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  voting: null,
  loading: false,
  error: null,
};

export const fetchVotings = createAsyncThunk(
  "voting",
  async () => {
    const res = await VotingService.getAll();
    
    return res.data;
  }
);

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVotings.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchVotings.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.voting = action.payload;
      state.error = '';
    })
    builder.addCase(fetchVotings.rejected, (state) => {
      state.loading = false;
      state.voting = null;
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = votingSlice;
export default reducer;