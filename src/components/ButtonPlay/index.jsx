import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPlay.scss'
import classnames from 'classnames';

ButtonPlay.propTypes = {
    className: PropTypes.string,
};

ButtonPlay.defaultProps = {
    className: ''
}


function ButtonPlay({className}) {
    return (
        <button className = {classnames('btn-play', className)}>
            <svg className = 'btn-play__icon' height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
        </button>
        
    );
}

export default ButtonPlay;