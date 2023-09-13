import Expense from "./component/Expense/expense"
import React, { Component, useState } from 'react';
import NewExpense from './component/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'bike Insurance',
    amount: '345.67$',
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'Apachi',
    amount: '2190.67$',
    date: new Date(2024, 7, 28)
  },
  {
    id: 'e3',
    title: 'Ferrari',
    amount: '1,00,000$',
    date: new Date(2020, 2, 23)
  },
  {
    id: 'e4',
    title: 'Mobile',
    amount: '334.67$',
    date: new Date(2021, 2, 28)
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];

    })
      ;
  }

  return (
    // lower case elements are built-in html element 
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div id="myid">Hi this is Vishal</div>
      <Expense item={expenses}></Expense>
    </div>
  );
  // instead of writing the above html element we can create the and display the same content  using react.createElement

  // createElement
  // createElement lets you create a React element. It serves as an alternative to writing JSX.
  // const element = createElement(type, props, ...children) refer react documeny for more content about reacts create element
  // return React.createElement('div', {},
  //   React.createElement(NewExpense, { onAddExpense: addExpenseHandler }),
  //   React.createElement('div', { id: 'myid' }, ''),
  //   React.createElement(Expense, { item: expenses }))
}

export default App;
{/* we can use this component as many time as we want printing it many times but it will display the same data only we cant modify the data as we can seee in the example  */ }
{/* upper case html elements are user defined html elements */ }
