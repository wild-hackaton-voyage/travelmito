import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="navbar-container" >
        <ul>
            <li>Travel Mithome</li>
            <li>Mito Carte postale</li>
            <li>Mito Selfie</li>
            <li>Mito ticket</li>
        </ul>
    </div>
    );
}

export default Navbar