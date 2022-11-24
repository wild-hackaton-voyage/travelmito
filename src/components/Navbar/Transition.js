import React from 'react'
import { Routes, Route } from "react-router-dom";
import Mithome from '../../pages/Mithome/Mithome';
import Mitocard from '../../pages/Mitocard/Mitocard';
import Mitoselfie from '../../pages/Mitoselfie/Mitoselfie';
import Mitoticket from '../../pages/Mitoticket/Mitoticket';
import ErrorMessage from '../ErrorMessage';

function Transition() {
  return (
   <Routes>
      <Route path="/" element={<Mithome />} />
      <Route
        path="/carte/:id"
        element={
          <Mitocard
          />
        }
      />
        <Route
        path="/mitoselfie"
        element={
          <Mitoselfie
          />
        }
      />
            <Route
        path="/mitoticket"
        element={
          <Mitoticket
          />
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