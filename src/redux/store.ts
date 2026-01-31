import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./Slices/counter";

export const store = configureStore({
    reducer : {
        counter : counterSlice,
    }
})

// copy from docs 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// if you following docs then from there we create a custom hook one hook is for dispatching and other hook  for reading(subscribe)