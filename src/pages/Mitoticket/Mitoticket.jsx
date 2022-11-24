import React from 'react';
import Navbar from "../../components/Navbar/Navbar";

const Mitoticket = ({destination}) => {

    console.log(destination,"ticket");
    return (
        <div>
            <Navbar destination={destination} />
            {destination}
        </div>
    );
};

export default Mitoticket;