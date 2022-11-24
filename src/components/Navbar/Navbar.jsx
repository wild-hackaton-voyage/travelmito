import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';


const Navbar = ({destination}) => {
    return (
        <div className="navBar" >
            <Link to= "/">   
            <h1 id="mitoCard" className="navTabs">
              Travel Mithome
             </h1>
            </Link>
            <Link to= {`/carte/${destination}`}>
            <h1 id="mitoCard" className="navTabs">
              Mito Carte Postale
            </h1>
            </Link>
            <Link to= "/Mitoselfie">  <h1 className="navTabs" id="mitoSelfie">
            Mito Selfie
           </h1> 
           </Link>
            <Link to= "/Mitoticket"> 
             <h1 className="navTabs" id="mitoTicket">
            Mito Billet d'avion
            </h1> </Link>
    </div>
    );
}

export default Navbar;
