import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";


const combinedReducer = {
  movies: moviesSlice,
};

const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;