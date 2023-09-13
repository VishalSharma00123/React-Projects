import { useRef, useState } from 'react'
import Card from '../UI/Card'
import style from './AddUser.module.css'
import Button from '../UI/Button'// const initialvalue = {}
import ErrorModel from '../UI/errorModel'
import Wrapper from '../Helpers/Wrappers'
const AddUser = (props) => {
    // we can use useRef() hook to stop infinite re rendering by useState to use it we need to use ref prop
    const nameInputRef = useRef()//syntax
    const ageInputRef = useRef()
    // const [userInput, setuserInput] = useState(initialvalue)
    // const submitHandler = (e) => {
    //     console.log(userInput);
    //     e.preventDefault();
    // }
    // const inputHandler = (input, value) => {
    // setuserInput((prev) => {
    //     return {
    //         // ...prev,
    //         // [input]: value
    //     }
    // }

    // )

    const [error, setError] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredname = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        console.log(ageInputRef);
        if (enteredname.trim().length === 0 || enteredUserAge.length === 0)//checks if the user does not enter any username and age 
        {
            setError(
                {
                    title: 'inValid input for username and age',
                    message: 'please enter correct input'
                }
            )
            return;
        }
        if (+enteredUserAge < 1)//checks if the user enters the age lesser than 1,eneterAge is of type string so we need to convert it to the number first
        {
            setError(
                {
                    title: 'inValid Age error',
                    message: 'Age should be greater than 1'
                }
            )
            return;
        }
        console.log(enteredname, enteredUserAge);
        props.onAddUser(enteredname, enteredUserAge);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // controlled and uncontrolled Components ->
        //  uncontrolled Components:

        // Example ->
        // function UncontrolledInput() {
        //   const inputRef = useRef(null);

        //   const handleButtonClick = () => {
        //     // Reading the value directly from the DOM using the ref
        //     console.log(inputRef.current.value);
        //   };
        //         // Controlled Components:
        // A controlled component is a React component where the state of the form element is managed by React itself. The component's state holds the current value of the form element, and any changes to the value are managed through React's state management mechanisms. To make a component controlled, you need to explicitly set the value of the form element and provide an onChange event handler to update the state when the value changes.

        // setEnteredUsername('');//set the field to empty after user clicks on submit button
        // setEnteredAge('');//set the field to empty after user clicks on submit button
    }

    const errorHandler = () => {
        console.log("Error cleared");
        setError(null)
    }
    return (
        <Wrapper>

            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />
            }
            <Card myclass={style.input}>
                {/* custom component does not know the clssName we need to explicitly define the className for the custom component in custom function */}
                <form onSubmit={submitHandler}>
                    <label htmlFor='username'>Username</label> <br></br>
                    <input id='username'
                        type='text'
                        ref={nameInputRef}>
                        {/* ref prop to use useRef() */}
                    </input><br></br>
                    <label htmlFor='Age'>Age(Years) </label><br></br>
                    <input id='Age'
                        type='number'
                        ref={ageInputRef}>
                    </input><br></br>
                    <Button type="submit">ADD USER</Button>
                </form >

            </Card>
        </Wrapper>
    )
}
export default AddUser