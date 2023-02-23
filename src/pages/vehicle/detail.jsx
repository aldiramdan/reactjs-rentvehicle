import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaHeart, FaAngleLeft } from 'react-icons/fa'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import axios from 'axios'

import './style.css'

function Details() {
    const [vehicle, setVehicle] = useState([])
    const params = useParams()

    const getVehicle = async () => {
        try {
			const { data: vehicle } = await axios.get(
				`${process.env.REACT_APP_BASE_URL}vehicle/${params.id}`
			)
			
			setVehicle(vehicle.data)
                
		} catch (error) {
			console.log(error)
		}
    }
    
    useEffect(() => {
        getVehicle()
    }, [])

    return (
        <div className="App">
        <Navbar />
        <main>

            <section className="popular-in-town">
                <div className="container">
                    <div className="row">
                        <Link to="/vehicle" className='left-link'>
							<FaAngleLeft className="left-icon"/> 
						</Link>
                        <h2 className="title">Details</h2>
                    </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="detail-image" src={`${process.env.REACT_APP_BASE_URL}`+vehicle.picture} alt="uihef" />
                            </div>
                            <div className="col-lg-6">
                                <p className="detail-name">
                                    {vehicle.name}
                                </p>
                                <p className="detail-location">
                                    {vehicle.location}
                                </p>
                                <p className="detail-status">
                                    {vehicle.status}
                                </p>
                                <p className="detail-desc">
                                    {vehicle.description}
                                </p>
                                <p className="detail-etc">
                                    Capacity : {vehicle.category_data.name == 'Cars' ? '4' : 'Motorbike' ? '2' : 1} person
                                </p>
                                <p className="detail-etc">
                                    Type : {vehicle.category_data.name}
                                </p>
                                <p className="detail-etc">
                                    Reservation before 2PM
                                </p>
                                <p className="detail-price">
                                    Rp.{vehicle.price}/day
                                </p>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-6">
                                <img className="detail-image" src={`https://lapaskotabumi.id/wp-content/uploads/2016/06/placeholder_1080_720.png`} alt="uihef" />
                            </div>
                            <div className="col-lg-6">
                                <p className="detail-name">
                                    Lamborghini
                                </p>
                                <p className="detail-location">
                                    South Jakarta
                                </p>
                                <p className="detail-status">
                                    Availbe
                                </p>
                                <p className="detail-desc">
                                    desc
                                </p>
                                <p className="detail-etc">
                                    Capacity : 2 person
                                </p>
                                <p className="detail-etc">
                                    Type : Cars
                                </p>
                                <p className="detail-etc">
                                    Reservation before 2PM
                                </p>
                                <p className="detail-price">
                                    Rp.78.0000/day
                                </p>
                            </div>
                        </div> */}
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4">
                            <button className="btn btn-lg btn-warning w-100 btn-detail fw-bold form-login">
                                Chat Admin
                            </button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-lg btn-warning w-100 btn-reser fw-bold form-login">
                                Reservation
                            </button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-lg btn-warning w-100 btn-detail fw-bold form-login">
                                 <FaHeart className="heart-icon"/> Like
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </div>
    )
}

export default Details