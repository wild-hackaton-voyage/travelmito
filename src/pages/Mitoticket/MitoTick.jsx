import React from "react";
import "./mitoticket.css";
const Mitoticket = ({  destination }) => {
  console.log(destination, "destination");

  const changeCityName = () => {


    console.log(destination, "ticket");
    switch (destination) {
      case "France":
        {
          return <h1 id="cityName">PARIS</h1>;
        }
        break;
      case "Canada":
        {
          return <h1 id="cityName">OTTAWA</h1>;
        }
        break;
      case "Australie":
        {
          return <h1 id="cityName">SYDNEY</h1>;
        }
        break;
      case "Bresil":
        {
          return <h1 id="cityName">RIO</h1>;
        }
        break;
      case "Egypte":
        {
          return <h1 id="cityName">Le Caire</h1>;
        }
        break;
      case "Russie":
        {
          return <h1 id="cityName">Moscou</h1>;
        }
        break;
      default:
        return <h1 id="cityName">RIO</h1>;
        break;
    }
  };
  
  return (
    <div className="ticketContainer">
      {changeCityName()}

      <div className="ticketCard">
        {" "}
        <img src="/Ticket-Rio.png" alt="2" id="ticket" />
      </div>
    </div>
  );
};

export default Mitoticket;
