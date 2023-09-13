import { Component } from 'react';
import classes from './User.module.css';

// class based component consist of the class name followed by curly braces insided the class we can use many methods like contructor() method render() method
// render() methos is sepecific method which is rendered or called by react when it encounters any component in the JSX code and react will call render() method to find out what should be render on the screen
// we cannot directly use the props in class based component in order to use propa we need to import the Component from the react and then inherit all the properties of the component in to the  created class using extends keyword 
// we need to use this keyword to use props like this.props
class User extends Component {
  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    )
  }
}

export default User

// class based component can work with functional based component as we can see here using this is not a good approach we should eithrt usr class based or functional based component