import { createSlice } from "@reduxjs/toolkit";
import transacao from "../../models/transacoes";

const initialState: transacao[] = [
];

const transacoesSlice = createSlice({
    name: "transacoes",
    initialState,
    reducers: {
        // aqui se encontrarão as ações para este state
        addTransacao: (state, action)=> {
            return [...state, action.payload]
        }
    }
})

export default transacoesSlice.reducer
export const {addTransacao} = transacoesSlice.actions