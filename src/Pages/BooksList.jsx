import { Link } from "react-router-dom";
import books from "../data/books.json";
import members from "../data/members-list.json";

export const BooksList = () => {
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
      <h1>List of books</h1>

      {books.map((item) => ( //write to ul list titles of books and authors and members
        <ul key={item.id}>
          <li>{item.title} by {item.author} • {item.member}</li>
        </ul>
      ))}
    </div>
  );
};
