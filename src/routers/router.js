import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Resend from '../pages/resend/index'
import Dashboard from '../pages/dashboard/index'
import Vehicle from '../pages/vehicle/index'
import Detail  from '../pages/vehicle/detail'

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resend" element={<Resend />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/vehicle/detail/:id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default router