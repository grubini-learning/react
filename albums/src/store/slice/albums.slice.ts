import { createSlice } from "@reduxjs/toolkit";

import { IAlbum } from "../../model";

type SliceState = IAlbum[];
const initialState: SliceState = [];

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {}
});

export const albumsReducer = albumsSlice.reducer;