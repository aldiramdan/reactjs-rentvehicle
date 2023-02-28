import { React } from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { BiCategory, BiHistory } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { RxDashboard } from 'react-icons/rx'
import { AiFillCar } from 'react-icons/ai'

import './style.css'

function Sidebar() {
	return (
		<section id="sidebar">
            <a href="/dashboard" className="brand"><i className='icon'><AiFillCar /></i> Rental Vehicle</a>
            <ul className="side-menu">
                <li><a href="/dashboard" className="active"><i className='icon' ><RxDashboard /></i> Dashboard</a></li>
                <li className="divider" data-text="main">Main</li>
                <li>
                    <a href="/dashboard">
                        <i className='icon' ><FaCarAlt /></i> 
                            Vehicle
                    </a>
                </li>
                <li>
                    <a href="/dashboard">
                        <i className='icon' ><BiCategory /></i> 
                            Category
                    </a>
                </li>
                 <li>
                    <a href="/dashboard">
                        <i className='icon' ><BiHistory /></i> 
                            History
                    </a>
                </li>
                <li className="divider" data-text="table and forms">Profile</li>
                <li>
                    <a href="/dashboard">
                        <i className='icon' ><CgProfile /></i> 
                            Profile
                    </a>
                </li>
            </ul>
        </section>
	)
}

export default Sidebar