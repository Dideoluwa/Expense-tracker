import React, {useContext} from 'react'
import styles from './Balance.module.css'
import TransactionContext from './context/context'


function Balance() {
   const { transactions } = useContext(TransactionContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
  
    return (
            <div className={styles.content}>
                <h2 className={styles.h2}>Your balance</h2>
                <h3 className={styles.balance}>#{total}</h3>
            </div>
      
    )
}

export default Balance