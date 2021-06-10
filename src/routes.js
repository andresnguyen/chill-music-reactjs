import React, { lazy } from 'react'
import BlankLayout from './layouts/BlankLayout'
import SecurityLayout from './layouts/SecurityLayout'

const HomePage = lazy(() => import('./features/Home'))
const SigninPage = lazy(() => import('./features/Auth/Login'))
const Error404 = lazy(() => import('./features/Exception/404'))

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Home',
        main: (props) => <HomePage router={props} />,
    },
    {
        path: '/search',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Search',
        main: (props) => <HomePage router={props} />,
    },
    {
        path: '/collection/playlists',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Library',
        main: (props) => <HomePage router={props} />,
    },
    {
        path: '/auth/signin',
        exact: true,
        auth: false,
        layout: BlankLayout,
        title: 'Sign In',
        main: (props) => <SigninPage router={props} />,
    },
    {
        path: '/not-found',
        exact: true,
        auth: false,
        layout: BlankLayout,
        main: (props) => <Error404 router={props} />,
    },
    {
        layout: BlankLayout,
        main: (props) => <Error404 router={props} />,
    },
]

export default routes
