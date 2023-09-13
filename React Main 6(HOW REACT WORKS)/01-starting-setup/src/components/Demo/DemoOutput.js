import React, { Fragment } from 'react'
import MyParagprah from './MyParagprah';

const DemoOutput = (props) => {
    console.log('Demo Component');
    return (
        <MyParagprah>{props.show ? "This is new!" : ''}</MyParagprah>
    )
    // if the props.show is true then it will display 'This is new' otherwise it wont display anything
}

export default React.memo(DemoOutput)
// it re-renders only if its prosp value changes
