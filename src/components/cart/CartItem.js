import React from 'react'
import './CartItem.css'

function CartItem({item, id, title, subtitle, price, amount, onRemove, onAdd, onClear}) {
    
    const increaseAmountHandler = (e) => {
        onAdd(item)
    }

    const decreaseAmountHandler = (e) => {
        onRemove(id)
    }

    const deleteItemHandler = (e) => {
        onClear(id);
    }

    return (
        <li id="cart-item" className="d-flex py-2 ">
            <div id="cart-item-details" className="me-3">
                <div className="fs-5 text-white">{title}</div>
                <div className="text-white">{subtitle}</div>
                <div className="d-flex justify-content-between">
                    <div className="text-danger">{`$${price}`}</div>
                    <div className="text-white">{`x${amount}`}</div>

                </div>
            </div>

            <div className="d-flex align-items-start" id="cart-item-actions">
                <button className="btn-sm btn-light me-1 fw-bold" onClick={decreaseAmountHandler}>-</button>
                <button className="btn-sm btn-light fw-bold" onClick={increaseAmountHandler}>+</button>
                <button onClick = {deleteItemHandler} className="btn-sm btn-danger ms-1">X</button>
                 
            </div>
        </li>
    )
}

export default CartItem
