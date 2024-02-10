import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Saldo {
    valor: number;
}

const initialState: Saldo = {
    valor: 0
};

export const saldoSlice = createSlice({
    name: 'saldo',
    initialState: initialState,
    reducers: {
        incrementar: (state, action: PayloadAction<number>) => {
            state.valor += action.payload;
        },
        decrementar: (state, action: PayloadAction<number>) => {
            if(state.valor > 0){
            state.valor -= action.payload;
            }
        }
    }
});

export const { incrementar, decrementar } = saldoSlice.actions;

export default saldoSlice.reducer;
