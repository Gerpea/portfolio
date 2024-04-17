import React from 'react'
import styles from './styles.module.css'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: React.FC<Props> = React.forwardRef<HTMLTextAreaElement, Props>(({ name, id, className, ...rest }, ref) => {
    return (
        <p className={`${styles.container} ${className || ''}`}>
            <textarea className={styles.textarea} name={name} id={id} {...rest} ref={ref} />
            <label className={styles.label} htmlFor={id}>{name}</label>
        </p>
    )
})

TextArea.displayName = 'TextArea'

export default TextArea