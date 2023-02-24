import { React, useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { regUsers } from '../../store/reducer/users'
import useApi from '../../helpers/useApi'
import Footer from '../../components/footer'

import './style.css'

function Resend() {
    const [Users, setUsers] = useState({
        email: '',
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

    const resend = () => {
        if (Users.email == '' ) {
            alert('Please fill email fields')
        } else {
                api.request({
                    method: 'POST',
                    url: 'auth/resend_email/',
                    data: Users
            })
            .then((res) => {
                dispatch(regUsers(res.data))
                navigate('/login    ')
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

    return (
        <div className="App">

            <main>
                <section className="resend-bg">
                    <div className="container">
                        <div className="row">
                            <Link to="/" className='left-link'>
                                <FaAngleLeft className="left-icon"/> 
                            </Link>
                            <h2 className="title">Back</h2>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <div className="login-form">
                                <h1 className="login-tagline text-white">
                                    Don't worry, we got your back!
                                </h1>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <input
                                className="form-control form-control-lg form-resend"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                onChange={onChangeInput}
                                required> 
                            </input>
                            
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <br />
                                <button className="btn btn-lg btn-warning fw-bold btn-resend" onClick={resend}>
                                    Send Link
                                </button>
                            <br />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Resend