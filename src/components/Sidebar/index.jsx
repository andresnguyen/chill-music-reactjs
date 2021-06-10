import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import './Sidebar.scss'

Sidebar.propTypes = {}

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar__logo" to="/">
                <img src={logo} alt="" />
            </Link>

            <div className="sidebar__list">
                <NavLink className="sidebar__item" to="/">
                    <HomeOutlinedIcon />
                    <span>Home</span>
                </NavLink>
                <NavLink className="sidebar__item" to="/search">
                    <SearchIcon />
                    <span>Search</span>
                </NavLink>
                <NavLink className="sidebar__item" to="/library">
                    <LibraryMusicOutlinedIcon />
                    <span>Your Library</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
