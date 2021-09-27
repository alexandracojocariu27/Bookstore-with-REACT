import React, {useContext} from 'react';
import HeaderImage from '../../assets/header-img.jpg';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/cartContext';


function Header({onShowCart}) {

    const clickCartHandler = () => {
        onShowCart()
    }

    const shopNowButton = () => {
        let card = document.getElementById('card');
        card.scrollIntoView(true);
    }

    const  cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((currentNumber, item) =>{
        return currentNumber + item.amount;
    }, 0)
    
    return (
        <header>
           <nav className="bg-primary px-2 py-3 px-md-4 d-flex justify-content-between align-items-center">
               <h1 className="text-white fs-5">Digital Book Store</h1>
               <button onClick={clickCartHandler} id="header-button" className=" col-6 col-md-3 col-xl-2 col-xxl-2 rounded-pill bg-dark border-0 d-flex justify-content-center py-3 align-items-center">
                   <div><FontAwesomeIcon icon={faCartPlus} color="#ffffff" size="1x" className="me-2" /></div>
                   <p className="text-white d-flex align-items-center m-0 me-2"> Your cart</p>
                   <div className="bg-danger px-3 py-1 rounded-circle text-white">{numberOfItems}</div>
               </button>
            </nav> 
           
            <div id="header-img-div" className="d-flex flex-column justify-content-center align-items-center">
                <img id="header-img" className="img-fluid " src={HeaderImage} alt="bookstore"/>
                <div className="bg-dark text-white py-3 rounded-2 col-md-5 col-9 px-4 py-2 d-flex flex-column align-items-center justify-content-center text-center" id="img-card"><p className="fs-6">Your web development books collection!</p> <button onClick={shopNowButton} className="btn btn-light mt-3">Shop now</button></div>
            </div>
                 
             
            
        </header>
    )
}

export default Header
