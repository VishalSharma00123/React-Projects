import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Home/context/auth-content';
import Input from '../UI/Input/Input';

//we create reducer funciton outside of the component as you can see
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val, isValid: action.val.includes('@')
    }
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.includes('@')
    }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.trim().length > 6
    }
  }
  return { value: '', isValid: false }
}
const Login = (props) => {

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // useReducer refer react docs for explanation
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log("EFFECT CLEANUP");
    }
  }, [])//this useEffect will get triggered only when we type password
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
    {
      value: "",
      isValid: null
    })

  const authCtx = useContext(AuthContext)
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  // object destructuring
  // syntax for object destructuring
  const { isValid: emailIsValid } = emailState//here we are pulling out isValid from the isValid and storung it in a constant variable emailIsValid
  const { isValid: passwordIsValid } = passwordState
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity');
      console.log(emailState);
      console.log(passwordState);
      // by using setTimeout we can decide after how much time the function get displayed on the console or rerendered

      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 1000)//the function will be rendered in every 1000ms
    return () => {
      console.log('CLEAN UP');//cleanup fucntion runs before the actual function executes or re renders
      // if the the renders for the first  time then we say it is mounting
      // if the the renders for the first  time then we say it is mounting
      clearTimeout(identifier);
    }//cleanup function
  }, [emailIsValid, passwordIsValid])

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailIsValid) {
      emailInputRef.current.focus();
    }
    else {
      passwordInputRef.current.focus()

    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid} value={emailState.value} />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          value={passwordState.value} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card >
  );
};

export default Login;
// useEffect() :->
// Empty Dependency Array ([]): If you provide an empty dependency array, like useEffect(() => {...}, []), it means that the effect will only run after the initial render of the component. It's as if you're saying "run this effect once when the component is mounted and don't re-run it thereafter."

//Dependency Array with Values: If you provide a dependency array with values, like useEffect(() => {...}, [dependency1, dependency2, ...]), the effect will run whenever any of the values listed in the dependency array change between renders.

// If any of the dependencies change compared to their values from the previous render, the effect will be triggered after the component renders. This is often used for scenarios like data fetching or updating the DOM when certain data changes.

// If the dependencies remain the same as they were in the previous render, the effect will not run again. 
