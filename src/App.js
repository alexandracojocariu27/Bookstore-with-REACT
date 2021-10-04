import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import './App.css';
import Cart from "./components/cart/Cart";
import axios from 'axios';
import BooksList from "./components/books/BooksList";
import CartProvider from "./components/context/CartProvider";
import Pagination from "./components/pagination/Pagination";


function App() {
  
  // States
  const [apiData, setApiData] = useState([])
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

  // Functions
  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  useEffect(() =>{
    axios.get(' https://api.itbook.store/1.0/search/web')
    .then(res => {
      setApiData(res.data.books)
    })
  }, [])
  
  return (
     
     <CartProvider>
       {showCart ? <Cart onHideCart = {hideCartHandler}/> : null}
       <Header onShowCart = {showCartHandler}></Header>
       <BooksList books={currentPageItems}></BooksList>
       <Pagination totalItems={apiData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
     </CartProvider>
  );
}

export default App;
