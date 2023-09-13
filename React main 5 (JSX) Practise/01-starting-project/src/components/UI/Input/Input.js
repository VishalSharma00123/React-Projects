import React from 'react'
import { useState, useRef, useEffect, useContext, useImperativeHandle } from 'react';
import classes from './input.module.css';
// import AuthContext from '../../Home/context/auth-content';
// import Button from '../Button/Button';
// useimperativeHandler is used to forward the ref data from one component to another component
//  useimperativeHandler consist of two parameters second consist of key value pair where key can be of any userdefined name and value holds the data which we want to accces from the outside
// 1st parameter is ref which establish the connection between two component to transfer data using refs
// inorder to enable the ref we need to wrap the component in special bindind called React.forward()

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef()

  const activate = () => {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
    return {
      active: activate//activate refers to the outer function
    }
  })


  return (
    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
        }`}//props.isValid=true or false
    >
      <label htmlFor={props.id} >{props.label}</label>
      {/* props.label='E-Mail' */}
      <input
        ref={inputRef}
        type={props.type}//props.type=
        id={props.id}//props.id='email'
        value={props.value}//props.id='email'
        onChange={props.onChange}//props.onChange=emailChangeHandler
        onBlur={props.onBlur}//props.onBlur=validateEmailHandler}
      />
    </div>
  )
})

export default Input
