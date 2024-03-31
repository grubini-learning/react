import { createSlice } from "@reduxjs/toolkit";

import { IPhoto } from "../../model";

type SliceState = IPhoto[];
const initialState: SliceState = [];

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {}
});

export const photosReducer = photosSlice.reducer;