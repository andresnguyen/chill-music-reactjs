import { Row, Col } from 'antd';
import './style/PlayerControlContainerStyle.scss'
import PlayerControlLeft from "./PlayerControlLeft"
import PlayerControlRight from "./PlayerControlRight"
import PlayerControlCenter from "./PlayerControlCenter"
function PlayerControlContainer() {
	return (
		<div className="player-control-container">
			<Row className="player-control-row">
          <Col span={6} className="player-control-col">
            <PlayerControlLeft></PlayerControlLeft>
          </Col>
          <Col span={12}>
            <PlayerControlCenter></PlayerControlCenter>
          </Col>
          <Col span={6}>
            <PlayerControlRight></PlayerControlRight>
          </Col>
      </Row>
		</div>
	);
}
export default PlayerControlContainer;