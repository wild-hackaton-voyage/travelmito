import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mitoticket from "./Mitoticket/MitoTick";

const MitoVerse = ({ handleDestination, destination }) => {
  return (
    <div>
      <Navbar handleDestination={handleDestination} destination={destination} />
      <Mitoticket
        handleDestination={handleDestination}
        destination={destination}
      />
    </div>
  );
};

export default MitoVerse;
