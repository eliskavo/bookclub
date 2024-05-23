import { Link } from "react-router-dom"
import "./Members.css"
import members from "./members-list.json";

export const Members = () => {

    return (
        <div>
    <Link to = "/" className = "title"><h1>Buk klab</h1></Link>
     <Link to="/members" className="navbar">Members</Link>
     <Link to="/recentbook" className="navbar">RecentBook</Link>
     <Link to="/bookslist" className="navbar">BooksList</Link>
            <h1>Members</h1>
            
                {members.map((item) => (
                    
                        <Link to={`/members/${item.id}`} className="navbar">{item.firstName}</Link>
                    
                ))}
            
        </div>
    )
    
}