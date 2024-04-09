import React from 'react'
import styles from './styles.module.css'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: React.FC<Props> = React.forwardRef<HTMLTextAreaElement, Props>(({ name, className, ...rest }, ref) => {
    return (
        <p className={`${styles.container} ${className || ''}`}>
            <textarea className={styles.textarea} name={name} {...rest} ref={ref} />
            <label className={styles.label} htmlFor={name}>{name}</label>
        </p>
    )
})

export default TextArea