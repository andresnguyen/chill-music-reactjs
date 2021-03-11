
import './style/HeaderContainerStyle.scss'
import { Button, Tooltip } from 'antd';
import { LoginOutlined } from '@ant-design/icons'

function HeaderContainer() {
	return (
		<div className="header-container">
			<div>
			 <Button icon={<LoginOutlined />}>Đăng nhập</Button>
		  </div>
			</div>
	);
}
export default HeaderContainer;