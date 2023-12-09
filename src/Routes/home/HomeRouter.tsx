import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default HomeRouter