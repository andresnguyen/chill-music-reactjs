import React from 'react'
import { Link } from 'react-router-dom'
import './PlaylistItem.scss'

PlaylistItem.propTypes = {}

function PlaylistItem() {
    return (
        <div className="playlist__wrapper">
            <div className="playlist">
                <div
                    className="playlist__img"
                    style={{
                        backgroundColor: `url("https://i.scdn.co/image/ab67616d00001e02827bd87fc2dec81441a4a059")`,
                    }}
                ></div>

                <div className="playlist__content">
                    <Link className="playlist__title" to="/">
                        Em Gì Ơi – Jack, K-ICM 2
                    </Link>
                    <span className="playlist__desciption">By Thuong Nguyen</span>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem
