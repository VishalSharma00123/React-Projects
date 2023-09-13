import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = (props) => {
    const amountInputRef = useRef(null)
    const [amountIsValid, setamountIsValid] = useState(true)

    const submitHandle = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim() === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setamountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }


    return (
        //  in input field we use ref to access the dom node accesing the current value ref consist of object inside object it consist of current key which holds the value(DOM node) which we will type in the input field 
        //  here in the Custom input field we cant use ref ref only supports for buils in jsx elements so to solve this we have to usr forwardref to forward the ref 
        // syntax is 
        // const Input = forwardRef((props, ref) => {
        // return <input {...} ref={ref} />;
        //     }); 
        <form className={classes.form} onSubmit={submitHandle}>
            <Input
                ref={amountInputRef}
                mylabel="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />

            <button>+Add</button>
            {!amountIsValid && <p>please enter a valid amount(1-5)</p>}
        </form>
    )
}
export default MealItemForm;