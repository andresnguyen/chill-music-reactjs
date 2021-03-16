import React, { useEffect, useRef, useState } from 'react';
import './PlayControl.scss'
import icon from '../../../../constants/footer-icon'
import { Slider } from 'antd';
import songApi from '../../../../api/songApi';
import classnames from 'classnames'

import { Tooltip } from 'antd';

PlayControl.propTypes = {
};

PlayControl.defaultProps = {
}

function PlayControl() {
    const audioRef = useRef(null)

    const [songs, setSongs] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isRandom, setIsRamdom] = useState(true)
    const [repeat, setRepeat] = useState(2)

    useEffect(() => {
        songApi.getAll()
        .then(data => {
            setSongs(data.data)
            console.log(data.data)
        })

    }, [])

    useEffect(() => {
        
    }, [songs])

    useEffect(() => {
        HandlePlayMode()
    }, [currentIndex])

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying)
        console.log(isPlaying)
        
        if(isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const HandlePlayMode = () => {
        if(!audioRef) return;

        if(isPlaying) {
            audioRef.current.play()
        }

        console.log(isPlaying)
        console.log('running mode')

    }

    const handlePrevClick = () => {
        if(currentIndex === 0) 
            return setCurrentIndex(currentIndex)
            
         return setCurrentIndex(currentIndex - 1);

    }

    const handleNextClick = () => {
        if(currentIndex === songs.length - 1) 
            return setCurrentIndex(currentIndex)
         
        return setCurrentIndex(currentIndex + 1)     

    }

    const handleRandomClick = () => {
        setIsRamdom(!isRandom);
    }

    const handleRepeatClick = () => {
        if(repeat === 2) return setRepeat(0) 
        setRepeat(repeat + 1)
    }


    return (
        <div className="container-control">
            <div className="play-control">
                 {/* random-active   */}
                <button className = {classnames({ 'random-active': isRandom })} onClick = {handleRandomClick}>{icon.random}</button>
                <button onClick = {handlePrevClick}>{icon.prev}</button>
                    <button className = "play-control--play" onClick = {handlePlayClick}>
                        {isPlaying ? icon.play : icon.pause}
                    </button>
                <button onClick = {handleNextClick}>{icon.next}</button>

                <Tooltip placement="top" title={'Bật phát ngẫu nhiên'}>
                    {/* repeat-active  */}
                    <button className = {classnames({ 'repeat-active': repeat > 0 })} onClick = {handleRepeatClick}>
                        {repeat < 2 ? icon.repeat  : icon.repeatOne}
                    </button>
                </Tooltip>

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


            <audio 
                ref={audioRef}
                src = {songs[currentIndex]?.path}
                
            />
        </div>
    );
}

export default PlayControl;