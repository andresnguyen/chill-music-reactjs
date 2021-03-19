import React from 'react'
import LoginForm from '../LoginForm'
import './Login.scss'

Login.propTypes = {}

function Login() {
    const handleSubmit = async (values) => {
        console.log(values)
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Login
