import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss'
import LoginForm from '../LoginForm';
import {Helmet} from "react-helmet";


Login.propTypes = {
    
};

function Login() {

    const handleSubmit = async (values) => {
        console.log(values)
    }       

    return (
        <div>   

            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
