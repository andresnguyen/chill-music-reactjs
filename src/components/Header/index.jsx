import { Search } from '@material-ui/icons'
import React from 'react'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import avatar from '../../assets/images/avatar.jpg'

import './Header.scss'

Header.propTypes = {}

function Header() {
    return (
        <header className="header">
            <div className="search-wrapper">
                <Search />
            </div>

            <div className="header__authencation">
                <a href="signin" className="header__signup">
                    SIGN UP
                </a>

                <a href="signup" className="header__signin">
                    SIGN IN
                </a>
            </div>

            <div className="header__profile">
                <img src={avatar} alt="avatar" className="header__avatar" />
                <div className="header__fullname">Thường Nguyễn</div>
                <ExpandMoreOutlinedIcon />
            </div>
        </header>
    )
}

export default Header
