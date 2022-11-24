import React from 'react';
import Carousel from 'react-multi-carousel';
import Cartes from '../../components/Navbar/Cartes';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      partialVisibilityGutter: 40,  
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 40,
    },
  };

const Mitocard = () => {
    return (
        <div>   
            <div className="carousel">
         {/*        <Carousel>
                    <Cartes/>
                </Carousel> */}


            </div>
            
        </div>
    );
};

export default Mitocard;