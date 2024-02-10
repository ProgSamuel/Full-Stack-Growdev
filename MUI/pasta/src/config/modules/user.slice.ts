import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootReducer } from "../rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export interface User {
    id: string;
    nome: string;
    token: string;
}

const initialState:User | undefined = undefined

const userSlice = createSlice({
    name: "user",
    initialState: initialState as User | undefined,
    // dentro do reducers vai estar as funções 
    reducers: {
        login: (state, action: PayloadAction <User>) => {
            return 
        }
    }
})

export default userSlice.reducer
export const persistedReducer = persistReducer({
    key:"alunos",
    storage:storage
}, rootReducer)

export const { login} = userSlice.actions