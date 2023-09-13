// import styled from 'styled-components'
import React from 'react';
import styles from './Button.module.css'//this is the anothe method of importing css files or using css modules instead of using styles we can use any names
// we need to add .module in css file like Button.module.css
// we can aslo write css styling inside react page or js page or as a jsx component this helps in detecting theduplicate classname of css and helps in finding any css styling easily ehich savees lots of time
// sytax=import the styled from styled-components and created a html elment using keyword styled.elment(html elemnt) and write all the csss styling inside the backtick ``
// const Button = styled.button`
//   width:100%
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   @media (min-width:768px)
//   {
// .button{
//     width:auto;
// }
//   }
// &:focus {
//   outline: none;
// }

// &:hover,
// &.button:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
