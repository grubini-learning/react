import { configureStore } from "@reduxjs/toolkit";
import {carsReducer, formReducer, changeName, changeTerm, changeCost, addCar, removeCar, FormState, CarsState } from './slices';


type ReducerState = {cars: CarsState; form: FormState};

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, formReducer, changeCost, changeName, changeTerm, addCar, removeCar, ReducerState };