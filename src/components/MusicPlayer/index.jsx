import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './Sidebar.scss'

Sidebar.propTypes = {}

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar__logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="sidebar__link"></div>
        </div>
    )
}

export default Sidebar
