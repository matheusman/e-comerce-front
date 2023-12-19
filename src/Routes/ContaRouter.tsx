import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Elements/Conta/Login'
import AccountInfoDatas from '../Elements/Conta/AccountInfoDatas'

function ContaRouter() {
  return (
        <Routes>
            <Route path="" element={<AccountInfoDatas />} />
            <Route path="/login" element={ <Login />} />
        </Routes>
    )
}

export default ContaRouter