import React, {useState , useReducer } from 'react'
// import TransactionContext from './context/context'
import styles from './Input.module.css'
import { useDispatch } from 'react-redux'
import { transactionActions } from './store/Index'

let textReducer = (state , action) =>{
   if(action.type === 'textInput'){
       return {value : action.val , isValid : action.val.trim().length >= 1}
   }
   return { value: '', isValid: false }
}

let amountReducer = (state , action) =>{
    if(action.type === 'amountInput'){
        return {value : action.val , isValid : action.val.trim().length >= 1}
    }
    return { value: '', isValid: false }
 }

function Input(props) {
let dispatch = useDispatch()
    // let { addTransaction } = useContext(TransactionContext)
    let [formIsValid , setFormIsValid] = useState(false)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    let [textState , dispatchText] = useReducer( textReducer , {
        value : '',
        isValid : null
    })
    let [amountState , dispatchAmount] = useReducer( amountReducer , {
        value : '',
        isValid : null
    })

    let formSubmitHandler = (e) =>{
      e.preventDefault()
    //   props.onListExpenses(textState.value , amountState.value)
    //   textState.value = ''
    //   amountState.value = ''
      setAmount('')
      setText('')
      setFormIsValid(false)

      dispatch(transactionActions.addExpenses({
        id: Math.floor(Math.random() * 100000000),
        title : text,
        amount : +amount 
      }))
    //   const newTransaction = {
    //     id: Math.floor(Math.random() * 100000000),
    //     text,
    //     amount: +amount
    //   }
  
    //   addTransaction(newTransaction);
    }

    let textChangeHandler = (e) =>{
        setText(e.target.value)
       dispatchText({
           type : 'textInput',
           val : e.target.value
       })
       setFormIsValid(
           e.target.value.trim().length >=1 && amountState.isValid
       )
    }
    let amountChangeHandler = (e) =>{
        setAmount(e.target.value)
       dispatchAmount({
           type : 'amountInput',
           val : e.target.value
       })
       setFormIsValid(
        e.target.value.trim().length >=1 && textState.isValid
    )
    }
    return (
        <div className={styles.cover}>
            <h1 className={styles.h1}>Add transaction</h1>
            <form
            onSubmit={formSubmitHandler}>
                <div className={styles.text}>
                    <label>Item purchased</label>
                    <input
                        onChange={textChangeHandler}
                        label = 'Item purchased'
                        type='text'
                        value={text}
                        placeholder = 'Books'
                    />
                </div>
                <div className={styles.text}>
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        label = 'Amount'
                        type='number'
                        value={amount}
                        placeholder = '200'
                    />
                </div>
                <button className={styles.button} disabled={!formIsValid}>Submit</button>
            </form>
        </div>
    )
}

export default Input