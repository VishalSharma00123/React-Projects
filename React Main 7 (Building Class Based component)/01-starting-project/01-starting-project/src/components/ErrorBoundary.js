import { Component, Fragment } from "react";

// Note : to handle the error we need to use class based component there is no equivalent method in functional component to handle this error
class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    // componentDidCatch is used to catch the error and displat it here we will update the state if any error is encountered
    componentDidCatch(error) {
        this.setState({ hasError: true })
    }
    render() {

        if (this.state.hasError) {
            return <p>Something went wrong</p>
        }
        else {
            return this.props.children
        }
    }
}
export default ErrorBoundary