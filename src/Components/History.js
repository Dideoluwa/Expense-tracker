// import React, { useContext } from 'react'
// import TransactionContext from './context/context'
import styles from './History.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { transactionActions } from './store/Index'

function History() {
    // let { transactions , deleteTransaction } = useContext(TransactionContext)
    let dispatch = useDispatch()
    let transactions = useSelector(state => state.transaction.transactions)

    // let deleteHandler = () => {
    //     dispatch(cartAmountActions.removeExpenses(id))
    // }
    return (
        <div>
            <h1 className={styles.h1}>Expense history</h1>
            <div className={styles.historyList}>
                <ul >
                    {transactions.map((item) => (
                        <div key={item.id} className={styles.cover}>
                            <div className={styles.div}>
                                <li className={styles.delete} onClick={() => dispatch(transactionActions.removeExpenses(item.id))}>
                                    Delete
                                </li>
                                <li>
                                    {item.title}
                                </li>
                            </div>
                            <li>
                                #{item.amount}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default History