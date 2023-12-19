import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeRouter from "./Routes/HomeRouter"
import "./sass/index.scss"
import Header from "./Routes/Header"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/*" element={<HomeRouter /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
