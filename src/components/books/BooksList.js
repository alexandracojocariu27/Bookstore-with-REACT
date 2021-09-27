import React from 'react'
import Card from './Card'
import BookItem from './BookItem'

function BooksList({books}) {
    return (
        <Card>
          <ul id="books-list" className="p-0">
            {books.map((book) => (
                <BookItem key={book.isbn13} id={book.isbn13} title={book.title} subtitle={book.subtitle} price={book.price}/>
            ))}
        </ul>  
        </Card>
    )
}

export default BooksList;
