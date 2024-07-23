import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/" className="title">
        <h1>Buk klab</h1>
      </NavLink>
      <NavLink to="/recentbook" className="navbar">
        Recent Book
      </NavLink>
      <NavLink to="/members" className="navbar">
        Members
      </NavLink>
      <NavLink to="/bookslist" className="navbar">
        Books
      </NavLink>
    </div>
  );
};
