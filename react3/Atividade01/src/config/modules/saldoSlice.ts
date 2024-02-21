import { createSlice } from "@reduxjs/toolkit";

const initialState:number = 0;

const saldoSlice = createSlice({
    name: "saldo",
    initialState,
    reducers:{
        entrada:(state, action)=>{
            const valor = Number(action.payload); 
            return state + valor;
        },
        saida:(state, action)=>{
            const valor = Number(action.payload); 
            return state - valor;
        }
    }
})

export const {entrada, saida } = saldoSlice.actions
export default saldoSlice.reducer
