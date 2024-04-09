import React from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLDivElement> & {
    value: number
}

const Progress: React.FC<Props> = ({ value, className, ...rest }) => {
    return (
        <div className={`${styles.progress} ${className || ''}`} {...rest}><span className={styles.bar} style={{ width: `${value}%` }}></span></div>
    )
}

export default Progress