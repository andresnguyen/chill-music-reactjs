import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import NavLinkList from '../NavLinkList'
import './Sidebar.scss'

Sidebar.propTypes = {}

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar__logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="sidebar__link">
                <NavLinkList />
            </div>
        </div>
    )
}

export default Sidebar
