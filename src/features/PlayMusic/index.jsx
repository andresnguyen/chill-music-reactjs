import React from 'react';
import PropTypes from 'prop-types';
import './PlayMusic.scss'
import SongInfo from './components/SongInfo';
import PlayControl from './components/PlayControl';
import UtilControl from './components/UtilControl';


PlayMusic.propTypes = {
    
};

function PlayMusic(props) {
    return (
        <footer className = 'footer'>
            <SongInfo />
            <PlayControl />
            <UtilControl />
        </footer>
    );
}

export default PlayMusic;