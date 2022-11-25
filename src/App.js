import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Transition from "./components/Navbar/Transition";
import LogoCache from "./asssets/photo/logo-cache-spline.jpg";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

const App = () => {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4250);
  }, []);


  return (
    <div className="ticketContainer">
      <div className="logoBottom">
        <img src={LogoCache} alt={LogoCache} />
      </div>
      <Router>
      {!loading && <LoadingPage />}
        <Transition />
      </Router>
    </div>
  );
};

export default App;
