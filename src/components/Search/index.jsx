import React from 'react'
import './Header.scss'

Header.propTypes = {}

function Header() {
    return (
        <header className="header">
            <div className="header__authencation"></div>

            <div className="header__profile"></div>

            <div className="search-wrapper"></div>
        </header>
    )
}

export default Header
