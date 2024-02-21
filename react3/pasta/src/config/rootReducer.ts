import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./modules/user.slice";

export const rootReducer = combineReducers({

    // user é o nome do estado, portanto é o nome que deverá ser chamado 
    user:userSlice
})