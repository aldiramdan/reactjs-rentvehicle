import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../stores/reducer/users'
import useApi from '../../helpers/useApi'
import logo from '../../img/logo.png'

import './style.css'

function Navbar() {
    const dispatch = useDispatch()
    const { isAuth } = useSelector((state) => state.users)
    const [user, setUser] = useState({})
    const api = useApi()

    const getUser = () => {
            api
            .request({
                method: 'GET',
                url: 'users/profile'
        })
        .then((res) => {
            const { data } = res.data
            setUser(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container-fluid">
            <header className="py-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto my-auto ml-auto">
                            <Link to="/" className="nav-link navmenu">
                                Home
                            </Link>
                            <Link to="/vehicle" className="nav-link navmenu">
                                Vehicle Type
                            </Link>
                            {isAuth ? (
                                <>
                                <Link to="/history" className="nav-link navmenu">
                                    History
                                </Link>
                                <Link to="/about" className="nav-link navmenu">
                                    About
                                </Link>
                                <div className="dropdown">
                                        <button class="btn btn-transparent dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <img src={`${process.env.REACT_APP_BASE_URL}` + user.picture} className="profile-pic rounded-circle" alt="" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <h6 class="dropdown-header">{user.name}</h6>
                                            <Link to="/dashboard" className="dropdown-item">
                                                Dashboard
                                            </Link>
                                            <Link to="/" className="dropdown-item" onClick={() => dispatch(logout())}>
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </>
                                ) : (
                                <>
                                    <Link to="/about" className="nav-link navmenu">
                                        About
                                    </Link>
                                    <Link to="/login">
                                        <button
                                            type="button"
                                            className="btn btn-outline-warning rounded-3 mx-2 my-2 navbtn">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="/register">
                                        <button
                                            type="button"
                                            className="btn btn-warning rounded-3 mx-2 my-2 navbtn">
                                            Register
                                        </button>
                                    </Link>
                                </>            
                             )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar