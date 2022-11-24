import React from 'react';
import Carousel from 'react-multi-carousel';
import Cartes from '../../components/Navbar/Cartes';

const Mitocard = () => {
    return (
        <div>   
            <div className="carousel">
                <Carousel>
                    <Cartes/>
                </Carousel>


            </div>
            
        </div>
    );
};

export default Mitocard;