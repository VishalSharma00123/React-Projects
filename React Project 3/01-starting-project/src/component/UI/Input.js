import style from './input.module.css'
import React from 'react'
const Input = React.forwardRef((props, ref) => {
    // const [set, setUpdate] = useState(0)

    // const InputHandle = (event) => {
    //     setUpdate(event.target.value)
    // }

    return (
        <div className={style.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input