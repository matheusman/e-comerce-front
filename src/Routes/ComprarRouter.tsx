import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Comprar from '../Elements/Comprar/Comprar'

function ComprarRouter() {
  return (
    <Routes>
        <Route path="" element={<Comprar />}/>
    </Routes>
  )
}

export default ComprarRouter