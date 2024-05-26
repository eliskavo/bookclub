import { Link } from "react-router-dom";
import Gabrielle_Zevin_Tomorrow from "../Assets/books/Gabrielle_Zevin_Tomorrow.jpg";
import '../navbar.css';
import books from "../data/books.json";
import members from "../data/members-list.json"
import { RecentBook } from "./RecentBook";


export const RecentBookDetail = () => {
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
        <RecentBook />
      </div>
    );
}