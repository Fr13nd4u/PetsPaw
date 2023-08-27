'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import UploadService from "../../services/UploadService";

interface IState {
  upload: any;
  loading: boolean;
  error: any;
}

const initialState: IState = {
  upload: null,
  loading: false,
  error: null,
};


export const createUpload = createAsyncThunk(
  "upload/create",
  async ({ formData, sub_id }: { formData: any; sub_id?: string }) => {
    try {
      const res = await UploadService.create({ formData, sub_id });
      return res.data;
    } catch (error) {
      throw error; 
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post
    builder.addCase(createUpload.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createUpload.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.upload = action.payload
      state.error = '';
    })
    builder.addCase(createUpload.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ;
    })

  }
})

const { reducer } = uploadSlice;
export default reducer;