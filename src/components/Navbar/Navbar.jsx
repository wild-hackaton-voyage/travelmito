import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navBar">
      <h1 id="mitoCard" className="navTabs">
        MitoCard
      </h1>
      <h1 className="navTabs" id="mitoSelfie">
        MitoSelfie
      </h1>
      <h1 className="navTabs" id="mitoTicket">
        MitoTicket
      </h1>
    </div>
  );
};

export default Navbar;
