import { NavLink } from "react-router-dom";
import { HoverText } from "./HoverText";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/" className="title">
        {/* <h1 className="stroke-text">buk klab</h1> */}
      <HoverText text="buk klab" />
      </NavLink>
      <NavLink to="/recentbook" className="navbar text-shadow-navbar">
        recent book
      </NavLink>
      <NavLink to="/members" className="navbar text-shadow-navbar">
        members
      </NavLink>
      <NavLink to="/bookslist" className="navbar text-shadow-navbar">
        books
      </NavLink>
    </div>
  );
};
