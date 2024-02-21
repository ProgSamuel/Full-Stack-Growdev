import { combineReducers } from "@reduxjs/toolkit";
import transacoesSlice from "./modules/transacoesSlice";
import saldoSlice from "./modules/saldoSlice";

export const rootReducer = combineReducers({
    // Aqui será criado os states
    // como será chamado : arquivo representado
    transacoes: transacoesSlice,
    saldo: saldoSlice
})