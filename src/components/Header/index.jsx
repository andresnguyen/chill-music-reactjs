import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss'
import Button from '../Button';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className = 'header'>
            <div className="header__auth">
                <Button />
                <Button className = 'btn--bg' text = 'ĐĂNG NHẬP'/>
            </div>
        </div>
    );
}

export default Header;