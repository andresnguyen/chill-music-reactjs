import React, { useEffect, useRef, useState } from 'react';
import './PlayControl.scss'
import icon from '../../../../constants/footer-icon'
import { Slider } from 'antd';
import songApi from '../../../../api/songApi';
import common from '../../../../utils/common';

import classnames from 'classnames'

import { Tooltip } from 'antd';
import { useSelector } from 'react-redux';

PlayControl.propTypes = {
};

PlayControl.defaultProps = {
}

function PlayControl() {
    const audioRef = useRef(null)

    let changingSliderRef = useRef(false)
    const changingTimeoutRef = useRef(null)
    const prevSongsRef = useRef(null)



    const [songs, setSongs] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isRandom, setIsRamdom] = useState(false)
    const [repeat, setRepeat] = useState(0)
    const [currentTime, setCurrentTime] = useState(0) 
    const [endTime, setEndTime] = useState(0) 
    const [valueSlider, setValueSlider] = useState(0)

    const volume = useSelector(state => state.music.volume) 

    console.log(volume)


    useEffect(() => {
        songApi.getAll()
        .then(data => {
            console.log(data.data)
            setSongs(data.data)
        })

    }, [])


    useEffect(() => {
        HandlePlayMode()
    }, [currentIndex])



    const handlePlayClick = () => {
        setIsPlaying(!isPlaying)
        
        if(isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const HandlePlayMode = () => {
        if(!audioRef.current.src) return

        audioRef.current.play()
        setIsPlaying(true)
    }

    const handlePrevClick = () => {
        if(currentIndex === 0) 
            return setCurrentIndex(currentIndex)
            
         return setCurrentIndex(currentIndex - 1);

    }

    const handleNextClick = () => {
        if(currentIndex === songs.length - 1 || repeat === 1) 
            return setCurrentIndex(0)

        if(currentIndex === songs.length - 1) 
            return setCurrentIndex(currentIndex)
         
        return setCurrentIndex(currentIndex + 1)     

    }

    const handleRandomClick = () => {
        setIsRamdom(!isRandom);

        console.log(isRandom)

        if(!isRandom) {
            prevSongsRef.current = songs 
            
            setSongs(common.shuffle(songs, currentIndex))

        } else {
            setSongs([...songs[currentIndex], prevSongsRef.current])
        }


    }

    const handleRepeatClick = () => {
        if(repeat === 2) return setRepeat(0) 
        setRepeat(repeat + 1)
    }

    const handleLoadedData = (e) => {
        setEndTime(e.target.duration)
    }

    const handleTimeUpdate = (e) => {
        setCurrentTime(e.target.currentTime)
        e.target.volume = volume
        console.log(changingSliderRef)
        if(!changingSliderRef.current) {
            setValueSlider(e.target.currentTime / endTime * 100)
        }
    }

    const handleEnded = (e) => {
        if(repeat === 2) {
            audioRef.current.loop = true
            audioRef.current.play()
        } 
        handleNextClick()
    }

    const handleSliderChange = (value) => {
        setValueSlider(value)
        changingSliderRef.current = true

        if(changingTimeoutRef.current) {
            clearTimeout(changingTimeoutRef.current)
        }

        changingTimeoutRef.current = setTimeout(() => {
            const currentValue = value / 100 * endTime
            audioRef.current.currentTime = currentValue
            changingSliderRef.current = false
       
        }, 400)

    }



    return (
        <div className="container-control">
            <div className="play-control">
                <button className = {classnames({ 'random-active': isRandom })} 
                    onClick = {handleRandomClick}>
                    {icon.random}
                </button>

                <button onClick = {handlePrevClick}>{icon.prev}</button>
                    <button className = "play-control--play" onClick = {handlePlayClick}>
                        {isPlaying ? icon.play : icon.pause}
                    </button>
                <button onClick = {handleNextClick}>{icon.next}</button>

                <Tooltip placement="top" title={'Bật phát ngẫu nhiên'}>
                    <button className = {classnames({ 'repeat-active': repeat > 0 })} onClick = {handleRepeatClick}>
                        {repeat < 2 ? icon.repeat  : icon.repeatOne}
                    </button>
                </Tooltip>

            </div>

            <div className="progress-bar">
                <div className="progress-bar__time">
                    {common.formatDate(currentTime)}
                </div>

                <Slider disabled={false} tooltipVisible = {false} value={valueSlider} onChange={handleSliderChange}/>


                <div className="progress-bar__time">
                    {common.formatDate(endTime)}
                </div>
            </div>


            <audio 
                ref={audioRef}
                src = {songs[currentIndex]?.path}
                onLoadedData = {handleLoadedData}
                onTimeUpdate = {handleTimeUpdate}
                onEnded = {handleEnded}
                
                
            />
        </div>
    );
}

export default PlayControl;