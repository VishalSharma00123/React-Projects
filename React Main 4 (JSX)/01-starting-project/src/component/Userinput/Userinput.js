import { useState } from 'react'
import formstyle from './Userinput.module.css'
const initialinput = {
    'current-savings': 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10

}
const Form = (props) => {
    const [userInput, setUserInput] = useState(initialinput)
    const submitHandler = (event) => {
        event.preventDefault()
        console.log('submit');
        props.onCalculate(userInput)
    }
    const resetHandler = () => {
        console.log('Reset');
        setUserInput(initialinput)

    }
    const inputchangeHandler = (input, value) => {
        console.log(input, value);
        setUserInput(prev => {
            return {
                ...prev,
                [input]: +value
            }
        }
        )
    }
    return (<form className={formstyle.form} onSubmit={submitHandler}>
        <div className={formstyle['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input value={userInput['current-savings']} onChange={(event) => inputchangeHandler('current-savings', event.target.value)} type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input value={userInput['yearly-contribution']} onChange={(event) => inputchangeHandler('yearly-contribution', event.target.value)} type="number" id="yearly-contribution" />
            </p>
        </div>
        <div className={formstyle['input-group']}>
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input value={userInput['expected-return']} onChange={(event) => inputchangeHandler('expected-return', event.target.value)} type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input value={userInput['duration']} j onChange={(event) => inputchangeHandler('duration', event.target.value)} type="number" id="duration" />
            </p>
        </div>
        <p className={formstyle["actions"]}>
            <button type="reset" className={formstyle.buttonAlt} onClick={resetHandler}>
                Reset
            </button>
            <button type="submit" className={formstyle.button}>
                Calculate
            </button>
        </p>
    </form>)
}
export default Form;