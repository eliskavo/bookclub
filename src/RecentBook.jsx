import Gabrielle_Zevin_Tomorrow from "./Assets/books/Gabrielle_Zevin_Tomorrow.jpg";
import { Link } from "react-router-dom";
import './RecentBook.css'
import './navbar.css';

export const RecentBook = () => {
  return (
    <div>
      <h1>RecentBook:</h1>
      <p>Chosen by: </p>
      <h2>Tomorrow, and Tomorrow, and Tomorrow</h2>
      <h3>by Gabrielle Zevin</h3>
      <img src={Gabrielle_Zevin_Tomorrow} alt="Gabrielle_Zevin_Tomorrow" />
    </div>
  );
};
