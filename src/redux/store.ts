import { configureStore } from '@reduxjs/toolkit';

import smartData from './slices/data';
import dropDown from "./slices/dropDown";

const store = configureStore({
    reducer: {
        smartData,
        dropDown,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
