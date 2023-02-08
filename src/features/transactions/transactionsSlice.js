import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: [],
    reducers: {
        addTransaction: (state, action) => {state.push(action.payload)},
        removeTransaction: (state, action) => state.filter(item => item.id !== action.payload)
    } 
})

export const { addTransaction, removeTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer

