import "../App.css";
import { RecentBook } from "./RecentBook";
import { NavLink } from "react-router-dom";
import "../navbar.css";

function App() {

  return (
    <div className="App">
    <NavLink to = "/" className = "title"><h1>Buk klab</h1></NavLink>
    <NavLink to="/members" className="navbar">Members</NavLink>
    <NavLink to="/recentbook" className="navbar">Recent Book</NavLink>
    <NavLink to="/bookslist" className="navbar">Books</NavLink>

      <RecentBook />
    </div>
  );
}

export default App;
