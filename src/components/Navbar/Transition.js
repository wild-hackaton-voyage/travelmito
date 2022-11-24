import React, { useEffect, useState } from 'react'
import { Routes, Route, useSubmit } from "react-router-dom";
import Mithome from '../../pages/Mithome/Mithome';
import Mitocard from '../../pages/Mitocard/Mitocard';
import Mitoselfie from '../../pages/Mitoselfie/Mitoselfie';
import Mitoticket from '../../pages/Mitoticket/Mitoticket';
import ErrorMessage from '../ErrorMessage';

function Transition() {

  const[destination, setDestination] = useState("");

  const handleDestination = (destination) =>{
    setDestination(destination);
  }

  return (
   <Routes>
      <Route path="/" element={<Mithome />} />
      <Route
        path="/carte/:id"
        element={
          <Mitocard handleDestination={handleDestination} destination ={destination}/>
        }
      />
        <Route
        path="/Mitoselfie"
        element={
          <Mitoselfie destination={destination} />
        }
      />
            <Route
        path="/Mitoticket"
        element={
          <Mitoticket destination={destination} />
        }
      />
             <Route
        path="*"
        element={
          <ErrorMessage
          />
        }
      />
    </Routes>
  )
}

export default Transition