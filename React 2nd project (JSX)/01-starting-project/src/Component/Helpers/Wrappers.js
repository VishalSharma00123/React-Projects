const Wrapper = (props) => {
    return props.children
}
export default Wrapper
// here we are creating Wrapper component in to order to wrap the two or more adjacent component in JSX we know that there must be one root element for all the adjacent elments otherwise it gives error to solve this we might use <div> to wrap but when we use <div> it becomes nested <div> which later will cause problem and may break the css styling to solve this problem we can use a <wrapper> component which returns nothing but its child component