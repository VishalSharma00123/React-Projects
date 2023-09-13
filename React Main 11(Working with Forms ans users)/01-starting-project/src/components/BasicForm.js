import { useState } from "react";
import useForm from "../hooks/use-form";
import Input from "./Input";
const BasicForm = (props) => {
  const isNotEmpty = value => value.trim() !== ''

  const {
    value: enteredfirstName,
    isValid: firstNameisValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameChangedHandler,
    reset: resetfirstNameInput,
    inputblurHandler: firstnameBlurHandler } = useForm(isNotEmpty)//custom hook

  const {
    value: enteredLastName,
    isValid: lastNameisValid,
    hasError: lastnameInputHasError,
    reset: resetlastNameInput,
    valueChangeHandler: lastnameChangedHandler,
    inputblurHandler: lastnameBlurHandler } = useForm(isNotEmpty)//custom hook

  const {
    value: enteredEmail,
    isValid: emailisValid,
    reset: resetemail,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputblurHandler: emailBlurHandler } = useForm(value => value.includes('@'))//custom hook

  let formisValid = false;
  if (firstNameisValid && lastNameisValid && emailisValid) {
    formisValid = true;
  }
  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (!formisValid) {
      return;
    }
    resetfirstNameInput();
    resetlastNameInput();
    resetemail();

  }
  console.log(enteredfirstName);
  console.log(enteredLastName);
  console.log(enteredEmail);

  const firstnameinputclass = !firstnameInputHasError ? 'form-control' : 'form-control invalid'
  const lastnameinputclass = !lastnameInputHasError ? 'form-control' : 'form-control invalid'
  const emailinputclass = !emailHasError ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formsubmitHandler}>
      <div className='control-group'>
        <Input
          label='First Name'
          className={firstnameinputclass}
          type='text'
          id='firstname'
          htmlFor='firstname'
          value={enteredfirstName}
          onBlur={firstnameBlurHandler}
          Error={firstnameInputHasError}
          onCnpm stafhange={firstnameChangedHandler}
          text='Please enter your first name'
        />
        <Input
          label='Last Name'
          className={lastnameinputclass}
          type='text'
          id='lastname'
          htmlFor='lastname'
          onCnpm stafhange={lastnameChangedHandler}
          value={enteredLastName}
          onBlur={lastnameBlurHandler}
          Error={lastnameInputHasError}
          text='Please enter your last name'
        />

      </div>
      <Input
        label='Email'
        className={emailinputclass}
        type='email'
        id='email'
        htmlFor='email'
        onCnpm stafhange={emailChangedHandler}
        value={enteredEmail}
        onBlur={emailBlurHandler}
        Error={emailHasError}
        text='Please enter your email'
      />
      <div className='form-actions'>
        <button disabled={!formisValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
