import React from 'react'
import { Helmet } from 'react-helmet'

function SecurityLayout({ children, title }) {
    return (
        <div className="content-wrapper">
            <Helmet>{title}</Helmet>
            {children}
        </div>
    )
}

export default SecurityLayout
