import React from 'react'
import styles from './styles.module.css'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(({ name, id, className, ...rest }, ref) => {
    return (
        <p className={`${styles.container} ${className || ''}`}>
            <input type='text' className={styles.input} name={name} id={id} {...rest} ref={ref} />
            <label className={styles.label} htmlFor={id}>{name}</label>
        </p>
    )
})

Input.displayName = 'Input'

export default Input