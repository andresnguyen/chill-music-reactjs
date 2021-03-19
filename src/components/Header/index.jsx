import React from 'react'
import Button from '../Button'
import './Header.scss'

Header.propTypes = {}

function Header() {
    return (
        <div className="header">
            <div className="header__auth">
                <Button />
                <Button className="btn--bg" text="ĐĂNG NHẬP" />
            </div>
        </div>
    )
}

export default Header
