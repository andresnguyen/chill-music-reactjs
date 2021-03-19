import React from 'react';
import link from '../../constants/navlink-sidebar';
import NavLinkItem from '../NavLinkItem';
import './NavLinkList.scss';


function NavLinkList() {
    return (
           <nav>
               {
                   link.map((linkItem, index) => (
                       <NavLinkItem key = {index} linkItem = {linkItem} />
                   ))
               }
            </nav> 
    );
}

export default NavLinkList;