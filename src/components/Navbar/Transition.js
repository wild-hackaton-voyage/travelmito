import React from 'react'
import { Routes, Route } from "react-router-dom";
import Mithome from '../../pages/Mithome/Mithome';

function Transition() {
  return (
   <Routes>
      <Route path="/" element={<Mithome />} />


    </Routes>
  )
}

export default Transition