import React from "react";
import "./mitoticket.css";
const Mitoticket = () => {
  return (
    <div className="ticketContainer">
      <h1 id="cityName">RIO DE JANEIRO</h1>
      <div className="ticketCard">
        {" "}
        <img src="/Ticket-Rio.png" alt="2" id="ticket" />
      </div>
{/*       <div className="planetAnim">
        <iframe
          src="https://my.spline.design/worldryan-f71c4eecd1ec75de6a66ecc5af7e71ca/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Mitoticket;
