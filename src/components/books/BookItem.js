import React, {useContext} from 'react'
import './BookItem.css'
import BookItemForm from './BookItemForm'
import CartContext from '../context/cartContext'

function BookItem({id, title, subtitle, price}) {

    const cartCtx = useContext(CartContext)

    const itemPrice = Number(price.replace('$', ""));
    
    const addToCartHandler = (amount) => {
        
        cartCtx.addItem({
            id: id,
            description: subtitle,
            name: title,
            amount: amount,
            price: itemPrice,
        });
    }
    
    return (
        <li id="book-item" className="d-flex justify-content-between text-start py-2">
            <div id="book-item-details">
                <div className="fs-6 fw-bold text-white">{title}</div>
                <div className="text-white">{subtitle}</div>
                <div className="text-danger">{price}</div>
            </div>

            <div id="book-item-form" className="ms-3">
                <BookItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default BookItem
