import { React, useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { regUsers } from '../../store/reducer/users'
import useApi from '../../helpers/useApi'
import Footer from '../../components/footer'

import './style.css'

function Register() {
    const [Users, setUsers] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    })

    const { isAuth } = useSelector((state) => state.users)
    const api = useApi()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) {
        navigate('/')
        }
    }, [isAuth])

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const register = () => {
        const formData = new FormData()
        for (const key in Users) {
            formData.append(`${key}`, Users[key])
        }

        if (Users.name == '' || Users.username == '' || Users.email == '' || Users.password == '') {
            alert('Please fill all fields')
        } else if (Users.username != Users.username.toLowerCase()) {
            alert('username must be lowercase')
        } else if (Users.password.length < 8) {
            alert('password length must be greater than 8')
        } else {
                api.request({
                    method: 'POST',
                    url: 'users/',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: formData
            })
            .then((res) => {
                dispatch(regUsers(res.data))
                navigate('/resend')
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

    return (
        <div className="App">

            <main>
                <section className="login-bg">
                    <div className="container">
                        <div className="row">
                            <Link to="/" className='left-link'>
                                <FaAngleLeft className="left-icon"/> 
                            </Link>
                            <h2 className="title">Back</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login-form">
                                    <h1 className="login-tagline text-white">
                                        Let's Explore
                                        <br />
                                        The World
                                    </h1>
                                    <p className="text-white login-subtagline">
                                        Already have account?
                                    </p>
                                    <Link to="/login">
                                        <button className="btn btn-lg btn-warning fw-bold btn-signup form-login">
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <input
                                    className="form-control form-control-lg form-login"
                                    name="name"
                                    type="name"
                                    placeholder="Name"
                                    onChange={onChangeInput}
                                    required> 
                                </input>
                                <input
                                    className="form-control form-control-lg form-login"
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={onChangeInput}
                                    required>
                                    </input>
                                <input
                                    className="form-control form-control-lg form-login"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={onChangeInput}
                                    required> 
                                </input>
                                <input
                                    className="form-control form-control-lg form-login password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={onChangeInput}
                                    required>
                                </input>
                                <br />
                                    <button className="btn btn-lg btn-warning w-100 fw-bold form-login" onClick={register}>
                                        Sign up
                                    </button>
                                <br />
                                <Link to="/">
                                    <button className="btn btn-lg btn-warning w-100 fw-bold btn-google form-login">
                                        <FcGoogle />{` `}
                                        Sign up with Google
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Register