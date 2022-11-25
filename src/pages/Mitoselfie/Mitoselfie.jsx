import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../../components/Navbar/Navbar";
import "./mitoselfie.css"
import React, { useState } from "react";

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

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
  };
}
const Mitoselfie = ({ destination }) => {
  return (
    <div className="mitoselfie">
      <Navbar />
      <div className="carousel">
        <Carousel responsive={responsive}>
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}1.png`}
            alt={`${destination}1`}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}2.png`}
            alt={`${destination}2`}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}3.png`}
            alt={`${destination}3`}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}4.png`}
            alt={`${destination}4`}
          />
          <img
            className="Selfie"
            src={`/selfies/${destination}/${destination}5.png`}
            alt={`${destination}5`}
          />
        </Carousel>
        <div className="upload">
          <input type="file" name="file" onChange={changeHandler} />
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitoselfie;
