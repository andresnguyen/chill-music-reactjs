import React from 'react';
import PropTypes from 'prop-types';
import './Album.scss'
import ButtonPlay from '../../../../components/ButtonPlay';

Album.propTypes = {
    album: PropTypes.object,
};

Album.defaultProps = {
    album: {}
}

function Album({album}) {
    const { img, title, desc } = album
    return (
        <div className = 'album'>   
            <div className="album__img" style = {{ backgroundImage: `url(${img})` }}>

                <ButtonPlay className = 'play' />
            </div>
            <div className="album__title">
                {title}
            </div>

            <div className="album__desc">
                {desc}
            </div>
        </div>
    );
}

export default Album;