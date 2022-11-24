import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./mitoticket.css";
const Mitoticket = ({ handleDestination, destination }) => {
  console.log(destination, "destination");
  const { id } = useParams();
  useEffect(() => {
    handleDestination(id);
  }, [id]);

  const changeCityName = () => {
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
  const changeGlobeName = () => {
    switch (destination) {
      case "France":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanfrance-200d3c03ef123d038b0cd6bca85d384a/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Canada":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryancanada-d7e1f15e2b3b94ac40f9968279a56e87/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Australie":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanegyptecopy-fe73c1250418490d609973a016065eed/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Bresil":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryan-f71c4eecd1ec75de6a66ecc5af7e71ca/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Russie":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanrussie-e0902a94b3b92728a87f2a21bc960f8a/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Egypte":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanegypte-5c56022f0aca269bf6c4cfe02c20cab5/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      default:
        <h1 id="cityName">RIO</h1>;
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

      {/* <img src="/realplanet.png" alt="3" id="planet" /> */}
      <div className="planetAnim">{changeGlobeName()}</div>
    </div>
  );
};

export default Mitoticket;
