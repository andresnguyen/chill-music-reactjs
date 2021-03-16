import React from 'react';
import PropTypes from 'prop-types';
import './UtilControl.scss'
import icon from '../../../../constants/footer-icon'
import { Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { changeVolume } from '../../PlayMusicSlice.js'




UtilControl.propTypes = {
    className: PropTypes.string,
};

UtilControl.defaultProps = {
    className: ''
}

function UtilControl() {

    const volume = useSelector(state => state.music.volume)

    const dispatch = useDispatch()

    const handleSliderChange = (value) => {
        dispatch(changeVolume(value / 100))
    }
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
                <Slider disabled={false} tooltipVisible = {false} value={volume * 100} onChange={handleSliderChange}/>
            </div>
            
        </div>
        
    );
}

export default UtilControl;