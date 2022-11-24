import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';


const Navbar = ({destination}) => {
    return (
        <div className="navBar" >
        
            <Link to= "/">   <h1 id="mitoCard" className="navTabs">
        MitoCard
      </h1> </Link>
            <Link to= {`/carte/${destination}`}> <li>Mito Carte postale</li> </Link>
            <Link to= "/Mitoselfie">  <h1 className="navTabs" id="mitoSelfie">
        MitoSelfie
      </h1> </Link>
            <Link to= "/Mitoticket">  <h1 className="navTabs" id="mitoTicket">
        MitoTicket
      </h1> </Link>
       
    </div>
    );
}

export default Navbar;
