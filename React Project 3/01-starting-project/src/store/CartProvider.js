import React from 'react'
import CartContext from './cart-context'
import { useReducer } from 'react'

// i created this function outiside the component because i dont need anything from the component
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;

}

const CartProvider = (props) => {
    //1st argument is always our state snapshots i.e our current array and 2nd argument is a function which allows  us to dispatch an action to the reducer
    const [cartState, dispatchCartaction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartaction({ type: 'ADD', item: item })
    }

    const removeItemCartHandler = id => {
        dispatchCartaction({ type: 'REMOVE', id: id })

    }

    const mycartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemCartHandler
    }

    return (
        <CartContext.Provider value={mycartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
