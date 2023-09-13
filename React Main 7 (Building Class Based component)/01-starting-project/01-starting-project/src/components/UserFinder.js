import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from './store/user-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {

    static contextType = UsersContext
    constructor() {
        super()
        this.state = {
            SearchTerm: '',
            filteredUsers: [],
        }
    }

    // componentDidMount run only once
    componentDidMount() {
        this.setState({ filteredUsers: this.context.users })
    }
    // in CBC there is no inbuilt mechanism to check whether the previous state snapshot is different from the new state snapshots are to decide whether to re evaluate it or not however in useEffect() we have dependency to compare the values
    // in CBC we can solve this problem using if condition by passing prevProps and prevState as the argument value we check if prevState is different from this.state(current state) or not if is different then only we re renders otherwise not
    componentDidUpdate(prevProps, prevState) {
        if (prevState.SearchTerm !== this.state.SearchTerm) {
            this.setState(
                {
                    filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.SearchTerm))
                }
            )
        }
    }
    searchChangeHandler = (event) => {
        this.setState(
            {
                SearchTerm: event.target.value
            }
        )
    };



    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    {/* we bind the this keyword to ensure that this keyword is working properly or not */}
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    };
}
export default UserFinder;