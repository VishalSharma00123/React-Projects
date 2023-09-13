import React from "react";

// the component which sends the data to the other component is the provider and the component which will recieve the data is the consumer
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (Item) => { },
    removeItem: (id) => { }
})

export default CartContext;