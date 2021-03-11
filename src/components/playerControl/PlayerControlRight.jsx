import React, { useState } from 'react';
import { Slider, Button, Tooltip, Drawer } from 'antd';
import {
	SoundOutlined,
	AudioFilled,
	MenuUnfoldOutlined,
} from '@ant-design/icons';
import './style/PlayerControlRightStyle.scss'

export default function PlayerControlRight() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
	return (
    <div className="player-control-right">
        <div className="extraControls">
          <Tooltip title="Lyrics">
            <Button
              shape="circle"
              icon={<AudioFilled />}
              style={{ backgroundColor: '#b3b3b3' }}
            />
          </Tooltip>
        </div>
        <div className="extraControls">
          <Tooltip title="Danh sách phát">
            <Button
              onClick={showDrawer}
              shape="circle"
              icon={<MenuUnfoldOutlined />}
              style={{ backgroundColor: '#b3b3b3' }}
            />
          </Tooltip>
        </div>
        <div className="extraControls">
          <Tooltip title="Âm lượng">
            <Button
              shape="circle"
              icon={<SoundOutlined />}
              style={{ backgroundColor: '#b3b3b3' }}
            />
          </Tooltip>
        </div>
        <div className="extraControls">
          <div className="volue"><Slider defaultValue={30}/></div>
        </div>
        <Drawer
        title="Danh sách phát"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button style={{width:220, marginTop: 10}}>Nối vòng tay lớn</Button>
        <Button style={{width:220, marginTop: 10}}>Sống cho hết đời thanh xuân</Button>
        <Button style={{width:220, marginTop: 10}}>Bản tình ca không hoàn thiện</Button>
      </Drawer>
  </div>
	);
}