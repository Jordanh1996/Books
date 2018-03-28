import React from 'react';
import BookItem from './BookItem';

const BookList = ({books, onEdit, onRemove}) => (
    <div>
        {
            books ?
            books.map((book) => {
                return <BookItem
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    key={book.title}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            }) : null
        }
    </div>
);

export default BookList;