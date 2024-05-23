import { Link } from "react-router-dom";
import Gabrielle_Zevin_Tomorrow from "./Assets/books/Gabrielle_Zevin_Tomorrow.jpg";

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
          RecentBook
        </Link>
        <Link to="/bookslist" className="navbar">
          BooksList
        </Link>
        <h1>RecentBook:</h1>
        <p>Chosen by: </p>
        <h2>Tomorrow, and Tomorrow, and Tomorrow</h2>
        <h3>by Gabrielle Zevin</h3>
        <img src={Gabrielle_Zevin_Tomorrow} alt="Gabrielle_Zevin_Tomorrow" />
      </div>
    );
}