import React, { useEffect, useState } from "react";
import { Routes, Route, useSubmit } from "react-router-dom";
import Mithome from "../../pages/Mithome/Mithome";
import Mitocard from "../../pages/Mitocard/Mitocard";
import MitoPdf from "../../pages/MitoPDF/MitoPdf";
import MItoPdfView from "../../pages/MitoPDF/MitoPdfView";
import Mitoselfie from "../../pages/Mitoselfie/Mitoselfie";
import Mitoticket from "../../pages/Mitoticket/MitoTick";
import MitoVerse from "../../pages/MitoVerse";
import ErrorMessage from "../ErrorMessage";

function Transition() {
  const [destination, setDestination] = useState("");
  const [cityName, setCityName] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [ticket, setTicket] = useState("");

  const handleDestination = (destination) => {
    setDestination(destination);
  };

  return (
    <Routes>
      <Route path="/" element={<Mithome />} />
      <Route
        path="/carte/:id"
        element={
          <Mitocard
            handleDestination={handleDestination}
            destination={destination}
          />
        }
      />
      <Route
        path="/Mitoselfie/:id"
        element={<Mitoselfie destination={destination} />}
      />
      <Route
        path="/Mitoticket/:id"
        element={
          <MitoVerse
            handleDestination={handleDestination}
            destination={destination}
            ticket={ticket}
            setTicket={setTicket}
            cityName={cityName}
            setCityName={setCityName}
            cityCode={cityCode}
            setCityCode={setCityCode}
          />
        }
      />
      <Route
        path="/MitoPDF"
        element={
          <MItoPdfView
            ticket={ticket}
            cityName={cityName}
            cityCode={cityCode}
          />
        }
      />
      <Route path="*" element={<ErrorMessage />} />
    </Routes>
  );
}

export default Transition;
