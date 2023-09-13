import React from 'react'
import { useState } from 'react'
// creating a custom hook
const useForm = (validatevalue) => {
    const [enteredValue, setenteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueisValid = validatevalue(enteredValue)
    const hasError = !valueisValid && isTouched;

    const valueChangeHandler = (e) => {
        setenteredValue(e.target.value);
    }

    const inputblurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setIsTouched(false);
        setenteredValue('');
    }
    return {
        value: enteredValue,
        hasError: hasError,
        reset: reset,
        isValid: valueisValid,
        valueChangeHandler: valueChangeHandler,
        inputblurHandler: inputblurHandler
    }


}

export default useForm
