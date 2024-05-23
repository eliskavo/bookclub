import { Link } from "react-router-dom";

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
        RecentBook
      </Link>
      <Link to="/bookslist" className="navbar">
        BooksList
      </Link>
      <h1>Books List Davite ahoj</h1>
    </div>
  );
};
