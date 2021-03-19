import React from 'react';
import {Helmet} from 'react-helmet'


const BlankLayout = ({ children, title }) => 
    <div className="blank-layout">
        	<Helmet>
                <title>{title}</title>
            </Helmet>
        {children}
    </div>;
export default BlankLayout;
