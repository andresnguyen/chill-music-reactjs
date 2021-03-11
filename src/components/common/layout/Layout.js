import React from 'react';
import { Spin } from 'antd';
import './LayoutStyle.css';
import PlayerControlContainer from '../../playerControl/PlayerControlContainer';
import { Layout } from 'antd';
import HeaderContainer from '../../header/Header';
const { Header, Footer, Sider, Content } = Layout;
const MainLayout = ({ children }) => (
	<div>
		<div className="sidenav">
			<a href="#">Trang chủ</a>
			<a href="#">Tìm kiếm</a>
			<a href="#">Thư Viện</a>
		</div>
		<div className="content">
			<div className="header-page">
				<HeaderContainer></HeaderContainer>
			</div>
			<div className="content-main">
				<div>{children}</div>
			</div>
		</div>
		<div className="footer-page">
			<PlayerControlContainer></PlayerControlContainer>
		</div>
	</div>
);

const LoginLayout = ({ children }) => <div>{children}</div>;

export { MainLayout, LoginLayout };
