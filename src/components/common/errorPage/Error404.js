import React from 'react';
import './ErrorStyle.css';
import { Link } from 'react-router-dom';
class Error404 extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {};
	}
	render() {
		return (
			<div>
				<div className="moon"></div>
				<div className="moon__crater moon__crater1"></div>
				<div className="moon__crater moon__crater2"></div>
				<div className="moon__crater moon__crater3"></div>

				<div className="star star1"></div>
				<div className="star star2"></div>
				<div className="star star3"></div>
				<div className="star star4"></div>
				<div className="star star5"></div>

				<div className="error">
					<div className="error__title">404</div>
					<div className="error__subtitle">Hmmm...</div>
					<div className="error__description">
						Có vẻ nội dung bạn đang tìm kiếm không còn tồn tại!
					</div>

					<Link to="/">
						<button className="error__button error__button--active">
							Trở về trang chủ
						</button>
					</Link>
					{/* <button className="error__button">CONTACT</button> */}
				</div>

				<div className="astronaut">
					<div className="astronaut__backpack"></div>
					<div className="astronaut__body"></div>
					<div className="astronaut__body__chest"></div>
					<div className="astronaut__arm-left1"></div>
					<div className="astronaut__arm-left2"></div>
					<div className="astronaut__arm-right1"></div>
					<div className="astronaut__arm-right2"></div>
					<div className="astronaut__arm-thumb-left"></div>
					<div className="astronaut__arm-thumb-right"></div>
					<div className="astronaut__leg-left"></div>
					<div className="astronaut__leg-right"></div>
					<div className="astronaut__foot-left"></div>
					<div className="astronaut__foot-right"></div>
					<div className="astronaut__wrist-left"></div>
					<div className="astronaut__wrist-right"></div>

					<div className="astronaut__cord">
						<canvas id="cord" height="500px" width="500px"></canvas>
					</div>

					<div className="astronaut__head">
						<canvas id="visor" width="60px" height="60px"></canvas>
						<div className="astronaut__head-visor-flare1"></div>
						<div className="astronaut__head-visor-flare2"></div>
					</div>
				</div>
			</div>
		);
	}
}
export default Error404;
