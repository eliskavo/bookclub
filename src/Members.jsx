import {NavLink } from "react-router-dom"
import "./Members.css"
import members from "./members-list.json";

export const Members = () => {

    return (
        <div>
    <NavLink to = "/" className = "title"><h1>Buk klab</h1></NavLink>
     <NavLink to="/members" className="navbar">Members</NavLink>
     <NavLink to="/recentbook" className="navbar">RecentBook</NavLink>
     <NavLink to="/bookslist" className="navbar">BooksList</NavLink>
            <h1>Members</h1>
            
                {members.map((item) => (
                    
                        <NavLink to={`/members/${item.id}`} className="navbar">{item.firstName}</NavLink>
                    
                ))}
            
        </div>
    )
    
}