import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// we willl convert this functional to class based component as we know class based component doesnot consist of hooks(useState,useEffect.....)

class Users extends Component {
  componentWillUnmount() {
    console.log("User will unmount");
  }
  // there is different mechanis, of using states in class based component
  // in  CBC initialize the state and then update it accordingly we need to use contructor to define states
  constructor(props) {
    super(props)//contsructor of the Component(parent) class
    this.state = {//initializing the object
      showUsers: true,
      more: 'Test'
    }
  }

  componentDidUpdate() {
    if (this.props.users.length === 0)
      throw new Error('No users provided')
  }

  toggleUsersHandler = () =>//methods inside the class are not declared with any keyword like let const and var
  {
    //setState() updates the states
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    })
  };

  render()//whatever written inside this curly braces will rendered 
  {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users} >
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div >
    );
  };
}

export default Users;


// Component Constructor
// If there is a constructor() function in your component, this function will be called when the component gets initiated.

// The constructor function is where you initiate the component's properties.

// In React, component properties should be kept in an object called state.

// You will learn more about state later in this tutorial.

// The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

// Changing the state Object
// To change a value in the state object, use the this.setState() method.

// When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

// Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method(and all the other lifecycle methods).