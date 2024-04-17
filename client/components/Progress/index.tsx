import React from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLDivElement> & {
    value: number;
    text: string;
}

const Progress: React.FC<Props> = ({ value, text, className, ...rest }) => {
    return (
        <div className={`${styles.progress} ${className || ''}`} {...rest}>
            <span className={styles.bar} style={{ width: `${value}%` }}></span>
            <span className={styles.text}>{text}</span>
        </div>
    )
}

export default Progress