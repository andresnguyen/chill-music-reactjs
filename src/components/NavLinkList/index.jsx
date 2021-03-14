import React from 'react';
import PropTypes from 'prop-types';
import './NavLinkList.scss'
import { NavLink } from 'react-router-dom';
import link from '../../constants/navlink-sidebar'
import NavLinkItem from '../NavLinkItem';

NavLinkList.propTypes = {
    linkItem: PropTypes.object.isRequired,
};

function NavLinkList({linkItem}) {
    return (
           <nav>
               {
                   link.map(linkItem => (
                       <NavLinkItem linkItem = {linkItem} />
                   ))
               }
            </nav> 
    );
}

export default NavLinkList;