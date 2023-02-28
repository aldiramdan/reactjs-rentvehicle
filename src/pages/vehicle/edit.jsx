import { React, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import Footer from '../../components/footer'
import Header from '../../components/navbar'
import Loading from '../../components/loading'
import useApi from '../../helpers/useApi'
import withAuth from '../../helpers/withAuth'

import './style.css'

function EditVehicle() {
    const [vehicle, setVehicle] = useState([])
    const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    const params = useParams()

    const navigate = useNavigate()
    const api = useApi()

    const onChangeInput = (event) => {
        event.preventDefault()

        const tmpdata = { ...data }
        tmpdata[event.target.name] = event.target.value
        setData(tmpdata)
        console.log(data)
    }

    const onChangeFile = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        if (file) {
            const tmpdata = { ...data }
            tmpdata['picture'] = file
            setData(tmpdata)
        }
    }

    const updateData = () => {
        const formData = new FormData()
        for (const key in data) {
            formData.append(`${key}`, data[key])
        }

        api.request({
            method: 'PUT',
            url: '/vehicle/' + params.id,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData
        })
        .then((res) => {
            console.log(res)
            navigate('/dashboard')
        })
        .catch((err) => {
            alert(err)
        })
    }

    const getVehicle = () => {
        api.request({
            method: 'GET',
            url: `vehicle/${params.id}`
        })
        .then((res) => {
            const { data } = res.data
            setVehicle(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getCategory = () => {
        api.request({
            method: 'GET',
            url: 'vehicle/category/'
        })
        .then((res) => {
            const { data } = res.data
            setCategory(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getVehicle()
        getCategory()
    }, [])

     if (!category || !vehicle) {
        return <Loading />
    }
    

    return (
        <div className="App">
        <Header />
            <main>
                <section className="popular-in-town mt-5">
                    <div className="container">
                        <div className="row">
                            <Link to="/dashboard" className='left-link'>
                                <FaAngleLeft className="left-icon"/> 
                            </Link>
                            <h2 className="title-dashboard">Edit Vehicle</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                               <input
                                    className="form-control form-control-lg"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    defaultValue ={vehicle.name}
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="location"
                                    type="text"
                                    placeholder="Location"
                                    defaultValue ={vehicle.location}
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="description"
                                    type="text"
                                    placeholder="Description"
                                    defaultValue ={vehicle.description}
                                    onChange={onChangeInput}
                                    required>                       
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="price"
                                    type="number"
                                    placeholder="Price"
                                    defaultValue ={vehicle.price}
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <br />
                                <select
                                    className="form-control form-control-lg"
                                    name="status"
                                    type="text"
                                    defaultValue ={vehicle.status}
                                    onChange={onChangeInput}>
                                        <option disabled>Select Status</option>
                                        <option value="Available">Available</option>
                                        <option value="Unavailable">Unavailable</option>
                                </select>
                                <input
                                    className="form-control form-control-lg"
                                    name="stock"
                                    type="number"
                                    placeholder="Stock"
                                    defaultValue ={vehicle.stock}
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <br />
                                <select
                                    className="form-control form-control-lg"
                                    name="category_id"
                                    defaultValue ={vehicle.category_id}
                                    onChange={onChangeInput}>
                                        <option selected>Select Category</option>
                                        {category.map((v, k) => (
                                            <option value={`${v.id}`}>
                                                {v.name}
                                            </option>
                                        ))}
                                </select>
                                <input
                                    className="form-control form-control-lg"
                                    name="picture"
                                    type="file"
                                    placeholder="Picture"
                                    onChange={onChangeFile}
                                    required>
                                </input>
                               <div className="d-flex justify-content-center mt-3   ">
                                    {data.picture && (
                                        <img
                                            src={URL.createObjectURL(data.picture)}
                                            alt="Selected file"
                                            width="200"
                                            height="200"
                                        />
                                    )}
                                </div>
                                <br />
                                <button
                                    className="btn btn-lg btn-warning w-100 fw-bold mb-5"
                                    onClick={updateData}>
                                        Save
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

export default withAuth(EditVehicle)