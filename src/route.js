import React, { lazy } from 'react';
import BlankLayout from './layouts/BlankLayout';
import SecurityLayout from './layouts/SecurityLayout';

const HomePage = lazy(() => import('./features/Home'));
const SigninPage = lazy(() => import('./features/Auth/Login'));
const Error404 = lazy(() => import('./features/Exception/404'));

const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: SecurityLayout,
		title: 'Trang Chủ',
		main: (props) => <HomePage router={props} />,
	},
	{
		path: '/auth/login',
		exact: true,
		auth: false,
		layout: BlankLayout,
		title: 'Đăng Nhập',
		main: (props) => <SigninPage router={props} />,
	},
	{
		path: '/filenotfoud',
		exact: true,
		auth: false,
		layout: BlankLayout,
		main: (props) => <Error404 router={props} />,
	},
	{
		layout: BlankLayout,
		main: (props) => <Error404 router={props} />,
	},
];

export default route;
