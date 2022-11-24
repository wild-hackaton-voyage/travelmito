import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';


const Navbar = ({destination}) => {
    return (
        <div className="navBar" >
        
            {/* <Link to= "/"> <li>Travel Mithome</li> </Link> */}
            <Link to= {`/carte/${destination}`}>   <h1 id="mitoCard" className="navTabs">
        MitoCard
      </h1> </Link>
            <Link to= "/Mitoselfie">   <h1 className="navTabs" id="mitoSelfie">
        MitoSelfie
      </h1> </Link>
            <Link to= {`/Mitoticket/${destination}`}>  <h1 className="navTabs" id="mitoTicket">
        MitoTicket
      </h1></Link>
        
    </div>
    );
}

export default Navbar;
