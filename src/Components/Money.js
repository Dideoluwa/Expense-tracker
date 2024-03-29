// import React, { useContext } from 'react'
// import TransactionContext from './context/context'
import styles from './Money.module.css'
import { useSelector } from 'react-redux'

function Money() {
    // let { transactions } = useContext(TransactionContext)

    let transactionAmount = useSelector(state => state.transaction.transactions)



    const amounts = transactionAmount.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc -= item), 0) *
        -1
    );

    return (
        <div className={styles.money}>
            <div>
                <h3>Income</h3>
                <p>{income}</p>
            </div>
            <div className={styles.line}>
                <div></div>
            </div>
            <div>
                <h3>Expense</h3>
                <p>{expense}</p>
            </div>
        </div>
    )
}

export default Money
