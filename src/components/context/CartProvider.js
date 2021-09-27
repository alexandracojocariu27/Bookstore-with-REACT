import React, {useReducer} from 'react'
import CartContext from './cartContext'

// reducer initial state

const lsItems = JSON.parse(localStorage.getItem('cartItems'));

const defaultState = {
    items: lsItems !== null ? lsItems: [],
    totalAmount: 0
};

// reducer function
const cartReducer = (state, action) => {
    
    if(action.type === 'ADD') {

        let updatedItems;
        let updatedTotalAmount;
        let updatedItem;

        // check if the items exist in the cart
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingItemIndex];

        updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        if(existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {

            updatedItems = state.items.concat(action.item);
        }

         
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    } else if(action.type === "REMOVE") {

        let updatedItems;
        let updatedTotalAmount;
        let updatedItem;
         
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        const existingCartItem = state.items[existingItemIndex];
        
        updatedTotalAmount = state.totalAmount - existingCartItem.price;

        if(existingCartItem.amount === 1) {
             updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
         
    }  else if(action.type === 'REMOVEALL') {
        return {
            items: [],
            totalAmount: 0
        }
    } else if(action.type === 'CLEARITEM') {
        let updatedItems;
        let updatedTotalAmount;
        // let updatedItem;

        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        const existingCartItem = state.items[existingItemIndex];

        updatedTotalAmount = state.totalAmount - existingCartItem.price*existingCartItem.amount;

        updatedItems = state.items.filter(item => item.id !== action.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    
    
};

function CartProvider(props) {
    
     
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
    
     
    localStorage.setItem('cartItems', JSON.stringify(cartState.items));  

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const clearItemHandler = (id) => {
        dispatchCartAction({type: 'CLEARITEM', id: id});
    };

    const clearCartHandler = () =>{
        dispatchCartAction({type: 'REMOVEALL'})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearItem : clearItemHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
          {props.children}  
        </CartContext.Provider>
    )
}

export default CartProvider;
