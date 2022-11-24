import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import './App.css';
import Transition from './components/Navbar/Transition';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Transition/>
      </Router>  
    </div>
  );
};

export default App;