import Expense from "./component/Expense/expense"
import React, { Component } from 'react';
import NewExpense from './component/NewExpense/NewExpense'
const App = () => {
  const expenses = [
    {
      title: 'bike Insurance',
      amount: '345.67$',
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Apachi',
      amount: '2190.67$',
      date: new Date(2024, 7, 28)
    },
    {
      title: 'Ferrari',
      amount: '1,00,000$',
      date: new Date(2020, 2, 23)
    },
    {
      title: 'Mobile',
      amount: '334.67$',
      date: new Date(2021, 2, 28)
    },
  ]
  return React.createElement('div', {}, React.createElement(NewExpense, {}), React.createElement('div', { id: 'myid' }, 'Hi this is Vishal'), React.createElement(Expense, { item: expenses }))
}

export default App;
