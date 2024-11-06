import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found. Try searching for another title.</p>
      ) : (
        books.map((book, index) => (
          <BookItem
          key={index}
          title={book.title}
          author={book.author_name ? book.author_name[0] : "Unknown Author"}
          year={book.first_publish_year || "Unknown Year"}
          coverId={book.cover_i} // Cover image ID from the API
        />
        ))
      )}
    </div>
  );
}
export default BookList;
