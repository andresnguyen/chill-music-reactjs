import React, { lazy } from 'react';
import BlankLayout from './layouts/BlankLayout';
import SecurityLayout from './layouts/SecurityLayout';

const HomePage = lazy(() => import('./features/HomeFeature'));

// const SigninPage = lazy(() => import('./features/SigninFeature'));

const Error404 = lazy(() => import('./features/ExceptionFeature/404'));

const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: SecurityLayout,
		main: (props) => <HomePage router={props} />,
	},
	// {
	// 	path: '/signin',
	// 	exact: true,
	// 	auth: false,
	// 	layout: BlankLayout,
	// 	main: (props) => <SigninPage router={props} />,
	// },
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
