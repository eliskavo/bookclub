import React from 'react';
import { NavLink } from "react-router-dom";
import { NavBar } from '../Components/NavBar';
export const JoinBukKlab = () => {
   
return(
    <div>
        <NavBar />
        <h1 className ="section-title">Join Buk Klab</h1>
        <p>Join Buk Klab to get access to the latest books and reviews</p>
        <NavLink to="/join" className="navbar text-shadow-navbar-main">
          join buk klab
        </NavLink>
    </div>
);
};