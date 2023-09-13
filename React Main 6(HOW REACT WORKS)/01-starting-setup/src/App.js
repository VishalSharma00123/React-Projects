import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App(props) {
  // when a component is re-executed or re-evaluted all its child components are also re-executed and re-evaluted for rg ir this App component is excuted again and again its child components are also re evaluted and executed again
  // this re execution of the child components and thier child components is sometimes reduce the performance in thi code even though prop value for DemoOutput is false the DemoOutput will re excuted again again whwnever we clicks again and again to stop this we can use React.meme it compares new state value with previous value and their is any changes noticed then only it will re-executed and re-evaluted
  console.log("APP Component");//this will be displayed whenever the app component is re rendered
  const [set, update] = useState(false)//set is set to false so 'This is new!' will not be displayed at first clicking the button will in between in between true and false which will hide and display the content 'This is new! Recat.memo only works works for string boolean and other primitves types it doesnot work for non primitive typw such as object array for this we need to use useCallback() Hook'
  const [allowToggle, setAllowParagpragh] = useState(false);

  const clickHandler = useCallback(() => {
    if (allowToggle)
    // we will re evaluate or re excecute this function only when the allowtoggle is true otherwise we takes the old function value using useCallback() Hook
    {
      update((prevState) => !prevState)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowParagpragh(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={set} />
      <Button onClick={allowToggleHandler}>allowToggle</Button>
      <Button onClick={clickHandler}>Toggle Between</Button>
    </div>
  );
}

export default App;


// React useMemo Hook
// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance.

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter