import React from 'react'
import styles from './styles.module.css'

const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => {
    return (
        <a className={styles.link} {...rest}>{children}</a>
    )
}

export default Link