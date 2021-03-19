import './App.css';
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from 'react-router-dom';
import routes from './route';
import React, { Suspense } from 'react';
import { Spin } from 'antd';

const WaitingComponent = (Component) => (props) => (
	<Suspense fallback={<Spin spinning={true} tip="Loading..." />}>
		<Component {...props} />
	</Suspense>
);
const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isLogin ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/signin',
					}}
				/>
			)
		}
	/>
);

function App() {
	const showContent = () => {
		let result = [];

		let isLogin = true;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				const layout = route.layout;
				if (route.auth && isLogin) {
					return (
						<PrivateRoute
							key={index}
							path={route.path}
							exact={route.exact}
							component={WaitingComponent(route.main)}
							isLogin={!isLogin}
						/>
					);
				} else {
					return (
						<RouteWrapper
							key={index}
							path={route.path}
							exact={route.exact}
							isLogin={isLogin}
							component={WaitingComponent(route.main)}
							layout={layout}
						/>
					);
				}
			});
		}
		return <Switch>{result}</Switch>;
	};

	return (
		<Router>
			<div className="App">{showContent()}</div>
		</Router>
	);
}
function RouteWrapper({
	isLogin,
	component: Component,
	layout: Layout,
	exact,
	...rest
}) {
	return (
		<Route
			exact
			{...rest}
			render={(props) => (
				<Layout {...props}>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}
export default App;
