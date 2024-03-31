import { createSlice, nanoid } from "@reduxjs/toolkit";

type SliceState = { carList: {id: string; name: string; cost: number; }[]; term: string; };
const initialState: SliceState = { carList: [], term: '' };

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar(state, action) {
            return {
                ...state,
                carList: [...state.carList, {id: nanoid(), name: action.payload.name, cost: action.payload.cost}]
            };
        },
        removeCar(state, action) {
            return {
                ...state,
                carList: state.carList.filter((car) => car.id !== action.payload)
            }
        },
        changeTerm(state, action) {
           return {
                ...state,
                term: action.payload           
           }
        }
    }
})

export const { addCar, removeCar, changeTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
export {SliceState as CarsState};