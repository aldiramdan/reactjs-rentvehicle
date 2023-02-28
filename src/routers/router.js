import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Resend from '../pages/resend/index'
import History from '../pages/history/index'
import About from '../pages/about/index'
import Dashboard from '../pages/dashboard/index'
import Profile from '../pages/profile/index'
import Vehicle from '../pages/vehicle/index'
import AddVehicle  from '../pages/vehicle/add'
import EditVehicle  from '../pages/vehicle/edit'
import DetailVehicle  from '../pages/vehicle/detail'
import CategoryVehicle  from '../pages/vehicle/category'
import Reservation from '../pages/reservation/index'

function router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/resend" element={<Resend />} />
				<Route path="/history" element={<History />} />
				<Route path="/about" element={<About />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/vehicle" element={<Vehicle />} />
				<Route path="/vehicle/add" element={<AddVehicle />} />
				<Route path="/vehicle/edit/:id" element={<EditVehicle />} />
				<Route path="/vehicle/detail/:id" element={<DetailVehicle />} />
				<Route path="/vehicle/category/:category" element={<CategoryVehicle />} /> 
				<Route path="/reservation/:id" element={<Reservation />} /> 
			</Routes>
		</BrowserRouter>
	)
}

export default router