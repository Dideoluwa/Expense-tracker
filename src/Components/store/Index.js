import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

let defaultTransaction = {
    transactions: [],
    totalAmount : 0
}

let transactionSlice = createSlice({
    name: 'transaction',
    initialState: defaultTransaction,
    reducers: {
        addExpenses(state, action) {
            let newExpense = action.payload
            state.transactions.push({
                id :  newExpense.id,
                title : newExpense.title,
                amount : newExpense.amount
            })
            state.totalAmount = state.totalAmount + newExpense.amount
         },
        removeExpenses(state, action) {
            let id = action.payload 
            let existingTransaction = state.transactions.find(item => item.id === id)
            state.transactions = state.transactions.filter(transaction => transaction.id !== id)
            state.totalAmount = state.totalAmount - existingTransaction.amount
         }
    }
})


let store = configureStore({
    reducer: {
        transaction: transactionSlice.reducer,
    }
})

export const transactionActions = transactionSlice.actions
export default store