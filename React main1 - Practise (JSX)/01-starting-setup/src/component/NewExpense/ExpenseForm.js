import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {
    let min = '2019-01-01'
    let max = '2022-12-31'
    const [EnteredTitle, SetEnteredTitle] = useState('')
    const [EnteredDate, SetEnteredDate] = useState('')
    const [EnteredAmount, SetEnteredAmount] = useState('')

    const TitleChangeHandler = e => {
        SetEnteredTitle(e.target.value);

    }
    const DateChangeHandler = e => {
        // 1st method
        SetEnteredDate(e.target.value);
    }
    const AmountChangeHandler = (e) => {
        SetEnteredAmount(e.target.value);
    }
    const inputHandler = (Identifier, value) => {
        if (Identifier === 'title') {
            SetEnteredTitle(value)
        }
        else if (Identifier === 'date') {
            SetEnteredDate(value)
        }
        else {
            SetEnteredAmount(value)
        }
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData =
        {
            title: EnteredTitle,
            date: new Date(EnteredAmount),
            amount: EnteredAmount
        }
        props.onSaveExpenseData(expenseData)
        SetEnteredTitle('')
        SetEnteredDate('')
        SetEnteredAmount('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={EnteredTitle} onChange={(e) => inputHandler('title', e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={EnteredDate} min="0.01" step="0.01" onChange={(e) => inputHandler('date', e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' value={EnteredAmount} min={min} max={max} onChange={(e) => inputHandler('Amount', e.target.value)} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm