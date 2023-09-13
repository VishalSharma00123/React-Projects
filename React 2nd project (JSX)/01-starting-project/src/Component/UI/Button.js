import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button onClick={props.myclick} className={classes.button} type={props.type || 'button'} >{props.children}</button>
    )
}
export default Button;