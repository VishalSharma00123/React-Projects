import './Expenseitem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import React, { useState } from 'react';

const Expenseitem = (props) => {
    // Stateless Component (Functional Component):
    // A stateless component, also known as a functional component, is a component in React that doesn't have its own internal state managed by React
    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        {props.amount}
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Expenseitem;

// we need to paas parameter inside the function to use all the values like title,amount and date by passing props as a parameter which consist of all the values we can reuse the jsx component

// built in js date constructor
// we can use js variable inside a html element
// the variable to be used is placed inside the curly braces{variable} as mentioned in below example inside <h2> element
// so instead of using hardcoded html codes we can dynamically use this javascript variables this allow us to reuse the code  without coding the same thing again
// we can also use object destructuring by passing the value in function inside curly

// Syntax
// Date.toLocaleString(locales, options) for converting date in to object string it consist of two paramterss
// we can use arrow function instead of normal function 
// function Expenseitem(props) this can written as
{/* we can react to the event listener by using  a prop onClick which react to the certain events as same dom events and the corresponding value should be a function */ }

// props are nothing but properties we can defined out own props for eg
// export default function Profile() {
    //     return (
        //       <Avatar
        //         person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        //         size={100}
        //       />
        //     );
        //   }
        // in above eg person is a props to which we assigned an object we canassign anything to props objects,array,number etc
        // In React, useState, as well as any other function starting with ”use”, is called a Hook.
        // State hook: A Component's Memory
        // Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.