'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserActions {
  type: "like" | "dislike" | "favourites";
  time: number;
  text: string;
  img_id: string;
}

interface IState {
  userActions: IUserActions[] | [];
}

const initialState: IState = {
  userActions: [],
};

const userActionsSlice = createSlice({
  name: "userActions",
  initialState,
  reducers: {
    setUserActions: (state, action: PayloadAction<IUserActions>) => {
      if (state.userActions.length > 5) {
        state.userActions.splice(0, state.userActions.length - 5);
      }
      state.userActions = [action.payload, ...state.userActions];
    },
  },
})

export const {
  setUserActions,
} = userActionsSlice.actions;

const { reducer } = userActionsSlice;
export default reducer;