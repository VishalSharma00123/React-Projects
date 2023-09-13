import React from 'react'

const MyParagprah = (props) => {
    console.log('My Paragraph Component');
    return (
        <p>{props.children}</p>
    )
    // if the props.show is true then it will display 'This is new' otherwise it wont display anything
}

export default MyParagprah
