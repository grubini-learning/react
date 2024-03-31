import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks";

type SliceState = { isLoading: boolean; error: string | null | undefined };
const initialState: SliceState = { isLoading: false, error: null };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    // builder.addCase(addUser.pending, (state, action) => {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: "there was an error fetching the users",
      };
    });
    builder.addCase(addUser.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: "there was an error adding a user",
      };
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    });
    // builder.addCase(addUser.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // });
  },
});

export const appReducer = appSlice.reducer;
