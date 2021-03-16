import React from 'react';
import PropTypes from 'prop-types';
import './UtilControl.scss'
import icon from '../../../../constants/footer-icon'
import { Slider } from 'antd';


UtilControl.propTypes = {
    className: PropTypes.string,
};

UtilControl.defaultProps = {
    className: ''
}

function UtilControl() {
    return (
        <div className = "util-control" >

            <button> 
                {icon.lyric}
            </button>

            <button> 
                {icon.list}
            </button>

            <div className = "volume-control">
                <button> 
                    {icon.volume}
                 </button>
                <Slider />
            </div>
            
        </div>
        
    );
}

export default UtilControl;