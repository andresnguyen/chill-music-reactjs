import { Button, Image } from 'antd';
import { Row, Col, Statistic } from 'antd';
import "./style/PlayerControlLeftStyle.scss"
export default function PlayerControlDetailSong() {
	return (
		<div style={{ color: 'white' }} className="player-control-detail-group">
				<Row >
					<Col span={6}>
						<Image
							className="player-control-detail-image-song"
							src="https://i.scdn.co/image/ab67616d000048518bab2a8ce2c392fac6e14739"
						/>
					</Col>
					<Col span={18}>
						<div className="player-control-detail-song-info">
							<div className="player-control-detail-song-name">Stay Alive</div>
							<div className="player-control-detail-artist -name">Quốc Thuận</div>
						</div>
					</Col>
				</Row>
			</div>
	);
}