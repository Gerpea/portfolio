import React from 'react'
import styles from './styles.module.css'

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, className, ...rest }) => {
    return (
        <a className={`${styles.link} ${className || ''}`} {...rest}>{children}</a>
    )
}

export default Link