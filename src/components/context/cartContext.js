import React from 'react'
 

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) =>{},
    clearItem: (id) => {},
    clearCart: () => {},
});

 
export default CartContext;