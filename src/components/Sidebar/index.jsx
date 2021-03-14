import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom';
import NavLinkList from '../NavLinkList';
import logo from '../../assets/images/logo.svg'

Sidebar.propTypes = {
    linkItem: PropTypes.object.isRequired,
};

function Sidebar({linkItem}) {
    return (
           <div class = 'sidebar'>

                <Link className="sidebar__logo">
                    <img src= {logo} alt=""/>
                </Link>
                <div className="sidebar__link">
                <NavLinkList />

                </div>

            </div> 
    );
}

export default Sidebar;