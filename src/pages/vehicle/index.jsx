/* eslint-disable array-callback-return */
import { React, useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Card from '../../components/card'
import axios from 'axios'

function Vehicle() {
    const [popular, setPopularVehicle] = useState([])
    const [cars, setCars] = useState([])
    const [motorbike, setMotorbike] = useState([])
    const [bike, setBike] = useState([])

	const getPopularVehicle = async () => {
		try {
			const { data: popular } = await axios.get(
			    `${process.env.REACT_APP_BASE_URL}vehicle/popular`
			)

            const { data: cars } = await axios.get(
			    `${process.env.REACT_APP_BASE_URL}vehicle/search/?s=cars`
			)

            const { data: motorbike } = await axios.get(
			    `${process.env.REACT_APP_BASE_URL}vehicle/search/?s=motorbike`
			)

            const { data: bike } = await axios.get(
			    `${process.env.REACT_APP_BASE_URL}vehicle/search/?s=bike`
			)

			setPopularVehicle(popular.data)
			setCars(cars.data)
			setMotorbike(motorbike.data)
			setBike(bike.data)
            
		} catch (error) {
			console.log(error)
		}
	}

    useEffect(() => {
        getPopularVehicle()
    })

    return (
        <div className="App">
            <Navbar />

            <main>
                <section className="popular-in-town">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="title">Popular in Town</h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex justify-content-end">
                                    <div className="view-all">
                                        <p className="text-end fw-bold">
                                            {'View all '}
                                            <b>{'>'}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {popular.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                        name={v.name}
                                        location={v.location}
                                    />
                                )}
                            })}
                        </div>
                    </div>
                </section>

                <section className="popular-in-town">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="title">Cars</h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex justify-content-end">
                                    <div className="view-all">
                                        <p className="text-end fw-bold">
                                            {'View all '}
                                            <b>{'>'}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            {cars.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                        name={v.name}
                                        location={v.location}
                                    />
                                )}
                            })}
                        </div>
                    </div>
                </section>

                <section className="popular-in-town">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="title">Motorbike</h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex justify-content-end">
                                    <div className="view-all">
                                        <p className="text-end fw-bold">
                                            {'View all '}
                                            <b>{'>'}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {motorbike.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                        name={v.name}
                                        location={v.location}
                                    />
                                )}
                            })}
                        </div>
                    </div>
                </section>

                <section className="popular-in-town">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="title">Bike</h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex justify-content-end">
                                    <div className="view-all">
                                        <p className="text-end fw-bold">
                                            {'View all '}
                                            <b>{'>'}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {bike.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                        name={v.name}
                                        location={v.location}
                                    />
                                )}
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
    
}

export default Vehicle