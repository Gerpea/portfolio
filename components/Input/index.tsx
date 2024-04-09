import React from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLInputElement>

const Input = ({name, ...rest}: Props) => {
    return (
        <p className={styles.container}>
            <input type='text' className={styles.input} name={name} {...rest} />
            <label className={styles.label} htmlFor={name}>{name}</label>
        </p>
    )
}

export default Input