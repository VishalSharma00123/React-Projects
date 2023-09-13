import './Expenseitem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import React, { useState } from 'react';

const Expenseitem = (props) => {
    const [title, setTitle] = useState(props.title)
    console.log('Hey Everyone');
    const clickHandler = () => {
        setTitle('Vishal sharma')
    }
    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>year
                <button onClick={clickHandler}>Change Tittle</button>
            </Card>
        </div>
    );
}
export default Expenseitem;
