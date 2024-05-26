import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import members from "../data/members-list.json";
import '../navbar.css';

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
                Recent Book
            </Link>
            <Link to="/bookslist" className="navbar">
                Books
            </Link>
            <h1>Member Detail</h1>
            
                    <p>{clen.firstName} {clen.lastName}</p>

    
        </div>
    );
}