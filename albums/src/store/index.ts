import { configureStore} from "@reduxjs/toolkit";


import { albumsReducer, photosReducer, usersReducer } from "./slice";
import { appReducer } from "./slice/app.slice";

const store = configureStore({
    reducer: {
        app: appReducer,
        albums: albumsReducer,
        photos: photosReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};
export * from './thunks';