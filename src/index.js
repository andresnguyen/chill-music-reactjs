import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/Globals.css'

import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<CircularProgress />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
