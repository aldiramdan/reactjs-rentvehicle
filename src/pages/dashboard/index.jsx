import { React, useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Loading from '../../components/loading'
import useApi from '../../helpers/useApi'
import withAuth from '../../helpers/withAuth'

import './style.css'

function Dashboard() {
    const [vehicle, setVehicle] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedVehicleId, setSelectedVehicleId] = useState({
        id: ''
    })

    const api = useApi()
    const navigate = useNavigate()
    const handleClose = () => setShowModal(false)
    const handleShow = (id) => {
        setSelectedVehicleId(id)
        setShowModal(true);
    }


    const getPopularVehicle = () => {
        api.request({
            method: 'GET',
            url: `/vehicle/`
        })
        .then((res) => {
            const { data } = res.data
            setVehicle(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteVehicle = (id) => {
        api.request({
            method: 'DELETE',
            url: `/vehicle/` + id
        })
        .then((res) => {
            window.location.reload(navigate('/dashboard'))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPopularVehicle()
    }, [])

    if (!vehicle) {
        return <Loading />
    }

    return (
        <div className="App">
        <Navbar />

        <main>
            <section className="popular-in-town">
                <div className="container">
                    <div className="row">
                        <h2 className="title-dashboard">List Vehicle</h2>
                    </div>
                    <div className="row">
                        <Link to="/vehicle/add">
                            <button type="button" className="btn btn-warning rounded-3 mb-4 navbtn">
                                Add Vehicle
                            </button>
                        </Link>
                    </div>
                    <div className="row">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                    <th>Picture</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {vehicle.map((v, k) => {
                                return (
                                    <tr>
                                        <td>{k + 1}</td>
                                        <td>{v.name}</td>
                                        <td>{v.location}</td>
                                        <td>{v.description}</td>
                                        <td>{v.price}</td>
                                        <td>{v.status}</td>
                                        <td>{v.stock}</td>
                                        <td>{v.category_data.name}</td>
                                    <td>
                                        <img
                                            src={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                            height="100px"
                                            width="100px"
                                            alt="vehicle"
                                        />
                                    </td>
                                    <td>
                                        <Link to={'/vehicle/edit/' + v.id}>
                                            <button className="border-0">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            className="border-0 text-danger"
                                            onClick={() => handleShow(v.id)}>
                                            <FaTrash />
                                        </button>
                                        <Modal show={showModal} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Confirm Deletion
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                Are you sure to delete this vehicle?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button variant="danger" onClick={() => {
                                                        deleteVehicle(v.id)
                                                        handleClose()
                                                    }}>
                                                    Delete
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </div>
    )
}

export default withAuth(Dashboard)