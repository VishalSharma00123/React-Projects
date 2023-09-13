import Card from "../UI/Card";
import styles from './UserList.module.css'
const UserList = (props) => {
    return (
        <Card myclass={styles.users}>
            <ul>
                {props.users.map(user => {
                    return (
                        <li key={Math.random()}>{user.name}({user.age}) years old</li>
                    )
                })}
            </ul>
        </Card>
    )
}
export default UserList;