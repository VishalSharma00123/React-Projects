import React from 'react';
import AddUser from './Component/userInput/AddUser';
import UserList from './Component/userInput/UsersList';
import { useState } from 'react';
function App(props) {
  const [userList, setuserInput] = useState([])
  const addUserHandler = (uName, uAge) => {
    setuserInput((previous) => {
      return [...previous, { name: uName, age: uAge }]
    })
  }
  return (
    // <>
    //   {/* we can also use <>...</> to wrap the adcaent elements but it only wokr some of the projects */}
    //   <AddUser onAddUser={addUserHandler} />
    //   <UserList users={userList} />
    // </>
    <React.Fragment>
      {/* or <Fragment>....</Fragment> */}
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
