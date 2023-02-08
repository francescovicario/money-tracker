import { createSlice } from '@reduxjs/toolkit'

const totalSlice = createSlice({
    name: 'total',
    initialState: {
        incomes: 0,
        expenses: 0
    },
    reducers: {
        addAmount: (state, action) => {  
            let { incomes, expenses } = state;
            let { isIncome , amount } = action.payload; 
            
            isIncome ? incomes += amount : expenses += amount

            return {...state, incomes, expenses}
        },
        removeAmount: (state, action) => {
            let { incomes, expenses } = state;
            let { isIncome, amount } = action.payload

            isIncome ? incomes -= amount : expenses -= amount

            return {...state, incomes, expenses}
        }
    }
})

export const { addAmount, removeAmount} = totalSlice.actions
export default totalSlice.reducer


