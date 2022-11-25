import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mitoticket from "./Mitoticket/MitoTick";

const MitoVerse = ({
  handleDestination,
  destination,
  ticket,
  setTicket,
  cityName,
  setCityName,
  cityCode,
  setCityCode,
}) => {
  return (
    <div>
      <Navbar handleDestination={handleDestination} destination={destination} />
      <Mitoticket
        handleDestination={handleDestination}
        destination={destination}
        ticket={ticket}
        setTicket={setTicket}
        cityName={cityName}
        setCityName={setCityName}
        cityCode={cityCode}
        setCityCode={setCityCode}
      />
    </div>
  );
};

export default MitoVerse;
