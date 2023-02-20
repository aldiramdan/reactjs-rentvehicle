/* eslint-disable array-callback-return */
import { React, useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Card from '../../components/card'
import axios from 'axios'

function Vehicle() {
	const [vehicle, setVehicle] = useState([])

	const getPopularVehicle = async () => {
		try {
			const { data } = await axios.get(
			`http://localhost:3080/vehicle/popular`
			)
			setVehicle(data.data)
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
                            {vehicle.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`http://localhost:3080/`+v.picture}
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
                            {vehicle.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`http://localhost:3080/`+v.picture}
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
                                <h2 className="title">Motocycle</h2>
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
                            {vehicle.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`http://localhost:3080/`+v.picture}
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
                            {vehicle.map((v, k) => {
                                if (k < 4) {
                                    return (
                                    <Card
                                        id={v.vehicle_id}
                                        picture={`http://localhost:3080/`+v.picture}
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