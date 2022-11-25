import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Cartes from "../../components/Navbar/Cartes";
import Navbar from "../../components/Navbar/Navbar";

const responsive = {
  /* Responsive du carousel */

  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 40,
  },
};

const Mitocard = ({ handleDestination, destination }) => {
  const { id } = useParams();

  useEffect(() => {
    handleDestination(id);
  }, [id]);

  console.log(destination, "carte");

  return (
    <div>
      <Navbar destination={destination} />
      <div className="carousel">{destination} coucou</div>
      <Carousel responsive={responsive}>
        <img
          className="postcard"
          src={`/Cartes/${destination}/${destination}1.jpeg`}
          alt={`${destination}1`}
        />
        <img
          className="postcard"
          src={`/Cartes/${destination}/${destination}2.jpeg`}
          alt={`${destination}2`}
        />
        <img
          className="postcard"
          src={`/Cartes/${destination}/${destination}3.jpeg`}
          alt={`${destination}3`}
        />
        <img
          className="postcard"
          src={`/Cartes/${destination}/${destination}4.jpeg`}
          alt={`${destination}4`}
        />
        <img
          className="postcard"
          src={`/Cartes/${destination}/${destination}5.jpeg`}
          alt={`${destination}5`}
        />
      </Carousel>
    </div>
  );
};

export default Mitocard;
