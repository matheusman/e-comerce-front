import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProductInfo from './ProductInfo'
import ContaRouter from './ContaRouter'
import Carrinho from '../Elements/Carrinho/Carrinho'
import ComprarRouter from './ComprarRouter'

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={< ProductInfo /> } />
      <Route path="/conta/*" element={<ContaRouter />} />
      <Route path="/carrinho/*" element={<Carrinho />} />
      <Route path="/comprar" element={<ComprarRouter /> } /> 
    </Routes>
  )
}

export default HomeRouter