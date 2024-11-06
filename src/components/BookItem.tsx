import React from 'react';
import './BookItem.css';
function BookItem({ title, author, year, coverId }) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-item">
      <img src={coverUrl} alt={title} className="book-cover" />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Published: {year}</p>
    </div>
  );
}
export default BookItem;
