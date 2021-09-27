import React, {useContext} from 'react'
import Modal from './Modal'
import CartContext from '../context/cartContext'
import CartItem from './CartItem'

function Cart({onHideCart}) {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const closeCartHandler = () => {
        onHideCart()
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
        console.log(item)
    }

    const cartItemClearHandler = (id) => {
        cartCtx.clearItem(id);
    };

    const clearCartHandler = () => { 
       cartCtx.clearCart();
    };

     
    return (
        <Modal>
            <ul id="cart-items" className="p-0">
                {cartCtx.items.map((item, index) => (
                   <CartItem item={item} key={item.id} id={item.id} title={item.name} subtitle={item.description} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler} onAdd = {cartItemAddHandler} onClear = {cartItemClearHandler}/> 
                ))}
            </ul>
            <div className="d-flex justify-content-between">
                <span className="text-white">{cartCtx.items.length > 0 ? "Total amount" : "Cart is empty"}</span>
                <span className="text-white">{cartCtx.items.length > 0 && totalAmount}</span>
            </div>

            <div className="d-flex justify-content-end mt-1">
                <button className="btn-sm btn-danger me-2" onClick={closeCartHandler}>Close</button>
                {hasItems && <button onClick = {clearCartHandler}   className="btn-sm btn-dark text-white me-2">Clear</button>}
                {hasItems && <button className="btn-sm btn-success">Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
