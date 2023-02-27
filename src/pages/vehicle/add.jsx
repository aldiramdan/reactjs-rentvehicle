import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import Footer from '../../components/footer'
import Header from '../../components/navbar'
import Loading from '../../components/loading'
import useApi from '../../helpers/useApi'
import withAuth from '../../helpers/withAuth'

import './style.css'

function AddVehicle() {
    const [data, setData] = useState({
        name: '',
        location: '',
        description: '',
        price: 0,
        status: '',
        stock: 0,
        category_id: '',
        picture: null
    })

    const [category, setCategory] = useState([])

    const navigate = useNavigate()
    const api = useApi()

    const onChangeInput = (e) => {
        e.preventDefault()

        const tmpdata = { ...data }
        tmpdata[e.target.name] = e.target.value
        setData(tmpdata)
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

    const postData = () => {
        const formData = new FormData()
        for (const key in data) {
        formData.append(`${key}`, data[key])
        }
        api.request({
            method: 'POST',
            url: '/vehicle/',
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
        getCategory()
    }, [])

    if (!category) {
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
                            <h2 className="title-dashboard">Add Vehicle</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input
                                    className="form-control form-control-lg"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="location"
                                    type="text"
                                    placeholder="Location"
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="description"
                                    type="text"
                                    placeholder="Description"
                                    onChange={onChangeInput}
                                    required>                       
                                </input>
                                <input
                                    className="form-control form-control-lg"
                                    name="price"
                                    type="number"
                                    placeholder="Price"
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <br />
                                <select
                                    className="form-control form-control-lg"
                                    name="status"
                                    type="text"
                                    onChange={onChangeInput}>
                                        <option disable>Select Status</option>
                                        <option value="Available">Available</option>
                                        <option value="Unavailable">Unavailable</option>
                                </select>
                                <input
                                    className="form-control form-control-lg"
                                    name="stock"
                                    type="number"
                                    placeholder="Stock"
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <br />
                                <select
                                    className="form-control form-control-lg"
                                    name="category_id"
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
                                    onClick={postData}>
                                        Add
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

export default withAuth(AddVehicle)