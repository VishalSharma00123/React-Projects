import React from 'react'

const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input
                onChange={props.onChange}
                type={props.type}
                id={props.id}
                value={props.value}
                onBlur={props.onBlur} />
            {props.Error && <p className="error-text">{props.text}</p>}
        </div>
    )
}

export default Input
