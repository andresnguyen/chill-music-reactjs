import React from 'react';
import PropTypes from 'prop-types';
import './NavLinkItem.scss'
import { NavLink } from 'react-router-dom';
import SearchOutlined from '@ant-design/icons'

NavLinkItem.propTypes = {
    linkItem: PropTypes.object.isRequired,
};

function NavLinkItem({linkItem}) {
    return (
           <NavLink to = {linkItem.path} exact activeClassName="navlink-sidebar--active" className = 'navlink-sidebar'>
               {linkItem.icon}
               <span className = 'navlink-sidebar__text'>{linkItem.text}</span>
            </NavLink> 
    );
}

export default NavLinkItem;