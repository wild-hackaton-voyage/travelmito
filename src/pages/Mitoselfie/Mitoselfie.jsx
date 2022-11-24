import React from 'react';
import Navbar from "../../components/Navbar/Navbar";

const Mitoselfie = ({destination}) => {

    console.log(destination,"selfie");
    return (
        <div>
            <Navbar destination={destination}/>
            {destination} salut
        </div>
    );
};

export default Mitoselfie;