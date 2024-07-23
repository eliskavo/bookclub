import {NavLink } from "react-router-dom"
import "../Members.css"
import members from "../data/members-list.json";
import { NavBar } from "../Components/NavBar";

export const Members = () => {

    return (
        <div>
            <NavBar />

            <h1>Members</h1>
            
                {members.map((item) => (
                    
                        <NavLink to={`/members/${item.id}`} className="navbar">{item.firstName}</NavLink>
                    
                ))}
            
        </div>
    )
    
}