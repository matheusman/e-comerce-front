import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import AccountInfoDatas from './AccountInfoDatas'

function Conta() {
  return (
    <Routes>
      <Route path="" element={<AccountInfoDatas />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  )
}

export default Conta