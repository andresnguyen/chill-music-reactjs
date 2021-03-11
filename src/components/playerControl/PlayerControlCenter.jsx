import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, List, Avatar, Icon } from 'antd';
import TimeSlider from 'react-input-slider';
import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
	PlaySquareOutlined,
} from '@ant-design/icons';
import './style/PlayerControlCenterStyle.scss'
const iconStyle = {
	fontSize: '26px',
};
export default function PlayerControlCenter() {
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTimeText, setCurrentTimeText] = useState("0:00");
	const [durationText, setDurationText] = useState("0:00");
	const [isPlay, setPlay] = useState(false);
	const handleLoadedData = () => {
		setDuration(audioRef.current.duration);
		// setDurationText(Math.floor(audioRef.current.duration)/60)
		if (isPlay) audioRef.current.play();

		//String time song
		var minutes = Math.floor(audioRef.current.duration / 60);
		var seconds = ((audioRef.current.duration % 60)).toFixed(0);
		setDurationText(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
	};
	const handleLoadedTime = () => {
		setCurrentTime(audioRef.current.currentTime)

			//String time song
			var minutes = Math.floor(audioRef.current.currentTime / 60);
			var seconds = ((audioRef.current.currentTime % 60)).toFixed(0);
			setCurrentTimeText(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
	}
	const handlePausePlayClick = () => {
		if (isPlay) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setPlay(!isPlay);
	};
	const  millisToMinutesAndSeconds= (millis)=> {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}
	const handleTimeSliderChange = ({ x }) => {
		audioRef.current.currentTime = x;
		setCurrentTime(x);

		if (!isPlay) {
			setPlay(true);
			audioRef.current.play();
		}
	};
	return (
		<div className="player-control-center">
	
				<div className="Control-Button-Group">
					<div
						className="Prev-Button"
						onClick={() =>
							setAudioIndex(
								(audioIndex - 1) % 1
							)
						}
					>
						<BackwardOutlined style={iconStyle} />
					</div>
					<div
						className="Pause-Play-Button"
						onClick={handlePausePlayClick}
					>
						{isPlay ? (
							<PauseOutlined style={iconStyle} />
						) : (
							<PlayCircleOutlined style={iconStyle} />
						)}
					</div>
					<div
						className="Next-Button"
						onClick={() =>
							setAudioIndex(
								(audioIndex + 1) % 1
							)
						}
					>
						<ForwardOutlined style={iconStyle} />
					</div>
				</div>
				<div className="player-control-center-time-slide-group">
				<div className="progress-time-left">{currentTimeText}</div>
				<TimeSlider
					axis="x"
					xmax={duration}
					x={currentTime}
					onChange={handleTimeSliderChange}
					styles={{
						track: {
							backgroundColor: '#e3e3e3',
							height: '10px',
							width: '60%',
						},
						active: {
							backgroundColor: '#b3b3b3',
							height: '10px',
						},
						thumb: {
							marginTop: '-3px',
							width: '8px',
							height: '13px',
							backgroundColor: '#333',
							borderRadius: 0,
						},
					}}
				/>
			
				<audio
					ref={audioRef}
					// src={this.props.listStream[audioIndex].src}
					src={`https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3?__cf_chl_captcha_tk__=bae06e411f95ee4560681cd7f213589127abde1b-1615243780-0-AXJCHtGY36ruzK-d3yLK0NZxPnBsgfGVmjPw6wfTV3MXKj18L56Owpfwmq3kFd-lt7J6pwxmZE342Sb-FpNwEK_KmuL_7Kht1DWKr7fTaXsEkvhS4ll49kgakojBZwINgBBz_uTtm4NAFB8h8eT-nvrwr4svgscvdOyaxo5LUENL21ZIb_mtF-ALqgnl2cjmNK_q3lkKmU5pSqbSvom-p456v7wetDhURtYzYg3J5KOAbrUvC2tmKSg0qjyZgqIoz8_oiMC4py-gnZvWWw_0Dv1faHgR0b6y8Jg51wp8sul-T2SiNOy07R2j-HvB7y1Is-6wHZUeMoWCIC4B_jWYL1Be9vRl5j18axcsRmlqTwQ-pPRuVxdwgNXFR8ZcxPl6-kbeZpfxQ-oK4goPlfiw9wxwtDj2a4qOXTvh159rHRMU2ssyhPu99OwfMBaLFXnbVbSnZYMxrV1z2uRdXX2E5FjtGyhRhfWOHOJrqlfZtxHl2yaafQWxfCj4B4_RJX8UivQmo7sFu3Ak_GKzzJDpZn1HPth2X45GPFVgjZJrfL9nAyiKbt3VXx5xNJl_2SbWsBZvu271YS0FJez2txy3Psyp_DU3HvcVgBwYKT5Ky19Z4L9MbUtEqsXxS9UK5rdn08F2sfaEw6MHK2tTrtCE8OE`}
					onLoadedData={handleLoadedData}
					onTimeUpdate={() =>
						handleLoadedTime()						
					}
					onEnded={() => setPlay(false)}
				/>
				<div className="progress-time-right">{durationText}</div>
			</div>
	</div>

	);
}