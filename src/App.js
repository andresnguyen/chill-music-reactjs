import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import React from 'react'
import Header from './components/Header'
import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className="app">
            <div className="container-main">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>

                <div className="header-wrapper">
                    <Header />
                </div>

                {showContent()}

                <div className="music-player-wrapper">
                    <MusicPlayer />
                </div>
            </div>
        </div>
    )
}

export default App

const showContent = () => {
    let result = []
    let isLogin = true

    if (routes.length > 0) {
        result = routes.map((route, index) => {
            const layout = route.layout

            // require login but doesn't login yet
            if (route.auth && !isLogin) {
                return <PrivateRoute key={index} path={route.path} exact={route.exact} component={route.main} />
            } else {
                return (
                    <RouteWrapper
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        layout={layout}
                        title={route.title}
                    />
                )
            }
        })
    }

    return <Switch>{result}</Switch>
}

const PrivateRoute = () => <Redirect to="/signin" />

function RouteWrapper({ component: Component, layout: Layout, title, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props} title={title}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}
