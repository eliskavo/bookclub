import { NavLink } from "react-router-dom";
import { HoverText } from "./HoverText";
import "../Styling/navbar.css";

export const NavBar = () => {
  return (
    <div className="header">
      {/* Logo on the left */}
      <NavLink to="/" className="logo">
        <HoverText text="buk klab" />
      </NavLink>
      {/* Navbar on the right */}
      <div className="navbar-container">
        <NavLink to="/recentbook" className="navbar text-shadow-navbar">
          about
        </NavLink>
        <NavLink to="/bookslist" className="navbar text-shadow-navbar">
          books
        </NavLink>
        <NavLink to="/members" className="navbar text-shadow-navbar">
          members
        </NavLink>
        <NavLink to="/join" className="navbar text-shadow-navbar-main">
          join buk klab
        </NavLink>
      </div>
    </div>
  );
};
