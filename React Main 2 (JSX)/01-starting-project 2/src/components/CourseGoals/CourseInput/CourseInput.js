import React, { useState } from 'react';
import classes from './CourseInput.module.css'
import Button from '../../UI/Button/Button';

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//  & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:${props => (props.inValid ? 'red' : 'black')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.inValid ? 'red' : '#ccc')};
//   font: inherit;
//   background:${props => (props.inValid ? '#ffd7d7' : 'transparent')}
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

//  & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true)
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);

    if (enteredValue.trim().length > 0) {
      setValid(true)
    }
  }
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        {/*  we can also use square bracket to access the classes */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form >
  );
};

export default CourseInput;

//using css styles-components method
 //   return (
//   <form onSubmit={formSubmitHandler}>
//   <FormControl inValid={!isValid}>
//     <label>Course Goal</label>
//     <input type="text" style={{ borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'salmon' : 'transparent' }} onChange={goalInputChangeHandler} />
//   </FormControl>
//   <Button type="submit">Add Goal</Button>
// </form >
// );
