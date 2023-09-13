import React, { useState } from 'react';
import './Expense.css';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './Expensesfilter'; // Corrected import name
import ExpensesList from './ExpensesList';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');//use useState to display the selected year initially filteredY=ear will stre the 2020 year and setFilteredYear fucn will update the year

    const filterChangeHandler = selectedYear => //function to update the Year
    {
        console.log(selectedYear);
        setFilteredYear(selectedYear
        );
    };

    // Calculate filtered expenses based on the selected year
    const filteredExpenses = props.item.filter(expense => //fucn to check whether the selected year is equal to the filtered year or not it returns trur if equal
    {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList myitems={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expense;
