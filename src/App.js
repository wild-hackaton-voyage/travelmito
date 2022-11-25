import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Transition from "./components/Navbar/Transition";
import LogoCache from "./asssets/photo/logo-cache-spline.jpg";

const App = () => {
  return (
    <div className="ticketContainer">
      <div className="logoBottom">
        <img src={LogoCache} alt={LogoCache} />
      </div>
      <Router>
        <Transition />
      </Router>
    </div>
  );
};

export default App;
