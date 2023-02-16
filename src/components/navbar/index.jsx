import { React } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

import './style.css'

function Navbar(props) {
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
                            <Link to="/history" className="nav-link navmenu">
                                History
                            </Link>
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
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar