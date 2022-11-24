import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';


const Navbar = ({destination}) => {
    return (
        <div className="navbar-container" >
        <ul>
            <Link to= "/"> <li>Travel Mithome</li> </Link>
            <Link to= {`/carte/${destination}`}> <li>Mito Carte postale</li> </Link>
            <Link to= "/Mitoselfie"> <li>Mito Selfie</li> </Link>
            <Link to= "/Mitoticket"> <li>Mito ticket</li> </Link>
        </ul>
    </div>
    );
}

export default Navbar