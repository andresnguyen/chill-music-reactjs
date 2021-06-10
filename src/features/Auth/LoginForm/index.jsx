import React from 'react'
import './LoginForm.scss'

LoginForm.propTypes = {}

function LoginForm({ onSubmit }) {
    const onFinish = (values) => {
        onSubmit(values)
    }

    return <div></div>
}

export default LoginForm
