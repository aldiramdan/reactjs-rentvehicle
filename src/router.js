import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'
import Register from './pages/register/index'
import Vehicle from './pages/vehicle/index'

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vehicle" element={<Vehicle />} />
        </Routes>
    </BrowserRouter>
  )
}

export default router