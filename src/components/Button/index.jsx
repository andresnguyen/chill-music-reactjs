import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Button.scss'

Button.propTypes = {
    className: PropTypes.string,
}

Button.defaultProps = {
    className: '',
}

function Button({ className, text }) {
    return <button className={classnames('btn', className)}>{text ? text : 'Đăng Ký'}</button>
}

export default Button
