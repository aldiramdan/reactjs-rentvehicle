import React from 'react'
import logo from '../../img/logo.png'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'

import './style.css'

function Footer() {
    return (
        <footer className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img src={logo} alt="" className="mb-4" />
                        <p>
                            Plan and book your perfect trip with expert advice, travel tips
                            for vehicle information from us
                        </p>
                        <p>©2020 Vehicle Rental Center. All rights reserved</p>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>
                                <b>Destinations</b>
                            </li>
                            <li>Bali</li>
                            <li>Yogyakarta</li>
                            <li>Jakarta</li>
                            <li>Kalimantan</li>
                            <li>Malang</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>
                            <b>Vehicle</b>
                                </li>
                            <li>Bike</li>
                            <li>Cars</li>
                            <li>Motorbike</li>
                            <li>Return Times</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>
                                <b>Interests</b>
                            </li>
                            <li>Adventure Travel</li>
                            <li>Art And Culture</li>
                            <li>Wildlife And Nature</li>
                            <li>Family Holidays</li>
                            <li>Culinary Trip</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                    <hr />
                        <FaTwitter className="social-icon" />
                        <FaFacebookF className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaLinkedinIn className="social-icon" />
                        <FaYoutube className="social-icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer