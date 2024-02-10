import { combineReducers } from "@reduxjs/toolkit";
import contadorSlice from "./modules/saldoSlice";

export const rootReducer = combineReducers ({
    contador: contadorSlice
})