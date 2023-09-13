import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;//used to display the total amount whose length should not exceed greater than 2

    const haslength = cartCtx.items.length > 0//if the items length is greater than 0 then display Order button

    const CartItems = (<ul className={classes['cart-items']} >

        {
            CartContext.items.map((item) => {
                return (<li>{item.name}</li>)
            })}</ul>)


    return (
        <Modal onClose={props.closeIt}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeIt}>Close</button>
                {haslength && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
