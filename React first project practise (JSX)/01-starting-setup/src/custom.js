import './index.css'
export default function Custom(props) {
    const classes = 'concept'
    return (
        <div class={classes}>{props.children}</div>
    )
}