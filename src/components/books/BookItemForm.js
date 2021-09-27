import React, {useRef} from 'react'
import './BookItemForm.css'

function BookItemForm({onAddToCart}) {

    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = parseInt(amountInputRef.current.value);

        onAddToCart(enteredAmount)
    }

    return (
        <form onSubmit={submitHandler} className="d-flex flex-column align-item-center justify-content-center">
            <div className="d-flex">
             <label className="text-white" htmlFor="">Amount</label>
             <input ref= {amountInputRef}  type="number" min="1" max="5" defaultValue="1"></input>
            </div>
            <button type="submit" className="btn btn-sm btn-danger mt-2">+Add</button>
        </form>
    )
}

export default BookItemForm;
