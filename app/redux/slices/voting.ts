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
  "voting/fetch",
  async () => {
    const res = await VotingService.getAll();
    return res.data;
  }
);

export const createVoting = createAsyncThunk(
  "voting/create",
  async (data: {
    image_id: string,
    sub_id?: string,
    value: number
  }) => {
    const res = await VotingService.create(data);
    return res.data;
  }
);

export const removeVoting = createAsyncThunk(
  "voting/remove",
  async (id: string) => {
    const res = await VotingService.remove(id);
    return res.data;
  }
);

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get
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

    // post
    builder.addCase(createVoting.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createVoting.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = '';
    })
    builder.addCase(createVoting.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to get data.';
    })

    // delete
    builder.addCase(removeVoting.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(removeVoting.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.error = '';
    })
    builder.addCase(removeVoting.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to get data.';
    })
  }
})

const { reducer } = votingSlice;
export default reducer;