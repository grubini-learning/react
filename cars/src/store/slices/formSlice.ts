import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

type SliceState = { name : string; cost: number };
const initialState: SliceState = { name: '', cost: 0 };

const formSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        changeName(state, action) {
            return {
                ...state,
                name: action.payload
            }
        },
        changeCost(state, action) {
            return {
                ...state,
                cost: action.payload
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, _action) => {
            return initialState;
        })
    }
});

export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;
export {SliceState as FormState};