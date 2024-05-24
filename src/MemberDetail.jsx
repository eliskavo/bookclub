import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import members from "./members-list.json";
import './navbar.css';

export const MemberDetail = () => {
    
    const { id } = useParams();
    const clen = members.find((item) => item.id === Number(id));


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
            <h1>Member Detail</h1>
            
                    <p>{clen.firstName} {clen.lastName}</p>

    
        </div>
    );
}