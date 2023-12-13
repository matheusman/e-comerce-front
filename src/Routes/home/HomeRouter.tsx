import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProductInfo from './ProductInfo'
import ContaRouter from '../conta/ContaRouter'

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={< ProductInfo /> } />
      <Route path="/conta/*" element={<ContaRouter />} />
    </Routes>
  )
}

export default HomeRouter