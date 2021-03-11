import React, { lazy } from 'react';
import { MainLayout, LoginLayout } from './components/common/layout/Layout';
const HomePage = lazy(() => import('./features/home/Home'));
const LoginPage = lazy(() => import('./features/login/Login'));
const Error404 = lazy(() => import('./components/common/errorPage/Error404'));

const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <HomePage router={props} />,
	},
	{
		path: '/signin',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <LoginPage router={props} />,
	},
	{
		path: '/filenotfoud',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
	{
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
];

export default route;
