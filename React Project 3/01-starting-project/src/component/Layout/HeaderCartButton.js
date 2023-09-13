import { Fragment } from "react"
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/Carticon"
import { useContext } from "react"
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <Fragment>
            <button className={styles.button} onClick={props.myTrigger}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart </span>
                <span className={styles.badge}>{numberofCartItems}</span>
            </button>
        </Fragment>
    )
}
export default HeaderCartButton