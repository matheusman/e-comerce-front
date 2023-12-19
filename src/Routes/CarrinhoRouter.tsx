import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carrinho from '../Elements/Carrinho/Carrinho'

function CarrinhoRouter() {
  return (
    <Routes>
        <Route path="" element={<Carrinho />}/>
    </Routes>
  )
}

export default CarrinhoRouter