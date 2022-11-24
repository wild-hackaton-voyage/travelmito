import{ React, useEffect} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import { useParams } from "react-router-dom";
import "./mitoselfie.css";


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

  const Mitoselfie = ({ handleDestination, destination }) => {
    const { id } = useParams();

    useEffect(() => {
      handleDestination(id);
    }, [id]);

    return (
        <div className='mitoselfie'>
            <p>cv</p>
        <div className="carousel">
          <Navbar destination={destination} />
          {destination} salut
        </div>
      </div>
    );
  };

export default Mitoselfie;