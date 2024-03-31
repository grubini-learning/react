import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../model";
import { fetchUsers, addUser } from "../thunks";

type SliceState = IUser[];
const initialState: SliceState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(fetchUsers.pending, (state, action) => {
    //     console.log('pending', state, {pay: action.payload});
    //     return state;
    // });
    builder.addCase(addUser.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const usersReducer = usersSlice.reducer;
