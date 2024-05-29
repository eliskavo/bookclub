import React, { useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../data/books.json"; // Adjust the path as needed

export const BooksList = () => {
  const [randomBook, setRandomBook] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false); // New state to track button press

  const getRandomBook = () => {
    setButtonPressed(true); // Set button pressed to true
    const unreadBooks = booksData.filter(book => !book.isRead);
    console.log('Unread books:', unreadBooks); // Debug: Log the unread books
    if (unreadBooks.length > 0) {
      const randomIndex = Math.floor(Math.random() * unreadBooks.length);
      setRandomBook(unreadBooks[randomIndex]);
      console.log('Selected random book:', unreadBooks[randomIndex]); // Debug: Log the selected book
    } else {
      setRandomBook(null); // No unread books available
    }
  };

  const unreadBooks = booksData.filter(book => !book.isRead);

  return (
    <div>
      <Link to="/" className="title">
        <h1>Buk klab</h1>
      </Link>
      <Link to="/members" className="navbar">
        Members
      </Link>
      <Link to="/recentbook" className="navbar">
        Recent Book
      </Link>
      <Link to="/bookslist" className="navbar">
        Books
      </Link>
      <h1>Available books</h1>
      <ul>
        {unreadBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} (recommended by {book.member})
          </li>
        ))}
      </ul>
      <h2>Random Book</h2>
      <button onClick={getRandomBook}>Get Random Book</button>
      {buttonPressed ? (
        randomBook ? (
          <div>
            <p>Title: {randomBook.title}</p>
            <p>Author: {randomBook.author}</p>
            <p>Member: {randomBook.member}</p>
          </div>
        ) : (
          <p>No unread books available.</p>
        )
      ) : (
        <p>Select a book.</p>
      )}
    </div>
  );
};
