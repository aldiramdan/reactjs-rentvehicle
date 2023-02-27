import { React, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../stores/reducer/users'
import useApi from '../../helpers/useApi'
import Footer from '../../components/footer'

import './style.css'

function Login() {
    const [Users, setUsers] = useState({
        username: '',
        password: ''
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

    const onChangeInput = (e) => {
        e.preventDefault()
        
        const data = { ...Users }
        data[e.target.name] = e.target.value
        setUsers(data)
    }

    const loginUser = () => {
        if (Users.username === '' || Users.password === '') {
            alert('Please fill all fields')
        } else {
                api.request({
                    method: 'POST',
                    url: 'auth/login',
                    data: Users
            })
            .then((res) => {
                const { data } = res.data
                dispatch(login(data.token))
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
                                        Don't have account?
                                    </p>
                                    <Link to="/register">
                                        <button className="btn btn-lg btn-warning fw-bold btn-signup-login form-login">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action="">
                                    <input
                                        className="form-control form-control-lg form-login"
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        onChange={onChangeInput}
                                        required
                                    />
                                    <input
                                        className="form-control form-control-lg form-login"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={onChangeInput}
                                        required
                                    />
                                </form>
                                <p className="forgot-password">Forgot password?</p>
                                <button className="btn btn-lg btn-warning w-100 fw-bold form-login" onClick={loginUser}>
                                    Login
                                </button>
                                    <br />
                                <button className="btn btn-lg btn-warning w-100 fw-bold btn-google form-login">
                                    <FcGoogle />{` `}
                                    Login with Google
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

export default Login