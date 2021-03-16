import React from 'react';
import PropTypes from 'prop-types';
import './SongInfo.scss'
import {Link} from 'react-router-dom'
import SonTung from '../../../../assets/artists/son-tung.jpg'
import icon from '../../../../constants/footer-icon'


SongInfo.propTypes = {
};

SongInfo.defaultProps = {
}

function SongInfo() {
    return (
       <div className="footer-info">
           <img src = {SonTung} alt="" className="footer-info__img"/>
           <div className="song-info">
                <Link to = "#" className="song-info__name">Nơi Này Có Anh</Link>

                <div className="list-artist">
                    <div className="list-artist__name">
                        <Link to = "#">
                            Sơn Tùng, 
                        </Link>
                    </div>
                    <div className="list-artist__name">
                        <Link to = "#">
                            Đen
                        </Link>
                    </div>
                </div>
           </div>

           <button className="footer-info__icon">
               {icon.heart}
               {icon.heartFill}
           </button>

       </div>
        
    );
}

export default SongInfo;