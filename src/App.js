import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Transition from "./components/Navbar/Transition";

const App = () => {
  return (
    <div className="ticketContainer">
      <Router>
        <Transition />
      </Router>
    </div>
  );
};

export default App;
