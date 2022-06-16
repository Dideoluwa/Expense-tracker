import React, { useContext } from 'react'
import TransactionContext from './context/context'
import styles from './History.module.css'

function History() {
    let { transactions , deleteTransaction } = useContext(TransactionContext)

    //  let deleteHandler = ()=>{
    //     deleteTransaction(item.id)
    //  }
    return (
        <div>
            <h1 className={styles.h1}>Expense history</h1>
            <div className={styles.historyList}>
                <ul >
                    {transactions.map((item) => (
                        <div key={item.id} className={styles.cover}>
                            <div className={styles.div}>
                                <li className={styles.delete} onClick={() => deleteTransaction(item.id)}>
                                    Delete
                                </li>
                                <li>
                                    {item.text}
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