import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useParams } from 'react-router-dom';
import Cartes from '../../components/Navbar/Cartes';


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

  
  const Mitocard = () => {
    const {id} = useParams();
    const [country, setCountry] =useState();

    useEffect(()=>setCountry(id),[]);

    return (
        <div>   
            <div className="carousel">
              {country}
            </div>
            
        </div>
    );
};

export default Mitocard;