import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeRouter from "./Routes/home/HomeRouter"
import "./sass/index.scss"
import Header from "./Routes/header/Header"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<HomeRouter /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
