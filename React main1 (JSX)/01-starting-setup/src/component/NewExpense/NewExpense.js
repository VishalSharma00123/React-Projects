import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setEditing(false)
    }
    const updateEditingHandle = () => {
        setEditing(true)
    }
    const cancelEditingHandler = () => {

        setEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={updateEditingHandle} >Add new Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={cancelEditingHandler}
            />}
        </div>
    )
}
export default NewExpense;