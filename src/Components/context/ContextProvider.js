import React, { useReducer } from "react";

import TransactionContext from "./context";

const initialState = {
    transactions: []
}

let transactionReducer = (state, action) => {
    if (action.type === 'delete') {
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
    }
    if (action.type === 'add') {
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    }
    return state;
}

let ContextProvider = (props) => {

    let [transactionState, dispatchTransaction] = useReducer(transactionReducer, initialState)

    function deleteTransaction(id) {
        dispatchTransaction({
            type: 'delete',
            payload: id
        });
    }

    function addTransaction(item) {
        dispatchTransaction({
            type: 'add',
            payload: item
        });
    }

    let transactionContext = {
        transactions: transactionState.transactions,
        deleteTransaction,
        addTransaction
    }
    return (
        <TransactionContext.Provider value={transactionContext}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default ContextProvider