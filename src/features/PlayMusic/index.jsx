import React from 'react'
import PlayControl from './components/PlayControl'
import SongInfo from './components/SongInfo'
import UtilControl from './components/UtilControl'
import './PlayMusic.scss'

PlayMusic.propTypes = {}

function PlayMusic() {
    return (
        <footer className="footer">
            <SongInfo />
            <PlayControl />
            <UtilControl />
        </footer>
    )
}

export default PlayMusic
