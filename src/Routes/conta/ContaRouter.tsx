import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Conta from '../../Elements/Conta/Conta'

function ContaRouter() {
  return (
        <Routes>
            <Route path="" element={<Conta />} />
        </Routes>
    )
}

export default ContaRouter