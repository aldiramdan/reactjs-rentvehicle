import { React, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Loading from '../../components/loading'
import Card from '../../components/card'
import useApi from '../../helpers/useApi'

function CategoryVehicle() {
    const [vehicle, setVehicle] = useState([]) 
    const [category, setCategory] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const params = useParams()
    const api = useApi() 
    
    const getVehicle = () => {
        api.request({
            method: 'GET',
            url:
                `${params.category}` === 'all' ? `vehicle/` 
                    : `vehicle/search/?s=${params.category.toLowerCase()}`
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

    if (!vehicle || !category) {
        return <Loading />
    }

    return (
        <div className="App">
        <Navbar />

        <main>
            <section>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-6 align-self-start">
                            <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}></input>
                        </div>
                        <div className="col-3 align-self-end">
                            <select
                                className="form-control"
                                name="category_id"  
                                onChange={(e) => {
                                    if (e.target.options[e.target.selectedIndex].text === 'All') {
                                        window.location.reload(navigate('/vehicle/category/all'))
                                    } else {
                                        window.location.reload(navigate(`/vehicle/category/${e.target.options[e.target.selectedIndex].text}`))
                                        
                                    }
                                }}>
                                <option selected>Select Category</option>
                                <option value='all'>All</option>
                                {category.map((v, k) => (
                                    <option value={`${v.id}`}>
                                        {v.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-in-town">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="title">
                                {params.category === 'all' ? 'All Vehicles'
                                    : 'All ' + params.category}
                            </h2>
                        </div>
                        
                    </div>
                    <div className="row">
                        {vehicle
                        .filter((v) => {
                            if (searchTerm === '') {
                                return v
                            } else if (
                                v.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return v
                            } else if (
                                v.location.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return v
                            }
                        })
                        .map((v, k) => {
                            return (
                                <Card
                                    id={v.id}
                                    picture={`${process.env.REACT_APP_BASE_URL}`+v.picture}
                                    name={v.name}
                                    location={v.location}
                                    rating={v.rating}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </div>
    )
}

export default CategoryVehicle