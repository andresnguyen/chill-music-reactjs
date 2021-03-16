import React from 'react';
import PropTypes from 'prop-types';
import './PlayControl.scss'
import icon from '../../../../constants/footer-icon'
import { Slider } from 'antd';


PlayControl.propTypes = {
};

PlayControl.defaultProps = {
}

function PlayControl() {
    return (
        <div className="container-control">
            <div className="play-control">

                <button>{icon.random}</button>
                <button>{icon.prev}</button>
                <button className = "play-control--cirle">
                    {icon.pause}
                    {/* {icon.play} */}
                    </button>
                <button>{icon.next}</button>

                <button>
                    {icon.repeat}
                    {/* {icon.repeatOne} */}
                </button>

            </div>

            <div className="progress-bar">
                <div className="progress-bar__time">
                    3:04
                </div>

                <Slider defaultValue={30} disabled={false} tooltipVisible = {false} />


                <div className="progress-bar__time">
                    5:03
                </div>
            </div>
        </div>
    );
}

export default PlayControl;