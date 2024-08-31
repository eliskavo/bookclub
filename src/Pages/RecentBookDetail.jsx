import { Link } from "react-router-dom";
import Gabrielle_Zevin_Tomorrow from "../Assets/books/Gabrielle_Zevin_Tomorrow.jpg";
import "../Styling/navbar.css";
import books from "../data/books.json";
import members from "../data/members-list.json"
import { RecentBook } from "./RecentBook";
import { NavBar } from "../Components/NavBar";


export const RecentBookDetail = () => {
    return (
        <div>
        <NavBar />
        <RecentBook />
      </div>
    );
}