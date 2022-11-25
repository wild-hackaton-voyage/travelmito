import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../../components/Navbar/Navbar";
import "./mitoselfie.css";
import { useState } from "react";

const responsive = {
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

const Mitoselfie = ({ destination }) => {
  const [images, setImages] = useState([]);
  const [clicked, setClick] = useState(false);

  const handleClick = (a) => {
    // if (a.target.style.border === "50px solid red") {
    //   a.target.style.border = "none";
    // } else {
    //   a.target.style.border = "50px solid red";
    // }
    if (clicked) {
      a.target.style.border = "50px solid red";
    }
    console.log(a.target);
  };

  function onImageChange(e) {
    setImages([...images, e.target.files]);
  }
  return (
    <div className="mitoselfie">
      <Navbar />
      <div className="carousel">
        <Carousel responsive={responsive}>
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}1.png`}
            alt={`${destination}1`}
            onclick={(a) => handleClick(a)}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}2.png`}
            alt={`${destination}2`}
            onclick={handleClick}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}3.png`}
            alt={`${destination}3`}
            onclick={handleClick}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}4.png`}
            alt={`${destination}4`}
            onclick={handleClick}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}5.png`}
            alt={`${destination}5`}
            onclick={handleClick}
          />
        </Carousel>
        <div className="upload">
          <img src="../../asssets/photo/importselfie.png" alt=""></img>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Mitoselfie;
