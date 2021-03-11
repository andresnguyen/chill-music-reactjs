import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import {
	EllipsisOutlined,
	PlayCircleOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { message, Button, Space } from 'antd';
import './style/SongItemStyle.scss'
const { Meta } = Card;
const style = {};
const iconStyle = { width: 'fit-content' }
function SongItem() {
	return (
		<div className="song-item">
				<Card
					cover={
						<img
							alt="imageSong"
							className="song-item-image-detail-song"
							src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/7/1/f/771fbf979c3a1f8688c33fdceb9184b3.jpg"
						/>
					}
					actions={[
						<HeartOutlined
						
							key="play"
						/>,
						// <CaretRightOutlined
						// 	key="play"
						// 	onClick={this.addItemSongToLocalStorage}
						// />,
						
						<PlayCircleOutlined 
						
            key="play"
          />,
						
						<Link
							to={{
								pathname: `/songdetail`,
								
							}}
						>
							<EllipsisOutlined key="ellipsis" />
						</Link>,
					]}
				>
					<Meta
						title="Somebody To You"
						 description="One Direction"
					/>
				</Card>
			</div>
	
	);
}
export default SongItem;