import React from 'react'
import { useState, useReducer } from 'react'

const initialState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value }
    }
    if (action.type === 'BLUR') {
        return { isTouched: true }
    }
    if (action.type === 'RESET') {
        return { isTouched: false, value: '' }
    }
    return inputStateReducer
}

const useInput = (validateValue) => {
    const [inputstate, dispatch] = useReducer(inputStateReducer, initialState)

    const valueIsValid = validateValue(inputstate.value);
    const hasError = !valueIsValid && inputstate.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value })
    };

    const inputBlurHandler = event => {
        dispatch({ type: 'BLUR' })
    };

    const reset = () => {
        dispatch({ type: 'RESET', })
    }
    return {
        value: inputstate.value,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler,
        reset: reset,
    }

    return (
        <div>

        </div>
    )
}

export default useInput
